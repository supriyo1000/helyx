import { Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UIShowcase() {
    return (
        <div className="relative w-full max-w-2xl mx-auto h-[600px]">
            <div className="relative w-full h-full">
                {/* Camera Widget */}
                <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-2xl">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                                <Camera className="w-4 h-4 text-gray-400" />
                                <span className="text-sm font-medium text-gray-300">Camera</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-white">$525</span>
                        </div>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="absolute top-16 left-0 z-10">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-2xl w-72">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">ZL</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold">Zoey Lang</h3>
                                <p className="text-gray-400 text-sm">@zoeylang</p>
                            </div>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                                Follow
                            </Button>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                            Full-stack developer, @hero_ui lover
                            <br />
                            gopher 🐹
                        </p>
                        <div className="flex space-x-4 text-sm mb-4">
                            <span className="text-gray-400">
                                <span className="text-white font-semibold">4</span> Following
                            </span>
                            <span className="text-gray-400">
                                <span className="text-white font-semibold">97.1K</span> Followers
                            </span>
                        </div>

                        {/* Tabs */}
                        <div className="flex space-x-4 border-b border-gray-700">
                            <button className="text-gray-400 hover:text-white pb-2 text-sm">Notes</button>
                            <button className="text-gray-400 hover:text-white pb-2 text-sm">Tasks</button>
                            <button className="text-white border-b-2 border-blue-500 pb-2 text-sm">Files</button>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="absolute top-32 right-12 z-15">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 shadow-2xl">
                        <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-gray-400 hover:text-white">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <div className="flex space-x-1">
                                {[1, 5, 6, 7, 10].map((num, idx) => (
                                    <Button
                                        key={num}
                                        variant="ghost"
                                        size="sm"
                                        className={`w-8 h-8 p-0 text-sm ${idx === 0 ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {num}
                                    </Button>
                                ))}
                            </div>
                            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-gray-400 hover:text-white">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Input Field */}
                <div className="absolute top-80 left-8 z-10">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-2xl w-52">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                    <span className="text-black font-bold text-sm">UI</span>
                                </div>
                                <Input
                                    placeholder="HeroUI"
                                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-8 flex-1"
                                />
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <span className="text-xs text-gray-400">Input</span>
                        </div>
                    </div>
                </div>

                {/* Notification */}
                <div className="absolute bottom-16 right-8 z-20">
                    <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-2xl w-60">
                        <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mt-1">
                                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-white text-sm font-medium">Available soon.</span>
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-3 h-6 text-xs">
                                        Notify me
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
