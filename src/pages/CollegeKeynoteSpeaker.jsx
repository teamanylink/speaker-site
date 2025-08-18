import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const CollegeKeynoteSpeaker = () => {
  const pageData = {
    title: "College Keynote Speaker",
    subtitle: "Empowering college students to thrive in the age of AI, build authentic confidence, and create their unique path to success.",
    description: "Denis Estimon delivers transformative keynote experiences for college students facing unprecedented challenges. From AI anxiety to career uncertainty, Denis provides practical strategies for building confidence, developing leadership skills, and creating meaningful impact in a rapidly changing world.",
    keyPoints: [
      "Addresses real college challenges: AI fears, career uncertainty, imposter syndrome",
      "Practical strategies for building authentic confidence and leadership",
      "Interactive keynotes that engage diverse student populations",
      "Customized content for your institution's unique student body",
      "Proven track record with major universities nationwide"
    ],
    targetAudience: "College & University Community",
    topics: [
      "Thriving in the Age of AI",
      "Building Authentic Confidence",
      "Leadership Development for Students",
      "Overcoming Imposter Syndrome",
      "Career Readiness & Future Planning",
      "Mental Health & Resilience",
      "Building Meaningful Relationships",
      "Creating Your Personal Brand"
    ],
    benefits: [
      "Increased student engagement and motivation",
      "Enhanced leadership development",
      "Improved mental health awareness",
      "Better career preparation and confidence",
      "Stronger campus community connections",
      "Reduced anxiety about the future",
      "Enhanced academic performance",
      "Greater sense of purpose and direction"
    ],
    faqItems: [
      {
        question: "What is Denis's speaking fee?",
        answer: "Speaking fees vary based on event type, duration, and location. Contact us for a customized quote for your college event."
      },
      {
        question: "Does Denis offer virtual presentations?",
        answer: "Yes, Denis offers engaging virtual keynotes and can adapt his interactive style for online audiences."
      },
      {
        question: "What makes Denis different from other speakers?",
        answer: "Denis focuses on practical, actionable strategies rather than just motivation. Students leave with tools they can implement immediately."
      },
      {
        question: "Can Denis speak at graduation ceremonies?",
        answer: "Absolutely! Denis offers both keynote presentations and commencement addresses tailored to graduating students."
      }
    ],

    ctaText: "Book Denis for Your College",
    seoTitle: "College Keynote Speaker | Denis Estimon | University Student Speaker",
    metaDescription: "Top college keynote speaker Denis Estimon inspires university students with AI readiness, leadership development, and career confidence. Book for your campus event."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="college keynote speaker, university speaker, student keynote speaker, college motivational speaker, campus speaker, student leadership speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/college-keynote-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/college-keynote-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "College Keynote Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/college-keynote-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "College Keynote Speaking Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default CollegeKeynoteSpeaker;
