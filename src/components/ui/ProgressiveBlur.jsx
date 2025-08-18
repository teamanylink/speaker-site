import React from 'react';
import { cn } from '@/lib/utils';

const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}) {
  const layers = Math.max(blurLayers, 2);
  const angle = GRADIENT_ANGLES[direction] || GRADIENT_ANGLES.bottom;

  return (
    <div className={cn('relative', className)} {...props}>
      {Array.from({ length: layers }).map((_, index) => {
        const opacity = (index + 1) / layers;
        const blurAmount = blurIntensity * (index + 1);
        
        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${angle}deg, transparent, rgba(255,255,255,${opacity}))`,
              backdropFilter: `blur(${blurAmount}px)`,
              WebkitBackdropFilter: `blur(${blurAmount}px)`,
            }}
          />
        );
      })}
    </div>
  );
}