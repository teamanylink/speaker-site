import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Briefcase, Mail } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function FinalCTASection() {
  const ctaItems = [
    { icon: Mic, text: "Book Me to Speak", href: createPageUrl('booking') },
    { icon: Briefcase, text: "Consulting & Strategy", href: "#" },
    { icon: Mail, text: "Join the Newsletter", href: "#" }
  ];

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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {ctaItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center justify-center gap-3 w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  backgroundColor: '#95bbc2'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.15 }}
              >
                <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>

          <motion.p 
            className="text-lg font-medium text-gray-800 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Let’s move.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}