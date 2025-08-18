import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award } from 'lucide-react';

const StorySection = () => {
  const achievements = [
    {
      icon: Users,
      title: "Founded We Dine Together",
      description: "Started a movement at 17 to ensure no student eats alone."
    },
    {
      icon: Globe,
      title: "Reached Millions Globally",
      description: "My story was shared with over 30 million people worldwide."
    },
    {
      icon: Award,
      title: "Recognized by National Media",
      description: "Featured on CBS, ABC News, People Magazine, and more."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            My Story Started with Connection—Now<br />
            It's About Courage in an AI World
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            It all started with 'We Dine Together'—a movement I founded to fight loneliness. That experience 
            taught me how to build real human connection. Today, I apply those same principles to help 
            students build the resilience and adaptability they need to thrive in an age of artificial 
            intelligence.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-2xl sm:before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
              <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                <img
                  src="/assets/00806c54e_IMG_5487.jpg"
                  alt="Denis Estimon speaking passionately with microphone"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
