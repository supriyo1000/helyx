// components/VideoGrid.tsx
"use client"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

type Video = {
    id: string
    youtubeId: string
    title: string
    duration?: string
    category: string // e.g. "oracle-to-oracle", "pg-to-pg", "oracle-to-pg"
    tags?: string[]
    description?: string
}

const VIDEOS: Video[] = [
    // dummy videos (replace youtubeId with your real IDs)
    { id: "o2o-1", youtubeId: "dQw4w9WgXcQ", title: "Oracle → Oracle: Basic Replication", duration: "12:34", category: "oracle-to-oracle", tags: ["oracle", "replication"], description: "Quick demo for Oracle→Oracle replication." },
    { id: "pg2pg-1", youtubeId: "kXYiU_JCYtU", title: "Postgres → Postgres: Setup & Tuning", duration: "10:20", category: "pg-to-pg", tags: ["postgres", "replication"], description: "Streaming replication and tuning tips." },
    { id: "o2pg-1", youtubeId: "3JZ_D3ELwOQ", title: "Oracle → Postgres: Migration Tutorial", duration: "18:05", category: "oracle-to-pg", tags: ["oracle", "postgres", "migration"], description: "Migration overview and demo." },
]

function thumbnailUrl(id: string) {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

function prettyCategory(key: string) {
    switch (key) {
        case "oracle-to-oracle":
            return "Oracle → Oracle"
        case "pg-to-pg":
            return "Postgres → Postgres"
        case "oracle-to-pg":
            return "Oracle → Postgres"
        default:
            return key.replace(/-/g, " ")
    }
}

const CATEGORY_KEYS = ["all", "oracle-to-oracle", "pg-to-pg", "oracle-to-pg"] as const
type CategoryKey = typeof CATEGORY_KEYS[number]

// optional analytics stub
// function sendAnalytics(eventName: string, payload: Record<string, any>) {
//     if (typeof window !== "undefined" && (window).gtag) {
//         ; (window).gtag("event", eventName, payload)
//     }
// }

export default function VideoGrid() {
    const [category, setCategory] = useState<CategoryKey>("all")

    const filtered = useMemo(() => {
        if (category === "all") return VIDEOS
        return VIDEOS.filter((v) => v.category === category)
    }, [category])

    return (
        <section className="container mx-auto mt-12 lg:px-6 py-12">
            {/* Header */}
            <header className="mb-6">
                <div className="inline-flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium">Tutorials</span>
                    <span className="text-sm text-gray-600">Replication guides & walkthroughs</span>
                </div>
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        {/* gradient text on white background (text-only color) */}
                        <span className="bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] bg-clip-text text-transparent">
                            Learn replication —
                        </span>{" "}
                        <span className="text-[#7c3aed]">watch the walkthroughs</span>
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">Click a category below then choose a video to open on YouTube.</p>
                </div>

                {/* Category buttons directly under the sub-heading */}
                <div className="mt-4 flex flex-wrap gap-3">
                    {CATEGORY_KEYS.map((c) => {
                        const isActive = category === c
                        return (
                            <button
                                key={c}
                                onClick={() => setCategory(c)}
                                className={`px-3 py-1 rounded-full text-sm font-medium border transition focus:outline-none ${isActive
                                    ? "bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white border-transparent shadow"
                                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                                    }`}
                                aria-pressed={isActive}
                            >
                                {c === "all" ? "All" : prettyCategory(c)}
                            </button>
                        )
                    })}
                </div>
            </header>

            {/* Video grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((video) => (
                    <motion.article key={video.id} whileHover={{ y: -4 }} className="group">
                        <Card className="overflow-hidden">
                            <a
                                href={`https://youtu.be/${video.youtubeId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                // onClick={() => sendAnalytics("video_open_external", { videoId: video.youtubeId, title: video.title, category: video.category })}
                                className="block"
                                aria-label={`Watch ${video.title} on YouTube`}
                            >
                                <div className="relative w-full aspect-[16/9] bg-gray-100">
                                    <Image
                                        src={thumbnailUrl(video.youtubeId)}
                                        alt={video.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 
           (max-width: 1024px) 50vw, 
           (max-width: 1280px) 33vw, 
           25vw"
                                        priority={false}
                                    />

                                    {/* play overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="p-3 rounded-full bg-white/90 shadow-md">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {video.duration && (
                                        <div className="absolute right-2 bottom-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            {video.duration}
                                        </div>
                                    )}
                                </div>

                                <CardContent className="p-4">
                                    <h3 className="text-base font-semibold mb-1">{video.title}</h3>
                                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{video.description ?? ""}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                                            {video.tags?.slice(0, 3).map((t) => (
                                                <span
                                                    key={t}
                                                    className="inline-block px-2 py-1 rounded-full bg-gray-100 text-xs"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div>
                                            <Button size="sm" className="bg-gradient-to-b from-[#A80CA3] to-[#6F0BB3] text-white shadow-lg hover:from-indigo-400 hover:to-[#6F0BB3] cursor-pointer"
                                                // onClick={(e) => {
                                                // e.preventDefault()
                                                // sendAnalytics("video_open_external", { videoId: video.youtubeId })
                                                // window.open(`https://youtu.be/${video.youtubeId}`, "_blank", "noopener")
                                                // }}
                                            >
                                                Watch on YouTube
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </a>
                        </Card>
                    </motion.article>
                ))}
            </div>

            {filtered.length === 0 && <p className="mt-8 text-center text-gray-500">No videos in this category yet.</p>}
        </section>
    )
}
