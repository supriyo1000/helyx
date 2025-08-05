import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function InstallBanner() {
    return (
        <section className="relative z-10 flex-col gap-2 bg-transparent dark:bg-transparent before:bg-background/10 before:content-[''] before:block before:z-[-1] before:absolute before:inset-0 before:backdrop-blur-md before:backdrop-saturate-200 border-t border-b border-divider px-8 w-screen flex justify-center items-center mt-16 lg:mt-44">
            <div className="w-full max-w-7xl py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
                <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
                    <div className="flex flex-col">
                        <h1 className="tracking-tight font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl inline">
                            Let&apos;s make the
                        </h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
                                Web&nbsp;
                            </h1>
                            <h1 className="tracking-tight font-semibold bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent inline">
                                Prettier
                            </h1>
                        </div>
                    </div>
                    <p className="w-full my-2 font-normal text-default-500 block max-w-full md:w-full text-base lg:text-lg">
                        Experience it firsthand and show us your creations!
                    </p>
                    <div className="flex flex-row gap-3 justify-start">
                        <Button className="bg-secondary text-secondary-foreground rounded-full">
                            Get Started
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.08325 14H23.7183" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                        <Button variant="outline" className="rounded-full bg-transparent" asChild>
                            <a href="https://github.com/heroui-inc/heroui" target="_blank" rel="noopener noreferrer">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                                </svg>
                                Github
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] cursor-pointer hover:scale-[0.97] transition-transform">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-full bg-secondary-100/80 text-pink-500">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M8 2v3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 2v3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 13h8" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 17h5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold">Getting Started</h3>
                                </div>
                                <p className="font-normal text-medium text-default-500">
                                    Make beautiful, modern, and fast websites/applications regardless of your design experience.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] cursor-pointer hover:scale-[0.97] transition-transform">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 rounded-full bg-secondary-100/80 text-pink-500">
                                        <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
                                            <path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold">HeroUI + Next.js</h3>
                                </div>
                                <p className="font-normal text-medium text-default-500">
                                    HeroUI is fully compatible with the new Next.js{" "}
                                    <code className="px-1 py-0.5 bg-default/40 text-default-700 text-xs rounded">app/</code> directory
                                    structure.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="absolute -top-20 lg:top-10 -translate-y-1/2 w-screen h-screen -z-50 opacity-100 transition-opacity bg-left bg-no-repeat bg-[url('/placeholder.svg?height=800&width=1200&text=Background+Pattern')] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:bg-gradient-to-b after:from-transparent after:to-white/80 dark:after:to-black/20" />
        </section>
    )
}
