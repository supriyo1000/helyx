import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"
import { callStoredProcedureOne } from "@/lib/database/connection"
import type { RowDataPacket } from "mysql2/promise"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Invalid email format"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

interface CreateContactMessageResult extends RowDataPacket {
    message_id: number | null
    success: boolean | number
    message: string
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate input
        const validatedData = contactSchema.parse(body)

        // Get client info
        const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
        const userAgent = request.headers.get("user-agent") || "unknown"

        // Save to database first
        console.log("🔄 Saving contact message to database...")
        const dbResult = await callStoredProcedureOne<CreateContactMessageResult>("SP_CreateContactMessage", [
            validatedData.name,
            validatedData.email,
            validatedData.subject,
            validatedData.message,
            ipAddress,
            userAgent,
        ])

        console.log("dbresult" , dbResult);
        

        if (!dbResult || dbResult[0].success !== 1) {
            console.error("❌ Failed to save contact message to database:", dbResult?.message)
            return NextResponse.json(
                {
                    success: false,
                    message: "Failed to save message. Please try again later.",
                },
                { status: 500 },
            )
        }

        console.log("✅ Contact message saved to database with ID:", dbResult.message_id)

        // Send email if environment variables are configured
        const recipient = process.env.EMAIL_APP_HOST
        const password = process.env.EMAIL_APP_PASSWORD

        if (recipient && password) {
            try {
                console.log("🔄 Sending email notification...")

                const mailOptions = {
                    from: recipient,
                    to: recipient,
                    subject: `Contact Request from ${validatedData.name} — ${validatedData.subject}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Full Name:</strong> ${validatedData.name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${validatedData.subject}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #333;">Message:</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
                  ${validatedData.message.replace(/\n/g, "<br>")}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
                <p><strong>Technical Details:</strong></p>
                <p>IP Address: ${ipAddress}</p>
                <p>User Agent: ${userAgent}</p>
                <p>Timestamp: ${new Date().toISOString()}</p>
                <p>Database ID: ${dbResult.message_id}</p>
              </div>
              
              <div style="margin-top: 20px; text-align: center; color: #6c757d; font-size: 12px;">
                <p>—<br>Quobotic Consulting Pvt. Ltd.</p>
              </div>
            </div>
          `,
                    replyTo: validatedData.email,
                }

                const info = await transporter.sendMail(mailOptions)
                console.log("✅ Email sent successfully:", info.messageId)
            } catch (emailError) {
                console.error("❌ Failed to send email:", emailError)
                // Don't fail the entire request if email fails, since we saved to DB
            }
        } else {
            console.log("⚠️ Email credentials not configured, skipping email send")
        }

        return NextResponse.json({
            success: true,
            message: "Message sent successfully! We'll get back to you soon.",
            messageId: dbResult.message_id,
        })
    } catch (error) {
        console.error("❌ Contact form error:", error)

        if (error instanceof z.ZodError) {
            const formattedErrors = error.format();
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation error",
                    errors: formattedErrors, // Use formatted errors
                },
                { status: 400 },
            )
        }

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message. Please try again later.",
            },
            { status: 500 },
        )
    }
}
