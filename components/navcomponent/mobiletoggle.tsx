import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "./themetoggle";
import { RxCross2 } from "react-icons/rx";

const MobileToggle = ({ toggleMenu, isOpen }: { toggleMenu: () => void, isOpen: boolean }) => (
    <ul className="relative flex items-center gap-2 sm:hidden">
        <li className="flex items-center">
            <ThemeToggle />
        </li>
        <li>
            <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Menu"
                aria-expanded={isOpen}
            >
                {!isOpen ? (
                    <GiHamburgerMenu size={22} className="text-gray-700 dark:text-gray-300" />
                ) : (
                    <RxCross2 size={22} className="text-gray-700 dark:text-gray-300" />
                )}
            </button>
        </li>
    </ul>
)

export default MobileToggle;