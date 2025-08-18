import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"
import type { ErrorResponse } from "@/lib/types/errors"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Current password is required"),
        newPassword: z.string().min(8, "New password must be at least 8 characters"),
        confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    })

function getUserIdFromToken(request: NextRequest): number | null {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
        return null
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string }
        return decoded.userId
    } catch {
        return null
    }
}

export async function POST(request: NextRequest) {
    try {
        const userId = getUserIdFromToken(request)
        if (!userId) {
            const errorResponse: ErrorResponse = {
                message: "Unauthorized",
                code: "UNAUTHORIZED",
                statusCode: 401,
                timestamp: new Date().toISOString(),
                path: request.url,
            }
            return NextResponse.json(errorResponse, { status: 401 })
        }

        const body = await request.json()
        const { currentPassword, newPassword } = changePasswordSchema.parse(body)

        const result = await AuthService.changePassword(userId, currentPassword, newPassword)

        if (!result.success) {
            const statusCode = result.message === "Current password is incorrect" ? 400 : 500
            const errorResponse: ErrorResponse = {
                message: result.message,
                code: result.error?.code || "CHANGE_PASSWORD_ERROR",
                statusCode: result.error?.statusCode || statusCode,
                timestamp: new Date().toISOString(),
                path: request.url,
            }
            return NextResponse.json(errorResponse, { status: result.error?.statusCode || statusCode })
        }

        return NextResponse.json({
            message: result.message,
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorResponse: ErrorResponse = {
                message: "Validation error",
                code: "VALIDATION_ERROR",
                statusCode: 400,
                errors: error.flatten().fieldErrors,
                timestamp: new Date().toISOString(),
                path: request.url,
            }
            return NextResponse.json(errorResponse, { status: 400 })
        }

        console.error("Change password error:", error)
        const errorResponse: ErrorResponse = {
            message: "Internal server error",
            code: "INTERNAL_ERROR",
            statusCode: 500,
            timestamp: new Date().toISOString(),
            path: request.url,
        }
        return NextResponse.json(errorResponse, { status: 500 })
    }
}
