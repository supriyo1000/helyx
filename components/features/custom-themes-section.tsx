// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// export function CustomThemesSection() {
//     const [activeTheme, setActiveTheme] = useState("heroui")

//     const themes = [
//         { id: "heroui", name: "HeroUI", colors: { primary: "#0072f5" } },
//         { id: "modern", name: "Modern", colors: { primary: "#7828c8" } },
//         { id: "elegant", name: "Elegant", colors: { primary: "#FFFFFF" } },
//         { id: "retro", name: "Retro", colors: { primary: "#FFD34E" } },
//     ]

//     return (
//         <section className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56">
//             <div className="flex flex-col gap-8">
//                 <div>
//                     <div className="flex flex-col gap-2 items-start justify-center w-full">
//                         <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Apply your own</h1>
//                         <div>
//                             <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent">
//                                 theming&nbsp;
//                             </h1>
//                             <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">decisions.</h1>
//                         </div>
//                     </div>
//                     <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
//                         HeroUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your
//                         own.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                     <div className="flex flex-col gap-6">
//                         <div className="flex gap-8">
//                             {themes.map((theme) => (
//                                 <>
//                                     <button
//                                         key={theme.id}
//                                         onClick={() => setActiveTheme(theme.id)}
//                                         className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${activeTheme === theme.id ? "text-foreground" : "text-default-400"
//                                             }`}
//                                     >
//                                         <div className="w-8 h-8 rounded-full border border-default-200 flex items-center justify-center">
//                                             <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
//                                         </div>
//                                         <span className="text-base font-medium">{theme.name}</span>
//                                     </button>

//                                     {/* <div key={`${theme.id}-divider`} className={`w-8 h-8 rounded-full border ${activeTheme === theme.id ? "border-primary" : "border-default-200"}`}> */}
//                                     <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero" /></svg>
//                                     {/* </div> */}
//                                 </>
//                             ))}
//                         </div>

//                         <Card>
//                             <CardContent className="p-6">
//                                 <div className="flex flex-col md:flex-row gap-4">
//                                     <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
//                                         <Image
//                                             src="/placeholder.svg?height=200&width=200&text=Product+Image"
//                                             alt="Product"
//                                             className="w-full h-full object-cover"
//                                             width={200}
//                                             height={200}
//                                         />
//                                     </div>

//                                     <div className="flex flex-col justify-center flex-1">
//                                         <h3 className="text-xl font-semibold">Nike Adapt BB 2.0</h3>
//                                         <p className="text-default-500 my-2">Consistent, customized fit, game-changing.</p>

//                                         <div className="flex items-center gap-2 mb-4">
//                                             <span className="text-lg font-semibold">$279.97</span>
//                                             <span className="text-default-400 line-through">$350</span>
//                                             <span className="text-success font-medium">20% off</span>
//                                         </div>

//                                         <div className="flex gap-2 mb-4">
//                                             {["XS", "S", "M", "L", "XL"].map((size, index) => (
//                                                 <button
//                                                     key={size}
//                                                     className={`w-8 h-8 rounded-full text-sm border ${index === 0
//                                                         ? "bg-primary text-primary-foreground border-primary"
//                                                         : "border-default-300 hover:border-default-400"
//                                                         }`}
//                                                 >
//                                                     {size}
//                                                 </button>
//                                             ))}
//                                         </div>

//                                         <div className="flex gap-2">
//                                             <Button className="flex-1">Buy now</Button>
//                                             <Button variant="outline" className="flex-1 bg-transparent">
//                                                 Add to bag
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>

//                         <Button variant="outline" size="sm" className="max-w-fit bg-primary/20 text-primary">
//                             Learn more
//                         </Button>
//                     </div>

