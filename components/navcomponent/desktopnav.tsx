import { Button } from "../ui/button"
import Navlink from "./navlink"
import ThemeToggle from "./themetoggle"

const DesktopNav = () => (
    <ul className="gap-4 h-full flex-row flex-nowrap items-center hidden sm:flex basis-1/5 sm:basis-full">
        {/* Main nav links */}
        <ul className="hidden lg:flex gap-4 pr-2 justify-start items-center">
            <Navlink href="/documents" name="Docs" />
            <Navlink href="/documents" name="Products" />
            <Navlink href="/documents" name="Blog" />
            <Navlink href="/documents" name="Roadmap" />
            <Navlink href="/documents" name="T&C" />
        </ul>

        <div
            className="shrink-0 bg-divider border-none w-divider h-7 hidden lg:flex"
            role="separator"
            aria-orientation="vertical"
        />

        <li className="flex items-center gap-2">
            <ThemeToggle />
            <Button
                variant="ghost"
                size="lg"
                className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors h-10 px-4 border border-gray-200 dark:border-gray-700 rounded-full"
            >
                Login
            </Button>
        </li>
    </ul>
)

export default DesktopNav