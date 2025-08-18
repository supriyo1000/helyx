// import { Card, CardContent } from "@/components/ui/card"

// export function FeaturesGrid() {
//     const features = [
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
//             title: "Themeable",
//             description:
//                 "Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.",
//             color: "text-purple-600",
//             bgColor: "bg-purple-50",
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
//             title: "Fast",
//             description:
//                 "Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.",
//             color: "text-blue-600",
//             bgColor: "bg-blue-50",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z" />
//                 </svg>
//             ),
//             title: "Light & Dark UI",
//             description:
//                 "Automatic dark mode recognition, HeroUI automatically changes the theme when detects HTML theme prop changes.",
//             color: "text-gray-600",
//             bgColor: "bg-gray-50",
//         },
//         {
//             icon: (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path
//                         d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path
//                         d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                     <path d="M17.244 18.25h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
//                 </svg>
//             ),
//             title: "Unique DX",
//             description:
//                 "HeroUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.",
//             color: "text-pink-600",
//             bgColor: "bg-pink-50",
//         },
//     ]

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//                 <Card key={index} className="border border-gray-350 shadow-xl bg-white hover:shadow-xl/30 transition-shadow duration-200 cursor-default">
//                     <CardContent className="p-6">
//                         <div className="flex items-center gap-3 mb-4">
//                             <div className={`p-2 rounded-lg ${feature.bgColor} ${feature.color}`}>{feature.icon}</div>
//                             <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
//                         </div>
//                         <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     )
// }



'use client';

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IconType } from 'react-icons';
// import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';

type Feature = {
    title: string;
    description: string;
    icon: React.ReactElement<IconType>;
    color?: string;
    bgColor?: string;
};

const features: Feature[] = [
    {
        title: 'Real-Time',
        description: 'Delivers continuous, low-latency change data capture (CDC) from source to target — no batch delays.',
        icon: <span>♿</span>,
        color: 'text-blue-700',
        bgColor: 'bg-blue-100',
    },
    {
        title: 'Schema-Aware',
        description: 'Automatically adapts to schema changes (DDL) without breaking replication or requiring manual intervention',
        icon: <span>⚡</span>,
        color: 'text-yellow-700',
        bgColor: 'bg-yellow-100',
    },
    {
        title: 'Cross-Platform',
        description: 'Supports replication across heterogeneous databases like Oracle, PostgreSQL, MySQL, and MongoDB.',
        icon: <span>🧩</span>,
        color: 'text-purple-700',
        bgColor: 'bg-purple-100',
    },
    {
        title: 'Lightweight',
        description: 'Runs as a single JAR — no agents, no bloat. Deploys in minutes on any server or container.',
        icon: <span>🎨</span>,
        color: 'text-pink-700',
        bgColor: 'bg-pink-100',
    },
    {
        title: 'CLI-First',
        description: 'Designed for developers and DevOps teams. No GUI dependency. Full control through terminal.',
        icon: <span>🌍</span>,
        color: 'text-green-700',
        bgColor: 'bg-green-100',
    },
    {
        title: 'Self-Restart',
        description: 'Automatically detects and recovers from replication drift, lag, or disconnections — with minimal downtime.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z" /></svg>,
        color: 'text-white',
        bgColor: 'bg-linear-to-t from-sky-500 to-indigo-500',
    },
    {
        title: 'Observable',
        description: 'Built-in monitoring via CLI or dashboard. Track lag, throughput, schema drift, and more in real-time.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M2 14h-2v-5h2v5zm3 0h-2v-9h2v9zm3 0h-2v-7h2v7zm3 0h-2v-3h2v3zm13 3.586l-2.831-2.832c.522-.79.831-1.735.831-2.754 0-2.761-2.238-5-5-5s-5 2.239-5 5 2.238 5 5 5c1.019 0 1.964-.309 2.755-.832l2.831 2.832 1.414-1.414zm-10-5.586c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" /></svg>,
        color: 'text-white',
        bgColor: 'bg-linear-to-t from-purple-500 to-pink-500',
    },
    {
        title: 'Air-Gapped',
        description: 'Deployable in high-security, offline, or government environments without external dependencies.',
        icon: <span>➕</span>,
        color: 'text-white',
        bgColor: 'bg-linear-to-t from-violet-500 to-fuchsia-500',
    },
];

export function FeaturesGrid() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = React.useState(false);

    useEffect(() => {
        if (isHovering || !scrollRef.current) return;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollAmount = 1; // px per tick
        let direction = 1;

        const interval = setInterval(() => {
            if (!scrollContainer) return;

            scrollContainer.scrollLeft += scrollAmount * direction;

            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

            // When reaching end, scroll back
            if (scrollLeft + clientWidth >= scrollWidth) {
                direction = -1;
            } else if (scrollLeft <= 0) {
                direction = 1;
            }
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <div className="overflow-x-hidden mb-10" ref={scrollRef}>

            {/* Arrows */}
            {/* <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black shadow-md p-2 rounded-full hover:bg-gray-100"
                // onClick={() => scrollBy(-300)}
            >
                abcd
                <FaCaretLeft />
            </button>

            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
                // onClick={() => scrollBy(300)}
            >
                <FaCaretRight />
            </button> */}

            <div className="flex gap-4 h-full lg:gap-6 px-2 py-5 lg:px-4 lg:py-6 w-max">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="min-w-[280px] max-w-xs flex-shrink-0 border border-gray-350 shadow-lg lg:shadow-xl bg-white hover:shadow-xl/30 transition-shadow duration-200 cursor-default"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <CardContent className="px-3 lg:p-6">
                            <div className="flex items-center gap-3 mb-2 lg:mb-4">
                                <div className={`p-2 rounded-lg ${feature.bgColor} ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
