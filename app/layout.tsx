// app\layout.tsx
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReduxProvider } from "@/components/providers/redux-provider"
import { SessionMonitor } from "@/components/features/session-monitor"
import { Toaster } from "sonner"
import ContactProvider from "@/components/providers/ContactProvider"
import { GoogleAnalytics } from '@next/third-parties/google'
import { ClientProviders } from "@/components/ClientProviders"
import SeoJsonLd from "@/components/SeoJsonLd"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://helyx.quobotic.com/"),
  title: {
    default: "Helyx Replication",
    template: "%s | Helyx",
  },
  description:
    "Seamlessly replicate Oracle, PostgreSQL, MySQL, and MongoDB with zero downtime, auto schema evolution, and DevOps-first simplicity.",
  keywords: [
    "Helyx",
    "Helyx replication",
    "database replication",
    "oracle replication",
    "postgres replication",
    "oracle to postgres",
    "mysql replication",
    "mongodb replication",
  ],
  openGraph: {
    title: "Helyx Replication",
    description:
      "Seamlessly replicate Oracle, PostgreSQL, MySQL, and MongoDB with zero downtime, auto schema evolution, and DevOps-first simplicity.",
    url: "https://helyx.quobotic.com/",
    siteName: "Helyx",
    images: [
      {
        url: "https://helyx.quobotic.com/logo.jpeg", // absolute URL
        width: 1200,
        height: 630,
        alt: "Helyx Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helyx Replication",
    description:
      "Seamlessly replicate Oracle, PostgreSQL, MySQL, and MongoDB with zero downtime, auto schema evolution, and DevOps-first simplicity.",
    images: ["https://helyx.quobotic.com/logo.jpeg"],
  },
}


// Viewport export for themeColor and viewport
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* paste inside <head> in app/layout.tsx (remove any duplicate WebSite/Organization JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://helyx.quobotic.com/#organization",
                  "name": "Quobotic Consulting",
                  "alternateName": "Helyx",
                  "url": "https://quobotic.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://helyx.quobotic.com/logo.jpeg",
                    "width": 1200,
                    "height": 630
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/www.quobotic.com/",
                    /* add other official profiles here */
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "customer support",
                      "email": "support@quobotic.com",
                      "url": "https://helyx.quobotic.com/contact"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://helyx.quobotic.com/#website",
                  "url": "https://helyx.quobotic.com",
                  "name": "Helyx",
                  "publisher": { "@id": "https://helyx.quobotic.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://helyx.quobotic.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />

        {/* No whitespace between tags to avoid hydration error */}
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <SeoJsonLd />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <SessionMonitor />
          <ContactProvider>
            <ClientProviders>
              {children}
            </ClientProviders>
          </ContactProvider>
          <Toaster position="top-right" richColors />
          {/* <GoogleAnalyticsTracker/> */}
          <GoogleAnalytics gaId="G-WZJ7T2Z5QF" />
        </ReduxProvider>
      </body>
    </html>
  )
}
