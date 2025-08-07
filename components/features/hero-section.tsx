// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export function HeroSection() {
//     return (
//         <section className="flex flex-col items-center justify-center">
//             <div className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
//                 {/* Main Content */}
//                 <div className="relative z-20 flex flex-col w-full gap-6 lg:w-1/2">
//                     <div className="flex justify-center w-full md:hidden">
//                         <a
//                             href="/blog/v2.8.0"
//                             className="bg-default-200/50 border border-default-400/50 rounded-full px-3 py-1 text-xs text-foreground hover:bg-default-200/80"
//                         >
//                             HeroUI v2.8.0 🔥
//                         </a>
//                     </div>

//                     <div className="leading-8 text-center md:leading-10 md:text-left">
//                         <div className="inline-block">
//                             <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
//                                 Make&nbsp;
//                             </h1>
//                             <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl bg-clip-text text-transparent">
//                                 beautiful&nbsp;
//                             </h1>
//                         </div>
//                         <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
//                             websites regardless of your design experience.
//                         </h1>
//                     </div>

//                     <h2 className="w-full  my-2 text-medium lg:text-large font-semibold text-default-500 block max-w-full text-center md:text-left lg:pr-8">
//                         Beautiful, fast and modern React UI library for building accessible and customizable web applications.
//                     </h2>

//                     <div className="flex flex-col items-center gap-4 md:flex-row">
//                         <Button size="lg" className="w-full md:w-auto rounded-full">
//                             Get Started
//                             <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M4.08325 14H23.7183" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         </Button>

//                         <div className="hidden md:flex items-center justify-between h-fit gap-2 px-3 py-1.5 text-small bg-default/40 text-default-700 rounded-full">
//                             <code className="bg-transparent text-inherit font-mono">
//                                 <span className="select-none">$ </span>npx heroui-cli@latest init
//                             </code>
//                             <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
//                                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                                     <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z" />
//                                     <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16" />
//                                 </svg>
//                             </Button>
//                         </div>

//                         <Button variant="outline" className="w-full md:hidden rounded-full bg-transparent">
//                             <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                                 <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
//                             </svg>
//                             GitHub
//                         </Button>
//                     </div>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="hidden lg:flex flex-col relative z-20 w-1/2">
//                     {/* Add floating UI elements here - simplified for brevity */}
//                     <div className="relative w-full h-96 overflow-hidden">
//                         {/* <div className="absolute inset-0 opacity-30">
//                             <div className="absolute top-10 right-20 w-32 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-50 animate-pulse"></div>
//                             <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-bounce"></div>
//                             <div className="absolute bottom-20 right-32 w-28 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg opacity-60 animate-pulse delay-500"></div>
//                         </div> */}
//                         <Image src={"/dbflow.png"} alt="" width={400} height={500}/>
//                     </div>
//                 </div>

//                 {/* Background Pattern */}
//                 <div
//                     className="absolute -top-20 lg:top-10 w-screen h-screen z-0 opacity-100 overflow-hidden bg-left bg-no-repeat transition-opacity"
//                     style={{
//                         backgroundImage: "url('/looper-pattern.svg?height=800&width=1200&text=Background+Pattern')",
//                     }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background"></div>
//                 </div>
//             </div>
//         </section>
//     )
// }





import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)] max-w-7xl mx-auto px-6">
                {/* Main Content */}
                <div className="relative z-20 flex flex-col w-full gap-6 lg:w-1/2">
                    <div className="flex justify-center w-full md:hidden">
                        <a
                            href="/blog/v2.8.0"
                            className="bg-default-200/50 border border-default-400/50 rounded-full px-3 py-1 text-xs text-foreground hover:bg-default-200/80 transition-colors"
                        >
                            HeroUI v2.8.0 🔥
                        </a>
                    </div>
                    <div className="leading-8 text-center md:leading-10 md:text-left">
                        <div className="inline-block">
                            <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-4xl">
                                Helyx&nbsp;
                            </h1>
                            <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-4xl bg-clip-text text-transparent">
                                Real-Time Replication&nbsp;
                            </h1>
                        </div>
                        <h1 className="tracking-tight inline font-semibold text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-4xl">
                            for Modern, Heterogeneous Databases.
                        </h1>
                    </div>
                    <h2 className="w-full my-2 text-medium lg:text-large font-semibold text-default-500 block max-w-full text-center md:text-left lg:pr-8">
                        Seamlessly replicate data across Oracle, PostgreSQL, MySQL, and MongoDB — with zero downtime, auto schema evolution, and DevOps-first simplicity.
                    </h2>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        {/* <Button
                            size="lg"
                            className="w-full md:w-auto rounded-full font-semibold bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] text-black hover:bg-fuchsia-500"
                        >
                            Get Started
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.08325 14H23.7183" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button> */}

                        <Button
                            size="lg"
                            className="w-full md:w-auto rounded-2xl font-semibold bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-[#e013db] hover:to-[#6F0BB3] transition-all duration-300 transform hover:scale-105"
                        >
                            Get Started
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path
                                    d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.08325 14H23.7183"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>

                        <div className="hidden md:flex items-center justify-between h-fit gap-2 px-1.5 text-small bg-default/40 text-default-700 rounded-md border-1 border-solid shadow-lg/15">
                            <div className="hidden md:flex items-center justify-between h-fit gap-2 px-3 py-1.5 text-small bg-default/40 text-default-700 rounded-full hover:bg-default/60 transition-colors">
                                <code className="bg-transparent text-inherit font-mono">
                                    <span className="select-none">$ </span>npx heroui-cli@latest init
                                </code>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-default/20">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z" />
                                        <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16" />
                                    </svg>
                                </Button>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full md:hidden rounded-full bg-transparent border-default-300 hover:bg-default/10"
                            >
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                                </svg>
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Database Replication Image */}
                <div className="hidden lg:flex flex-col relative z-20 w-1/2 justify-center items-center">
                    <div className="relative w-full max-w-2xl">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-full blur-3xl opacity-60 scale-110"></div>

                        {/* Main database replication image */}
                        <div className="relative z-10 flex justify-center items-center p-8">
                            <Image
                                src="/main.png"
                                alt="Database Replication Cycle - Helyx"
                                width={410}
                                height={450}
                                className="w-full h-auto max-w-full object-contain"
                                priority
                            />
                        </div>

                        {/* Floating accent elements */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full animate-pulse"></div>

                        <div className="absolute -bottom-1 -left-8 w-20 h-20 bg-radial from-pink-400 from-40% to-fuchsia-700 rounded-full animate-pulse delay-1000 z-40"></div>

                        <div className="absolute top-1/3 -right-4 w-12 h-12 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% rounded-full animate-pulse delay-500"></div>

                        <div className="absolute bottom-2/3 -left-4 w-14 h-14 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% rounded-full animate-pulse delay-700 z-40"></div>
                    </div>
                </div>

                {/* Background Pattern */}
                <div
                    className="absolute -top-20 lg:top-10 w-screen h-screen z-0 opacity-30 overflow-hidden bg-left bg-no-repeat transition-opacity"
                    style={{
                        backgroundImage: "url('/looper-pattern.svg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/80 z-40"></div>
                </div>

                {/* Additional background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    )
}
