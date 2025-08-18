import React from 'react';
import { motion } from 'framer-motion';
import { Zap, HandHeart, Users, Milestone } from 'lucide-react';

export default function FrameworkSection() {
  const benefits = [
    { icon: Zap, text: "Confront what’s keeping you stuck" },
    { icon: HandHeart, text: "Connect to purpose, people, and presence" },
    { icon: Users, text: "Contribute in ways that feel real and grounded" },
    { icon: Milestone, text: "Carry a story that moves others — not just with words, but with your life" }
  ];

  return (
    <section id="framework" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            The <motion.span
              className="font-medium cursor-default"
              style={{ color: '#95bbc2' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >Movement Framework™</motion.span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A simple, soul-centered process for forward momentum. This isn’t about hype, going viral, or chasing trends. It’s about doing the inner work to become steady, focused, and future-ready.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 flex flex-col justify-center hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-3xl font-medium mb-8">The Framework helps you:</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <benefit.icon
                      className="w-7 h-7 mt-1 flex-shrink-0"
                      style={{ color: '#95bbc2' }}
                    />
                  </motion.div>
                  <p className="text-xl leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[500px] w-full group"
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="/movement-leader.jpg"
              alt="Movement Leader illustration"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-4 bottom-4">
              <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-white/20 text-white">
                <p className="text-lg italic leading-relaxed">"You don’t need to start a movement — you already are one."</p>
                <p className="font-semibold text-right text-sm opacity-80 mt-2">— Denis Estimon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}