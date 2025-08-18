import { LoginForm } from "@/components/auth/login-form"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Login - Helyx",
    description: "Sign in to your Helyx account",
}

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <Image
                            src={"/logo.jpeg"}
                            width={100}
                            height={80}
                            alt="helyx"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
                    <p className="text-gray-600 mt-2">Sign in to your Helyx account</p>
                </div>

                <LoginForm />

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <a href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
