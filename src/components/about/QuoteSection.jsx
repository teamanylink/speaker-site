import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* First Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-light text-gray-900 leading-relaxed mb-6">
                The greatest movement that will take place is the movement that happens within you.
              </p>
              <div className="w-16 h-1 bg-black rounded-full"></div>
            </div>
          </motion.div>

          {/* Second Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-light text-gray-900 leading-relaxed mb-6">
                I don't want my life to be a moment to be remembered but a movement that makes a difference.
              </p>
              <div className="w-16 h-1 bg-black rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-medium text-gray-600">— Denis Estimon</p>
        </motion.div>
      </div>
    </section>
  );
}
