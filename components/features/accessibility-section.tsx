import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AccessibilitySection() {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35Z" />
                </svg>
            ),
            title: "Keyboard navigation",
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.9997 11.4994C20.9997 11.9294 20.9697 12.3594 20.9197 12.7794C20.8797 13.0794 20.5697 13.2594 20.2797 13.1694L15.4297 11.6594C14.3497 11.3294 13.1997 11.6094 12.3997 12.3994C11.5997 13.1994 11.3097 14.3694 11.6497 15.4494L13.1497 20.2794C13.2397 20.5694 13.0497 20.8794 12.7497 20.9194C12.3297 20.9694 11.9197 20.9994 11.4997 20.9994C6.15969 20.9994 1.85969 16.6094 1.99969 11.2294C2.13969 6.26942 6.26969 2.13942 11.2297 1.99942C16.6097 1.85942 20.9997 6.15942 20.9997 11.4994Z" />
                </svg>
            ),
            title: "Managed focus",
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z" />
                </svg>
            ),
            title: "Collision aware",
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" />
                </svg>
            ),
            title: "Alignment control",
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969Z" />
                </svg>
            ),
            title: "Screen reader support",
        },
        {
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z" />
                    <path d="M18 2H6C3.79 2 2 3.79 2 6V15C2 17.21 3.79 19 6 19H18C20.21 19 22 17.21 22 15V6C22 3.79 20.21 2 18 2Z" />
                </svg>
            ),
            title: "Typehead support",
        },
    ]

    return (
        <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Accessibility</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#6FEE8D] to-[#17c964] text-4xl lg:text-6xl bg-clip-text text-transparent">
                                out of the&nbsp;
                            </h1>
                            <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">box.</h1>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
                        HeroUI components are built on top of&nbsp;
                        <a
                            href="https://react-spectrum.adobe.com/react-aria/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:opacity-70"
                        >
                            React Aria
                        </a>
                        &nbsp;ensuring exceptional accessibility support as a top priority.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col mt-8 lg:mt-16 gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="border-transparent backdrop-blur-lg backdrop-saturate-[1.8] bg-white dark:bg-default-400/10"
                                >
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-full bg-default-100 dark:bg-transparent text-default-500/50">
                                                {feature.icon}
                                            </div>
                                            <p className="text-base font-semibold">{feature.title}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button variant="outline" size="sm" className="max-w-fit bg-success/20 text-success">
                            Learn more
                        </Button>
                    </div>

                    <div className="flex relative w-full bg-gradient-to-r from-[#4ADE80] to-[#06B6D4] rounded-2xl h-full min-h-[200px] lg:min-h-[390px] items-center justify-center">
                        <Button variant="outline" className="bg-success-50 text-success-700">
                            Actions
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute hidden dark:md:block h-full -bottom-10 left-1/4 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            </div>
        </section>
    )
}
