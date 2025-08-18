import React from 'react';

const partnerLogos = [
  { src: '/assets/5ac8fe6f8_mass-mutual.png', alt: 'MassMutual', h: 32 },
  { src: '/assets/75fa00ca3_mars-wrigley.png', alt: 'Mars Wrigley', h: 30 },
  { src: '/assets/d7ae718ec_rotary.png', alt: 'Rotary International', h: 34 },
  { src: '/assets/721cce736_pta.png', alt: 'National PTA', h: 30 },
  { src: '/assets/4c5a6a36a_4h.png', alt: '4‑H', h: 30 },
  { src: '/assets/2d054cb2b_chamber.png', alt: 'Chamber of Commerce', h: 28 },
  { src: '/assets/79b9a403a_be-strong.png', alt: 'Be Strong', h: 26 },
];

export default function PartnersLogoStrip() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-gray-400 mb-8 tracking-wider uppercase">
          Trusted by
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partnerLogos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              style={{ height: `${logo.h}px` }}
              className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}


