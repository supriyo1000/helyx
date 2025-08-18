import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { AuthService } from "@/lib/services/authService"
import type { ErrorResponse } from "@/lib/types/errors"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

const updateProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    email: z.string().email("Invalid email format").optional(),
    avatar: z.string().url("Invalid avatar URL").optional(),
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

export async function GET(request: NextRequest) {
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

        const user = await AuthService.getUserById(userId)
        if (!user) {
            const errorResponse: ErrorResponse = {
                message: "User not found",
                code: "USER_NOT_FOUND",
                statusCode: 404,
                timestamp: new Date().toISOString(),
                path: request.url,
            }
            return NextResponse.json(errorResponse, { status: 404 })
        }

        return NextResponse.json(user)
    } catch (error) {
        console.error("Get profile error:", error)
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

export async function PATCH(request: NextRequest) {
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
        const validatedData = updateProfileSchema.parse(body)

        const result = await AuthService.updateUserProfile(userId, validatedData)

        if (!result.success) {
            const errorResponse: ErrorResponse = {
                message: result.message,
                code: result.error?.code || "UPDATE_PROFILE_ERROR",
                statusCode: result.error?.statusCode || 400,
                timestamp: new Date().toISOString(),
                path: request.url,
            }
            return NextResponse.json(errorResponse, { status: result.error?.statusCode || 400 })
        }

        return NextResponse.json(result.user)
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

        console.error("Update profile error:", error)
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
