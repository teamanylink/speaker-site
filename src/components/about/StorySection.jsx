
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award } from 'lucide-react';

export default function StorySection() {
  const achievements = [
    { icon: Users, title: "Global Reach", description: "I've reached millions of people globally through my work, from high school initiatives to major national platforms." },
    { icon: Globe, title: "Major Media Coverage", description: "Featured on major national news outlets and commercials during Super Bowl and Winter Olympics-sized stages." },
    { icon: Award, title: "Notable Mentions", description: "My work has been quoted by the nation's top professionals, including U.S. Surgeon General Vivek Murthy's book 'Together' and John C. Maxwell's book 'Change Your World'." }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">From High School Initiative to Global Movement</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            When I co-founded We Dine Together at my high school, I didn't realize I was starting a global movement. Over time, I discovered that the biggest barrier to becoming a movement leader isn't external—it's the false beliefs, stories, and identities you hold onto. Through confronting conflict and stepping outside my comfort zone, I cultivated connections and increased my influence, becoming the movement I was created to be. Now I help you do the same.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div 
            className="lg:col-span-2 h-full w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/assets/6e4f40074_denis_estimonCBMYWZmHPt_21.jpg" 
              alt="Denis speaking" 
              className="rounded-3xl object-cover w-full h-[500px] shadow-2xl"
            />
          </motion.div>
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {achievements.map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#95bbc2' }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
