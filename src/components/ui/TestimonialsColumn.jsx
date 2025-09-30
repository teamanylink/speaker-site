import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration,
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ image, alt, height }, i) => (
              <div 
                className={`
                  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transition-all duration-300 w-full max-w-sm
                  border border-gray-200 bg-white
                  ${height === 'small' ? 'max-h-[250px]' : ''}
                  ${height === 'medium' ? 'max-h-[400px]' : ''}
                  ${height === 'large' ? 'max-h-[700px]' : ''}
                `}
                key={i}
              >
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};