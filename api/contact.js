import nodemailer from 'nodemailer';

/**
 * Escapes HTML characters to prevent HTML/XSS injection in emails.
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Basic email regex validator.
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Vercel Serverless Function: POST /api/contact
 * Handles contact form submissions using Nodemailer with Gmail SMTP.
 */
export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are supported.',
    });
  }

  try {
    const body = req.body || {};

    // 2. Anti-spam honeypot detection
    if (body.website_hp || body._gotcha) {
      return res.status(200).json({
        success: true,
        message: 'Your enquiry has been submitted successfully.',
      });
    }

    // 3. Extract and sanitize input fields
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const company = (body.company || '').trim();
    const phone = (body.phone || '').trim();
    const service = (body.service || 'Website Development').trim();
    const message = (body.message || '').trim();

    // 4. Server-side validation
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Your name is required.',
      });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'A valid email address is required.',
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Project context and goals are required.',
      });
    }

    // Input length caps to protect against oversized payloads
    if (name.length > 150) {
      return res.status(400).json({ success: false, message: 'Name exceeds maximum length.' });
    }
    if (email.length > 254) {
      return res.status(400).json({ success: false, message: 'Email exceeds maximum length.' });
    }
    if (company.length > 200) {
      return res.status(400).json({ success: false, message: 'Company name exceeds maximum length.' });
    }
    if (phone.length > 50) {
      return res.status(400).json({ success: false, message: 'Phone number exceeds maximum length.' });
    }
    if (service.length > 100) {
      return res.status(400).json({ success: false, message: 'Service name exceeds maximum length.' });
    }
    if (message.length > 8000) {
      return res.status(400).json({
        success: false,
        message: 'Message exceeds the maximum allowable length (8,000 characters).',
      });
    }

    // 5. Read environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'Nexzivotechi@gmail.com';

    if (!gmailUser || !gmailAppPassword) {
      console.error('Server configuration error: GMAIL_USER or GMAIL_APP_PASSWORD is not set.');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact the administrator.',
      });
    }

    // 6. Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const emailSubject = `New Project Inquiry – NEXZIVO Creative Studio [${name}]`;

    // 7. Responsive HTML Email Template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F7FB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #1E293B;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F4F7FB; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          
          <!-- Header with Branding -->
          <tr>
            <td style="background: linear-gradient(135deg, #101B2D 0%, #18263E 100%); padding: 36px 32px; text-align: left; border-bottom: 3px solid #2764F5;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #FFFFFF; display: block;">
                      NEXZIVO
                    </span>
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #35C5E8; display: block; margin-top: 4px;">
                      Creative Studio · Project Inquiry
                    </span>
                  </td>
                  <td align="right" style="vertical-align: middle;">
                    <span style="display: inline-block; background-color: rgba(39, 100, 245, 0.2); border: 1px solid rgba(53, 197, 232, 0.4); color: #E2E8F0; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${escapeHtml(service)}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro Banner -->
          <tr>
            <td style="padding: 24px 32px 12px 32px;">
              <p style="margin: 0; font-size: 15px; color: #64748B; line-height: 1.5;">
                You received a new client project inquiry through the NEXZIVO Contact Form. Details are provided below:
              </p>
            </td>
          </tr>

          <!-- Client Details Table -->
          <tr>
            <td style="padding: 12px 32px 24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F8FAFC; border-radius: 12px; border: 1px solid #E2E8F0;">
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; width: 140px; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</td>
                  <td style="padding: 12px 16px; font-size: 15px; font-weight: 600; color: #0F172A;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #EDF2F7;">Email Address</td>
                  <td style="padding: 12px 16px; font-size: 15px; color: #2764F5; font-weight: 600; border-top: 1px solid #EDF2F7;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #2764F5; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #EDF2F7;">Company / Venture</td>
                  <td style="padding: 12px 16px; font-size: 15px; color: #0F172A; border-top: 1px solid #EDF2F7;">${escapeHtml(company || 'Not specified')}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #EDF2F7;">Mobile Number</td>
                  <td style="padding: 12px 16px; font-size: 15px; color: #0F172A; border-top: 1px solid #EDF2F7;">${escapeHtml(phone || 'Not provided')}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #EDF2F7;">Required Service</td>
                  <td style="padding: 12px 16px; font-size: 15px; color: #2764F5; font-weight: 600; border-top: 1px solid #EDF2F7;">${escapeHtml(service)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #EDF2F7;">Submitted At</td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748B; border-top: 1px solid #EDF2F7;">${submissionDate}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Context & Goals -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px;">
                Project Context &amp; Goals:
              </h3>
              <div style="background-color: #FFFFFF; border: 1px solid #CBD5E1; border-left: 4px solid #2764F5; border-radius: 8px; padding: 18px 20px; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">${escapeHtml(message)}</div>
            </td>
          </tr>

          <!-- Quick Reply Button -->
          <tr>
            <td style="padding: 0 32px 36px 32px; text-align: center;">
              <table align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="border-radius: 10px; background-color: #2764F5;">
                    <a href="mailto:${escapeHtml(email)}?subject=Re:%20${encodeURIComponent(emailSubject)}"
                       target="_blank"
                       style="font-size: 14px; font-weight: 600; color: #FFFFFF; text-decoration: none; padding: 12px 28px; display: inline-block;">
                      Reply directly to ${escapeHtml(name)} (${escapeHtml(email)})
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 20px 32px; text-align: center; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8;">
              <p style="margin: 0 0 4px 0;">NEXZIVO Creative Studio Website Contact Form</p>
              <p style="margin: 0;">Recipient: <strong>${recipientEmail}</strong></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    // Plain text alternative
    const textTemplate = `
New Project Inquiry – NEXZIVO Creative Studio
==================================================
Client Name:      ${name}
Email Address:    ${email}
Company / Venture:${company || 'Not specified'}
Mobile Number:    ${phone || 'Not provided'}
Required Service: ${service}
Submitted At:     ${submissionDate}

Project Context & Goals:
--------------------------------------------------
${message}

==================================================
Reply directly to: ${email}
    `.trim();

    // 8. Dispatch email
    await transporter.sendMail({
      from: `"NEXZIVO Studio" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: emailSubject,
      text: textTemplate,
      html: htmlTemplate,
    });

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. We will contact you soon.',
    });
  } catch (error) {
    console.error('Nodemailer error sending contact email:', error.message || error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your enquiry. Please try again later.',
    });
  }
}

