// import Link from "next/link";

export function Footer() {
    return (
        <footer className="container mx-auto max-w-7xl pb-12 px-12 mt-16">
            <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-sm text-default-400">© {new Date().getFullYear()} Quobotic Consulting (p) Ltd . All rights reserved.</p>
                {/* <Link href="/sitemap" className="text-sm text-muted-foreground">Sitemap</Link> */}
            </div>
        </footer>
    )
}
