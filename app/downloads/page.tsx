// // app\downloads\page.tsx
// "use client"

// import { useState } from "react"
// import { useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import type { RootState } from "@/lib/store"
// import { Button } from "@/components/ui/button"
// import { toast } from "sonner"
// import { Footer } from "@/components/features/footer"
// import NavigationLatest from "@/components/features/navigationlatest"
// import TopBanner from "@/components/features/TopBanner"

// // export const metadata = {
// //     title: "Downloads — Helyx",
// //     description: "Download Helyx Resources: Free trial, Starter, Professional and Enterprise.",
// //     alternates: {
// //         canonical: "https://helyx.quobotic.com/downloads"
// //     }
// // };

// const DOWNLOADS: { id: string; label: string; path: string; filename: string; notes?: string }[] = [
//     { id: "ubuntu-22.04-x64", label: "Ubuntu 22.04 (x86_64)", path: "/downloads/helyx-ubuntu-22.04-x64.tar.gz", filename: "helyx-ubuntu-22.04-x64.tar.gz", notes: "systemd service included" },
//     { id: "ubuntu-24.04-x64", label: "Ubuntu 24.04 (x86_64)", path: "/downloads/helyx-ubuntu-24.04-x64.tar.gz", filename: "helyx-ubuntu-24.04-x64.tar.gz" },
//     { id: "centos-8-x64", label: "RHEL/CentOS 8 (x86_64)", path: "/downloads/helyx-centos8-x64.tar.gz", filename: "helyx-centos8-x64.tar.gz" },
//     { id: "alpine-x64", label: "Alpine (musl) (x86_64)", path: "/downloads/helyx-alpine-x64.tar.gz", filename: "helyx-alpine-x64.tar.gz" },
// ]

// export default function DownloadsPage() {
//     const router = useRouter()
//     const { isAuthenticated, token } = useSelector((state: RootState) => state.auth)
//     const [loadingId, setLoadingId] = useState<string | null>(null)

//     // NOTE: intentionally do NOT redirect unauthenticated users here — they should be able to view the list.

//     const handleDownload = async (path: string, filename: string, id: string) => {
//         try {
//             if (!isAuthenticated || !token) {
//                 toast('Please login to download')
//                 // redirect to login preserving returnUrl so they come back to this downloads page
//                 router.push(`/auth/login?returnUrl=${encodeURIComponent(path)}`)
//                 return
//             }

//             setLoadingId(id)
//             const res = await fetch(path, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             })

//             if (!res.ok) throw new Error('Fetch failed')

//             const blob = await res.blob()
//             const url = window.URL.createObjectURL(blob)
//             const a = document.createElement('a')
//             a.href = url
//             a.download = filename
//             document.body.appendChild(a)
//             a.click()
//             document.body.removeChild(a)
//             window.URL.revokeObjectURL(url)
//             toast.success('Download started')
//         } catch (e : unknown) {
//             console.error('Download error', e)
//             toast.error('Failed to download file. Please contact support or try again.')
//             // if 401, route to login
//             const err = e as { status?: number };
//             if (err?.status === 401) {
//                 router.push(`/auth/login?returnUrl=${encodeURIComponent(path)}`)
//             }
//         } finally {
//             setLoadingId(null)
//         }
//     }

//     return (
//         <>
//             <div className="container mx-auto">
//                 <TopBanner />
//                 <NavigationLatest />
//                 <h1 className="text-2xl lg:text-4xl font-bold mt-6 mb-4 px-4 lg:px-8">Downloads</h1>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 px-4 lg:px-8">Select your target Linux flavor to download the matching build. You can view the available builds without logging in. To start a download, you must be a registered user.</p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-8">
//                     {DOWNLOADS.map((d) => (
//                         <div key={d.id} className="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
//                             <div className="flex items-start justify-between">
//                                 <div>
//                                     <h3 className="font-medium text-lg">{d.label}</h3>
//                                     {d.notes && <p className="text-sm text-gray-500 mt-1">{d.notes}</p>}
//                                 </div>
//                                 <div className="ml-4">
//                                     <Button
//                                         size="sm"
//                                         onClick={() => handleDownload(d.path, d.filename, d.id)}
//                                         className="bg-linear-to-t from-sky-500 to-indigo-800 text-white shadow-lg hover:from-sky-500 hover:to-indigo-500 cursor-pointer"
//                                         disabled={loadingId === d.id}
//                                         title={isAuthenticated ? undefined : 'Login required to download'}
//                                     >
//                                         {loadingId === d.id ? 'Preparing…' : isAuthenticated ? 'Download' : 'Login to download'}
//                                     </Button>
//                                 </div>
//                             </div>
//                             <div className="mt-3 text-xs text-gray-500">Filename: {d.filename}</div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-8 text-sm text-gray-500">
//                     <p>If you need a different build (ARM, custom), contact us via the Contact button.</p>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }


import React from 'react'
import DownloadsClient from './downloads.client'

export const metadata = {
    title: "Downloads — Helyx",
    description: "Download Helyx Resources: Free trial, Starter, Professional and Enterprise.",
    alternates: {
        canonical: "https://helyx.quobotic.com/downloads"
    }
};

const DownloadsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://helyx.quobotic.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Downloads",
                "item": "https://helyx.quobotic.com/downloads"
              }
            ]
          })
        }}
      />
      <DownloadsClient />
    </>
  )
}

export default DownloadsPage
