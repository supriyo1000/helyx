// -----------------------------
// File: components/Navigation.tsx
// Updated navigation: removed Downloads sub-menu and added plain "Downloads" link
// -----------------------------

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useLogoutMutation } from "@/lib/api/authApi"
import type { RootState } from "@/lib/store"
import { toast } from "sonner"
import useContactContext from "@/hooks/useContactContext"
import ContactUs from "./ContactUs"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"

const navLinks = [
    { name: "Docs", href: "documentation/pgtopg" },
    { name: "Downloads", href: "/downloads" },
    { name: "Pricing", href: "/pricing" },
    { name: "T&C", href: "/terms-and-condition" },
]

interface User {
    id: number
    name: string
    email: string
    avatar?: string
    emailVerified: boolean
}

// UserAvatar component unchanged (kept for brevity)
const UserAvatar = ({
    user,
    onLogout,
    isLoading,
}: {
    user: User
    onLogout: () => void
    isLoading: boolean
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                {user.avatar ? (
                    <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                )}
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
                <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isDropdownOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />

                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center space-x-3">
                                {user.avatar ? (
                                    <Image
                                        src={user.avatar || "/placeholder.svg"}
                                        alt={user.name}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className="border-t border-gray-200 dark:border-gray-700 my-2" />

                            <button
                                onClick={onLogout}
                                disabled={isLoading}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                            >
                                <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                {isLoading ? "Logging out..." : "Logout"}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [isDownloadsOpen, setIsDownloadsOpen] = useState(false)
    const router = useRouter()

    const { isAuthenticated, user} = useSelector((state: RootState) => state.auth)
    const [logout, { isLoading: logoutLoading }] = useLogoutMutation()
    const { toggleContact: toggler } = useContactContext()

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            toast.success("Logged out successfully")
            router.push("/")
            setIsMenuOpen(false)
        } catch {
            toast.error("Logout failed")
        }
    }

    useLockBodyScroll(isMenuOpen)

    return (
        <>
            {/* Mobile Navigation */}
            <header className="sm:hidden sticky top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <Image src="/logo.jpeg" alt="Helyx" width={100} height={80} className="rounded-full" />
                        {!isAuthenticated && (
                            <span className="ml-2 text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                Helyx v1.1.0 🔥
                            </span>
                        )}
                    </Link>

                    <div className="flex items-center space-x-2">
                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/company/www.quobotic.com/?viewAsMember=true"
                            target="_blank"
                            className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-full text-blue-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            rel="noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                />
                            </svg>
                        </Link>

                        {/* User Avatar (no dropdown on mobile header bar) */}
                        {isAuthenticated && user ? (
                            <div className="flex items-center space-x-2">
                                {user.avatar ? (
                                    <Image
                                        src={user.avatar || "/placeholder.svg"}
                                        alt={user.name}
                                        width={32}
                                        height={32}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        ) : null}

                        <button
                            onClick={() => setIsMenuOpen((v) => !v)}
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                <RxCross2 className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <GiHamburgerMenu className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div id="mobile-menu" className="
      fixed inset-x-0 bottom-0 z-40
      bg-white dark:bg-gray-900
      overflow-y-auto overscroll-contain
      min-h-[calc(100dvh-4rem)]
    "
                    style={{
                        top: "calc(4rem + 3rem)",
                    }}>
                    <div className="px-4 py-6">
                        {/* User Info */}
                        {isAuthenticated && user && (
                            <div className="pb-6 border-b border-gray-200 dark:border-gray-800 mb-6">
                                <div className="flex items-center space-x-3">
                                    {user.avatar ? (
                                        <Image
                                            src={user.avatar || "/placeholder.svg"}
                                            alt={user.name}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-lg font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Nav */}
                        <nav className="space-y-6">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    className="block text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Auth CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                            {isAuthenticated && user ? (
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full rounded-2xl font-semibold border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 bg-transparent"
                                    onClick={handleLogout}
                                    disabled={logoutLoading}
                                >
                                    {logoutLoading ? "Logging out..." : "Logout"}
                                </Button>
                            ) : (
                                <Button
                                    size="lg"
                                    className="w-full rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        router.push("/auth/login")
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    Login
                                </Button>
                            )}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                            <Button
                                size="lg"
                                className="w-full rounded-2xl font-bold bg-linear-to-t from-sky-500 to-indigo-800 text-white shadow-lg hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                                onClick={() => {
                                    toggler()
                                    setIsMenuOpen(false)
                                }}
                            >
                                Contact
                            </Button>
                            <ContactUs />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

const DesktopHeader = () => {
    const router = useRouter()
    const { isAuthenticated, user, isInitialized} = useSelector((state: RootState) => state.auth)
    const [logout, { isLoading: logoutLoading }] = useLogoutMutation()

    const { toggleContact: toggler } = useContactContext()
    // const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
    // const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            toast.success("Logged out successfully")
            router.push("/")
        } catch {
            toast.error("Logout failed")
        }
    }

    // const handleMouseEnter = () => {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    //     setIsDownloadsOpen(true);
    // };

    // const handleMouseLeave = () => {
    //     timeoutRef.current = setTimeout(() => {
    //         setIsDownloadsOpen(false);
    //     }, 200);
    // };

    if (!mounted) {
        return (
            <header className="hidden sm:block sticky top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center h-20">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                    </div>
                </div>
            </header>
        )
    }

    if (!isInitialized) {
        return (
            <header className="hidden sm:block sticky top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-center h-20">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <>
            <header className="hidden sm:block sticky top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image src="/logo.jpeg" alt="Helyx" width={100} height={80} className="rounded-full" />
                                <span className="ml-3 text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                    Helyx v1.1.0 🔥
                                </span>
                            </Link>
                        </div>

                        <nav className="flex items-center space-x-8">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    className="relative flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold"
                                    color="foreground"
                                    data-active="false"
                                    href={item.href}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://www.linkedin.com/company/www.quobotic.com/?viewAsMember=true"
                                target="_blank"
                                className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-full text-blue-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                                rel="noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                    />
                                </svg>
                            </Link>

                            <Button
                                size="lg"
                                className="rounded-2xl font-semibold bg-linear-to-t from-sky-500 to-indigo-800 text-white shadow-lg hover:from-sky-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105"
                                onClick={toggler}
                            >
                                Contact
                            </Button>

                            <ContactUs />

                            {isAuthenticated && user ? (
                                <UserAvatar user={user} onLogout={handleLogout} isLoading={logoutLoading} />
                            ) : (
                                <Button
                                    size="lg"
                                    className="rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105"
                                    onClick={() => router.push("/auth/login")}
                                >
                                    Login
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default function NavigationLatest() {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    )
}