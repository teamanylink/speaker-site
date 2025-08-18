
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award } from 'lucide-react';

export default function StorySection() {
  const achievements = [
    { icon: Users, title: "Global Movement Builder", description: "Launched a worldwide movement that reached millions, starting from a simple idea to fight loneliness." },
    { icon: Globe, title: "Fortune 500 Collaborator", description: "Worked and collaborated with major corporations, bringing movement principles to organizational transformation." },
    { icon: Award, title: "Movement Framework Creator", description: "Developed the Movement Framework to help individuals become the movements they were created to be." }
  ];

  return (
    <section className="py-24 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">From Language Barriers to Global Impact</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Coming to America as an immigrant who couldn't speak the language, Denis discovered that the greatest barriers aren't external—they're internal. Through developing the Movement Framework, he learned how to help individuals unlock their potential and become the movements they were created to be.
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
