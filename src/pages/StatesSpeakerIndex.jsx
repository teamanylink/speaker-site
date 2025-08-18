import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Users, Building2 } from 'lucide-react';
import { statesData } from '../data/states';

export default function StatesSpeakerIndex() {
  const regions = {
    "Northeast": statesData.filter(state => state.region === "Northeast"),
    "Southeast": statesData.filter(state => state.region === "Southeast"),
    "Midwest": statesData.filter(state => state.region === "Midwest"),
    "Southwest": statesData.filter(state => state.region === "Southwest"),
    "West": statesData.filter(state => state.region === "West"),
    "West Coast": statesData.filter(state => state.region === "West Coast"),
    "Mountain West": statesData.filter(state => state.region === "Mountain West"),
    "Pacific Northwest": statesData.filter(state => state.region === "Pacific Northwest"),
    "Pacific": statesData.filter(state => state.region === "Pacific"),
    "Mid-Atlantic": statesData.filter(state => state.region === "Mid-Atlantic"),
    "South": statesData.filter(state => state.region === "South")
  };

  return (
    <>
      <Helmet>
        <title>Denis Estimon - Motivational Speaker Available in All 50 States</title>
        <meta name="description" content="Book Denis Estimon, professional motivational speaker, for events in any of the 50 US states. Specializing in youth empowerment, leadership development, and the Movement Framework™." />
        <meta name="keywords" content="motivational speaker USA, keynote speaker all states, youth speaker nationwide, Denis Estimon speaking tour, school assembly speaker America" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Nationwide Motivational Speaking Services",
          "description": "Denis Estimon provides professional motivational speaking services across all 50 US states, specializing in youth empowerment and the Movement Framework™.",
          "provider": {
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Professional Motivational Speaker"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Motivational Speaking"
        })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-[#95bbc2]" />
                <span className="text-[#95bbc2] font-medium text-lg">Serving All 50 States</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                Professional <span className="font-medium">Motivational Speaker</span><br />
                Available Nationwide
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                Denis Estimon brings his signature Movement Framework™ to communities across America. From Alaska to Florida, California to Maine - transforming lives through authentic, purpose-driven speaking engagements.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95bbc2]">50</div>
                  <div className="text-sm text-gray-600">States Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95bbc2]">500+</div>
                  <div className="text-sm text-gray-600">Events Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95bbc2]">1M+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95bbc2]">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* States by Region */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light mb-6">
                Choose Your <span className="font-medium">State</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Click on any state to learn about Denis's speaking services in your area, including local challenges addressed and venue options.
              </p>
            </motion.div>

            {Object.entries(regions).map(([regionName, regionStates]) => {
              if (regionStates.length === 0) return null;
              
              return (
                <motion.div
                  key={regionName}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-medium mb-6 text-center text-gray-800">
                    {regionName} Region
                  </h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {regionStates.map((state, index) => (
                      <motion.div
                        key={state.slug}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                      >
                        <Link
                          to={`/speaker/${state.slug}`}
                          className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-[#95bbc2]/30"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-medium text-gray-900">{state.name}</h4>
                              <p className="text-sm text-gray-600">{state.abbreviation}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#95bbc2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{state.population}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Building2 className="w-4 h-4" />
                              <span>{state.majorCities[0]}</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500">
                            Major Cities: {state.majorCities.slice(0, 3).join(', ')}
                            {state.majorCities.length > 3 && '...'}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
                Ready to Transform Your <span className="font-medium">Community</span>?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                No matter where you're located in America, Denis Estimon can bring the Movement Framework™ to your organization.
              </p>
              
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <span>Book Denis for Your State</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
