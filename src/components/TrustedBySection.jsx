import React from 'react';
import { Sparkles } from "./ui/sparkles";
import { InfiniteSlider } from './ui/BlurredInfiniteSlider';

// News logos used for the Trusted By section
const newsLogos = [
  { src: '/assets/072ee272d_people.png', alt: 'People Magazine', height: 45 },
  { src: '/assets/d3a053626_blackenterprise.png', alt: 'Black Enterprise', height: 32 },
  { src: '/assets/2998525e1_huffpost.png', alt: 'HuffPost', height: 40 },
  { src: '/assets/5ae9f9897_mic.png', alt: 'Mic', height: 55 },
  { src: '/assets/a8b2bdec7_cbs.png', alt: 'CBS', height: 40 },
  { src: '/assets/099421306_abc.png', alt: 'ABC News', height: 40 },
];

export default function TrustedBySection() {
  const accentColor = '#95bbc2';

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="mx-auto pt-32 w-full max-w-5xl px-6 relative z-20">
        <div className="text-center text-3xl text-gray-900 font-light mb-14">
          <span className="font-medium">
            As seen on
          </span>
        </div>

        <div className="relative py-6">
            <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}
            >
                {newsLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center h-16">
                        <img
                            className="max-h-full w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                            src={logo.src}
                            alt={logo.alt}
                            style={{ height: `${logo.height}px` }}
                        />
                    </div>
                ))}
            </InfiniteSlider>
        </div>
      </div>

      <div className="relative -mt-40 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 opacity-40" style={{
            background: `radial-gradient(circle at bottom center, ${accentColor}, transparent 70%)`
        }}/>
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-gray-200 bg-white" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color={"#000000"}
          size={1.5}
          speed={0.5}
        />
      </div>
    </div>
  )
}