// 'use client'

// // test.tsx

// import Image from "next/image";
// import Link from "next/link";
// import Navlink from "./navcomponent/navlink";
// import { Button } from "./ui/button";
// // import { GiHamburgerMenu } from "react-icons/gi";
// import MobileView from "./navcomponent/mobileview";
// import { useCallback, useState } from "react";


// export default function TestNavigation() {

//     const [open, setOpen] = useState(false);

//     const toggleMenu = useCallback(() => setOpen(prev => !prev), []);

//     return (

//         <>
//             <nav className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-white/[.90] dark:bg-black/[.65]" style={{ height: "4rem" }}>
//                 <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-8xl">
//                     {/* Logo and Version */}

//                     <ul className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 basis-1/5 sm:basis-full" data-justify="start">
//                         <li className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border gap-x-3 max-w-fit">
//                             <Link aria-label="Home" className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50" href="/">
//                                 <Image
//                                     src={"/logo.jpeg"}
//                                     alt="Helyx"
//                                     width={150}
//                                     height={70}
//                                     className="rounded-full"
//                                 />
//                             </Link>

//                             <Link
//                                 className="relative max-w-fit min-w-min items-center justify-between box-border whitespace-nowrap px-1 h-7 text-small rounded-full text-primary-600 hidden sm:flex bg-default-200/50 border-1 hover:bg-default-200/80 border-default-400/50 cursor-pointer" href="/"><span className="flex-1 px-2 font-semibold text-foreground text-xs">Helyx v1.1.0 🔥&nbsp;<span aria-label="emoji" role="img">🔥</span></span>
//                             </Link>
//                         </li>
//                     </ul>


//                     {/*  Navbar in mobile View  */}

//                     <MobileView toggleMenu={toggleMenu} isOpen={open} />



//                     {/* Desktop View */}
//                     <ul className="gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex basis-1/5 sm:basis-full" data-justify="end">

//                         {/* main nav links */}
//                         <ul className="hidden lg:flex gap-4 pr-2 justify-start items-center [&amp;&gt;li&gt;a]:text-sm [&amp;&gt;li&gt;a]:font-medium">
//                             {/* <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
//                             <a className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href="/docs/guide/introduction">Docs</a>
//                         </li>
//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
//                             <a className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href="/docs/components/accordion">Components</a>
//                         </li>
//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
//                             <a className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href="/docs/guide/figma">Figma</a>
//                         </li>
//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold"><a className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href="/blog">Blog</a>
//                         </li>
//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
//                             <a className="relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href="/themes">Theme</a>
//                         </li>
//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
//                         <a className="inline-flex items-center relative inline-flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" target="_blank" href="https://nextuioss.featurebase.app/roadmap">
//                             <div className="relative">Roadmap<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="absolute right-[-10px] top-0 outline-solid outline-transparent transition-transform group-data-[hover=true]:translate-y-0.5 [&amp;&gt;path]:stroke-[2.5px]" width="10" height="10" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6m0 0H9m9 0v9"></path></svg>
//                             </div>
//                         </a>
//                         </li> */}
//                             <Navlink href="/documents" name="Docs" />
//                             <Navlink href="/documents" name="Products" />
//                             <Navlink href="/documents" name="Blog" />
//                             <Navlink href="/documents" name="Roadmap" />
//                             <Navlink href="/documents" name="T&C" />

//                         </ul>

//                         <div className="shrink-0 bg-divider border-none w-divider h-7 hidden lg:flex" role="separator" data-orientation="vertical" aria-orientation="vertical">
//                         </div>

//                         <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold hidden sm:flex gap-2">


