
import React from 'react';

export default function ImageAutoSlider() {
  const images = [
    "/assets/4ab2f77ea_denisspeaking.jpg",
    "/assets/aee26740f_denis_estimonB0diTvFgqPV32.jpg",
    "/assets/abf399394_denisatfox2.jpeg",
    "/assets/12d86a38f_denisestimon3musketeerscampaign1.jpg",
    "/assets/541f36771_IMG_5495.jpg",
    "/assets/a5b3bf06d_denis_estimonBpIWe9AjIV631.jpg",
    "/assets/507ac4c05_IMG_5499.jpg",
    "/assets/6f94ad5c2_denis_estimonB-i6F1Vgkj-41.jpg"
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-gallery {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll-gallery {
          animation: scroll-gallery 45s linear infinite;
        }

        .scroll-container-gallery {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item-gallery {
          transition: transform 0.3s ease;
        }

        .image-item-gallery:hover {
          transform: scale(1.05);
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center pt-32">
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container-gallery w-full max-w-7xl">
            <div className="infinite-scroll-gallery flex gap-8 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item-gallery group flex-shrink-0 w-96 h-[28rem] rounded-2xl overflow-hidden shadow-2xl bg-white/5"
                >
                  <img
                    src={image}
                    alt={`Gallery image of Denis Estimon speaking or at events`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
