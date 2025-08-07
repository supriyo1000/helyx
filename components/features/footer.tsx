export function Footer() {
    return (
        <footer className="container mx-auto max-w-7xl pb-12 px-12">
            <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-sm text-default-400">© {new Date().getFullYear()} Quobotic Consulting (p) Ltd . All rights reserved.</p>
            </div>
        </footer>
    )
}
