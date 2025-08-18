"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react"
import { useSignupMutation } from "@/lib/api/authApi"
import { validateCompanyEmail, getCompanyEmailSuggestion } from "@/lib/utils/emailValidation"
import { toast } from "sonner"

interface SignupError {
  data?: {
    message?: string
    errors?: Record<string, string[]>
  }
}

export function SignupForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const [signup, { isLoading, error }] = useSignupMutation()

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

  const handlePasswordChange = (password: string) => {
    setFormData((prev) => ({ ...prev, password }))

    // Clear previous error
    setPasswordError(null)

    // Validate password strength
    if (password.length > 0 && password.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
    } else if (password.length >= 8) {
      // Check for password strength
      const hasUpperCase = /[A-Z]/.test(password)
      const hasLowerCase = /[a-z]/.test(password)
      const hasNumbers = /\d/.test(password)
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

      const strengthCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length

      if (strengthCount < 3) {
        setPasswordError("Password should contain uppercase, lowercase, numbers, and special characters")
      }
    }
  }

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    setFormData((prev) => ({ ...prev, confirmPassword }))
  }

  const isPasswordMatch =
    formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email before submission
    const emailValidation = validateCompanyEmail(formData.email)
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || "Invalid email address")
      toast.error(emailValidation.error || "Invalid email address")
      return
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    // Validate terms acceptance
    if (!formData.acceptTerms) {
      toast.error("Please accept the terms and conditions")
      return
    }

    try {
      await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }).unwrap()
      toast.success("Account created successfully!")
      router.push("/")
    } catch (err) {
      const signupError = err as SignupError
      toast.error(signupError?.data?.message || "Signup failed")
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    if (field === "email" && typeof value === "string") {
      handleEmailChange(value)
    } else if (field === "password" && typeof value === "string") {
      handlePasswordChange(value)
    } else if (field === "confirmPassword" && typeof value === "string") {
      handleConfirmPasswordChange(value)
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  // const handleSocialSignup = (provider: string) => {
  //   toast.info(`${provider} signup would redirect to OAuth flow`)
  // }

  return (
    <Card className="border border-gray-200 shadow-lg">
      <CardContent className="px-6 py-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="pl-10"
                disabled={isLoading}
                required
              />
            </div>
          </div>

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
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`pl-10 pr-10 ${passwordError ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
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
            {passwordError && (
              <div className="flex items-start space-x-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>{passwordError}</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className={`pl-10 pr-10 ${formData.confirmPassword && !isPasswordMatch
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : isPasswordMatch
                      ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                      : ""
                  }`}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                disabled={isLoading}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              {formData.confirmPassword && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {isPasswordMatch ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
            {formData.confirmPassword && !isPasswordMatch && (
              <div className="flex items-start space-x-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>Passwords do not match</p>
              </div>
            )}
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {(error as SignupError)?.data?.message || "An error occurred"}
              {(error as SignupError)?.data?.errors && (
                <ul className="mt-2 list-disc list-inside">
                  {Object.entries((error as SignupError).data!.errors!).map(([field, messages]) => (
                    <li key={field}>
                      {field}: {messages.join(", ")}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
              className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              disabled={isLoading}
              required
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="/terms" className="text-blue-600 hover:text-blue-500 transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600 hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isLoading || !!emailError || !!passwordError || !isPasswordMatch || !formData.acceptTerms}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creating account...
              </div>
            ) : (
              "Create Account"
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
              onClick={() => handleSocialSignup("Google")}
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
              onClick={() => handleSocialSignup("GitHub")}
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
      </CardContent>
    </Card>
  )
}
