import { Button } from "../ui/button"

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`fixed z-40 w-full top-16 inset-x-0 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-lg ${isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ height: "calc(100vh - 4rem)" }}>
        <div className="h-full overflow-y-auto p-6 space-y-8">
            <nav className="space-y-4">
                {['Docs', 'Products', 'Blog', 'Roadmap', 'T&C'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white text-lg font-medium"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <Button className="w-full py-3 text-lg font-medium">
                    Sign up
                </Button>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    Existing customer?{' '}
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    </div>
)

export default MobileMenu