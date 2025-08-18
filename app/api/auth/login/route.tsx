import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"
import { validateCompanyEmail } from "@/lib/utils/emailValidation"

const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
    rememberMe: z.boolean().optional().default(false),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email, password, rememberMe } = loginSchema.parse(body)

        // Validate company email
        const emailValidation = validateCompanyEmail(email)
        if (!emailValidation.isValid) {
            return NextResponse.json(
                {
                    message: emailValidation.error || "Invalid email address",
                    statusCode: 400,
                },
                { status: 400 },
            )
        }

        // Get client IP and user agent
        const ipAddress = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
        const userAgent = request.headers.get("user-agent") || "unknown"

        const result = await AuthService.authenticateUser({
            email,
            password,
            rememberMe,
            ipAddress,
            userAgent,
        })

        if (!result.success) {
            const statusCode = result.error?.statusCode || 401
            return NextResponse.json(
                {
                    message: result.message,
                    statusCode,
                },
                { status: statusCode },
            )
        }

        return NextResponse.json({
            user: result.user,
            token: result.token,
            refreshToken: result.refreshToken,
            message: result.message,
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Validation error",
                    errors: error.flatten().fieldErrors,
                    statusCode: 400,
                },
                { status: 400 },
            )
        }

        console.error("Login error:", error)
        return NextResponse.json(
            {
                message: "Internal server error",
                statusCode: 500,
            },
            { status: 500 },
        )
    }
}
