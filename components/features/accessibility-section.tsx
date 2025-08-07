// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// import Image from "next/image";

// export function AccessibilitySection() {
//     const features = [
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35Z" />
//                 </svg>
//             ),
//             title: "Keyboard navigation",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20.9997 11.4994C20.9997 11.9294 20.9697 12.3594 20.9197 12.7794C20.8797 13.0794 20.5697 13.2594 20.2797 13.1694L15.4297 11.6594C14.3497 11.3294 13.1997 11.6094 12.3997 12.3994C11.5997 13.1994 11.3097 14.3694 11.6497 15.4494L13.1497 20.2794C13.2397 20.5694 13.0497 20.8794 12.7497 20.9194C12.3297 20.9694 11.9197 20.9994 11.4997 20.9994C6.15969 20.9994 1.85969 16.6094 1.99969 11.2294C2.13969 6.26942 6.26969 2.13942 11.2297 1.99942C16.6097 1.85942 20.9997 6.15942 20.9997 11.4994Z" />
//                 </svg>
//             ),
//             title: "Managed focus",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z" />
//                 </svg>
//             ),
//             title: "Collision aware",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" />
//                 </svg>
//             ),
//             title: "Alignment control",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969Z" />
//                 </svg>
//             ),
//             title: "Screen reader support",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z" />
//                     <path d="M18 2H6C3.79 2 2 3.79 2 6V15C2 17.21 3.79 19 6 19H18C20.21 19 22 17.21 22 15V6C22 3.79 20.21 2 18 2Z" />
//                 </svg>
//             ),
//             title: "Typehead support",
//         },
//     ]

//     return (
//         <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
//             <div className="flex flex-col gap-8">
//                 <div>
//                     <div className="flex flex-col gap-2 items-start justify-center w-full">
//                         <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Accessibility</h1>
//                         <div>
//                             <h1 className="tracking-tight inline font-semibold from-[#6FEE8D] to-[#17c964] text-4xl lg:text-6xl bg-clip-text text-transparent bg-linear-to-b">
//                                 out of the&nbsp;
//                             </h1>

//                             <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">box.</h1>
//                         </div>
//                     </div>
//                     <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
//                         HeroUI components are built on top of&nbsp;
//                         <a
//                             href="https://react-spectrum.adobe.com/react-aria/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="underline underline-offset-4 hover:opacity-70"
//                         >
//                             React Aria
//                         </a>
//                         &nbsp;ensuring exceptional accessibility support as a top priority.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                     <div className="flex flex-col mt-8 lg:mt-16 gap-6">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {features.map((feature, index) => (
//                                 <Card
//                                     key={index}
//                                     className="border-transparent backdrop-blur-lg backdrop-saturate-[1.8] bg-white dark:bg-default-400/10"
//                                 >
//                                     <CardContent className="p-4">
//                                         <div className="flex items-center gap-2">
//                                             <div className="p-2 rounded-full bg-default-100 dark:bg-transparent text-default-500/50">
//                                                 {feature.icon}
//                                             </div>
//                                             <p className="text-base font-semibold">{feature.title}</p>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>

//                         <Button variant="outline" size="sm" className="max-w-fit bg-success/20 text-success">
//                             Learn more
//                         </Button>
//                     </div>

//                     <div className="flex relative w-full bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] rounded-2xl h-full min-h-[200px] lg:min-h-[390px] items-center justify-center">
//                         <Button variant="outline" className="bg-success-50 text-success-700">
//                             Actions
//                         </Button>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute hidden dark:md:block h-full -bottom-10 left-1/4 -z-10">
//                 <div className="w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl" />
//             </div>
//         </section>
//     )
// }

"use client"

import React from 'react';
import Image from 'next/image';
import { features } from '@/lib/accessData';

