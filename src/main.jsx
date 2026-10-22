import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/pt-sans/400.css';
import '@fontsource/pt-sans/400-italic.css';
import '@fontsource/pt-sans/700.css';
import '@fontsource/pt-sans/700-italic.css';
import '@/styles/globals.css';
import { App } from '@/app/App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found in the document.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
