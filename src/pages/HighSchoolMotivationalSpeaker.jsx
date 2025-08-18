import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const HighSchoolMotivationalSpeaker = () => {
  const pageData = {
    title: "High School Motivational Speaker",
    subtitle: "Inspiring the next generation to find their purpose, build confidence, and create lasting impact in the age of AI.",
    description: "Denis Estimon transforms high school assemblies into movement-building experiences. As a professional speaker and movement expert, Denis helps teenagers navigate the challenges of adolescence, build authentic confidence, and discover their unique purpose in an AI-driven world.",
    keyPoints: [
      "Professional speaker specializing in youth empowerment",
      "Addresses real teen issues: bullying, social media pressure, future anxiety",
      "Interactive presentations that engage even the most reluctant students",
      "Practical tools students can use immediately to build confidence",
      "Customized content for your school's specific challenges"
    ],
    targetAudience: "High School Community",
    topics: [
      "Finding Your Purpose in the Age of AI",
      "Building Authentic Confidence",
      "Overcoming Social Media Comparison",
      "Leadership Skills for Teens",
      "Creating Positive School Culture",
      "Future-Ready Mindset Development",
      "Peer Relationship Building",
      "Academic Motivation & Goal Setting"
    ],
    benefits: [
      "Increased student engagement and participation",
      "Improved school climate and culture",
      "Reduced bullying incidents",
      "Enhanced student leadership development",
      "Better academic motivation",
      "Stronger peer relationships",
      "Improved mental health awareness",
      "Future-ready skill development"
    ],
    faqItems: [
      {
        question: "How long is Denis's presentation?",
        answer: "Denis offers flexible presentation lengths ranging from 45-minute assemblies to full-day workshops, customized to fit your school's schedule and needs."
      },
      {
        question: "What age groups does Denis work with?",
        answer: "Denis specializes in high school students (grades 9-12) and can adapt his content for middle school audiences as well."
      },
      {
        question: "How far in advance should we book?",
        answer: "We recommend booking 2-3 months in advance to ensure availability, though Denis can sometimes accommodate shorter notice requests."
      },
      {
        question: "What does Denis need for his presentation?",
        answer: "Denis requires a microphone, projector/screen, and basic audio/visual setup. A detailed tech rider will be provided upon booking."
      },
      {
        question: "Can Denis customize his presentation for our school?",
        answer: "Absolutely! Denis works with each school to understand their specific challenges and tailors his message accordingly."
      }
    ],

    ctaText: "Book Denis for Your High School",
    seoTitle: "High School Motivational Speaker | Denis Estimon | Student Assembly Speaker",
    metaDescription: "Book Denis Estimon, professional high school motivational speaker. Expert in confidence-building, anti-bullying, and leadership programs for students. Available nationwide."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="high school motivational speaker, student assembly speaker, teen motivational speaker, high school keynote speaker, youth speaker, student empowerment speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/high-school-motivational-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/high-school-motivational-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "High School Motivational Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/high-school-motivational-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "High School Motivational Speaking Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default HighSchoolMotivationalSpeaker;
