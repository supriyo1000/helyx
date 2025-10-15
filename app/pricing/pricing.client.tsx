// app/pricing/pricing.client.tsx  (client component)
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/features/footer";
import NavigationLatest from "@/components/features/navigationlatest";

type Plan = {
    id: string;
    title: string;
    annualPrice?: number | null;
    priceLabel?: string;
    period?: string;
    highlights: string[];
    cta: string;
    featured?: boolean;
    dark?: boolean;
};

const plans: Plan[] = [
    {
        id: "free",
        title: "Free",
        annualPrice: 0,
        period: "30-day evaluation",
        highlights: [
            "Full feature access (heterogeneous, CDC, schema evolution).",
            "Replication up to 10 Tables.",
            "Risk-free: no credit card required.",
            "Quick CLI setup in minutes.",
            "Community docs & forum support.",
            "Seamless upgrade to paid plans.",
        ],
        cta: "Get started for free",
        featured: false,
        dark: false,
    },
    {
        id: "starter",
        title: "Starter",
        annualPrice: 4999,
        period: "Per year (billed annually)",
        highlights: [
            "Single source → target replication.",
            "Replication up to 50 Tables.",
            "Real-time low-latency CDC.",
            "Basic schema evolution support.",
            "CLI-based monitoring & logs.",
            "Email support (business hours).",
        ],
        cta: "Get started with Starter",
        featured: false,
        dark: false,
    },
    {
        id: "pro",
        title: "Professional",
        annualPrice: 16999,
        period: "Per year (billed annually)",
        highlights: [
            "Multi-database replication pipelines.",
            "Replication up to 200 Tables.",
            "Advanced schema evolution automation.",
            "High availability & auto-restart.",
            "Replication lag & alert monitoring.",
            "Priority 24×7 support.",
        ],
        cta: "Get started with Pro",
        featured: true,
        dark: false,
    },
    {
        id: "enterprise",
        title: "Enterprise",
        annualPrice: null,
        priceLabel: "Custom",
        period: "Annual enterprise contract",
        highlights: [
            "24×7 premium SLA-backed support.",
            "Replication for Unlimited Tables.",
            "Multi-region & hybrid cloud DR.",
            "Custom onboarding & training.",
            "Security & compliance features.",
            "Tailored integrations & workflows.",
        ],
        cta: "Contact sales",
        featured: false,
        dark: true,
    },
];

function formatUSD(n?: number | null) {
    if (n == null) return "";
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(n);
}

// Round up to nearest 100
function roundToHundred(n: number) {
    return Math.ceil(n / 100) * 100;
}

export default function PricingClient() {
    const [isAnnual, setIsAnnual] = React.useState(true);
    const showMonthly = !isAnnual;

    const handleToggle = (mode: "monthly" | "annual") => {
        setIsAnnual(mode === "annual");
    };

    return (
        <div className="scroll-smooth min-h-screen bg-white">
            {/* Banner */}
            <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-white border-b border-gray-200 px-6 py-2.5 sm:px-3.5">
                <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
                    <a
                        className="text-sm flex items-center sm:text-[0.93rem] text-gray-900 hover:opacity-80 transition-opacity"
                        href="https://heroui.chat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="mr-1" role="img" aria-label="rocket">
                            🚀
                        </span>
                        <span className="font-medium">
                            One Engine. Many Databases. Real-Time-Replication.
                        </span>
                    </a>
                </div>
            </div>

            <NavigationLatest />

            <main className="w-full max-w-6xl mx-auto py-16">
                <section className="text-center mb-12">
                    <h2 className="bg-linear-to-r from-pink-500 to-violet-700 bg-clip-text font-extrabold text-transparent text-4xl tracking-tight">Plans and Pricing</h2>

                    <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                        Toggle between monthly or annual billing. Annual plans save you money
                        compared to paying month-to-month.
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-6 inline-flex rounded-lg border bg-gray-100 overflow-hidden">
                        <button
                            aria-pressed={showMonthly}
                            onClick={() => handleToggle("monthly")}
                            className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${showMonthly ? "bg-background shadow-sm/20" : "hover:bg-background/50"}`}
                        >
                            Monthly
                        </button>
                        <button
                            aria-pressed={isAnnual}
                            onClick={() => handleToggle("annual")}
                            className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${isAnnual ? "bg-background shadow-sm/20" : "hover:bg-background/50"}`}
                        >
                            Annual
                        </button>
                    </div>

                    <h4 className="font-bold mt-6 mb-4 px-4 lg:px-8"><span className="text-violet-800">Pricing</span> for <span className="text-sky-800">PostgreSQL</span> to <span className="text-sky-800">PostgreSQL</span> Replication <span className="text-lime-800">(from PostgreSQL 11+ versions)</span></h4>
                </section>

                <section className="grid gap-6 grid-cols-1 md:grid-cols-4 items-stretch">
                    {plans.map((plan) => {
                        const isCustom = plan.annualPrice == null;
                        const annual = plan.annualPrice ?? 0;
                        const monthly = isCustom || annual === 0 ? 0 : roundToHundred(annual / 12);

                        const displayPrice = isCustom
                            ? plan.priceLabel ?? "Custom"
                            : showMonthly
                                ? `$${monthly}`
                                : formatUSD(annual);

                        const displayPeriod = isCustom
                            ? plan.period ?? ""
                            : showMonthly
                                ? "Per month (billed monthly)"
                                : "Per year (billed annually)";

                        const annualSaving = !isCustom && monthly ? monthly * 12 - annual : 0;

                        return (
                            <Card
                                key={plan.id}
                                className={`relative flex flex-col h-full rounded-2xl border transition-transform hover:scale-105 ${plan.dark ? "bg-neutral-900 text-white" : "bg-white shadow-md/20"}`}
                            >
                                <CardHeader className="px-6 pt-6">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg font-semibold">{plan.title}</CardTitle>
                                        {plan.featured && (
                                            <span className="text-xs font-bold text-white bg-orange-500 px-2 py-1 rounded-full">Popular</span>
                                        )}
                                        {plan.id === "free" && (
                                            <span className="text-xs font-bold text-white bg-orange-500 px-2 py-1 rounded-full">30-day free trial</span>
                                        )}
                                    </div>

                                    <div className="mt-4 flex items-baseline gap-x-2">
                                        <span className="text-3xl sm:text-4xl font-extrabold">{displayPrice}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{displayPeriod}</p>

                                    {!showMonthly && annualSaving > 0 && (
                                        <p className="text-xs text-green-600 font-semibold mt-2">Annual Saving: {formatUSD(annualSaving)}</p>
                                    )}
                                </CardHeader>

                                <CardContent className="px-6 py-4 flex flex-col flex-1 justify-between">
                                    <ul className="space-y-3 mb-6">
                                        {plan.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className={`shrink-0 mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.dark ? "bg-slate-700 text-white" : "bg-white/20 text-primary"}`}>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden>
                                                        <path d="M1 6.4L4.14286 10L12 1" stroke={plan.dark ? "#fff" : "#006FEE"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                <span className="text-sm leading-tight">{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <Button className="w-full bg-gradient-to-r from-sky-500 to-indigo-700 text-white hover:from-indigo-700 hover:to-sky-500 hover:scale-105 transition cursor-pointer">
                                            {plan.cta}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </section>
            </main>

            <Footer />
        </div>
    );
}
