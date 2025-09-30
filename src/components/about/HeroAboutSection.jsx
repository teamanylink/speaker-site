import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroAboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
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
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
                Who is Denis Estimon
              </h1>
              <p className="max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-light">
                I help you become the movement you were created to be. 
                From co-founding We Dine Together to building Movement Leader, I teach you how to confront conflict, 
                cultivate connections, and create community that transforms your life and the lives of those around you.
              </p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link 
                  to={createPageUrl('booking')}
                  className="bg-white text-black px-10 py-5 rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Denis to Speak
                </Link>
                <Link 
                  to={createPageUrl('movement-framework')}
                  className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-white/30 transition-all duration-300"
                >
                  The Movement Framework
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}