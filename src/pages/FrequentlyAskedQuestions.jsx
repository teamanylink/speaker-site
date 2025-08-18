import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FrequentlyAskedQuestions() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What does Denis Estimon speak about?",
      answer: "Denis Estimon speaks about AI strategy and navigation, movement building, youth empowerment, leadership development, and human flourishing. As a software company owner with first-hand AI experience, he helps audiences understand how to thrive in the AI landscape while maintaining authentic human connections through his signature Movement Framework™."
    },
    {
      question: "How much does Denis Estimon charge for speaking?",
      answer: "Denis Estimon's speaking fees vary based on event type, duration, location, and specific requirements. Factors include keynote vs. workshop format, travel requirements, and customization needs. Contact his team for a personalized quote based on your event's specific needs and budget."
    },
    {
      question: "What makes Denis Estimon different from other motivational speakers?",
      answer: "Denis Estimon is a global movement founder, AI strategist, and software company owner who brings first-hand experience in how AI is shaping our world. As a Haitian American father of four and former global organization director, he combines authentic life experience with cutting-edge AI insights. His work has reached millions and been featured on People Magazine, CBS, ABC, and NBC."
    },
    {
      question: "What is Denis Estimon's Movement Framework?",
      answer: "The Movement Framework™ is Denis's signature methodology that helps individuals and organizations confront conflict, cultivate connections, create community, and communicate a story. This framework is at the forefront of human flourishing and helps people navigate the AI landscape while building authentic movements that create lasting change."
    },
    {
      question: "What types of events does Denis Estimon speak at?",
      answer: "Denis speaks at high schools, colleges, universities, corporate events, non-profit organizations, conferences, graduation ceremonies, and youth programs. He customizes his presentations for each audience, whether it's student assemblies, leadership conferences, or professional development events."
    },
    {
      question: "How long are Denis Estimon's presentations?",
      answer: "Denis offers flexible presentation formats including 45-60 minute keynotes, 90-minute workshops, half-day programs, and full-day intensives. The format is customized based on your event's needs, audience size, and desired outcomes."
    },
    {
      question: "Does Denis Estimon offer virtual speaking?",
      answer: "Yes, Denis offers both in-person and virtual speaking engagements. His virtual presentations are highly interactive and engaging, utilizing technology to create meaningful connections with remote audiences while maintaining the impact of his message."
    },
    {
      question: "What audiences does Denis Estimon work with?",
      answer: "Denis works with diverse audiences including high school students, college students, young professionals, educators, corporate teams, non-profit organizations, and community groups. He specializes in youth empowerment but also works effectively with adult audiences seeking purpose and positive change."
    },
    {
      question: "How far in advance should we book Denis Estimon?",
      answer: "It's recommended to book Denis 3-6 months in advance, especially for peak speaking seasons (fall and spring for schools, conference seasons for corporate events). However, he may have availability for last-minute bookings depending on his schedule."
    },
    {
      question: "What do clients say about Denis Estimon's speaking?",
      answer: "Clients consistently praise Denis for his authentic approach, practical AI insights, and lasting impact. Organizations like Rotary International, National PTA, 4-H, MassMutual, and brands like 3 Musketeers have trusted him to deliver transformative experiences. His work has reached millions and been featured on People Magazine, CBS, ABC, and NBC."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Denis Estimon Speaker</title>
        <meta name="description" content="Get answers to common questions about booking Denis Estimon for speaking engagements. Learn about his topics, fees, availability, and what makes him different." />
        
        {/* FAQ Schema for AI optimization */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Frequently Asked <span className="font-medium">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about booking Denis Estimon for your next event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get in touch to discuss your specific event needs and learn how Denis can help create a movement at your organization.
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base bg-black text-white hover:bg-gray-800"
              >
                <Link to={createPageUrl('booking')}>
                  Contact Denis's Team
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
