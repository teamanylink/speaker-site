import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn } from './ui/TestimonialsColumn';

// Twitter screenshot testimonials with different heights for masonry effect
const testimonials = [
  {
    image: "/assets/testimonials/ian-bohen-tweet.png",
    alt: "Ian Bohen praising Denis Estimon on Twitter",
    height: "medium" // Approximately 300-400px
  },
  {
    image: "/assets/testimonials/nas-post.png",
    alt: "NAS giving props to Denis Estimon",
    height: "small" // Approximately 200-250px
  },
  {
    image: "/assets/testimonials/tobias-harris-tweet.png",
    alt: "Tobias Harris endorsement of Denis Estimon",
    height: "small"
  },
  {
    image: "/assets/testimonials/3musketeers-tweet.png",
    alt: "3 Musketeers tweet about Denis Estimon and BeMore campaign",
    height: "large" // Approximately 500-700px with image
  },
  {
    image: "/assets/testimonials/boca-voice-tweet.png",
    alt: "The Boca Voice article about Denis Estimon",
    height: "small"
  },
  {
    image: "/assets/testimonials/dr-champagnie-tweet.png",
    alt: "Dr. Althea Champagnie tweet about Denis Estimon",
    height: "medium"
  },
  {
    image: "/assets/testimonials/palm-beach-schools-tweet.png",
    alt: "Palm Beach County Schools praising Denis Estimon",
    height: "medium"
  },
  {
    image: "/assets/testimonials/balancing-act-post2.png",
    alt: "The Balancing Act video featuring Denis Estimon",
    height: "large"
  },
  {
    image: "/assets/testimonials/pam-pettengell-post.png",
    alt: "Pam Pettengell post about Agents of Change conference with Denis Estimon",
    height: "large"
  },
];

// Distribute testimonials across columns for masonry effect
const firstColumn = [testimonials[0], testimonials[3], testimonials[6]];
const secondColumn = [testimonials[1], testimonials[4], testimonials[7]];
const thirdColumn = [testimonials[2], testimonials[5], testimonials[8]];

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
            What <span className="font-medium">people</span> are saying
          </h2>
          <p className="text-center mt-5 text-xl text-gray-600 leading-relaxed">
            From celebrities to educators, see the real impact of the movement.
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