'use client';

import { Button } from "@/components/ui/button";
import useDemoContext from "@/hooks/useDemoContext";
import Image from "next/image";
import React from "react";

export function KeyFeaturesSection() {

    const { toggleDemo: toggler } = useDemoContext()

    const dbPairs: [string, string][] = [
        ["Oracle", "Oracle"],
        ["PostgreSQL", "PostgreSQL"],
        ["Oracle", "PostgreSQL"],
    ];

    const bullets = [
        "Auto-handles schema evolution and DDL without downtime",
        "CLI-first, container-native, and enterprise-ready (audit logs, monitoring, watchdog)",
        "Zero downtime migration guarantee",
        "Supports on-premise to any cloud migration",
    ];

    return (
        <section className="relative z-10 w-full mt-16 lg:mt-24 overflow-hidden">
            {/* Local keyframes for badge slide animation */}
            <style>{`
        @keyframes slideX {
          0% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          100% { transform: translateX(-4px); }
        }
        .badge-slide { animation: slideX 6s ease-in-out infinite; }
        .badge-slide-slow { animation: slideX 7.5s ease-in-out infinite; }
        .badge-slide-rev { animation: slideX 6.8s ease-in-out infinite reverse; }
      `}</style>

            <div className="lg:max-w-7xl mx-auto lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT COLUMN */}
                    <div>
                        <div className="flex flex-col gap-4">
                            {/* Headline */}
                            <div className="flex flex-col gap-2 mt-2">
                                <h1 className="tracking-tight font-semibold text-3xl lg:text-5xl">
                                    Solution for
                                </h1>
                                <h1 className="tracking-tight font-semibold text-3xl lg:text-5xl">
                                    Enterprise{" "}
                                    <span className="bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent">
                                        Database
                                    </span>
                                </h1>
                                <h1 className="tracking-tight font-semibold text-3xl lg:text-5xl">
                                    Replication
                                </h1>
                            </div>

                            {/* Value prop */}
                            <p className="w-full md:w-4/5 mt-4 text-sm lg:text-base font-medium text-foreground-700 leading-relaxed">
                                Helyx simplifies the hardest part of replication: schema evolution, data-type mismatches, and reliable delivery.
                                Using proven CDC patterns, robust error handling, and opinionated defaults, Helyx gets you from databases
                                to a synchronized state in minutes, not weeks.
                            </p>

                            {/* Feature bullets */}
                            <div className="mt-4 text-foreground-600 font-medium space-y-3">
                                {bullets.map((f, i) => (
                                    <div key={i} className="flex gap-x-3 items-start">
                                        <svg
                                            width="16"
                                            height="12"
                                            viewBox="0 0 13 11"
                                            fill="none"
                                            className="mt-1 flex-shrink-0"
                                        >
                                            <path
                                                d="M1 6.4L4.14286 10L12 1"
                                                stroke="#006FEE"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="text-sm lg:text-base">{f}</span>
                                    </div>
                                ))}
                            </div>

                            {/* --- MOBILE ONLY: Supports tag + DB mapping cards --- */}
                            <div className="mt-6 lg:hidden">
                                <div className="mb-3 inline-block">
                                    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full px-3 py-1 text-xs font-semibold">
                                        Supports
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
                                    {dbPairs.map(([from, to], idx) => (
                                        <div
                                            key={`mobile-mapping-${idx}`}
                                            className="p-4 border rounded-2xl bg-white shadow-sm"
                                            role="group"
                                            aria-label={`${from} to ${to} mapping`}
                                        >
                                            <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-2">
                                                {/* left label */}
                                                <div
                                                    className={`text-right whitespace-nowrap font-extrabold text-sm leading-none pr-2 ${from === "Oracle" ? "text-[#F15A29]" : "text-[#2C79D7]"
                                                        }`}
                                                >
                                                    {from}
                                                </div>

                                                {/* fixed center column for the arrow */}
                                                <div className="flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 flex-shrink-0"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <defs>
                                                            <linearGradient id={`mobileArrowGrad-${idx}`} x1="0" y1="0" x2="1" y2="1">
                                                                <stop offset="0%" stopColor="#5EA2EF" />
                                                                <stop offset="100%" stopColor="#0072F5" />
                                                            </linearGradient>
                                                        </defs>

                                                        {/* shaft */}
                                                        <path
                                                            d="M6 12h9"
                                                            stroke={`url(#mobileArrowGrad-${idx})`}
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        {/* head */}
                                                        <path
                                                            d="M14 7l5 5-5 5"
                                                            stroke={`url(#mobileArrowGrad-${idx})`}
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>

                                                {/* right label */}
                                                <div
                                                    className={`text-left whitespace-nowrap font-extrabold text-sm leading-none pl-2 ${to === "Oracle" ? "text-[#F15A29]" : "text-[#2C79D7]"
                                                        }`}
                                                >
                                                    {to}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                            {/* CTA */}
                            <div className="mt-8">
                                <Button asChild className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-md hover:shadow-lg transition cursor-pointer" onClick={() => toggler()}>
                                    <span className="flex items-center gap-2">
                                        Request a Demo
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            aria-hidden="true"
                                        >
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
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Image + Badges (LG+) */}
                    <div className="hidden lg:flex justify-end items-center">
                        <div className="relative w-full max-w-[560px] h-[420px] rounded-2xl" aria-hidden="true">
                            {/* subtle background */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white" />
                            {/* decorative blurred circle */}
                            <div className="absolute -right-8 top-6 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-30 blur-3xl" />

                            {/* main screenshot */}
                            <Image
                                src="/hero-main.png"
                                alt="Helyx UI preview"
                                className="absolute left-1/2 top-1/2 w-[66%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl object-cover"
                                loading="lazy"
                                width={760}
                                height={480}
                            />

                            {/* Badges */}
                            <div className="absolute left-6 top-6 w-40 rounded-lg bg-white border px-3 py-2 shadow-sm">
                                <div className="text-xs font-semibold text-slate-600">Replicates</div>
                                <div className="text-[12px] font-semibold text-[#F15A29]">
                                    Oracle → Oracle
                                </div>
                            </div>

                            <div className="absolute right-6 top-6 w-40 rounded-lg bg-white border px-3 py-2 shadow-sm badge-slide">
                                <div className="text-xs font-semibold text-slate-600">Replicates</div>
                                <div className="text-[12px] font-semibold text-[#2C79D7]">
                                    Postgres → Postgres
                                </div>
                            </div>

                            <div className="absolute right-6 bottom-6 w-44 rounded-lg bg-white border px-3 py-2 shadow-lg badge-slide-rev">
                                <div className="text-xs font-semibold text-slate-600">Replicates</div>
                                <div className="text-[12px] font-semibold">
                                    <span className="text-[#F15A29]">Oracle</span> →{" "}
                                    <span className="text-[#2C79D7]">Postgres</span>
                                </div>
                            </div>

                            <div className="absolute left-6 bottom-6 w-40 rounded-lg bg-white border px-3 py-2 shadow-md badge-slide-slow">
                                <div className="text-xs font-semibold text-slate-600">
                                    Performance Metrics
                                </div>
                                <div className="text-[12px] text-slate-700">
                                    Events/sec <span className="font-semibold">12.5k</span>
                                </div>
                                <div className="text-[12px] text-slate-700">
                                    Errors <span className="font-semibold">0</span>
                                </div>
                                <div className="text-[12px] text-slate-700">
                                    Last sync <span className="font-semibold">2s ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
