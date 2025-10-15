import Link from "next/link"

// app/sitemap/page.tsx
export const metadata = {
    title: "Sitemap — Helyx",
    description: "HTML sitemap of Helyx pages for quick navigation."
}

export default function HtmlSitemap() {
    return (
        <main className="prose mx-auto py-12">
            <h1>Sitemap</h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/documentation">Documentation</Link></li>
                <li><Link href="/downloads">Downloads</Link></li>
                <li><Link href="/terms_and_condition">Terms & Conditions</Link></li>
            </ul>
        </main>
    )
}
