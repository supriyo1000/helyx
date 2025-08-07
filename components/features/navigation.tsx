"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
    return (
        <nav className="flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-white/90 border-b border-gray-200">
            <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-16 max-w-7xl">
                {/* Logo Section */}
                <div className="flex gap-4 h-full flex-row flex-nowrap items-center">
                    <Link href="/" className="flex justify-start items-center gap-2">
                        {/* <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 126 126">
                            <path d="M92.6471 0H33.3529C14.9326 0 0 14.9326 0 33.3529V92.6471C0 111.067 14.9326 126 33.3529 126H92.6471C111.067 126 126 111.067 126 92.6471V33.3529C126 14.9326 111.067 0 92.6471 0Z" />
                            <path className="fill-white" d="M86.3181 89.4661V36H92.9271V89.4661H86.3181Z" />
                            <path
                                className="fill-white"
                                d="M54.0894 90.58C49.9557 90.58 46.3046 89.726 43.1363 88.0181C39.9679 86.3101 37.4803 83.9215 35.6733 80.8521C33.8911 77.758 33 74.1317 33 69.9733V36.0371L39.6833 36V69.4163C39.6833 71.9411 40.1041 74.1441 40.9457 76.0253C41.812 77.8818 42.9506 79.4289 44.3616 80.6665C45.7725 81.9041 47.3195 82.8324 49.0027 83.4512C50.7107 84.0453 52.4062 84.3423 54.0894 84.3423C55.7974 84.3423 57.5053 84.0329 59.2133 83.4141C60.9212 82.7952 62.4682 81.8794 63.8544 80.6665C65.2653 79.4289 66.3916 77.8694 67.2332 75.9882C68.0748 74.107 68.4956 71.9164 68.4956 69.4163V36H75.1788V69.9733C75.1788 74.107 74.2754 77.7209 72.4684 80.815C70.6862 83.9091 68.2109 86.3101 65.0425 88.0181C61.8742 89.726 58.2231 90.58 54.0894 90.58Z"
                            />
                        </svg>
                        <span className="font-bold text-black text-xl">HeroUI</span> */}

                        <Image
                            src={"/logo.jpeg"}
                            alt="Helyx"
                            width={150}
                            height={70}
                            className="rounded-full"
                        />
                    </Link>

                    <div className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-sm font-medium">
                        Helyx v1.1.0 🔥
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6 items-center">
                    <a href="/docs" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        Docs
                    </a>
                    <a href="/components" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        Products
                    </a>
                    <a href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        Blog
                    </a>
                    <a
                        href="/roadmap"
                        target="_blank"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1"
                        rel="noreferrer"
                    >
                        Roadmap
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 18L18 6m0 0H9m9 0v9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    {/* <Button variant="ghost" size="sm" className="rounded-full text-gray-600 hover:text-gray-900">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        Search
                        <kbd className="hidden lg:inline-flex items-center gap-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded ml-2">
                            ⌘K
                        </kbd>
                    </Button> */}

                    <a
                        href="https://github.com/heroui-inc/heroui"
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full text-blue-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                        rel="noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        {/* 24.8K */}
                    </a>

                    <a
                        href="https://github.com/heroui-inc/heroui"
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full text-blue-500 hover:text-gray-900 hover:border-gray-400 transition-colors"
                        rel="noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        {/* 24.8K */}
                    </a>

                    <a
                        href="https://github.com/heroui-inc/heroui"
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                        rel="noreferrer"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                        </svg>
                        {/* 24.8K */}
                    </a>

                    <Button variant="ghost" size="sm" className="rounded-full p-2">
                        {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg> */}

                        <a
                            href="https://github.com/heroui-inc/heroui"
                            target="_blank"
                            className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            rel="noreferrer"
                        >
                            Login
                        </a>
                    </Button>
                </div>
            </header>
        </nav>
    )
}
