import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = process.env.CONTACT_DESTINATION_EMAIL || "buildtoexcel@gmail.com";

// Sanitize user inputs for HTML templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, projectType, budget, description } = data;

    // Basic validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Your name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCompany = (company || "").trim() || "Not specified";
    const cleanProjectType = (projectType || "General Inquiry").trim();
    const cleanBudget = (budget || "To be defined").trim();
    const cleanDescription = (description || "").trim() || "No specific details provided.";
    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Structured logging for Vercel functions
    console.log("=== NEW AI VORA INQUIRY ===", {
      to: DESTINATION_EMAIL,
      from: cleanEmail,
      name: cleanName,
      company: cleanCompany,
      projectType: cleanProjectType,
      budget: cleanBudget,
      description: cleanDescription,
      timestamp: new Date().toISOString(),
    });

    const subject = `🚀 AI VORA Inquiry: ${cleanName} (${cleanProjectType})`;

    const textContent = `
New Project Inquiry Received for AI VORA:
------------------------------------------
Client Name:     ${cleanName}
Client Email:    ${cleanEmail}
Company / Org:   ${cleanCompany}
Project Type:    ${cleanProjectType}
Budget Range:    ${cleanBudget}
Submission Time: ${submissionDate} (IST)

Project Scope & Description:
${cleanDescription}
------------------------------------------
Reply directly to this email to respond to ${cleanName} (${cleanEmail}).
`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New AI VORA Inquiry</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF9F5; color: #111;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    <!-- Header -->
    <tr>
      <td style="padding: 28px 32px; background: #0A0A0C; color: #FAF9F5;">
        <table width="100%">
          <tr>
            <td>
              <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">AI VORA</div>
              <div style="font-size: 10px; font-family: monospace; letter-spacing: 2px; color: #a1a1aa; margin-top: 4px;">AUTOMATE • BUILD • GROW</div>
            </td>
            <td align="right">
              <span style="display: inline-block; padding: 4px 10px; border-radius: 12px; background: rgba(255,255,255,0.1); color: #c4f042; font-size: 11px; font-family: monospace; font-weight: bold;">NEW LEAD</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Details -->
    <tr>
      <td style="padding: 32px;">
        <h2 style="margin: 0 0 16px; font-size: 20px; color: #0A0A0C;">New Client Collaboration Blueprint</h2>
        <p style="margin: 0 0 24px; color: #52525b; font-size: 14px; line-height: 1.5;">
          A new project inquiry has been submitted via the <strong>AI VORA</strong> website. Details are provided below:
        </p>

        <!-- Details Grid -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: #fafaf8; border: 1px solid #f0f0eb; border-radius: 12px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 12px; font-family: monospace; color: #71717a; width: 140px;">CLIENT NAME</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 14px; font-weight: 600; color: #0A0A0C;">${escapeHtml(cleanName)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 12px; font-family: monospace; color: #71717a;">EMAIL ADDRESS</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 14px; color: #0A0A0C;">
              <a href="mailto:${escapeHtml(cleanEmail)}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${escapeHtml(cleanEmail)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 12px; font-family: monospace; color: #71717a;">ORGANIZATION</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 14px; color: #0A0A0C;">${escapeHtml(cleanCompany)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 12px; font-family: monospace; color: #71717a;">PROJECT TYPE</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 14px; font-weight: 600; color: #0A0A0C;">${escapeHtml(cleanProjectType)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 12px; font-family: monospace; color: #71717a;">BUDGET TARGET</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0eb; font-size: 14px; color: #0A0A0C;">${escapeHtml(cleanBudget)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 12px; font-family: monospace; color: #71717a;">SUBMITTED</td>
            <td style="padding: 12px 16px; font-size: 12px; color: #71717a;">${submissionDate} (IST)</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-bottom: 28px;">
          <div style="font-size: 12px; font-family: monospace; color: #71717a; margin-bottom: 8px; text-transform: uppercase;">Project Description & Requirements</div>
          <div style="background: #fafaf8; border: 1px solid #f0f0eb; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap;">${escapeHtml(cleanDescription)}</div>
        </div>

        <!-- Action CTA -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <a href="mailto:${escapeHtml(cleanEmail)}?subject=Re:%20AI%20VORA%20Project%20Inquiry%20-%20${encodeURIComponent(cleanProjectType)}" style="display: inline-block; background: #0A0A0C; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 30px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px;">
                REPLY TO ${escapeHtml(cleanName.toUpperCase())} →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 32px; background: #f4f4f0; border-top: 1px solid #e5e5e0; font-size: 11px; font-family: monospace; color: #71717a; text-align: center;">
        Inquiry automatically routed to <strong>${DESTINATION_EMAIL}</strong> • AI VORA Studio
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // 1. Try Gmail SMTP / Nodemailer
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || "buildtoexcel@gmail.com";

    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        await transporter.sendMail({
          from: `"AI VORA Inquiries" <${gmailUser}>`,
          to: DESTINATION_EMAIL,
          replyTo: `"${cleanName}" <${cleanEmail}>`,
          subject,
          text: textContent,
          html: htmlContent,
        });

        console.log(`[EMAIL DISPATCH SUCCESS] Delivered to ${DESTINATION_EMAIL} via Gmail SMTP.`);
        return NextResponse.json({
          success: true,
          message: "Inquiry received and sent successfully.",
        });
      } catch (smtpErr) {
        console.error("[SMTP ERROR] Failed to send via Gmail SMTP:", smtpErr);
      }
    }

    // 2. Try Resend API (Alternative)
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "AI VORA Inquiries <onboarding@resend.dev>",
            to: [DESTINATION_EMAIL],
            reply_to: cleanEmail,
            subject,
            text: textContent,
            html: htmlContent,
          }),
        });

        if (resendRes.ok) {
          console.log(`[EMAIL DISPATCH SUCCESS] Delivered to ${DESTINATION_EMAIL} via Resend.`);
          return NextResponse.json({
            success: true,
            message: "Inquiry received and sent successfully.",
          });
        } else {
          const resendErr = await resendRes.text();
          console.error("[RESEND ERROR] Failed to send via Resend:", resendErr);
        }
      } catch (resendErr) {
        console.error("[RESEND EXCEPTION] Error calling Resend API:", resendErr);
      }
    }

    // 3. Fallback: If no email credentials configured in Vercel yet
    console.warn(
      `[AI VORA NOTICE] Inquiry saved to server logs for ${DESTINATION_EMAIL}. To send direct inbox emails, configure GMAIL_APP_PASSWORD (or RESEND_API_KEY) in Vercel environment variables.`
    );

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again or email buildtoexcel@gmail.com directly." },
      { status: 500 }
    );
  }
}
