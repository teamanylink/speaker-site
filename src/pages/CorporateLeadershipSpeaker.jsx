import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const CorporateLeadershipSpeaker = () => {
  const pageData = {
    title: "Corporate Leadership Training Speaker",
    subtitle: "Transforming teams and leaders through the Movement Method - building trust, clarity, and sustainable momentum in your organization.",
    description: "Denis Estimon brings the Movement Method to corporate environments, helping leaders build high-trust teams, navigate change effectively, and create cultures where people thrive. With experience serving Fortune 500 companies and growing startups, Denis delivers practical leadership strategies that drive real results.",
    keyPoints: [
      "Proven Movement Method for building high-performing teams",
      "Addresses real leadership challenges: trust, communication, change management",
      "Interactive workshops that engage all levels of leadership",
      "Customized content for your organization's specific goals",
      "Measurable outcomes and long-term culture transformation"
    ],
    targetAudience: "Corporate Teams & Leaders",
    topics: [
      "The Movement Method for Leaders",
      "Building High-Trust Teams",
      "Leading Through Change & Uncertainty",
      "Effective Communication Strategies",
      "Creating Psychological Safety",
      "Developing Next-Gen Leaders",
      "Building Inclusive Team Cultures",
      "Sustainable Performance & Well-being"
    ],
    benefits: [
      "Improved team trust and collaboration",
      "Enhanced leadership effectiveness",
      "Better change management outcomes",
      "Increased employee engagement",
      "Stronger organizational culture",
      "Reduced turnover and burnout",
      "Improved communication across teams",
      "Measurable performance improvements"
    ],
    faqItems: [
      {
        question: "What is the Movement Method?",
        answer: "The Movement Method is Denis's framework for building high-trust teams through clear communication, shared purpose, and sustainable momentum."
      },
      {
        question: "How long are corporate training sessions?",
        answer: "Training sessions range from 2-hour workshops to full-day intensives, with multi-session programs available for deeper transformation."
      },
      {
        question: "Do you offer follow-up support?",
        answer: "Yes, Denis provides implementation resources and follow-up coaching to ensure lasting organizational change."
      },
      {
        question: "What size teams does Denis work with?",
        answer: "Denis works with teams of all sizes, from small leadership groups to company-wide presentations for hundreds of employees."
      }
    ],

    ctaText: "Book Corporate Training",
    seoTitle: "Corporate Leadership Training Speaker | Denis Estimon | Team Building Expert",
    metaDescription: "Expert corporate leadership speaker Denis Estimon delivers team building and leadership training. Professional Movement Method for organizational development. Book your training."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="corporate leadership speaker, leadership training speaker, team building speaker, corporate trainer, executive speaker, leadership development" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/corporate-leadership-training-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/corporate-leadership-training-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Corporate Leadership Training Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/corporate-leadership-training-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Corporate Leadership Training and Speaking Services",
              "category": "Business Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default CorporateLeadershipSpeaker;
