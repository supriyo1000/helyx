const ThemeToggle = () => (
    <label className="relative p-1 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
        <input type="checkbox" className="sr-only" />
        <div className="flex items-center justify-center w-full h-full">
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-gray-700 dark:text-gray-300"
            >
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" strokeWidth="1.5" />
                <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.778 4.223L17.556 6.254M4.222 4.223L6.444 6.254M6.444 17.556L4.222 19.778M19.778 19.777L17.556 17.555" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </div>
    </label>
)

export default ThemeToggle;