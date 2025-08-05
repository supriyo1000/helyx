import { Database, ArrowRight } from "lucide-react"

export default function DatabaseReplication() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>

            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="space-y-8">
                    {/* Primary Database */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Database className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-300">
                                DB1 (Primary)
                            </div>
                        </div>
                    </div>

                    {/* Replication Arrows */}
                    <div className="flex justify-center space-x-8">
                        <div className="flex flex-col items-center space-y-2">
                            <ArrowRight className="w-6 h-6 text-purple-400 transform rotate-45" />
                            <span className="text-xs text-gray-400">Replicate</span>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <ArrowRight className="w-6 h-6 text-purple-400 transform -rotate-45" />
                            <span className="text-xs text-gray-400">Replicate</span>
                        </div>
                    </div>

                    {/* Replica Databases */}
                    <div className="flex justify-between">
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                <Database className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-300 whitespace-nowrap">
                                DB2 (Replica)
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                                <Database className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-300 whitespace-nowrap">
                                DB3 (Replica)
                            </div>
                        </div>
                    </div>

                    {/* Status indicators */}
                    <div className="flex justify-between text-xs">
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-400">Active</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-400">Synced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
