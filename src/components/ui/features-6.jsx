import React, { useState } from 'react';
import { Cpu, Lock, Sparkles, Zap, Play, X } from 'lucide-react';

export function Features() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-12">
                    <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                        <h2 className="text-4xl font-semibold">Global movement founder, keynote speaker, AI strategist.</h2>
                        <p className="max-w-sm sm:ml-auto text-gray-600">I equip teams to lead with purpose in an AI-driven world, turning challenges into clear strategies for global impact.</p>
                    </div>
                    <div className="relative rounded-3xl p-4 md:-mx-8 lg:col-span-3 backdrop-blur-md bg-white/10 border-2 border-white/30">
                        <div className="aspect-[88/36] relative cursor-pointer group" onClick={() => setIsVideoOpen(true)}>
                            <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <img src="/assets/video-thumb.jpg" className="absolute inset-0 z-10 w-full h-full object-cover" alt="Video thumbnail" />
                                
                                {/* Frosted Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setIsVideoOpen(false)}>
                    <div className="relative max-w-4xl w-full aspect-video backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-30 backdrop-blur-md bg-white/20 border border-white/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                        <video
                            autoPlay
                            controls
                            className="w-full h-full object-cover"
                            src="/assets/hero.mp4"
                            poster="/assets/video-thumb.jpg"
                        />
                    </div>
                </div>
            )}
        </>
    )
}