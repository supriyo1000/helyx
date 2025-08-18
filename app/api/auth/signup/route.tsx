import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"
import { validateCompanyEmail } from "@/lib/utils/emailValidation"

const signupSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
        email: z.string().email("Invalid email format"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
            .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
            .regex(/(?=.*\d)/, "Password must contain at least one number"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, password } = signupSchema.parse(body)

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

        const result = await AuthService.createUser({
            name,
            email,
            password,
        })

        if (!result.success) {
            const statusCode = result.error?.statusCode || 500
            return NextResponse.json(
                {
                    message: result.message,
                    statusCode,
                    errors: result.error?.errors,
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

        console.error("Signup error:", error)
        return NextResponse.json(
            {
                message: "Internal server error",
                statusCode: 500,
            },
            { status: 500 },
        )
    }
}
