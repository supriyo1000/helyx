// app/loading.tsx
"use client";

export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white/80 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="h-10 w-10 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin" />

                {/* Accessible loading text */}
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 animate-pulse">
                    Loading, please wait…
                </p>

                {/* Optional processing button look-alike */}
                {/* <button
                    type="button"
                    disabled
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-md opacity-80 cursor-not-allowed"
                >
                    <svg
                        className="h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                        />
                    </svg>
                    Processing…
                </button> */}
            </div>
        </div>
    );
}
