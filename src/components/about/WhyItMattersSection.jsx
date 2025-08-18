import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Users } from 'lucide-react';

export default function WhyItMattersSection() {
  const concerns = [
    { icon: Brain, question: "Will my major still matter in five years?" },
    { icon: Zap, question: "How do I stand out if AI can do my work?" },
    { icon: Users, question: "How do I build real relationships in a digital world?" }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(149,187,194,0.1),transparent_70%)]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Why This Matters For Students Today</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-16">
          The world is changing faster than ever. AI is rewriting the rules for school and work, and students are asking tough questions.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {concerns.map((concern, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#95bbc2' }}>
                <concern.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg font-light italic text-white">"{concern.question}"</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xl md:text-2xl leading-relaxed font-light">
          Denis's work helps students stay <span className="font-medium text-white">human first</span>—rooted, clear, and courageous—no matter how fast the tech moves.
        </p>
      </div>
    </section>
  );
}