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
            {testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-10 rounded-3xl border border-gray-100 shadow-xl bg-white max-w-xs w-full" 
                key={i}
              >
                <div className="text-lg leading-relaxed text-gray-700">{text}</div>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-black">{name}</div>
                    <div className="leading-5 text-gray-500 tracking-tight text-sm">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};