import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const AntiBullyingSpeaker = () => {
  const pageData = {
    title: "Anti-Bullying Speaker for Schools",
    subtitle: "Creating safe, inclusive school environments where every student feels valued, respected, and empowered to stand up for others.",
    description: "Denis Estimon's anti-bullying programs go beyond awareness to create lasting cultural change. Through interactive presentations and practical strategies, Denis empowers students, teachers, and administrators to build schools where kindness leads and every voice matters.",
    keyPoints: [
      "Evidence-based anti-bullying strategies that create lasting change",
      "Interactive programs that engage students as active participants",
      "Addresses cyberbullying, social exclusion, and physical intimidation",
      "Empowers bystanders to become upstanders",
      "Provides practical tools for teachers and administrators"
    ],
    targetAudience: "Middle & Elementary Schools",
    topics: [
      "Understanding Different Types of Bullying",
      "From Bystander to Upstander",
      "Building Empathy and Emotional Intelligence",
      "Cyberbullying Prevention & Response",
      "Creating Inclusive Classroom Communities",
      "Conflict Resolution Skills",
      "Building Self-Confidence in Victims",
      "Teacher & Staff Training Programs"
    ],
    benefits: [
      "Significant reduction in bullying incidents",
      "Improved school climate and safety",
      "Increased student reporting of bullying",
      "Enhanced peer relationships and empathy",
      "Better teacher confidence in handling bullying",
      "Stronger parent-school partnerships",
      "Improved student mental health outcomes",
      "Long-term cultural transformation"
    ],

    ctaText: "Book Anti-Bullying Program",
    seoTitle: "Anti-Bullying Speaker for Schools | Denis Estimon | Middle School Programs",
    metaDescription: "Professional anti-bullying speaker Denis Estimon creates safe school environments. Expert programs for middle schools focused on prevention and intervention. Book today."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="anti-bullying speaker, middle school speaker, bullying prevention programs, school safety speaker, cyberbullying prevention, upstander training" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/anti-bullying-speaker-schools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/anti-bullying-speaker-schools" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Anti-Bullying Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/anti-bullying-speaker-schools",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Anti-Bullying Speaking and Training Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default AntiBullyingSpeaker;
