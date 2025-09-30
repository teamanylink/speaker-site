
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Target } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function SignatureTalkSection() {
  const talkFeatures = [
    { icon: Clock, title: "45-90 Minutes", description: "Flexible format to fit your event schedule" },
    { icon: Users, title: "Interactive Experience", description: "Audience leaves with actionable next steps" },
    { icon: Target, title: "Customized Content", description: "Tailored to your organization and audience needs" }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-4">
            <span style={{ color: '#95bbc2' }} className="font-medium">How to Become a Movement</span>: Denis's Signature Talk
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            A proven system that transforms your uncertainty into unstoppable momentum. You don't just get motivated—you get equipped with the framework to become the movement you were created to be.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {talkFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: '#95bbc2' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-medium mb-4 text-black group-hover:text-gray-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href={createPageUrl('booking')}
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#95bbc2',
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Book Denis
          </motion.a>
        </div>
      </div>
    </section>
  );
}