//                     <div className="relative">
//                         <pre className="bg-zinc-900 text-white p-4 rounded-xl text-sm overflow-auto min-h-[400px]">
//                             <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-700">
//                                 <div className="flex gap-2">
//                                     <div className="w-3 h-3 rounded-full bg-red-500" />
//                                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                                     <div className="w-3 h-3 rounded-full bg-green-500" />
//                                 </div>
//                                 <span className="text-zinc-400 text-xs">tailwind.config.js</span>
//                             </div>
//                             <code>{`const { heroui } = require("@heroui/react");

// module.exports = {
//   // ...
//   plugins: [
//     heroui({
//       themes: {
//         light: {
//           colors: {
//             primary: "${themes.find((t) => t.id === activeTheme)?.colors.primary}",
//           }
//         },
//         dark: {
//           colors: {
//             primary: "${themes.find((t) => t.id === activeTheme)?.colors.primary}",
//           }
//         },
//       },
//     }),
//   ],
// };`}</code>
//                         </pre>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute hidden dark:md:block h-full -bottom-10 -left-32 -z-10">
//                 <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
//             </div>
//         </section>
//     )
// }



// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { motion } from "framer-motion" // Added for smooth animations

// export function CustomThemesSection() {
//     const [activeTheme, setActiveTheme] = useState("heroui")

//     const themes = [
//         { id: "heroui", name: "HeroUI", colors: { primary: "#0072f5" } },
//         { id: "modern", name: "Modern", colors: { primary: "#7828c8" } },
//         { id: "elegant", name: "Elegant", colors: { primary: "#FFFFFF" } },
//         { id: "retro", name: "Retro", colors: { primary: "#FFD34E" } },
//     ]

//     // Animation variants for Framer Motion
//     const containerVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//     }

//     const buttonVariants = {
//         hover: { scale: 1.05, transition: { duration: 0.2 } },
//         tap: { scale: 0.95 },
//     }

//     return (
//         <motion.section
//             className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//         >
//             <div className="flex flex-col gap-8">
//                 <div>
//                     <div className="flex flex-col gap-2 items-start justify-center w-full">
//                         <motion.h1
//                             className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2, duration: 0.5 }}
//                         >
//                             Apply your own
//                         </motion.h1>
//                         <div>
//                             <motion.h1
//                                 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.3, duration: 0.5 }}
//                             >
//                                 theming&nbsp;
//                             </motion.h1>
//                             <motion.h1
//                                 className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.4, duration: 0.5 }}
//                             >
//                                 decisions.
//                             </motion.h1>
//                         </div>
//                     </div>
//                     <motion.p
//                         className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 0.5 }}
//                     >
//                         HeroUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                     <div className="flex flex-col gap-6">
//                         <div className="flex gap-4 flex-wrap">
//                             {themes.map((theme) => (
//                                 <motion.button
//                                     key={theme.id}
//                                     onClick={() => setActiveTheme(theme.id)}
//                                     className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${activeTheme === theme.id
//                                             ? "text-foreground bg-primary/10 shadow-md"
//                                             : "text-default-400 hover:bg-default-100"
//                                         }`}
//                                     variants={buttonVariants}
//                                     whileHover="hover"
//                                     whileTap="tap"
//                                 >
//                                     <div className="w-8 h-8 rounded-full border border-default-200 flex items-center justify-center transition-transform duration-300 hover:scale-110">
//                                         <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
//                                     </div>
//                                     <span className="text-base font-medium">{theme.name}</span>
//                                 </motion.button>
//                             ))}
//                         </div>

//                         <motion.div
//                             className="transition-all duration-500"
//                             style={{ borderColor: themes.find((t) => t.id === activeTheme)?.colors.primary }}
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <Card className="hover:shadow-lg transition-shadow duration-300">
//                                 <CardContent className="p-6">
//                                     <div className="flex flex-col md:flex-row gap-4">
//                                         <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
//                                             <Image
//                                                 src="/placeholder.svg?height=200&width=200&text=Product+Image"
//                                                 alt="Product"
//                                                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                                                 width={200}
//                                                 height={200}
//                                             />
//                                         </div>

