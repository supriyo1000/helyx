// File: middleware.ts
// Purpose: Protect download routes (/downloads/*) by requiring authentication
// - Verifies JWT token in Authorization header or cookie
// - Redirects unauthenticated users to /auth/login
// - Allows authenticated users to access download files

import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || ""; // Ensure JWT_SECRET is set in .env

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Apply middleware to /downloads/* routes
    if (pathname.startsWith("/downloads/")) {
        try {
            // Check for token in Authorization header (Bearer <token>) or cookie
            const authHeader = request.headers.get("authorization");
            const tokenFromHeader = authHeader?.startsWith("Bearer ") ? authHeader.replace("Bearer ", "") : null;
            const tokenFromCookie = request.cookies.get("token")?.value;
            const token = tokenFromHeader || tokenFromCookie;

            if (!token) {
                console.log("❌ No token provided for download request:", pathname);
                // Redirect to login with a return URL to redirect back after login
                const loginUrl = new URL("/auth/login", request.url);
                loginUrl.searchParams.set("returnUrl", pathname);
                return NextResponse.redirect(loginUrl);
            }

            // Verify the JWT token
            const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
            console.log("✅ Token verified for user:", decoded.email);

            // Token is valid, allow the request to proceed
            return NextResponse.next();
        } catch (error) {
            console.error("❌ Token verification failed:", error);

            // Redirect to login with a return URL
            const loginUrl = new URL("/auth/login", request.url);
            loginUrl.searchParams.set("returnUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Allow all other requests to proceed
    return NextResponse.next();
}

// Configure middleware to apply to specific paths
export const config = {
    matcher: ["/downloads/:path*"],
};