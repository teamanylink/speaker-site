import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/TestimonialsColumn';

const testimonials = [
  {
    text: "The most relevant, actionable, and inspiring talk we've had in years.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Director of Student Affairs, State University",
  },
  {
    text: "Our students walked out ready to take on the world — and they haven't stopped talking about it.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Dean of Students, Community College",
  },
  {
    text: "Denis's framework was a game-changer. Our students are now building their future with confidence.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Career Services Coordinator",
  },
  {
    text: "The session seamlessly integrated with our leadership program, enhancing its impact significantly.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "VP of Student Life",
  },
  {
    text: "His energy is contagious. He connected with our students on a level we've rarely seen from a speaker.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Event Organizer, Tech Conference",
  },
  {
    text: "The actionable steps he provided made it easy for students to start immediately. A truly transformative experience.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Leadership Program Manager",
  },
  {
    text: "He doesn't just motivate; he equips. Our students left with a tangible plan for their future.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "University Chancellor",
  },
  {
    text: "One of the best investments we've made for our student body. The feedback has been overwhelmingly positive.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Head of University Events",
  },
  {
    text: "Denis has a unique gift for turning complex topics like AI and the future of work into inspiring, understandable concepts.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Professor of Entrepreneurship",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            What <span className="font-medium">audiences</span> are saying
          </h2>
          <p className="text-center mt-5 text-xl text-gray-600 leading-relaxed">
            Don't just take my word for it. See what event organizers and university staff have to say about the impact of my talks.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
      </div>
    </section>
  );
}