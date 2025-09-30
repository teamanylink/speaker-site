
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, TrendingUp } from 'lucide-react';

export default function WhatIDoSection() {
  const principles = [
    { icon: Shield, title: "Confront Conflict", description: "I teach you to step outside your comfort zone and face the false beliefs, stories, and identities that hold you back from becoming a movement leader." },
    { icon: Users, title: "Cultivate Connections", description: "I provide frameworks for building genuine human connections and increasing your influence, moving up in social space and communication." },
    { icon: TrendingUp, title: "Create Community", description: "I show you how to build communities that transform lives, helping you become the movement you were created to be." }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">The Movement Framework™</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Through my company Movement Leader, I train you to increase your influence, income, and impact. It's not just inspirational or aspirational—it's deeply transformational, teaching you to confront conflict, cultivate connections, create community, and communicate your story.
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
            Bottom line: When you confront conflict, cultivate connections, create community, and communicate your story,{' '}
            <span style={{ color: '#95bbc2' }} className="font-medium">
              you become the movement you were created to be.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