//                                         <div className="flex flex-col justify-center flex-1">
//                                             <h3 className="text-xl font-semibold">Nike Adapt BB 2.0</h3>
//                                             <p className="text-default-500 my-2">Consistent, customized fit, game-changing.</p>

//                                             <div className="flex items-center gap-2 mb-4">
//                                                 <span className="text-lg font-semibold">$279.97</span>
//                                                 <span className="text-default-400 line-through">$350</span>
//                                                 <span className="text-success font-medium">20% off</span>
//                                             </div>

//                                             <div className="flex gap-2 mb-4">
//                                                 {["XS", "S", "M", "L", "XL"].map((size, index) => (
//                                                     <button
//                                                         key={size}
//                                                         className={`w-8 h-8 rounded-full text-sm border transition-colors duration-200 ${index === 0
//                                                                 ? "bg-primary text-primary-foreground border-primary"
//                                                                 : "border-default-300 hover:border-default-400 hover:bg-default-100"
//                                                             }`}
//                                                     >
//                                                         {size}
//                                                     </button>
//                                                 ))}
//                                             </div>

//                                             <div className="flex gap-2">
//                                                 <Button className="flex-1 transition-transform duration-200 hover:scale-105">Buy now</Button>
//                                                 <Button
//                                                     variant="outline"
//                                                     className="flex-1 bg-transparent transition-transform duration-200 hover:scale-105"
//                                                 >
//                                                     Add to bag
//                                                 </Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </motion.div>

//                         <Button
//                             variant="outline"
//                             size="sm"
//                             className="max-w-fit bg-primary/20 text-primary transition-transform duration-200 hover:scale-105"
//                         >
//                             Learn more
//                         </Button>
//                     </div>

//                     {/* YouTube Video Section */}
//                     <div className="relative">
//                         <motion.div
//                             className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.6, duration: 0.5 }}
//                         >
//                             <iframe
//                                 className="w-full h-full"
//                                 src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video ID
//                                 title="HeroUI Theme Demo"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute hidden dark:md:block h-full -bottom-10 -left-32 -z-10">
//                 <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
//             </div>
//         </motion.section>
//     )
// }

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { easeInOut } from "framer-motion";

