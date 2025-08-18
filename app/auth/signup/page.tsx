import { SignupForm } from "@/components/auth/signup-form"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Sign Up - Helyx",
    description: "Create your Helyx account",
}

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
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
                    <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
                    <p className="text-gray-600 mt-2">Join Helyx and start Replication</p>
                </div>

                <SignupForm />

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
