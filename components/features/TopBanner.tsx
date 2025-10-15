// D: \Helyx_website\helyx2\components\features\TopBanner.tsx
"use client"

import { useEffect, useRef } from "react"

export default function TopBanner() {
    const bannerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = bannerRef.current
        if (!el) return

        const setVar = () => {
            document.documentElement.style.setProperty("--banner-h", `${el.offsetHeight}px`)
        }

        setVar()
        window.addEventListener("resize", setVar)
        return () => window.removeEventListener("resize", setVar)
    }, [])

    return (
        <div
            ref={bannerRef}
            className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-white border-b border-gray-200 px-6 py-2.5 sm:px-3.5"
        >
            <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
                <span className="mr-1" role="img" aria-label="rocket">🚀</span>
                <span className="font-medium">One Engine. Many Databases. Real-Time-Replication.</span>
            </div>
        </div>
    )
}
