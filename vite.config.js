import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Vite plugin that serves /api/contact directly in `npm run dev` by dynamically invoking
 * the exact same Vercel serverless function in `api/contact.js`.
 * 
 * This gives you seamless local development with zero code duplication, zero Express server,
 * and identical behavior to Vercel production!
 */
function vercelApiDevPlugin() {
  return {
    name: 'vercel-api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url === '/api/contact') {
          // Parse request body for POST
          let rawBody = '';
          req.on('data', (chunk) => {
            rawBody += chunk;
          });

          req.on('end', async () => {
            try {
              let parsedBody = {};
              if (rawBody) {
                try {
                  parsedBody = JSON.parse(rawBody);
                } catch {
                  parsedBody = {};
                }
              }
              req.body = parsedBody;

              // Ensure env vars from .env are populated in process.env
              const env = loadEnv('development', process.cwd(), '');
              Object.assign(process.env, env);

              // Adapt Vercel res helper methods (res.status, res.json, res.setHeader)
              res.status = function (statusCode) {
                this.statusCode = statusCode;
                return this;
              };

              res.json = function (data) {
                this.setHeader('Content-Type', 'application/json; charset=utf-8');
                this.end(JSON.stringify(data));
                return this;
              };

              // Import the exact Vercel serverless handler dynamically
              const apiModule = await server.ssrLoadModule('/api/contact.js');
              const handler = apiModule.default;

              if (typeof handler === 'function') {
                await handler(req, res);
              } else {
                res.status(500).json({ success: false, message: 'API handler not found' });
              }
            } catch (err) {
              console.error('[local-api-error]', err);
              if (!res.headersSent) {
                res.status(500).json({
                  success: false,
                  message: err.message || 'Internal local serverless function error',
                });
              }
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vercelApiDevPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Isolate vendor libraries into optimized cached chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'vendor-react';
            }
            if (id.includes('motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            return 'vendor-misc';
          }
        },
      },
    },
  },
});