export function AccessibilitySection() {

    return (
        <section className="relative flex flex-col gap-2 w-full z-20 mt-16 lg:mt-44">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Accessibility</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold from-[#6FEE8D] to-[#17c964] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">out of the&nbsp;</h1>
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">box.</h1>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-base lg:text-lg font-normal text-default-500">
                        HeroUI components are built on top of&nbsp;
                        <a
                            className="relative inline-flex items-center outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-blue-500 data-[focus-visible=true]:outline-offset-2 underline hover:opacity-80 active:opacity-60 transition-opacity underline-offset-4 text-xl text-default-500 font-light"
                            href="https://react-spectrum.adobe.com/react-aria/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React Aria
                        </a>
                        &nbsp;ensuring exceptional accessibility support as a top priority.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col mt-8 lg:mt-16 gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                            {/* Keyboard Navigation */}

                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-blue-500 data-[focus-visible=true]:outline-offset-2 shadow-xl/20 rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] dark:bg-gray-800/10 backdrop-blur-lg backdrop-saturate-150">
                                    <div className="flex p-3 w-full justify-start items-center gap-2">
                                        <div className="flex justify-center p-2 rounded-full bg-pink-100 text-pink-500 dark:bg-transparent text-gray-500/50">
                                            {feature.icon}
                                        </div>
                                        <p className="text-base font-semibold">{feature.title}</p>
                                    </div>
                                </div>
                            )
                            )}


                        </div>
                        <a
                            role="button"
                            className="relative inline-flex items-center justify-center px-3 py-2 text-md font-semibod rounded-full bg-green-100 text-green-700 dark:text-green-700 hover:opacity-80 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 transition-transform border-2 shadow-xl/20"
                            href="/docs/customization/customize-theme"
                            aria-label="Learn more about accessibility"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="flex relative w-full bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] rounded-2xl h-full min-h-[200px] lg:min-h-[390px] max-h-[300px] lg:pt-8 items-center lg:items-start justify-center">
                        <button
                            type="button"
                            className="absolute top-1 right-1 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-gray-500/10 text-green-50 transition-colors"
                            aria-label="Show code"
                        >
                            <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 24 24" width="24" className="rotate-180">
                                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11.25 8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V8ZM12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-normal rounded-md bg-green-50 text-green-700 dark:text-green-500 hover:opacity-80 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 transition-transform"
                        >
                            Actions
                        </button>
                        <div
                            className="z-10 bg-white dark:bg-gray-800 rounded-lg p-1 min-w-[200px] shadow-xl"
                            role="menu"
                            aria-label="Actions"
                        >
                            <div className="flex flex-col gap-1 p-1">
                                <span className="pl-1 text-xs text-gray-500">Actions</span>
                                <ul className="flex flex-col gap-0.5">
                                    {/* New File */}
                                    <li
                                        role="menuitem"
                                        className="flex items-center justify-between px-2 py-1.5 rounded-sm hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                                        aria-label="New file"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg aria-hidden="true" fill="none" height="1em" viewBox="0 0 24 24" width="1em" className="text-xl text-gray-500">
                                                <path d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z" fill="currentColor" opacity="0.4" />
                                                <path d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z" fill="currentColor" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal">New file</span>
                                                <span className="text-xs text-gray-500">Create a new file</span>
                                            </div>
                                        </div>
                                        <kbd className="px-1 py-0.5 rounded-sm text-xs text-gray-500 border border-gray-300">⌘N</kbd>
                                    </li>
                                    {/* Copy Link */}
                                    <li
                                        role="menuitem"
                                        className="flex items-center justify-between px-2 py-1.5 rounded-sm hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                                        aria-label="Copy link"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg aria-hidden="true" fill="none" height="1em" viewBox="0 0 24 24" width="1em" className="text-xl text-gray-500">
                                                <path d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z" fill="currentColor" opacity="0.4" />
                                                <path d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z" fill="currentColor" />
                                                <path d="M11.98 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z" fill="currentColor" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal">Copy link</span>
                                                <span className="text-xs text-gray-500">Copy the file link</span>
                                            </div>
                                        </div>
                                        <kbd className="px-1 py-0.5 rounded-sm text-xs text-gray-500 border border-gray-300">⌘C</kbd>
                                    </li>
                                    {/* Edit File */}
                                    <li
                                        role="menuitem"
                                        className="flex items-center justify-between px-2 py-1.5 rounded-sm hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                                        aria-label="Edit file"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg aria-hidden="true" fill="none" height="1em" viewBox="0 0 24 24" width="1em" className="text-xl text-gray-500">
                                                <path d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z" fill="currentColor" opacity="0.4" />
                                                <path d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z" fill="currentColor" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal">Edit file</span>
                                                <span className="text-xs text-gray-500">Allows you to edit the file</span>
                                            </div>
                                        </div>
                                        <kbd className="px-1 py-0.5 rounded-sm text-xs text-gray-500 border border-gray-300">⌘⇧E</kbd>
                                    </li>
                                    <li className="w-full h-px bg-gray-200 my-2" role="separator" />
                                    <span className="pl-1 text-xs text-gray-500">Danger zone</span>
                                    {/* Delete File */}
                                    <li
                                        role="menuitem"
                                        className="flex items-center justify-between px-2 py-1.5 rounded-sm hover:bg-red-100 hover:text-red-600 focus:bg-red-100 focus:text-red-600 text-red-600"
                                        aria-label="Delete file"
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg aria-hidden="true" fill="none" height="1em" viewBox="0 0 24 24" width="1em" className="text-xl text-red-600">
                                                <path d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.20c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z" fill="currentColor" />
                                                <path d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.70-.34-.95Z" fill="currentColor" opacity="0.399" />
                                                <path clipRule="evenodd" d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" fill="currentColor" fillRule="evenodd" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-normal">Delete file</span>
                                                <span className="text-xs text-gray-500">Permanently delete the file</span>
                                            </div>
                                        </div>
                                        <kbd className="px-1 py-0.5 rounded-sm text-xs text-gray-500 border border-gray-300">⌘⇧D</kbd>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute hidden dark:md:block h-full dark:opacity-70 -bottom-[10%] left-[20%] z-[-10]">
                <Image
                    src={"/green.svg"}
                    className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 transition-opacity duration-300 rounded-lg h-full"
                    alt="Accessibility background"
                    width={500}
                    height={500}
                    onLoadingComplete={() => ({ 'data-loaded': true })}
                />
            </div>
        </section>
    );
}