
'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/InfiniteSlider'
import { ProgressiveBlur } from '@/components/ui/ProgressiveBlur'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const organizationLogos = [
  { src: '/assets/d7ae718ec_rotary.png', alt: 'Rotary International', style: { height: '50px' } },
  { src: '/assets/721cce736_pta.png', alt: 'National PTA', style: { height: '50px' } },
  { src: '/assets/4c5a6a36a_4h.png', alt: '4-H', style: { height: '55px' } },
  { src: '/assets/79b9a403a_be-strong.png', alt: 'Be Strong', style: { height: '50px' } },
  { src: '/assets/5ac8fe6f8_mass-mutual.png', alt: 'MassMutual', style: { height: '40px' } },
  { src: '/assets/75fa00ca3_mars-wrigley.png', alt: 'Mars Wrigley', style: { height: '40px' } },
  { src: '/assets/2d054cb2b_chamber.png', alt: 'Greater NY Chamber of Commerce', style: { height: '60px' } },
];

export default function HeroSection() {
    return (
        <>
            <section className="relative">
                {/* Video Background */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl border border-black/10 lg:rounded-[3rem]">
                    <video
                        preload="auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src="/assets/hero.mp4"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 py-24 md:pb-32 lg:pb-36 lg:pt-72">
                    <div className="mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white">I help people become movements.</h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-white/90">In the age of ai, I help people find purpose, build connections, and make an impact.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base bg-black text-white hover:bg-gray-800">
                                    <Link to={createPageUrl('booking')}>
                                        <span className="text-nowrap">Book me to Speak</span>
                                        <ChevronRight className="ml-1" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base text-white hover:bg-white/10">
                                    <Link to="#framework">
                                        <span className="text-nowrap">Learn More</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-background pb-2">
                <div className="group relative m-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:pr-6">
                            <p className="text-end text-sm text-gray-600">Trusted By</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                {organizationLogos.map((logo, index) => (
                                    <div key={index} className="flex items-center justify-center h-16">
                                        <img
                                            className="max-h-full w-auto opacity-80"
                                            src={logo.src}
                                            alt={logo.alt}
                                            style={logo.style}
                                        />
                                    </div>
                                ))}
                            </InfiniteSlider>

                            <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
