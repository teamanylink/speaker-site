import { motion, useMotionValue, animate } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';

const useMeasure = () => {
    const ref = useRef(null);
    const [bounds, setBounds] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        const element = ref.current;
        if (!element) return;
    
        const observer = new ResizeObserver(([entry]) => {
          setBounds(entry.contentRect);
        });
    
        observer.observe(element);
        return () => observer.disconnect();
    }, []);
  
    return [ref, bounds];
};

export function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}) {
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    
    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        if (size === 0) return;

        const contentSizeWithGap = size + gap;
        const contentSize = contentSizeWithGap / 2;
        
        const from = reverse ? -contentSize : 0;
        const to = reverse ? 0 : -contentSize;

        const distanceToTravel = Math.abs(to - from);
        const duration = distanceToTravel / currentSpeed;
        
        translation.set(from);

        controls = animate(translation, to, {
            ease: 'linear',
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return () => controls?.stop();
    }, [translation, width, height, currentSpeed, direction, reverse, gap]);

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => setCurrentSpeed(speedOnHover),
              onHoverEnd: () => setCurrentSpeed(speed),
          }
        : {};

    return (
        <div className={`overflow-hidden ${className || ''}`}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export function BlurredInfiniteSlider({
    children,
    fadeWidth = 80,
    containerClassName,
    ...sliderProps
}) {
    const maskStyle = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    };

    return (
        <div
            className={`relative w-full ${containerClassName || ''}`}
            style={maskStyle}
        >
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    );
}