// D: \Helyx_website\helyx2\lib\utils\email - otp - service.tsx
import nodemailer from "nodemailer"
import { saveOTP } from "./otpStorage"

interface EmailTemplate {
  subject: string
  html: string
  text: string
}

// Professional email templates
function getOTPEmailTemplate(otp: string): EmailTemplate {
  return {
    subject: "Your Email Verification Code",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          .content { background: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; }
          .otp-code { font-size: 32px; font-weight: bold; color: #2563eb; letter-spacing: 4px; margin: 20px 0; padding: 15px; background: white; border-radius: 6px; border: 2px dashed #e2e8f0; }
          .footer { margin-top: 30px; text-align: center; color: #64748b; font-size: 14px; }
          .warning { background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Helyx</div>
          </div>
          
          <div class="content">
            <h2>Verify Your Email Address</h2>
            <p>Thank you for signing up! Please use the verification code below to complete your account setup:</p>
            
            <div class="otp-code">${otp}</div>
            
            <div class="warning">
              <strong>⏰ This code expires in 10 minutes</strong><br>
              For security reasons, please do not share this code with anyone.
            </div>
            
            <p>If you didn't request this verification code, please ignore this email.</p>
          </div>
          
          <div class="footer">
            <p>This is an automated message from Helyx. Please do not reply to this email.</p>
            <p>&copy; ${new Date().getFullYear()} Helyx. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      Helyx - Email Verification
      
      Thank you for signing up! Please use the verification code below to complete your account setup:
      
      Verification Code: ${otp}
      
      This code expires in 10 minutes. For security reasons, please do not share this code with anyone.
      
      If you didn't request this verification code, please ignore this email.
      
      This is an automated message from Helyx. Please do not reply to this email.
    `,
  }
}

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_APP_HOST,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 10,
})

// Enhanced email service with multiple provider support
export async function sendOTPEmail(email: string, otp: string): Promise<boolean> {
  try {
    const template = getOTPEmailTemplate(otp)
    // Send email if environment variables are configured
    const senderEmail = process.env.EMAIL_APP_HOST
    const password = process.env.EMAIL_APP_PASSWORD

    if (senderEmail && password) {
      try {
        console.log("🔄 Sending email notification...")

        const mailOptions = {
          from: senderEmail,
          to: email, // Send to user's email, not sender's email
          subject: template.subject,
          html: template.html,
          text: template.text,
          replyTo: senderEmail,
        }

        const info = await transporter.sendMail(mailOptions)
        console.log("✅ Email sent successfully:", info.messageId)
        await saveOTP(email, otp);
        console.log("saving otp....");
        
        return true // Return true on success
      } catch (emailError) {
        console.error("❌ Failed to send email:", emailError)
        return false // Return false on email error
      }
    } else {
      console.log("⚠️ Email credentials not configured, skipping email send")
      return false // Return false when credentials missing
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
    }
    return false // Return false on any error
  }
}

