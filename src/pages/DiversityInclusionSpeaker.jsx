import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const DiversityInclusionSpeaker = () => {
  const pageData = {
    title: "Diversity & Inclusion Speaker for Universities",
    subtitle: "Building inclusive campus communities where every student feels valued, heard, and empowered to contribute their unique perspective and talents.",
    description: "Denis Estimon brings authentic diversity and inclusion programming to university campuses. As a first-generation college graduate and movement leader, Denis helps students and staff create genuinely inclusive environments where differences are celebrated and everyone can thrive.",
    keyPoints: [
      "Authentic perspective as a first-generation college graduate",
      "Interactive programs that foster genuine understanding and connection",
      "Addresses unconscious bias, microaggressions, and systemic barriers",
      "Practical strategies for building inclusive campus communities",
      "Customized content for your institution's diversity goals"
    ],
    targetAudience: "University & College Communities",
    topics: [
      "Building Authentic Inclusive Communities",
      "Understanding Unconscious Bias",
      "Microaggressions: Recognition & Response",
      "First-Generation Student Success",
      "Cultural Competency Development",
      "Allyship & Advocacy Skills",
      "Creating Psychologically Safe Spaces",
      "Celebrating Differences as Strengths"
    ],
    benefits: [
      "Improved campus climate and inclusion",
      "Enhanced cross-cultural understanding",
      "Reduced bias incidents and conflicts",
      "Increased student retention and success",
      "Stronger sense of belonging for all students",
      "Better preparation for diverse workplaces",
      "Enhanced leadership development",
      "More inclusive institutional practices"
    ],

    ctaText: "Book Diversity Program",
    seoTitle: "Diversity & Inclusion Speaker | Denis Estimon | University Campus Programs",
    metaDescription: "Expert diversity and inclusion speaker Denis Estimon creates inclusive university communities. Authentic first-gen perspective. Proven campus transformation programs."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="diversity and inclusion speaker, university diversity speaker, campus inclusion programs, diversity training speaker, cultural competency speaker, first-generation speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/diversity-inclusion-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/diversity-inclusion-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Diversity & Inclusion Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/diversity-inclusion-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Diversity and Inclusion Speaking and Training Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default DiversityInclusionSpeaker;
