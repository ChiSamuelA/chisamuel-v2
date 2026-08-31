import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; project?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const project = body.project?.trim()

  if (!name || !email || !project) {
    return NextResponse.json({ error: 'Name, email, and project details are required.' }, { status: 400 })
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error('Contact form: missing SMTP configuration in environment variables.')
    return NextResponse.json({ error: 'Mail delivery is not configured.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name} via chisamuel.com" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject:\n${project}`,
      html: renderBrandedEmail({
        preheader: `New project inquiry from ${name}`,
        label: 'New inquiry',
        heading: 'Someone wants to talk.',
        rows: [
          { label: 'Name', value: escapeHtml(name) },
          { label: 'Email', value: `<a href="mailto:${escapeHtml(email)}" style="color:#c9814f;text-decoration:none;">${escapeHtml(email)}</a>` },
        ],
        note: {
          label: 'Project',
          value: escapeHtml(project).replace(/\n/g, '<br />'),
        },
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form: failed to send email.', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 502 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

type BrandedEmailRow = { label: string; value: string }

type BrandedEmailOptions = {
  preheader: string
  label: string
  heading: string
  rows: BrandedEmailRow[]
  note?: { label: string; value: string }
}

/**
 * Dark/copper-themed transactional email shell, matching chisamuel.com's visual
 * language. Table-based + inline-styled for email client compatibility.
 */
function renderBrandedEmail({ preheader, label, heading, rows, note }: BrandedEmailOptions): string {
  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:0 0 20px 0;">
            <p style="margin:0 0 6px 0;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a857e;">${row.label}</p>
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-style:italic;color:#e4dfd8;">${row.value}</p>
          </td>
        </tr>`,
    )
    .join('')

  const noteHtml = note
    ? `
        <tr>
          <td style="padding:4px 0 0 0;">
            <p style="margin:0 0 6px 0;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a857e;">${note.label}</p>
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-style:italic;line-height:1.6;color:#e4dfd8;">${note.value}</p>
          </td>
        </tr>`
    : ''

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${label}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#141210;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#141210;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#1e1b17;border:1px solid #322d27;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:32px 40px 24px 40px;border-bottom:1px solid #2a2621;">
                <p style="margin:0 0 4px 0;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#c9814f;">Chi Samuel A. — chisamuel.com</p>
                <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#8a857e;">${label}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px 8px 40px;">
                <h1 style="margin:0 0 28px 0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:#f5f3f0;">${heading}</h1>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                  ${noteHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 32px 40px;">
                <a href="mailto:chisamuelapeng@gmail.com" style="display:inline-block;font-family:'Courier New',Courier,monospace;font-size:13px;letter-spacing:0.5px;font-weight:bold;color:#141210;background-color:#c9814f;padding:12px 24px;border-radius:4px;text-decoration:none;">Reply →</a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px;background-color:#18160f;border-top:1px solid #2a2621;">
                <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:0.5px;color:#6b665f;">Sent automatically from the contact form at chisamuel.com</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
