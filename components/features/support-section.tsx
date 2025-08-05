import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SupportSection() {
    return (
        <section className="relative gap-2 w-full flex flex-col items-center z-20 mt-16 lg:mt-44">
            <div className="max-w-4xl flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 justify-center w-full text-center items-center">
                        <div className="flex md:inline-flex flex-col md:flex-row items-center">
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Support HeroUI&nbsp;</h1>
                            <svg className="w-12 h-12 text-pink-500 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" />
                            </svg>
                        </div>
                    </div>
                    <p className="w-full my-2 text-medium lg:text-large font-normal text-default-500 max-w-full md:w-full text-center flex justify-center items-center">
                        Using HeroUI in a profit-making product, as a freelancer, or for fun projects? Your contributions will help
                        to make HeroUI better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
                    <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] cursor-pointer hover:scale-[0.97] transition-transform">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-secondary-100/80 text-pink-500">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <g clipPath="url(#a)" clipRule="evenodd" fillRule="evenodd">
                                                <path d="M21.865 5.166A11.945 11.945 0 0 1 24 12.001c0 2.54-.789 4.895-2.135 6.834l-3.109-3.109A7.679 7.679 0 0 0 19.714 12a7.679 7.679 0 0 0-.958-3.725l3.109-3.109Z" />
                                                <path d="m18.834 2.135-3.108 3.109a7.714 7.714 0 1 0 0 13.513l3.108 3.108A11.946 11.946 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0c2.54 0 4.895.789 6.834 2.135Z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold">Open Collective</p>
                                </div>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path
                                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="font-normal text-medium text-default-500">Sponsor the HeroUI maintainers.</p>
                        </CardContent>
                    </Card>

                    <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] cursor-pointer hover:scale-[0.97] transition-transform">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-secondary-100/80 text-pink-500">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15.294 17.986c4.766 0 8.63-4.026 8.63-8.993C23.923 4.026 20.06 0 15.293 0c-4.766 0-8.63 4.026-8.63 8.993 0 4.967 3.864 8.993 8.63 8.993ZM4.218 0H0v23.991h4.218V0Z" />
                                        </svg>
                                    </div>
                                    <p className="text-base font-semibold">Patreon</p>
                                </div>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path
                                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="font-normal text-medium text-default-500">Sponsor the creator, Junior Garcia.</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="relative mt-32 md:mt-60 w-full flex items-center justify-center">
                    <div className="relative inline-block">
                        <div className="relative flex items-center justify-center text-center rounded-full bg-transparent w-20 h-20">
                            <Button
                                size="lg"
                                className="rounded-full bg-gradient-to-b from-[#FF1CF7] to-[#7928CA] text-white p-4 hover:scale-110 transition-transform"
                                aria-label="Become a sponsor"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 18V6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                        </div>

                        {/* Sponsor Avatars */}
                        <div className="absolute rounded-full bg-transparent w-32 h-32 top-[-24px] left-[-24px]">
                            {Array.from({ length: 20 }).map((_, i) => {
                                const angle = (i / 20) * 2 * Math.PI
                                const radius = 65
                                const x = Math.cos(angle) * radius + 65
                                const y = Math.sin(angle) * radius + 65

                                return (
                                    <div
                                        key={i}
                                        className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background cursor-pointer hover:scale-110 transition-transform"
                                        style={{
                                            left: `${x}px`,
                                            top: `${y}px`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    >
                                        <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md backdrop-saturate-200 flex items-center justify-center text-xs font-semibold text-white">
                                            {String.fromCharCode(65 + (i % 26))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Animated Rings */}
                        <div className="absolute top-1/2 left-1/2 overflow-visible -z-10">
                            {[120, 200, 280, 360].map((size, index) => (
                                <div
                                    key={index}
                                    className="absolute animate-pulse rounded-full border opacity-30"
                                    style={{
                                        width: `${size}px`,
                                        height: `${size}px`,
                                        top: `-${size / 2}px`,
                                        left: `-${size / 2}px`,
                                        borderColor: `rgba(121, 40, 202, ${0.4 - index * 0.1})`,
                                        background: `linear-gradient(-180deg, rgba(121,40,202,${0.4 - index * 0.1}) 40%, hsl(var(--background)) 100%)`,
                                        animationDelay: `${index * 0.5}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
