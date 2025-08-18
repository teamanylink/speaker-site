import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const MentalHealthSpeakerTeens = () => {
  const pageData = {
    title: "Mental Health Awareness Speaker for Teens",
    subtitle: "Breaking stigma, building resilience, and empowering teens with practical tools for mental wellness and emotional strength.",
    description: "Denis Estimon addresses teen mental health with authenticity, hope, and practical strategies. Through vulnerable storytelling and evidence-based approaches, Denis helps teenagers understand mental health, build resilience, and create supportive communities where seeking help is seen as strength.",
    keyPoints: [
      "Authentic, stigma-free approach to teen mental health",
      "Practical tools for stress management and emotional regulation",
      "Addresses anxiety, depression, social media pressure, and academic stress",
      "Empowers teens to support themselves and their peers",
      "Creates safe spaces for mental health conversations"
    ],
    targetAudience: "Teen & High School Communities",
    topics: [
      "Understanding Mental Health & Wellness",
      "Breaking Mental Health Stigma",
      "Managing Anxiety & Stress",
      "Building Emotional Resilience",
      "Social Media & Mental Health",
      "When & How to Seek Help",
      "Supporting Friends in Crisis",
      "Creating Supportive Communities"
    ],
    benefits: [
      "Reduced mental health stigma among students",
      "Increased help-seeking behavior",
      "Better stress management skills",
      "Enhanced peer support networks",
      "Improved emotional regulation",
      "Greater mental health awareness",
      "Stronger school counseling partnerships",
      "Reduced crisis incidents"
    ],

    ctaText: "Book Mental Health Program",
    seoTitle: "Mental Health Speaker for Teens | Denis Estimon | Teen Wellness Programs",
    metaDescription: "Expert teen mental health speaker Denis Estimon breaks stigma and builds resilience. Professional mental wellness programs for schools. Book your program."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="mental health speaker for teens, teen mental health awareness, youth mental wellness speaker, teen anxiety speaker, adolescent mental health programs, teen suicide prevention speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/mental-health-speaker-teens" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/mental-health-speaker-teens" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Mental Health Awareness Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/mental-health-speaker-teens",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Teen Mental Health Awareness Speaking Services",
              "category": "Health Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default MentalHealthSpeakerTeens;