//                             <label aria-label="Switch to light mode" className="group relative max-w-fit touch-none tap-highlight-transparent select-none p-1 w-8 transition-opacity hover:opacity-80 cursor-pointer border-1 border-default-200 rounded-full h-full min-w-10 min-h-10 flex items-center justify-center">
//                                 <div
//                                     style={{
//                                         border: 0,
//                                         clip: "rect(0 0 0 0)",
//                                         clipPath: "inset(50%)",
//                                         height: 1,
//                                         margin: "-1px",
//                                         overflow: "hidden",
//                                         padding: 0,
//                                         position: "absolute",
//                                         width: 1,
//                                         whiteSpace: "nowrap"
//                                     }}
//                                 >
//                                     <input
//                                         aria-labelledby="«Rdt9lb»"
//                                         type="checkbox"
//                                         data-react-aria-pressable="true"
//                                         tabIndex={0}
//                                         role="switch"
//                                         className="font-inherit text-[100%] leading-[1.15] m-0 p-0 overflow-visible box-border absolute top-0 w-full h-full opacity-[0.0001] z-[1] cursor-pointer disabled:cursor-default"
//                                         // defaultChecked=""
//                                         defaultValue=""
//                                     />
//                                 </div>
//                                 <div aria-hidden="true" className="relative shrink-0 overflow-hidden outline-solid outline-transparent group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:text-primary-foreground transition-background w-auto h-auto bg-transparent rounded-lg flex items-center justify-center group-data-[selected=true]:bg-transparent pt-0 px-0 mx-0 text-default-400! dark:text-default-500!"><svg aria-hidden="true" fill="none" focusable="false" height="22" role="presentation" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.778 4.223L17.556 6.254M4.222 4.223L6.444 6.254M6.444 17.556L4.222 19.778M19.778 19.777L17.556 17.555" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
//                                 </div>
//                             </label>

//                             <Button variant="ghost" size="lg" className="relative tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-hover active:opacity-disabled transition-opacity flex gap-0.5 items-center h-10 px-2 border-1 border-default-200 rounded-full text-default-600 dark:text-default-500">
//                                 Login
//                             </Button>
//                         </li>
//                     </ul>



//                 </header>
//             </nav>

//             <div
//                 className={
//                     open
//                         ? "fixed z-50 w-full top-27 inset-x-0 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 bg-white shadow-lg"
//                         : "fixed z-50 w-full top-16 inset-x-0 transition-all duration-300 ease-in-out transform -translate-y-full opacity-0 pointer-events-none bg-white shadow-lg"
//                 }
//                 style={{ height: "calc(100vh - 4rem)" }} // Adjust based on your navbar height
//             >
//                 <div className="relative h-full w-full overflow-y-auto">
//                     <div className="p-5">
//                         {/* Your menu content here */}
//                         <div className="pt-5 pb-6">
//                             <div className="mt-6">
//                                 <nav className="grid gap-y-8">
//                                     <a
//                                         href="#"
//                                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                                     >
//                                         <svg
//                                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                                             />
//                                         </svg>
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             Analytics
//                                         </span>
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                                     >
//                                         {/* Heroicon name: outline/cursor-click */}
//                                         <svg
//                                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
//                                             />
//                                         </svg>
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             Engagement
//                                         </span>
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                                     >
//                                         {/* Heroicon name: outline/shield-check */}
//                                         <svg
//                                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                                             />
//                                         </svg>
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             Security
//                                         </span>
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                                     >
//                                         {/* Heroicon name: outline/view-grid */}
//                                         <svg
//                                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
//                                             />
//                                         </svg>
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             Integrations
//                                         </span>
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                                     >
//                                         {/* Heroicon name: outline/refresh */}
//                                         <svg
//                                             className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                                             />
//                                         </svg>
//                                         <span className="ml-3 text-base font-medium text-gray-900">
//                                             Automations
//                                         </span>
//                                     </a>
//                                 </nav>
//                             </div>
//                         </div>

//                         <div className="py-6 space-y-6">
//                             <div className="grid grid-cols-2 gap-y-4 gap-x-8">
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Pricing
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Docs
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Enterprise
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Blog
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Help Center
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Guides
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Security
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                                 >
//                                     Events
//                                 </a>
//                             </div>
//                             <div>
//                                 <a
//                                     href="#"
//                                     className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                                 >
//                                     Sign up
//                                 </a>
//                                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                                     Existing customer?
//                                     <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                                         Sign in
//                                     </a>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }


