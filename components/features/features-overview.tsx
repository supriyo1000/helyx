// import { Card, CardContent } from "@/components/ui/card"

// export function FeaturesOverview() {
//     const features = [
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             ),
//             title: "Real-time CDC replication",
//             description:
//                 'Low-latency, transactional delivery using proven CDC pipelines.',
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path
//                         d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             ),
//             title: "Schema evolution automation",
//             description:
//                 "Detects column additions, type changes, and creates safe DDL on the destination with preview and rollback support.",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path
//                         d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             ),
//             title: "Heterogeneous mapping",
//             description: "Built-in type mappings and SMTs for Oracle→Postgres conversions (DATE, NUMBER, CLOB, LOB handling).",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M17.6799 10.82V6.73999" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             ),
//             title: "CLI-first experience",
//             description: "One-binary JAR or container that runs from the CLI; perfect for automation and scripts.",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M10 13L8 15L10 17" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M14 13L16 15L14 17" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             ),
//             title: "Enterprise reliability",
//             description:
//                 "Watchdog auto-restart, retry policies, idempotent delivery, and end-to-end acknowledgements.",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path
//                         d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path d="M16.2 6.8H7.8l.4 4.4h7.6l-.6 5-3.4 1-3.6-1v-2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//             ),
//             title: "Observability",
//             description: " Metrics (Prometheus), logs (structured JSON), and an optional lightweight web UI for replication topology.",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             ),
//             title: "Lightweight packaging",
//             description:
//                 "RPM/DEB images, Docker container, Helm chart for Kubernetes.",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path
//                         d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             ),
//             title: "Secure by default",
//             description:
//                 "HeroUI components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well.",
//         },
//     ]

//     return (
//         <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
//             <div className="flex flex-col gap-0 md:gap-8">
//                 <div>
//                     <div className="flex flex-col gap-2 justify-center w-full items-center">
//                         {/* <div>
//                             <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent">
//                                 Helyx
//                             </h1>
//                         </div> */}
//                         <div>
//                             <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Key&nbsp;</h1>
//                             <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent">
//                                 Features.
//                             </h1>
//                         </div>
//                     </div>
//                     <p className="w-full my-2 text-medium lg:text-large font-normal text-default-500 max-w-full mt-4 md:w-full text-center flex justify-center items-center">
//                         A fully-featured React UI library.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {features.map((feature, index) => (
//                         <Card
//                             key={index}
//                             className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
//                         >
//                             <CardContent className="p-6">
//                                 <div className="flex items-center gap-2 mb-4">
//                                     <div className="p-2 rounded-full bg-pink-100 text-pink-500">{feature.icon}</div>
//                                     <h3 className="text-base font-semibold">{feature.title}</h3>
//                                 </div>
//                                 <p className="font-normal text-medium text-default-500">{feature.description}</p>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }



import { Card, CardContent } from "@/components/ui/card";
import React from "react";

/**
 * FeaturesOverview — updated to match Helyx look-and-feel (modern, clean, white-friendly)
 */

export function FeaturesOverview() {
    const features = [
        {
            title: "Real-time CDC replication",
            description: "Continuous, low-latency change data capture using battle-tested pipelines.",
            // subtle gradient ring + icon color
            accent: "from-[#5EA2EF] to-[#0072F5]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Schema evolution automation",
            description: "Detects column additions/type changes and creates safe destination DDL with preview + rollback.",
            accent: "from-[#8EE3E7] to-[#5ECDE6]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 10a2.33 2.33 0 1 0 0-4.66" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Heterogeneous mapping",
            description: "Type mappings & SMTs for Oracle → Postgres conversions (DATE, NUMBER, LOBs).",
            accent: "from-[#FFD7A6] to-[#FFB277]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "CLI-first experience",
            description: "Single-binary JAR or container — automatable, scriptable, and CI/CD-friendly.",
            accent: "from-[#CDEBFF] to-[#8EE1FF]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7 4.45L17.68 6.75L21.62 4.46" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Enterprise reliability",
            description: "Watchdog auto-restart, retry policies, idempotent delivery, and ack-based guarantees.",
            accent: "from-[#E8D7FF] to-[#D3B6FF]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 13L8 15L10 17" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 13L16 15L14 17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Observability",
            description: "Prometheus metrics, structured JSON logs, and optional lightweight topology UI.",
            accent: "from-[#D9F7EC] to-[#9FE6C8]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Lightweight packaging",
            description: "RPM/DEB, Docker images, and Helm charts for fast deployability.",
            accent: "from-[#FFE6EA] to-[#FFD1D9]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: "Secure by default",
            description: "Secure defaults, TLS, role-based config, and minimal attack surface.",
            accent: "from-[#F0F4F8] to-[#E6EEF8]",
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    return (
        <section className="relative z-10 w-full bg-white py-12">
            <div className="max-w-7xl mx-auto lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Key features</h2>
                    <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
                        Everything you need for reliable, enterprise-grade, cross-database replication.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <Card
                            key={i}
                            className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                        >
                            <CardContent className="p-5">
                                <div className="flex gap-4">
                                    {/* icon container with subtle gradient ring */}
                                    <div
                                        className={`flex items-center justify-center rounded-lg w-11 h-11 ring-1 ring-slate-100`}
                                        aria-hidden="true"
                                        style={{
                                            background: `linear-gradient(180deg, rgba(206, 97, 212, 0.41), rgba(255,255,255,0.6))`,
                                        }}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center`} style={{ background: `linear-gradient(90deg, ${f.accent.split(" to-")[0].replace("from-", "") || "#E6F5FF"}, ${f.accent.split(" to-")[1] || "#DFF4FF"})` }}>
                                            {/* place icon in center, color it dark for contrast */}
                                            <div className="text-slate-900">{f.icon}</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600">{f.description}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
