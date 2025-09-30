import React from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function FinalCTASection() {

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-50/30 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            If you feel the shift and you’re ready to step into it with <motion.span 
              className="font-medium cursor-default"
              whileHover={{ color: '#95bbc2', scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >clarity</motion.span> — let’s talk.
          </h2>

          <p className="text-2xl font-medium mb-12" style={{ color: '#95bbc2' }}>
            You don’t have to chase momentum. You just need to become it.
          </p>

          <motion.a
            href={createPageUrl('booking')}
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              backgroundColor: '#95bbc2'
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Mic className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
            <span>Book Me to Speak</span>
          </motion.a>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg font-medium text-gray-800 mb-4">
              Let's move.
            </p>
            <p className="text-base text-gray-600">
              Email: <a href="mailto:booking@movementleader.com" className="text-[#95bbc2] hover:underline">booking@movementleader.com</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}