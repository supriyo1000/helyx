"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react"
import { useLoginMutation } from "@/lib/api/authApi"
import { validateCompanyEmail, getCompanyEmailSuggestion } from "@/lib/utils/emailValidation"
import { toast } from "sonner"

interface LoginError {
  data?: {
    message?: string
  }
}

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [emailError, setEmailError] = useState<string | null>(null)

  const [login, { isLoading, error }] = useLoginMutation()

  const handleEmailChange = (email: string) => {
    setFormData((prev) => ({ ...prev, email }))

    // Clear previous error
    setEmailError(null)

    // Validate email if it's not empty
    if (email.trim()) {
      const validation = validateCompanyEmail(email)
      if (!validation.isValid) {
        setEmailError(validation.error || "Invalid email address")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    const emailValidation = validateCompanyEmail(formData.email)
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || "Invalid email address")
      toast.error(emailValidation.error || "Invalid email address")
      return
    }

    try {
      await login(formData).unwrap()
      toast.success("Login successful!")
      router.push("/")
    } catch (err) {
      const loginError = err as LoginError
      const errorMessage = loginError?.data?.message || "Login failed"

      // Check if it's a user not found error and suggest signup
      if (errorMessage.includes("Invalid credentials") || errorMessage.includes("User not found")) {
        toast.error("Account not found. Please sign up first or check your credentials.")
      } else {
        toast.error(errorMessage)
      }
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field === "email" && typeof value === "string") {
      handleEmailChange(value)
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  // const handleSocialLogin = (provider: string) => {
  //   toast.info(`${provider} login would redirect to OAuth flow`)
  // }

  return (
    <Card className="border border-gray-200 shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Company Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your company email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`pl-10 ${emailError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                disabled={isLoading}
                required
              />
              {emailError && (
                <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
              )}
            </div>
            {emailError && (
              <div className="flex items-start space-x-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{emailError}</p>
                  <p className="text-xs mt-1 text-red-500">{getCompanyEmailSuggestion()}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10 pr-10"
                disabled={isLoading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{(error as LoginError)?.data?.message || "Login failed"}</p>
                  {((error as LoginError)?.data?.message?.includes("Invalid credentials") ||
                    (error as LoginError)?.data?.message?.includes("User not found")) && (
                      <p className="text-xs mt-1">
                        Dont have an account?{" "}
                        <a href="/auth/signup" className="text-blue-600 hover:text-blue-500 underline">
                          Sign up here
                        </a>
                      </p>
                    )}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                disabled={isLoading}
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="/auth/reset-password" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isLoading || !!emailError}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Signing in...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>

        {/* <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
              className="w-full"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => handleSocialLogin("GitHub")}
              disabled={isLoading}
              className="w-full"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div> */}

        {/* Company Email Notice */}
        <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Company Email Required</p>
              <p className="text-xs mt-1">
                Only company email addresses are allowed. Personal email providers (Gmail, Yahoo, Outlook, etc.) are not
                permitted.
              </p>
            </div>
          </div>
        </div>

        {/* Sign up link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Dont have an account?{" "}
            <a href="/auth/signup" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
              Sign up here
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