export function CustomThemesSection() {
    const [activeTheme, setActiveTheme] = useState("heroui")

    const themes = [
        { id: "heroui", name: "HeroUI", colors: { primary: "#0072f5" } },
        { id: "modern", name: "Modern", colors: { primary: "#7828c8" } },
        { id: "elegant", name: "Elegant", colors: { primary: "#FFFFFF" } },
        { id: "retro", name: "Retro", colors: { primary: "#FFD34E" } },
    ]

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        // visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
    }

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 },
    }

    return (
        <motion.section
            className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col gap-8">
                <div>

                    {/* Heading */}

                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <motion.h1
                            className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Apply your own
                        </motion.h1>
                        <div>
                            <motion.h1
                                className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                theming&nbsp;
                            </motion.h1>
                            <motion.h1
                                className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                decisions.
                            </motion.h1>
                        </div>
                    </div>

                    {/* Description */}

                    <motion.p
                        className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        HeroUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.
                    </motion.p>
                </div>

                {/* Theme Selection and Product Card */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Left Section with Theme Buttons and Product Card */}

                    <div className="flex flex-col gap-6">
                        {/* Modified Theme Buttons with Right Arrows */}

                        <div className="flex items-center gap-4 flex-wrap">
                            {themes.map((theme, index) => (
                                <div key={theme.id} className="flex items-center gap-4">
                                    <motion.button
                                        onClick={() => setActiveTheme(theme.id)}
                                        className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 ${activeTheme === theme.id
                                                ? "text-foreground bg-blue-100 shadow-md"
                                                : "text-default-400 hover:bg-default-100"
                                            }`}
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-default-200 shadow-lg/30 flex items-center justify-center transition-transform duration-300 hover:scale-110 bg-pink-100">
                                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                        </div>
                                        <span className="text-base font-medium">{theme.name}</span>
                                    </motion.button>
                                    {/* Add Right Arrow Between Buttons (except after the last one) */}
                                    {index < themes.length - 1 && (
                                        <motion.svg
                                            className="w-6 h-6"
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                                        >
                                            <path
                                                d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
                                                fill={themes.find((t) => t.id === activeTheme)?.colors.primary}
                                                fillRule="nonzero"
                                            />
                                        </motion.svg>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Product Card with Animation */}

                        <motion.div
                            className="transition-all duration-500"
                            style={{ borderColor: themes.find((t) => t.id === activeTheme)?.colors.primary }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-[#F4E8D1] hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="w-full md:w-48 h-48 relative rounded-lg overflow-hidden">
                                            <Image
                                                src="/shoes-1.webp"
                                                alt="Product"
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                                width={200}
                                                height={200}
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center flex-1">
                                            <h3 className="text-xl font-semibold">Nike Adapt BB 2.0</h3>
                                            <p className="text-default-500 my-2">Consistent, customized fit, game-changing.</p>

                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-lg font-semibold">$279.97</span>
                                                <span className="text-default-400 line-through">$350</span>
                                                <span className="text-success font-medium">20% off</span>
                                            </div>

                                            <div className="flex gap-2 mb-4">
                                                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                                                    <button
                                                        key={size}
                                                        className={`w-8 h-8 rounded-full text-sm border transition-colors duration-200 ${index === 0
                                                                ? "bg-primary text-primary-foreground border-primary"
                                                                : "border-default-300 hover:border-default-400 hover:bg-default-100"
                                                            }`}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="flex gap-2">
                                                <Button className="flex-1 transition-transform duration-200 hover:scale-105">Buy now</Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 bg-transparent transition-transform duration-200 hover:scale-105"
                                                >
                                                    Add to bag
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Learn More Button */}
                        {/* <Button
                            variant="outline"
                            size="sm"
                            className="max-w-fit bg-primary/20 text-primary transition-transform duration-200 hover:scale-105"
                        >
                            Learn more
                        </Button> */}
                    </div>

                    {/* YouTube Video Section */}

                    <div className="relative">
                        <motion.div
                            className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="HeroUI Theme Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute hidden dark:md:block h-full -bottom-10 -left-32 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
        </motion.section>
    )
}



// "use client"

// import { useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { motion } from "framer-motion"
// // import { useTabs } from "@react-aria/tabs"
// // import { use } from "@react-aria/tabs"
// // import { useRef } from "react"

// export function CustomThemesSection() {
//     const [activeTheme, setActiveTheme] = useState("heroui")

//     const themes = [
//         { id: "heroui", name: "HeroUI", colors: { primary: "#0072f5" } },
//         { id: "modern", name: "Modern", colors: { primary: "#7828c8" } },
//         { id: "elegant", name: "Elegant", colors: { primary: "#FFFFFF" } },
//         { id: "retro", name: "Retro", colors: { primary: "#FFD34E" } },
//     ]

//     // Animation variants for Framer Motion
//     const containerVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//     }

//     const buttonVariants = {
//         hover: { scale: 1.05, transition: { duration: 0.2 } },
//         tap: { scale: 0.95 },
//     }

//     // Tab accessibility with @react-aria
//     // const tabListRef = useRef(null)
//     // const { tabProps } = useTabs({
//     //     items: themes,
//     //     selectedKey: activeTheme,
//     //     onSelectionChange: setActiveTheme,
//     // })

//     return (
//         <motion.section
//             className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//         >
//             <div className="flex flex-col gap-8">
//                 {/* Heading */}
//                 <div>
//                     <div className="flex flex-col gap-2 items-start justify-center w-full">
//                         <motion.h1
//                             className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.2, duration: 0.5 }}
//                         >
//                             Master
//                         </motion.h1>
//                         <div>
//                             <motion.h1
//                                 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.3, duration: 0.5 }}
//                             >
//                                 Replication&nbsp;
//                             </motion.h1>
//                             <motion.h1
//                                 className="tracking-tight inline font-semibold text-4xl lg:text-6xl"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.4, duration: 0.5 }}
//                             >
//                                 with&nbsp;
//                             </motion.h1>
//                             <motion.h1
//                                 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] text-4xl lg:text-6xl bg-clip-text text-transparent"
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: 0.4, duration: 0.5 }}
//                             >
//                                 Helyx.
//                             </motion.h1>
//                         </div>
//                     </div>
//                     <motion.p
//                         className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 0.5 }}
//                     >
//                         Learn how Helyx powers real-time replication across multiple databases. Follow our in-depth YouTube tutorials to set up, configure, and optimize replication for your own projects.
//                     </motion.p>
//                 </div>

//                 {/* Theme Selection and Product Card */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                     {/* Left Section with Theme Buttons and Product Card */}
//                     <div className="flex flex-col gap-6">
//                         {/* Theme Buttons with Right Arrows */}
//                         <div className="inline-flex w-full" aria-label="Custom themes tabs">
//                             <div
//                                 className="flex p-1 h-fit items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent dark:bg-transparent rounded-medium w-full justify-start gap-4"
//                                 role="tablist"
//                                 aria-orientation="horizontal"
//                                 // ref={tabListRef}
//                             >
//                                 {themes.map((theme, index) => (
//                                     <div key={theme.id} className="flex items-center gap-4">
//                                         <motion.button
//                                             // {...tabProps}
//                                             onClick={() => setActiveTheme(theme.id)}
//                                             className={`z-0 py-1 flex group relative justify-center items-center cursor-pointer tap-highlight-transparent data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-30 data-[hover-unselected=true]:opacity-disabled outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small rounded-small transition-none px-0 w-fit h-auto ${activeTheme === theme.id ? "text-default-foreground bg-transparent" : "text-default-400"}`}
//                                             role="tab"
//                                             aria-selected={activeTheme === theme.id}
//                                             tabIndex={activeTheme === theme.id ? 0 : -1}
//                                             variants={buttonVariants}
//                                             whileHover="hover"
//                                             whileTap="tap"
//                                         >
//                                             <div className="relative z-10 whitespace-nowrap transition-none group-data-[selected=true]:text-default-foreground text-default-400 text-base">
//                                                 <div className="flex flex-col justify-center items-center gap-2">
//                                                     {theme.id === "heroui" && (
//                                                         <svg
//                                                             className={`sm:hidden block ${activeTheme === theme.id ? "text-foreground" : "text-default-400"}`}
//                                                             fill="none"
//                                                             height="44"
//                                                             viewBox="0 0 126 126"
//                                                             width="44"
//                                                         >
//                                                             <path
//                                                                 d="M33.3529 5H92.6471C108.306 5 121 17.694 121 33.3529V92.6471C121 108.306 108.306 121 92.6471 121H33.3529C17.694 121 5 108.306 5 92.6471V33.3529C5 17.694 17.694 5 33.3529 5Z"
//                                                                 stroke="currentColor"
//                                                                 strokeWidth="10"
//                                                             />
//                                                             <path d="M94.9539 36V89.6887H86.3363V36H94.9539Z" fill="currentColor" />
//                                                             <path
//                                                                 d="M69.0885 36H77.7339V71.3118C77.7339 75.0694 76.795 78.3987 74.9172 81.2998C73.0394 84.1835 70.3993 86.4555 66.9969 88.1158C63.5945 89.7586 59.6064 90.58 55.0327 90.58C50.4776 90.58 46.4988 89.7586 43.0964 88.1158C39.694 86.4555 37.0539 84.1835 35.1761 81.2998C33.2983 78.3987 32.3594 75.0694 32.3594 71.3118V36H40.9769V70.6565C40.9769 73.0857 41.544 75.2441 42.6781 77.1316C43.8308 79.0191 45.4577 80.5046 47.5586 81.5882C49.6595 82.6543 52.1509 83.1873 55.0327 83.1873C57.9331 83.1873 60.4338 82.6543 62.5347 81.5882C64.6542 80.5046 66.2718 79.0191 67.3873 77.1316C68.5214 75.2441 69.0885 73.0857 69.0885 70.6565V36Z"
//                                                                 fill="currentColor"
//                                                             />
//                                                         </svg>
//                                                     )}
//                                                     {theme.id === "modern" && (
//                                                         <svg
//                                                             className={`sm:hidden block ${activeTheme === theme.id ? "text-secondary" : "text-default-400"}`}
//                                                             fill="none"
//                                                             height="44"
//                                                             viewBox="0 0 24 24"
//                                                             width="44"
//                                                         >
//                                                             <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
//                                                                 <path d="M10 4.5V18a4.007 4.007 0 01-1.14 2.79l-.04.04a3.149 3.149 0 01-.28.25 3.5 3.5 0 01-.99.6c-.11.05-.22.09-.33.13A3.888 3.888 0 016 22a4.255 4.255 0 01-.8-.08c-.13-.03-.26-.06-.39-.1a3.611 3.611 0 01-.46-.17c0-.01 0-.01-.01 0a5.042 5.042 0 01-.8-.49l-.01-.01a2.744 2.744 0 01-.36-.32c-.11-.12-.22-.24-.33-.37a5.042 5.042 0 01-.49-.8c.01-.01.01-.01 0-.01a.031.031 0 00-.01-.02c-.06-.14-.11-.29-.16-.44-.04-.13-.07-.26-.1-.39A4.255 4.255 0 012 18V4.5A2.362 2.362 0 014.5 2h3A2.362 2.362 0 0110 4.5z" />
//                                                                 <path d="M22 16.5v3a2.362 2.362 0 01-2.5 2.5H6a3.888 3.888 0 001.22-.19c.11-.04.22-.08.33-.13a3.5 3.5 0 00.99-.6 3.149 3.149 0 00.28-.25l.04-.04 6.8-6.79h3.84a2.362 2.362 0 012.5 2.5zM4.81 21.82a3.835 3.835 0 01-1.64-.99 3.835 3.835 0 01-.99-1.64 4.02 4.02 0 002.63 2.63z" />
//                                                                 <path d="M18.37 11.29L15.66 14l-6.8 6.79A4.007 4.007 0 0010 18V8.335l2.71-2.705a2.368 2.368 0 013.54 0l2.12 2.12a2.368 2.368 0 010 3.54zM7 18a1 1 0 11-1-1 1 1 0 011 1z" />
//                                                             </g>
//                                                         </svg>
//                                                     )}
//                                                     {theme.id === "elegant" && (
//                                                         <svg
//                                                             className={`sm:hidden block ${activeTheme === theme.id ? "text-foreground" : "text-default-400"}`}
//                                                             fill="none"
//                                                             height="44"
//                                                             viewBox="0 0 24 24"
//                                                             width="44"
//                                                         >
//                                                             <path
//                                                                 d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3"
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth="1.5"
//                                                             />
//                                                             <path
//                                                                 d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z"
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                             />
//                                                         </svg>
//                                                     )}
//                                                     {theme.id === "retro" && (
//                                                         <svg
//                                                             className={`sm:hidden block ${activeTheme === theme.id ? "text-warning" : "text-default-400"}`}
//                                                             fill="none"
//                                                             height="44"
//                                                             viewBox="0 0 24 24"
//                                                             width="44"
//                                                         >
//                                                             <path
//                                                                 d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeMiterlimit="10"
//                                                                 strokeWidth="1.5"
//                                                             />
//                                                             <path
//                                                                 d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75ZM10.3 15.28 8 17.58M8.03 15.31l2.3 2.3"
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeMiterlimit="10"
//                                                                 strokeWidth="1.5"
//                                                             />
//                                                             <path
//                                                                 d="M16.49 15.33h.02M14.49 17.5v-.02"
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeMiterlimit="10"
//                                                                 strokeWidth="2"
//                                                             />
//                                                         </svg>
//                                                     )}
//                                                     <p
//                                                         className={`group-data-[selected=true]:font-medium ${activeTheme === theme.id
//                                                                 ? theme.id === "modern"
//                                                                     ? "text-secondary"
//                                                                     : theme.id === "retro"
//                                                                         ? "text-warning"
//                                                                         : "text-foreground"
//                                                                 : "text-default-400"
//                                                             }`}
//                                                     >
//                                                         {theme.name}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </motion.button>
//                                         {index < themes.length - 1 && (
//                                             <motion.svg
//                                                 className="w-6 h-6 text-default-400 transition-colors duration-300"
//                                                 clipRule="evenodd"
//                                                 fillRule="evenodd"
//                                                 strokeLinejoin="round"
//                                                 strokeMiterlimit="2"
//                                                 viewBox="0 0 24 24"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 initial={{ opacity: 0, x: -10 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
//                                             >
//                                                 <path
//                                                     d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z"
//                                                     fill={themes.find((t) => t.id === activeTheme)?.colors.primary}
//                                                     fillRule="nonzero"
//                                                 />
//                                             </motion.svg>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Product Card */}
//                         <motion.div
//                             className="flex flex-col relative text-foreground box-border bg-content1 outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px] dark:border-transparent"
//                             style={{ borderColor: themes.find((t) => t.id === activeTheme)?.colors.primary }}
//                             initial={{ opacity: 0, scale: 0.95 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <CardContent className="flex w-full p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased relative flex-col md:flex-row md:items-center gap-4 md:gap-9 overflow-visible">
//                                 <div className="flex-none w-full sm:w-48 h-48 mb-6 sm:mb-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-[#010187] before:to-[#18000E] before:transition-all before:rounded-2xl before:ease-soft before:spring before:duration-500">
//                                     <Image
//                                         src="/shoes-1.webp"
//                                         alt="Shoes theme example"
//                                         className="opacity-0 data-[loaded=true]:opacity-100 shadow-none motion-reduce:transition-none object-[45%_50%] sm:scale-125 absolute z-10 sm:left-2 inset-0 w-full h-full object-cover rounded-lg transition-all will-change-auto ease-soft spring duration-300"
//                                         width={200}
//                                         height={200}
//                                         sizes="100vw"
//                                         // srcSet="/_next/image?url=%2Fimages%2Fshoes-1.png&w=640&q=75 640w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=750&q=75 750w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=828&q=75 828w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=1080&q=75 1080w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=1200&q=75 1200w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=1920&q=75 1920w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=2048&q=75 2048w, /_next/image?url=%2Fimages%2Fshoes-1.png&w=3840&q=75 3840w"
//                                         data-loaded="true"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col justify-center transition-all h-full min-h-[200px]">
//                                     <div className="relative flex flex-wrap items-baseline">
//                                         <h1 className="relative w-full flex-none text-xl font-semibold text-foreground">Nike Adapt BB 2.0</h1>
//                                         <p className="my-2 w-full text-base text-default-500">Consistent, customized fit, game-changing.</p>
//                                         <p className="relative text-lg font-semibold text-foreground">$279.97</p>
//                                         <p className="relative line-through font-semibold text-default-400 ml-3">$350</p>
//                                         <p className="relative font-normal text-success ml-3">20% off</p>
//                                     </div>
//                                     <div
//                                         className="relative flex flex-col gap-2 my-4"
//                                         aria-label="select size"
//                                         role="radiogroup"
//                                         aria-orientation="horizontal"
//                                     >
//                                         <div className="flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row" role="presentation" data-orientation="horizontal">
//                                             {["XS", "S", "M", "L", "XL"].map((size, index) => (
//                                                 <label
//                                                     key={size}
//                                                     className="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none"
//                                                     data-selected={index === 0}
//                                                 >
//                                                     <input
//                                                         type="radio"
//                                                         className="font-inherit text-[100%] leading-[1.15] m-0 p-0 overflow-visible box-border absolute top-0 w-full h-full opacity-[0.0001] z-[1] cursor-pointer"
//                                                         name="size-selector"
//                                                         value={size.toLowerCase()}
//                                                         defaultChecked={index === 0}
//                                                     />
//                                                     <span
//                                                         className="relative items-center justify-center shrink-0 overflow-hidden border-solid border-medium box-border border-default rounded-full group-data-[hover-unselected=true]:bg-default-100 outline-solid outline-transparent group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[selected=true]:border-primary w-5 h-5 group-data-[pressed=true]:scale-95 transition-transform-colors motion-reduce:transition-none hidden"
//                                                     >
//                                                         <span
//                                                             className="z-10 opacity-0 scale-0 origin-center rounded-full group-data-[selected=true]:opacity-100 group-data-[selected=true]:scale-100 bg-primary text-primary-foreground w-2 h-2 transition-transform-opacity motion-reduce:transition-none"
//                                                         ></span>
//                                                     </span>
//                                                     <div
//                                                         className={`flex-col w-8 h-8 flex m-0 justify-center items-center text-sm rounded-full group-data-[focus-visible=true]:outline-solid outline-transparent group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background ${index === 0 ? "bg-primary text-primary-foreground" : ""
//                                                             }`}
//                                                     >
//                                                         <span className="relative select-none transition-colors motion-reduce:transition-none text-sm font-semibold text-inherit">
//                                                             {size}
//                                                         </span>
//                                                     </div>
//                                                 </label>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <div className="flex space-x-4">
//                                         <Button
//                                             className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover text-sm font-normal"
//                                         >
//                                             Buy now
//                                         </Button>
//                                         <Button
//                                             variant="outline"
//                                             className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-4 min-w-20 h-10 gap-2 rounded-full transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-primary text-primary data-[hover=true]:opacity-hover text-sm font-normal"
//                                         >
//                                             Add to bag
//                                         </Button>
//                                     </div>
//                                 </div>
//                                 {/* Like Button */}
//                                 <Button
//                                     variant="ghost"
//                                     className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 transition-transform-colors-opacity motion-reduce:transition-none bg-transparent data-[hover=true]:bg-default/40 min-w-10 w-10 h-10 absolute top-3 right-3 text-default-400"
//                                 >
//                                     <svg
//                                         aria-hidden="true"
//                                         fill="none"
//                                         focusable="false"
//                                         height="20"
//                                         role="presentation"
//                                         viewBox="0 0 24 24"
//                                         width="20"
//                                     >
//                                         <path
//                                             d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="1.5"
//                                         />
//                                     </svg>
//                                 </Button>
//                             </CardContent>
//                         </motion.div>

//                         {/* Learn More Link */}
//                         <a
//                             href="/docs/customization/customize-theme"
//                             className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu data-[pressed=true]:scale-[0.97] cursor-pointer outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 min-w-16 h-8 text-tiny gap-2 rounded-full transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover max-w-fit bg-primary/20 text-primary"
//                             aria-label="Learn more about theme customization"
//                         >
//                             Learn more
//                         </a>
//                     </div>

//                     {/* YouTube Video Section */}
//                     <div className="relative">
//                         <motion.div
//                             className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
//                             initial={{ opacity: 0, x: 20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.6, duration: 0.5 }}
//                         >
//                             <iframe
//                                 className="w-full h-full"
//                                 src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                                 title="HeroUI Theme Demo"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>

//             <div className="absolute hidden dark:md:block h-full -bottom-10 -left-32 -z-10">
//                 <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
//             </div>
//         </motion.section>
//     )
// }