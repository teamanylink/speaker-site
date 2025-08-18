
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp } from 'lucide-react';

export default function WhatIDoSection() {
  const principles = [
    { icon: Shield, title: "Anchor in Identity", description: "Denis teaches students to ground themselves in their values before adopting new tools like AI." },
    { icon: Users, title: "Build Real Community", description: "He provides frameworks for fostering genuine human connections, a skill more valuable than ever in a digital-first world." },
    { icon: TrendingUp, title: "Create Momentum", description: "He shows them how to make simple, steady moves that build the unstoppable confidence needed to navigate an unpredictable career path." }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">How Denis Helps</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Denis runs companies at the front edge of AI, but his focus is always on people. He teaches practical ways to use technology without losing yourself.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ backgroundColor: '#95bbc2' }}>
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{principle.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-20 text-center bg-black text-white rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Bottom line: If you anchor who you are and learn to move with wisdom,{' '}
            <span style={{ color: '#95bbc2' }} className="font-medium">
              you become unstoppable.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
