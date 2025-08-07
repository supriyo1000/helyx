// import { Button } from "@/components/ui/button"

export function SponsorsSection() {
    return (
        <section className="relative z-10 flex flex-col gap-2 w-full text-center mt-24 lg:mt-32">
            <h3 className="text-large text-default-500">Supported and backed by</h3>
            <div className="w-full flex flex-wrap gap-x-5 gap-y-3 justify-center items-center">
                <a
                    href="https://story.to.design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center hover:opacity-70 transition-opacity"
                >
                    <div className="text-2xl font-bold bg-linear-to-r from-pink-600 to-violet-700 bg-clip-text font-extrabold text-transparent">
                        Quobotic Consulting
                    </div>
                </a>

                <a
                    href="https://coderabbit.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center hover:opacity-70 transition-opacity"
                >
                    <div className="text-2xl font-bold text-red-800">Cookme Spices</div>
                </a>

                {/* <Button variant="outline" size="sm" className="border-dashed bg-transparent hover:bg-default-100/50" asChild>
                    <a href="https://patreon.com/jrgarciadev" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 mr-2 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z" />
                        </svg>
                        Your Company
                    </a>
                </Button> */}
            </div>
        </section>
    )
}
