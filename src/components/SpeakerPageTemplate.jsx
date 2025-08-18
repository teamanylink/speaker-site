import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { InfiniteSlider } from './ui/BlurredInfiniteSlider';
import StorySection from './StorySection';
import BookingFormPopup from './BookingFormPopup';

// News logos
const newsLogos = [
  { src: '/assets/072ee272d_people.png', alt: 'People Magazine', height: 45 },
  { src: '/assets/d3a053626_blackenterprise.png', alt: 'Black Enterprise', height: 32 },
  { src: '/assets/2998525e1_huffpost.png', alt: 'HuffPost', height: 40 },
  { src: '/assets/5ae9f9897_mic.png', alt: 'Mic', height: 55 },
  { src: '/assets/a8b2bdec7_cbs.png', alt: 'CBS', height: 40 },
  { src: '/assets/099421306_abc.png', alt: 'ABC News', height: 40 },
];

// Organization logos
const organizationLogos = [
  { src: '/assets/d7ae718ec_rotary.png', alt: 'Rotary International', height: 50 },
  { src: '/assets/721cce736_pta.png', alt: 'National PTA', height: 50 },
  { src: '/assets/4c5a6a36a_4h.png', alt: '4-H', height: 55 },
  { src: '/assets/79b9a403a_be-strong.png', alt: 'Be Strong', height: 50 },
  { src: '/assets/5ac8fe6f8_mass-mutual.png', alt: 'MassMutual', height: 40 },
  { src: '/assets/75fa00ca3_mars-wrigley.png', alt: 'Mars Wrigley', height: 40 },
  { src: '/assets/2d054cb2b_chamber.png', alt: 'Greater NY Chamber of Commerce', height: 60 },
];

const SpeakerPageTemplate = ({ 
  title, 
  subtitle, 
  description, 
  keyPoints, 
  ctaText = "Book Denis for Your Event",
  seoTitle,
  metaDescription,
  targetAudience,
  topics,
  benefits,
  faqItems = []
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head would be handled by React Helmet or similar */}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/assets/hero.mp4"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              {subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {ctaText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(true)}
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-all duration-300"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Denis Speak</span>
              </motion.button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/80 px-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">Professional Speaker</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span className="font-medium text-sm sm:text-base">Movement Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">Available Nationwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* As Seen On - Right after Hero */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-600">
              As seen on
            </h2>
          </div>

          <div>
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
            >
              {newsLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-16">
                  <img
                    className="max-h-full w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: `${Math.min(logo.height, 40)}px` }}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Transforming Lives Through Movement
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {description}
              </p>
              
              {/* Key Points */}
              <div className="space-y-3 sm:space-y-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
                                  <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] before:absolute before:inset-0 before:rounded-2xl sm:before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:pointer-events-none">
                      <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                        <img
                          src="/assets/denis-speaker-new.jpg"
                          alt="Denis Estimon speaking"
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        />
                      </div>
                      <div className="text-center mt-4 sm:mt-6 relative z-10">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Denis Estimon</h3>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">Movement Speaker & Leadership Expert</p>
                      </div>
                    </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience & Topics */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Perfect For Your {targetAudience}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Topics Covered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Topics Covered</h3>
              <div className="space-y-3 sm:space-y-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What You'll Gain</h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Organizations */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-600">
              Trusted by Organizations
            </h2>
          </div>

          <div className="overflow-hidden">
            <InfiniteSlider
              speedOnHover={25}
              speed={45}
              gap={120}
              reverse={true}
            >
              {organizationLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-16">
                  <img
                    className="max-h-full w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: `${Math.min(logo.height, 40)}px` }}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-4 sm:p-6"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Story Section */}
      <StorySection />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="relative max-w-4xl w-full aspect-video bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 text-white rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
              src="/assets/speaker-video.mp4"
            />
          </div>
        </div>
      )}

      {/* Booking Form Popup */}
      <BookingFormPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        eventType={title}
      />
    </div>
  );
};

export default SpeakerPageTemplate;
