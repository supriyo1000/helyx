import Image from "next/image"
import Link from "next/link"

const Logo = () => (
    <Link href="/" className="flex items-center gap-2 group">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
                src="/logo.jpeg"
                alt="Helyx"
                fill
                className="rounded-full object-cover"
            />
        </div>
        <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-semibold text-gray-900 dark:text-white group-hover:opacity-80 transition-opacity">
            Helyx v1.1.0 🔥
        </span>
    </Link>
)

export default Logo