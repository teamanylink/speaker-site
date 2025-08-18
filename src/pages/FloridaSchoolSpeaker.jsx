import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const FloridaSchoolSpeaker = () => {
  const pageData = {
    title: "Motivational Speaker for Schools in Florida",
    subtitle: "Bringing the Movement Method to Florida schools - inspiring students, empowering educators, and transforming school communities across the Sunshine State.",
    description: "Denis Estimon is proud to serve Florida schools with transformative speaking programs. From Miami to Jacksonville, Tampa to Orlando, Denis brings customized presentations that address the unique needs of Florida's diverse student populations while building stronger, more inclusive school communities.",
    keyPoints: [
      "Extensive experience serving Florida schools statewide",
      "Culturally responsive programming for Florida's diverse communities",
      "Flexible scheduling for Florida school calendars and events",
      "Proven track record with Florida Department of Education partnerships",
      "Local understanding of Florida educational challenges and opportunities"
    ],
    targetAudience: "Florida K-12 Schools & Districts",
    topics: [
      "Building Resilient Florida Communities",
      "Celebrating Cultural Diversity in Schools",
      "Hurricane & Crisis Resilience for Students",
      "Florida Leadership Development Programs",
      "Anti-Bullying Initiatives for Florida Schools",
      "College & Career Readiness in Florida",
      "Mental Health Awareness for Florida Teens",
      "Creating Inclusive Florida Classrooms"
    ],
    benefits: [
      "Improved school climate across Florida districts",
      "Enhanced student engagement and achievement",
      "Stronger community partnerships",
      "Reduced disciplinary incidents",
      "Increased college and career readiness",
      "Better mental health support systems",
      "Enhanced cultural competency",
      "Long-term positive school transformation"
    ],

    ctaText: "Book Denis for Your Florida School",
    seoTitle: "Florida School Speaker | Motivational Speaker | Denis Estimon | K-12 Programs",
    metaDescription: "Top motivational speaker for Florida schools. Denis Estimon serves Miami, Orlando, Tampa, Jacksonville with proven student empowerment programs. Book your Florida event."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="Florida school speaker, motivational speaker Florida, Miami school speaker, Orlando school speaker, Tampa school speaker, Jacksonville school speaker, Florida education speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/florida-school-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/florida-school-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Motivational Speaker for Florida Schools",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/florida-school-speaker",
            "areaServed": {
              "@type": "State",
              "name": "Florida"
            },
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Motivational Speaking Services for Florida Schools",
              "category": "Educational Services",
              "areaServed": {
                "@type": "State",
                "name": "Florida"
              }
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default FloridaSchoolSpeaker;
