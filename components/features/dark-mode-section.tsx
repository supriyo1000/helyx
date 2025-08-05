"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DarkModeSection() {
    const [isDark, setIsDark] = useState(false)

    return (
        <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Dark mode</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">is&nbsp;</h1>
                            <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent">
                                effortless.
                            </h1>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
                        HeroUI comes with a fully well-scaled default dark theme that you can apply to your application with just
                        adding the <code className="px-2 py-1 bg-default/40 text-default-700 text-small rounded">dark</code>{" "}
                        attribute to your <code className="px-2 py-1 bg-default/40 text-default-700 text-small rounded">html</code>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="flex relative w-full bg-gradient-to-tr from-[#FFB457] to-[#FF705B] rounded-2xl items-center justify-center py-14 px-4 lg:px-8">
                            <Card className="bg-background/60 dark:bg-default-100/50 backdrop-blur-md backdrop-saturate-150">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-4 items-center">
                                        <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src="/placeholder.svg?height=128&width=128&text=Album"
                                                alt="Album Cover"
                                                className="w-full h-full object-cover"
                                                width={128}
                                                height={128}
                                            />
                                        </div>

                                        <div className="flex flex-col flex-1 space-y-3">
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">Daily Mix</p>
                                                <p className="text-xs text-foreground/80">12 Tracks</p>
                                                <p className="text-lg font-medium mt-1">Frontend Radio</p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-xs">1:23</span>
                                                <div className="flex-1 mx-3 h-1 bg-default-500/30 rounded-full relative">
                                                    <div className="absolute left-0 top-0 h-full w-1/3 bg-foreground rounded-full" />
                                                    <div className="absolute left-1/3 top-1/2 w-2 h-2 bg-foreground rounded-full -translate-y-1/2 -translate-x-1/2" />
                                                </div>
                                                <span className="text-xs text-foreground/50">4:32</span>
                                            </div>

                                            <div className="flex items-center justify-center gap-4">
                                                <Button variant="ghost" size="sm" className="p-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z" />
                                                    </svg>
                                                </Button>

                                                <Button variant="ghost" size="lg" className="p-3">
                                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z" />
                                                    </svg>
                                                </Button>

                                                <Button variant="ghost" size="sm" className="p-2">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z" />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="absolute top-2 right-2 flex gap-2">
                                <Button variant="ghost" size="sm" className="p-2 text-white/70">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2 text-white/70" onClick={() => setIsDark(!isDark)}>
                                    {isDark ? (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <circle cx="12" cy="12" r="5" />
                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" />
                                        </svg>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <pre className="bg-zinc-900 text-white p-4 rounded-xl text-sm overflow-auto min-h-[340px]">
                            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-400 text-xs">_app.tsx</span>
                            </div>
                            <code>{`import React from "react";
import {HeroUIProvider} from "@heroui/react";

const Application = ({Component, pageProps}) => {
  return (
    <HeroUIProvider>
      <main className={isDark ? "dark" : "light"}>
        <Component {...pageProps} />
      </main>
    </HeroUIProvider>
  );
};

export default Application;`}</code>
                        </pre>
                    </div>
                </div>

                <Button variant="outline" size="sm" className="max-w-fit bg-warning/20 text-warning">
                    Learn more
                </Button>
            </div>
        </section>
    )
}
