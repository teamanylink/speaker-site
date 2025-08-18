import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function AboutDenisEstimon() {
  return (
    <>
      <Helmet>
        <title>Who is Denis Estimon? | Professional Motivational Speaker Biography</title>
        <meta name="description" content="Denis Estimon is a professional motivational speaker who helps people become movements. Learn about his background, expertise, and unique Movement Framework™ approach." />
        
        {/* FAQ Schema for AI optimization */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Denis Estimon?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Denis Estimon is a global movement founder, speaker, and AI strategist who helps people navigate the AI landscape while building authentic connections. A Haitian American husband and father of four, Denis is the creator of the Movement Framework™ and owns a software company. His work has reached millions and been featured on People Magazine, CBS, ABC, and NBC."
              }
            },
            {
              "@type": "Question", 
              "name": "What does Denis Estimon speak about?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Denis Estimon speaks about youth empowerment, leadership development, anti-bullying, mental health awareness, diversity & inclusion, personal branding, and movement building. His presentations focus on helping people find purpose and create authentic impact."
              }
            },
            {
              "@type": "Question",
              "name": "What is Denis Estimon's Movement Framework?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "The Movement Framework™ is Denis Estimon's signature methodology that helps individuals and organizations confront conflict, cultivate connections, create community, and communicate a story. This framework is at the forefront of human flourishing and helps people navigate the AI landscape while maintaining authentic human connections."
              }
            }
          ]
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Who is <span className="font-medium">Denis Estimon</span>?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Denis Estimon is a global movement founder, speaker, and AI strategist who helps people navigate the AI landscape while building authentic connections and creating lasting positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-8 mb-12"
            >
              <h2 className="text-2xl font-medium mb-4">Quick Answer</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Denis Estimon is a global movement founder, speaker, and AI strategist who owns a software company and has first-hand experience in how AI is shaping the world. A Haitian American husband and father of four, Denis is the creator of the Movement Framework™ that helps people confront conflict, cultivate connections, create community, and communicate their story. His work has reached millions and been featured on People Magazine, CBS, ABC, and NBC.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Biography */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/assets/denis-speaker-new.jpg"
                  alt="Denis Estimon speaking"
                  className="w-full rounded-3xl shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-medium">Professional Background</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Denis Estimon is a global movement founder, speaker, and AI strategist whose work has reached millions worldwide. As a former director of a global organization and current owner of a software company, Denis brings first-hand experience in how AI is shaping our world and affecting our relationship with work and identity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Haitian American husband and father of four children, Denis has worked with major brands like 3 Musketeers and has been featured on People Magazine, CBS, ABC, and NBC. His initiatives and companies are at the forefront of human flourishing, helping people navigate the AI landscape while maintaining authentic human connections.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As the creator of the Movement Framework™, Denis has developed a proven methodology that helps individuals and organizations confront conflict, cultivate connections, create community, and communicate a story that moves others to action.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light mb-6">Areas of Expertise</h2>
              <p className="text-xl text-gray-600">Denis Estimon specializes in these key areas:</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Strategy & Navigation",
                  description: "Helping individuals and organizations understand and navigate the AI landscape while maintaining human connection and identity."
                },
                {
                  title: "Movement Building",
                  description: "Teaching the Movement Framework™ to help people confront conflict, cultivate connections, create community, and communicate their story."
                },
                {
                  title: "Youth Empowerment",
                  description: "Helping young people find their voice, build confidence, and create positive impact in the age of AI."
                },
                {
                  title: "Leadership Development", 
                  description: "Developing authentic leaders who inspire others through purpose-driven action and genuine connection in a digital world."
                },
                {
                  title: "Human Flourishing",
                  description: "Creating initiatives and strategies that put human flourishing at the forefront while embracing technological advancement."
                },
                {
                  title: "Organizational Transformation",
                  description: "Leveraging his experience as a former global organization director to help companies adapt and thrive in the AI era."
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-medium mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-light mb-6">Ready to Create a Movement?</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how Denis Estimon can help your organization build lasting positive change.
              </p>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-base bg-black text-white hover:bg-gray-800"
              >
                <Link to={createPageUrl('booking')}>
                  Book Denis to Speak
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
