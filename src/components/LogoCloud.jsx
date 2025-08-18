import React from 'react';
import { BlurredInfiniteSlider } from './ui/BlurredInfiniteSlider';

const logos = [
    { src: '/assets/a8b2bdec7_cbs.png', alt: 'CBS', height: 40 },
    { src: '/assets/099421306_abc.png', alt: 'ABC News', height: 40 },
    { src: '/assets/b6ba43112_cnn.png', alt: 'CNN', height: 45 },
    { src: '/assets/072ee272d_people.png', alt: 'People Magazine', height: 45 },
    { src: '/assets/d3a053626_blackenterprise.png', alt: 'Black Enterprise', height: 32 },
    { src: '/assets/2998525e1_huffpost.png', alt: 'HuffPost', height: 40 },
    { src: '/assets/5ae9f9897_mic.png', alt: 'Mic', height: 55 },
];

export default function LogoCloud() {
    return (
        <section className="bg-gray-50/30 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center">
                    <p className="text-center text-sm font-medium text-gray-400 mb-8 tracking-wider uppercase">
                        As Seen On
                    </p>
                    <BlurredInfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={80}
                        fadeWidth={80}
                    >
                        {logos.map((logo) => (
                            <div key={logo.src} className="flex items-center justify-center" style={{ height: '60px' }}>
                                <img
                                    className="max-h-full max-w-none grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                    src={logo.src}
                                    alt={logo.alt}
                                    style={{ height: `${logo.height}px` }}
                                />
                            </div>
                        ))}
                    </BlurredInfiniteSlider>
                </div>
            </div>
        </section>
    );
}