import { NextResponse } from "next/server"
import { z } from "zod"
import { DateTime } from "luxon"
import nodemailer from "nodemailer"
import { callStoredProcedureOne } from "@/lib/database/connection"
import type { RowDataPacket } from "mysql2/promise"

// Validation schema
const demoSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().min(1),
    message: z.string().min(10),
    preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
    preferred_from_time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time"),
    preferred_to_time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time"),
    timezone: z.string().optional(),
    honeypot: z.string().optional().nullable(),
})

interface CreateDemoResult extends RowDataPacket {
    message_id: number | null
    success: number | boolean
    message: string
}

// Nodemailer config
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_APP_HOST,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
})

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const data = demoSchema.parse(body)

        // honeypot check
        if (data.honeypot && data.honeypot.trim() !== "") {
            return NextResponse.json({ success: false, message: "Spam detected" }, { status: 400 })
        }

        // client info
        const ip =
            request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            request.headers.get("cf-connecting-ip") ||
            "unknown"
        const userAgent = request.headers.get("user-agent") || "unknown"
        const tz = data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"

        // convert to UTC
        const makeUtc = (dateStr: string, timeStr: string, zone: string) => {
            const isoLocal = `${dateStr}T${timeStr}`
            const dt = DateTime.fromISO(isoLocal, { zone })
            if (!dt.isValid) return null
            return dt.toUTC()
        }

        const fromUtc = makeUtc(data.preferred_date, data.preferred_from_time, tz)
        const toUtc = makeUtc(data.preferred_date, data.preferred_to_time, tz)

        if (!fromUtc || !toUtc) {
            return NextResponse.json({ success: false, message: "Could not parse preferred times" }, { status: 400 })
        }
        if (fromUtc >= toUtc) {
            return NextResponse.json({ success: false, message: "'From' must be earlier than 'To'." }, { status: 400 })
        }

        const preferred_from_utc = fromUtc.toFormat("yyyy-MM-dd HH:mm:ss")
        const preferred_to_utc = toUtc.toFormat("yyyy-MM-dd HH:mm:ss")

        // Save to DB
        const dbResult = await callStoredProcedureOne<CreateDemoResult>("SP_CreateDemoRequest", [
            data.name,
            data.email,
            data.company,
            data.message,
            data.preferred_date,
            data.preferred_from_time + ":00",
            data.preferred_to_time + ":00",
            preferred_from_utc,
            preferred_to_utc,
            tz,
            ip,
            userAgent,
            data.honeypot || null,
        ])

        if (!dbResult || (dbResult[0] && dbResult[0].success !== 1)) {
            return NextResponse.json({ success: false, message: "Failed to save demo request" }, { status: 500 })
        }

        // Email notify
        try {
            if (process.env.EMAIL_APP_HOST && process.env.EMAIL_APP_PASSWORD) {
                const recipient = process.env.EMAIL_APP_HOST

                // 1) Internal notification
                await transporter.sendMail({
                    from: `"Quobotic Admin" <${recipient}>`,
                    to: recipient,
                    subject: `Demo request: ${data.name} (${data.company})`,
                    html: `
            <h3>New demo request</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Preferred (local):</strong> ${data.preferred_date} ${data.preferred_from_time} → ${data.preferred_to_time} (${tz})</p>
            <p><strong>Preferred (UTC):</strong> ${preferred_from_utc} → ${preferred_to_utc}</p>
            <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
          `,
                    replyTo: data.email,
                })


                // 2) Auto-reply to user
                await transporter.sendMail({
                    from: `"Quobotic Admin" <${recipient}>`,
                    to: data.email,
                    subject: "Thank you for requesting a demo",
                    html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; line-height: 1.5;">
            <h2 style="color: #0072F5;">Thank you, ${data.name}!</h2>
            <p>We’ve received your request for a demo at <strong>${data.company}</strong>.</p>
            <p><strong>Preferred time:</strong> ${data.preferred_date}, ${data.preferred_from_time} – ${data.preferred_to_time} (${tz})</p>
            <p><strong>Preferred (UTC):</strong> ${preferred_from_utc} → ${preferred_to_utc}</p>
            <p>Our team will contact you shortly to confirm further.</p>
            <br/>
            <p style="font-size: 13px; color: #666;">— Helyx Team</p>
          </div>
        `,
                })
            }
        } catch (mailErr) {
            console.error("Email send failed (demo)", mailErr)
        }



        return NextResponse.json({
            success: true,
            message: "Demo request received",
            messageId: dbResult[0]?.message_id ?? null,
        })
    } catch (error) {
        console.error("❌ Demo API error:", error)

        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, message: "Validation error", errors: error.format() }, { status: 400 })
        }

        return NextResponse.json({ success: false, message: "Failed to process demo request" }, { status: 500 })
    }
}
