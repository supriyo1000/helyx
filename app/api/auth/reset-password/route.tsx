import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"

const resetPasswordSchema = z.object({
    email: z.string().email("Invalid email format"),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { email } = resetPasswordSchema.parse(body)

        const result = await AuthService.createPasswordResetToken(email)

        return NextResponse.json({
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

        console.error("Reset password error:", error)
        return NextResponse.json({ message: "Internal server error", statusCode: 500 }, { status: 500 })
    }
}
