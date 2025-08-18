
import React from 'react';
import { motion } from 'framer-motion';
import { createPageUrl } from '@/utils';

export default function AboutCTASection() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-gray-900">
            Ready to bring <span style={{ color: '#95bbc2' }} className="font-medium">The Movement Framework</span> to your organization?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            Denis helps people turn uncertainty into unstoppable momentum.
          </p>
          <motion.a
            href={createPageUrl('booking')}
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#95bbc2',
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book Denis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
