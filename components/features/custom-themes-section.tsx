"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CustomThemesSection() {
    const [activeTheme, setActiveTheme] = useState("heroui")

    const themes = [
        { id: "heroui", name: "HeroUI", colors: { primary: "#0072f5" } },
        { id: "modern", name: "Modern", colors: { primary: "#7828c8" } },
        { id: "elegant", name: "Elegant", colors: { primary: "#FFFFFF" } },
        { id: "retro", name: "Retro", colors: { primary: "#FFD34E" } },
    ]

    return (
        <section className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Apply your own</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent">
                                theming&nbsp;
                            </h1>
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">decisions.</h1>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
                        HeroUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your
                        own.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-8">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => setActiveTheme(theme.id)}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${activeTheme === theme.id ? "text-foreground" : "text-default-400"
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-full border border-default-200 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                    </div>
                                    <span className="text-base font-medium">{theme.name}</span>
                                </button>
                            ))}
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
                                        <img
                                            src="/placeholder.svg?height=200&width=200&text=Product+Image"
                                            alt="Product"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center flex-1">
                                        <h3 className="text-xl font-semibold">Nike Adapt BB 2.0</h3>
                                        <p className="text-default-500 my-2">Consistent, customized fit, game-changing.</p>

                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-lg font-semibold">$279.97</span>
                                            <span className="text-default-400 line-through">$350</span>
                                            <span className="text-success font-medium">20% off</span>
                                        </div>

                                        <div className="flex gap-2 mb-4">
                                            {["XS", "S", "M", "L", "XL"].map((size, index) => (
                                                <button
                                                    key={size}
                                                    className={`w-8 h-8 rounded-full text-sm border ${index === 0
                                                            ? "bg-primary text-primary-foreground border-primary"
                                                            : "border-default-300 hover:border-default-400"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1">Buy now</Button>
                                            <Button variant="outline" className="flex-1 bg-transparent">
                                                Add to bag
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Button variant="outline" size="sm" className="max-w-fit bg-primary/20 text-primary">
                            Learn more
                        </Button>
                    </div>

                    <div className="relative">
                        <pre className="bg-zinc-900 text-white p-4 rounded-xl text-sm overflow-auto min-h-[400px]">
                            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-400 text-xs">tailwind.config.js</span>
                            </div>
                            <code>{`const { heroui } = require("@heroui/react");

module.exports = {
  // ...
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "${themes.find((t) => t.id === activeTheme)?.colors.primary}",
          }
        },
        dark: {
          colors: {
            primary: "${themes.find((t) => t.id === activeTheme)?.colors.primary}",
          }
        },
      },
    }),
  ],
};`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="absolute hidden dark:md:block h-full -bottom-10 -left-32 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            </div>
        </section>
    )
}
