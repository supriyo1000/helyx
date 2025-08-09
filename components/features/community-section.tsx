import { Card, CardContent } from "@/components/ui/card"

export function CommunitySection() {
    const communities = [
        {
            name: "Linkdn",
            icon: (
                // <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                //     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                // </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            ),
            description: "For announcements, tips and general information.",
            color: "text-red-200",
        },
        {
            name: "Discord",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
                </svg>
            ),
            description: "To get involved in the community, ask questions and share tips.",
            color: "text-[#7289DA]",
        },
        {
            name: "Github",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
                </svg>
            ),
            description: "To report bugs, request features and contribute to the project.",
            color: "text-[#333] dark:text-[#E7E7E7]",
        },
    ]

    return (
        <section className="relative z-10 gap-2 w-full flex flex-col items-center mt-26 lg:mt-44">
            <div className="max-w-4xl flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 justify-center w-full items-center">
                        <div className="inline-flex items-center">
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Community</h1>
                        </div>
                    </div>
                    <p className="w-full my-2 text-medium lg:text-large font-normal text-default-500 max-w-full md:w-full text-center flex justify-center items-center">
                        Get involved in our community. Everyone is welcome!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                    {communities.map((community, index) => (
                        <Card
                            key={index}
                            className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] cursor-pointer hover:scale-[0.97] transition-transform shadow-md/30 hover:shadow-xl rounded-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-2 rounded-full bg-transparent ${community.color}`}>{community.icon}</div>
                                        <p className="text-base font-semibold">{community.name}</p>
                                    </div>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path
                                            d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M15 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="font-normal text-medium text-default-500">{community.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
