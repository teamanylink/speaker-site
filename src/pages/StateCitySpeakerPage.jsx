import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  Phone,
  Mail,
  Star
} from 'lucide-react';
import { statesData } from '../data/states';

function slugify(value) {
  return (value || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const createPageUrl = (pageName) => '/' + pageName.toLowerCase().replace(/ /g, '-');

export default function StateCitySpeakerPage() {
  const { state, city } = useParams();
  const [stateData, setStateData] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stateSlug = (state || '').toLowerCase();
    const foundState = statesData.find((s) => (s.slug || '').toLowerCase() === stateSlug);
    if (!foundState) {
      setStateData(null);
      setCityName(null);
      setChecked(true);
      return;
    }

    const requestedCitySlug = slugify(city || '');
    const matchCity = (foundState.majorCities || []).find(
      (c) => slugify(c) === requestedCitySlug
    );

    setStateData(foundState);
    setCityName(matchCity || null);
    setChecked(true);
  }, [state, city]);

  const pageTitle = useMemo(() => {
    if (!stateData || !cityName) return 'City page not found';
    return `Denis Estimon - Motivational Speaker in ${cityName}, ${stateData.abbreviation} | Book Now`;
  }, [stateData, cityName]);

  if (!checked) return null;

  if (!stateData || !cityName) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <div className="max-w-lg text-center">
          <h1 className="text-2xl font-semibold mb-3">City page not found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find a page for “{city}” in “{state}”. Please select your state from the full list and choose a supported city.
          </p>
          <a className="underline text-blue-600" href="/speakers-by-state">Browse all states</a>
        </div>
      </div>
    );
  }

  const description = `Book Denis Estimon, professional motivational speaker, for events in ${cityName}, ${stateData.abbreviation}. Specializing in youth empowerment, leadership development, and the Movement Framework™. Serving all of ${stateData.name}.`;

  const speakingTopics = [
    'Youth Empowerment & Leadership',
    'The Movement Framework™',
    'Navigating AI & Future Careers',
    'Building Authentic Confidence',
    'Overcoming Challenges & Adversity',
    'Diversity & Inclusion',
    'Anti-Bullying & Mental Health',
    'Personal Branding for Students',
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`motivational speaker ${cityName} ${stateData.abbreviation}, keynote speaker ${cityName}, youth speaker ${cityName}, Denis Estimon ${cityName}, school assembly speaker ${cityName}`}
        />
        <link rel="canonical" href={`https://denisestimon.com/speaker/${stateData.slug}/${slugify(cityName)}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Motivational Speaking in ${cityName}, ${stateData.abbreviation}`,
            description,
            provider: {
              '@type': 'Person',
              name: 'Denis Estimon',
              jobTitle: 'Professional Motivational Speaker',
            },
            areaServed: {
              '@type': 'City',
              name: cityName,
              addressRegion: stateData.abbreviation,
              addressCountry: 'US',
            },
            serviceType: 'Motivational Speaking',
            audience: ['High Schools', 'Colleges and Universities', 'Corporate Organizations', 'Community Groups'],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'States',
                item: 'https://denisestimon.com/speakers-by-state',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: stateData.name,
                item: `https://denisestimon.com/speaker/${stateData.slug}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: cityName,
                item: `https://denisestimon.com/speaker/${stateData.slug}/${slugify(cityName)}`,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#95bbc2]" />
                  <span className="text-[#95bbc2] font-medium">Serving {cityName}, {stateData.abbreviation}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
                  Professional <span className="font-medium">Motivational Speaker</span> in {cityName}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Denis Estimon brings his signature Movement Framework™ to {cityName}, helping students, organizations, and communities create lasting positive change across {stateData.name}.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="h-12 rounded-full px-8 text-base bg-black text-white hover:bg-gray-800">
                    <Link to={createPageUrl('booking')}>
                      <span>Book Denis in {cityName}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-8 text-base border-2 border-gray-300 hover:bg-gray-50">
                    <Link to={createPageUrl('about-denis-estimon')}>Learn About Denis</Link>
                  </Button>
                </div>

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

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <img src="/assets/denis-speaker-new.jpg" alt={`Denis Estimon speaking in ${cityName}, ${stateData.abbreviation}`} className="w-full rounded-2xl shadow-lg" />
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

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className="text-4xl font-light mb-6">Speaking Topics for <span className="font-medium">{cityName}</span></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Customized presentations that resonate with {cityName} audiences and address local challenges throughout {stateData.name}.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakingTopics.map((topic, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-[#95bbc2] mb-3" />
                  <h3 className="font-medium text-gray-900">{topic}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className="text-4xl font-light mb-6">Nearby Venues We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Denis speaks at diverse venues across {stateData.name}, from {stateData.majorCities.slice(0, 3).join(' to ')} and more.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {(stateData.speakingVenues || []).map((venue, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#95bbc2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-[#95bbc2]" />
                  </div>
                  <h3 className="font-medium text-gray-900">{venue}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-[#95bbc2] to-[#6b9ca3] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Book Denis in <span className="font-medium">{cityName}</span>?</h2>
              <p className="text-xl mb-8 opacity-90">Transform your next event with the Movement Framework™. Available for bookings throughout {cityName} and all of {stateData.name}.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="h-12 rounded-full px-8 text-base bg-white text-gray-900 hover:bg-gray-100">
                  <Link to={createPageUrl('booking')}>
                    <span>Book Now for {cityName}</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-8 text-base border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
                  <Link to={createPageUrl('frequently-asked-questions')}>View FAQ</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Available for {cityName} bookings</span>
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