'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const navLinks = [
    { name: "Docs", href: "documentation" },
    { name: 'Downloads', href: "downloads" },
    { name: 'Blog', href: "blogs" },
    { name: 'Roadmap', href: "roadmap" },
    { name: 'T&C', href: "terms_and_condition" },
]

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    return (
        <>
            {/* Top Banner - Moved inside MobileHeader */}
            {/* <div className="sm:hidden relative z-50 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-center">
                        <span className="mr-1" role="img" aria-label="rocket">🚀</span>
                        <span className="text-sm font-medium">
                            One Engine. Many Databases. Real-Time-Replication.
                        </span>
                    </div>
                </div>
            </div> */}

            {/* Mobile Navigation */}
            <header className="sm:hidden sticky top-10 w-full z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.jpeg"
                            alt="Helyx"
                            width={100}
                            height={80}
                            className="rounded-full"
                        />
                        <span className="ml-2 text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            Helyx v1.1.0 🔥
                        </span>
                    </Link>

                    <div className="flex items-center space-x-2">

                        {/* linkdn */}
                        <Link
                            href="https://www.linkedin.com/company/www.quobotic.com/?viewAsMember=true"
                            target="_blank"
                            className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-full text-blue-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            rel="noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            {/* 24.8K */}
                        </Link>


                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <RxCross2 className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <GiHamburgerMenu className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>

                    </div>
                </div>

                {isMenuOpen && (
                    <div className="fixed inset-0 z-30 bg-white dark:bg-gray-900 mt-30 overflow-y-auto">
                        <div className="container mx-auto px-4 py-6 space-y-6">
                            <nav className="space-y-4">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        // href="#"
                                        className="relative flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
                                {/* <Button className="w-full">Login</Button>
                                <Button variant="outline" className="w-full">
                                    Sign Up
                                </Button> */}

                                <Button size="lg"
                                    className="w-full md:w-auto rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105" onClick={() => router.push("/auth/login")}>Login</Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    )
}

const DesktopHeader = () => {

    const router = useRouter()

    return (
        <>
            {/* Top Banner for Desktop */}
            {/* <div className="hidden sm:block relative z-50 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-2.5">
                    <div className="flex items-center justify-center">
                        <span className="mr-1" role="img" aria-label="rocket">🚀</span>
                        <span className="text-sm font-medium">
                            One Engine. Many Databases. Real-Time-Replication.
                        </span>
                    </div>
                </div>
            </div> */}

            {/* Desktop Navigation */}
            <header className="hidden sm:block sticky top-0 w-full z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Helyx"
                                    width={100}
                                    height={80}
                                    className="rounded-full"
                                />
                                <span className="ml-3 text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                    Helyx v1.1.0 🔥
                                </span>
                            </Link>
                        </div>

                        <nav className="flex items-center space-x-8">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    // href="#"
                                    className="relative flex items-center tap-highlight-transparent outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-hover active:opacity-disabled transition-opacity data-[active=true]:text-primary data-[active=true]:font-semibold" color="foreground" data-active="false" href={item.href}
                                >
                                    {item.name}

                                    {(item.name === "Roadmap" || item.name === "T&C") ?
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="absolute right-[-10px] top-0 outline-solid outline-transparent transition-transform group-data-[hover=true]:translate-y-0.5 [&amp;&gt;path]:stroke-[2.5px]" width="10" height="10" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6m0 0H9m9 0v9"></path></svg> : ""
                                    }
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            {/* linkdn */}
                            <Link
                                href="https://www.linkedin.com/company/www.quobotic.com/?viewAsMember=true"
                                target="_blank"
                                className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-full text-blue-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                                rel="noreferrer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                                {/* 24.8K */}
                            </Link>

                            {/* <Button size="lg"
                                className="w-full md:w-auto rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105" onClick={() => router.push("/auth/login")}>Login
                            </Button> */}
                            {/* <Button>Sign Up</Button> */}

                                <Button
                                    size="lg"
                                    className="rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105"
                                    onClick={() => router.push("/auth/login")}
                                >
                                    Login
                                </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default function Navigation() {
    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    )
}