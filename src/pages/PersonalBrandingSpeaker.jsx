import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const PersonalBrandingSpeaker = () => {
  const pageData = {
    title: "Personal Branding Speaker for College Students",
    subtitle: "Empowering college students to discover their authentic voice, build their personal brand, and stand out in the competitive job market.",
    description: "Denis Estimon helps college students develop authentic personal brands that set them apart in today's competitive landscape. Through practical strategies and real-world examples, Denis teaches students how to identify their unique value, communicate their story effectively, and build professional networks that open doors to opportunity.",
    keyPoints: [
      "Practical personal branding strategies for college students",
      "Authentic approach to building professional presence",
      "Social media and digital branding best practices",
      "Networking and relationship-building skills",
      "Interview and career preparation through personal branding"
    ],
    targetAudience: "College Students & Career Services",
    topics: [
      "Discovering Your Authentic Personal Brand",
      "Building Your Professional Online Presence",
      "LinkedIn Optimization for Students",
      "Networking & Relationship Building",
      "Interview Skills & Personal Storytelling",
      "Social Media Professional Best Practices",
      "Creating Your Personal Brand Statement",
      "Standing Out in the Job Market"
    ],
    benefits: [
      "Enhanced job market competitiveness",
      "Improved interview performance",
      "Stronger professional networks",
      "Better social media presence",
      "Increased career confidence",
      "Clearer career direction and goals",
      "Enhanced communication skills",
      "Greater self-awareness and authenticity"
    ],

    ctaText: "Book Personal Branding Workshop",
    seoTitle: "Personal Branding Speaker | College Students | Denis Estimon | Career Preparation",
    metaDescription: "Expert personal branding speaker Denis Estimon helps college students build authentic professional brands. Proven strategies for job market success. Book your workshop."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="personal branding speaker, college career speaker, professional development speaker, LinkedIn speaker for students, career preparation speaker, job market speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/personal-branding-speaker-students" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/personal-branding-speaker-students" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Personal Branding Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/personal-branding-speaker-students",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Personal Branding and Career Development Speaking Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default PersonalBrandingSpeaker;
