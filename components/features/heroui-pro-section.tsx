import { Button } from "@/components/ui/button"

export function HeroUIProSection() {
    return (
        <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44 overflow-hidden">
            <div className="flex flex-col gap-8 min-h-[480px]">
                <div className="z-30 flex w-screen h-full flex-col items-start justify-center leading-8 pt-4">
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-primary-foreground rounded-full px-2 py-1 text-xs font-semibold mb-2">
                        PRO
                    </div>

                    <div className="flex-col gap-2 items-start justify-center w-full mt-2 inline md:block">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
                            Ship&nbsp;
                        </h1>
                        <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
                            faster&nbsp;
                        </h1>
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
                            with&nbsp;
                        </h1>
                        <div className="flex flex-col sm:flex-row">
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
                                beautiful&nbsp;
                            </h1>
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl [text-shadow:_0_3px_0_rgb(0_0_0_/_10%)]">
                                components
                            </h1>
                        </div>
                    </div>

                    <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal block max-w-full pr-12 text-foreground-500">
                        Premade templates of over 210+ beautiful and responsive components, professionally created by the team
                        behind HeroUI.
                    </p>

                    <div className="mt-4 text-foreground-600 font-medium space-y-2">
                        {["210+ Components", "Lifetime Access", "Free Updates", "Figma Files Included"].map((feature, index) => (
                            <div key={index} className="flex gap-x-4 items-center">
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                                    <path
                                        d="M1 6.4L4.14286 10L12 1"
                                        stroke="#006FEE"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <Button asChild className="bg-primary text-primary-foreground">
                            <a
                                href="https://heroui.pro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                Explore HeroUI Pro
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path
                                        d="M12.0254 5.44189L17.0837 10.5002L12.0254 15.5586"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.91602 10.5H16.941"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div className="hidden md:flex w-screen mt-4 md:absolute md:inset-0 isolate md:max-h-dvh">
                        <div className="flex w-max items-stretch gap-4 flex-col h-full animate-scroll">
                            <div className="w-full h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-50" />
                            <div className="w-full h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-40" />
                            <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg opacity-60" />
                        </div>
                    </div>

                    <div className="absolute md:hidden inset-0 pointer-events-none top-0 z-20">
                        <div className="h-full w-full bg-[radial-gradient(at_40%_80%,_rgba(255,255,255,_0)_5%,_rgba(0,0,0,_0.8)_50%,_rgba(0,0,0,1)_100%)]" />
                    </div>

                    <div className="absolute hidden md:block md:inset-0 md:pointer-events-none md:top-0 md:z-20">
                        <div className="h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(255,255,255,_0)_20%,_rgba(0,0,0,_0.8)_40%,_rgba(0,0,0,1)_100%)]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
