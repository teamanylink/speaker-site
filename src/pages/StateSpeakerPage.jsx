import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  MapPin, 
  Users, 
  Building2, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail
} from 'lucide-react';
import { statesData } from '../data/states';

export default function StateSpeakerPage() {
  const { state } = useParams();
  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    const foundState = statesData.find(s => s.slug === state);
    setStateData(foundState);
  }, [state]);

  // If state not found, redirect to home
  if (state && !stateData && statesData.length > 0) {
    return <Navigate to="/" replace />;
  }

  if (!stateData) {
    return <div>Loading...</div>;
  }

  const speakingTopics = [
    "Youth Empowerment & Leadership",
    "The Movement Framework™",
    "Navigating AI & Future Careers", 
    "Building Authentic Confidence",
    "Overcoming Challenges & Adversity",
    "Diversity & Inclusion",
    "Anti-Bullying & Mental Health",
    "Personal Branding for Students"
  ];

  const testimonials = [
    {
      quote: "Denis transformed our school assembly into a movement-building experience. Students are still talking about his message months later.",
      author: "Principal Sarah Johnson",
      location: "High School"
    },
    {
      quote: "His Movement Framework™ gave our team practical tools for creating lasting change in our organization.",
      author: "Dr. Michael Chen", 
      location: "University"
    },
    {
      quote: "Denis's authentic approach to youth empowerment resonated with every student in our auditorium.",
      author: "Lisa Rodriguez",
      location: "Community Center"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Denis Estimon - Motivational Speaker in {stateData.name} | Book Now</title>
        <meta name="description" content={`Book Denis Estimon, professional motivational speaker, for events in ${stateData.name}. Specializing in youth empowerment, leadership development, and the Movement Framework™. Serving ${stateData.majorCities.join(', ')} and all of ${stateData.name}.`} />
        <meta name="keywords" content={`motivational speaker ${stateData.name}, keynote speaker ${stateData.name}, youth speaker ${stateData.name}, Denis Estimon ${stateData.name}, school assembly speaker ${stateData.name}`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `Motivational Speaking Services in ${stateData.name}`,
          "description": `Denis Estimon provides professional motivational speaking services throughout ${stateData.name}, specializing in youth empowerment and the Movement Framework™.`,
          "provider": {
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Professional Motivational Speaker",
            "description": "Global movement founder, speaker, and AI strategist"
          },
          "areaServed": {
            "@type": "State",
            "name": stateData.name,
            "addressRegion": stateData.abbreviation
          },
          "serviceType": "Motivational Speaking",
          "audience": [
            "High Schools",
            "Colleges and Universities", 
            "Corporate Organizations",
            "Community Groups"
          ]
        })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": `Does Denis Estimon speak in ${stateData.name}?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes, Denis Estimon provides motivational speaking services throughout ${stateData.name}, including ${stateData.majorCities.join(', ')} and surrounding areas.`
              }
            },
            {
              "@type": "Question",
              "name": `What topics does Denis Estimon cover for ${stateData.name} audiences?`,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": `Denis specializes in youth empowerment, leadership development, the Movement Framework™, AI navigation, and addressing challenges specific to ${stateData.name} communities.`
              }
            }
          ]
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#95bbc2]" />
                  <span className="text-[#95bbc2] font-medium">Serving {stateData.name}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Professional <span className="font-medium">Motivational Speaker</span> in {stateData.name}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Denis Estimon brings his signature Movement Framework™ to {stateData.name}, helping students, organizations, and communities create lasting positive change. Serving {stateData.majorCities.join(', ')} and all surrounding areas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full px-8 text-base bg-black text-white hover:bg-gray-800"
                  >
                    <Link to={createPageUrl('booking')}>
                      <span>Book Denis for {stateData.name}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-full px-8 text-base border-2 border-gray-300 hover:bg-gray-50"
                  >
                    <Link to={createPageUrl('about-denis-estimon')}>
                      Learn About Denis
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#95bbc2]">500+</div>
                    <div className="text-sm text-gray-600">Events Nationwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#95bbc2]">1M+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#95bbc2]">50</div>
                    <div className="text-sm text-gray-600">States Served</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <img
                    src="/assets/denis-speaker-new.jpg"
                    alt={`Denis Estimon speaking in ${stateData.name}`}
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-medium mb-2">Denis Estimon</h3>
                    <p className="text-gray-600">Global Movement Founder & AI Strategist</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">Trusted by 500+ Organizations</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* State-Specific Context */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light mb-6">
                Understanding <span className="font-medium">{stateData.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Denis brings deep understanding of {stateData.name}'s unique challenges and opportunities to every speaking engagement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Users className="w-8 h-8 text-[#95bbc2] mb-4" />
                <h3 className="text-xl font-medium mb-3">Population & Demographics</h3>
                <p className="text-gray-600 mb-2">{stateData.population} residents</p>
                <p className="text-sm text-gray-500">Serving diverse communities across {stateData.region}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <Building2 className="w-8 h-8 text-[#95bbc2] mb-4" />
                <h3 className="text-xl font-medium mb-3">Key Industries</h3>
                <ul className="text-gray-600 space-y-1">
                  {stateData.keyIndustries.slice(0, 4).map((industry, index) => (
                    <li key={index} className="text-sm">• {industry}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-[#95bbc2] mb-4" />
                <h3 className="text-xl font-medium mb-3">Education Focus</h3>
                <p className="text-gray-600 text-sm">{stateData.educationFocus}</p>
              </motion.div>
            </div>

            {/* Youth Challenges Addressed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-medium mb-6 text-center">
                Addressing {stateData.name} Youth Challenges
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {stateData.youthChallenges.map((challenge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#95bbc2] flex-shrink-0" />
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light mb-6">
                Speaking Topics for <span className="font-medium">{stateData.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Customized presentations that resonate with {stateData.name} audiences and address local challenges.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-[#95bbc2] mb-3" />
                  <h3 className="font-medium text-gray-900">{topic}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking Venues */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light mb-6">
                Speaking Venues in <span className="font-medium">{stateData.name}</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Denis speaks at diverse venues across {stateData.name}, from {stateData.majorCities.join(' to ')}.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {stateData.speakingVenues.map((venue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[#95bbc2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-[#95bbc2]" />
                  </div>
                  <h3 className="font-medium text-gray-900">{venue}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light mb-6">
                What <span className="font-medium">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600">
                Testimonials from organizations across the United States
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#95bbc2] to-[#6b9ca3] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to Book Denis in <span className="font-medium">{stateData.name}</span>?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Transform your next event with the Movement Framework™. Available for bookings throughout {stateData.name}.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full px-8 text-base bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Link to={createPageUrl('booking')}>
                    <span>Book Now for {stateData.name}</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full px-8 text-base border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Link to={createPageUrl('frequently-asked-questions')}>
                    View FAQ
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Available for {stateData.name} bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Quick response guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
