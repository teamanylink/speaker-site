import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const GraduationCommencementSpeaker = () => {
  const pageData = {
    title: "Commencement Speaker for College Graduation",
    subtitle: "Inspiring graduates to embrace their unique journey, lead with purpose, and create meaningful impact in an AI-driven world.",
    description: "Denis Estimon delivers memorable commencement addresses that celebrate achievement while inspiring graduates for the journey ahead. With messages of hope, purpose, and practical wisdom, Denis helps graduates transition from students to leaders ready to make their mark on the world.",
    keyPoints: [
      "Inspiring messages tailored to your graduating class",
      "Addresses real post-graduation challenges and opportunities",
      "Memorable speeches that graduates will remember for years",
      "Practical wisdom for navigating career and life transitions",
      "Customized content reflecting your institution's values and mission"
    ],
    targetAudience: "College & University Graduations",
    topics: [
      "Embracing Your Unique Journey",
      "Leading with Purpose in the AI Age",
      "Turning Challenges into Opportunities",
      "Building Meaningful Relationships",
      "Creating Your Personal Legacy",
      "Navigating Career Transitions",
      "The Power of Continuous Learning",
      "Making a Difference in Your Community"
    ],
    benefits: [
      "Memorable and inspiring graduation experience",
      "Practical guidance for post-graduation success",
      "Enhanced institutional reputation",
      "Positive media coverage and social sharing",
      "Strengthened alumni connections",
      "Increased graduate confidence and motivation",
      "Meaningful celebration of achievement",
      "Long-lasting positive impact on graduates"
    ],

    ctaText: "Book Commencement Speaker",
    seoTitle: "Commencement Speaker | College Graduation Speaker | Denis Estimon",
    metaDescription: "Inspiring commencement speaker Denis Estimon delivers memorable graduation addresses. Perfect blend of inspiration and practical wisdom for college graduates."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="commencement speaker, graduation speaker, college graduation speaker, university commencement speaker, keynote graduation speaker, inspirational graduation speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/graduation-commencement-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/graduation-commencement-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Commencement Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/graduation-commencement-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Commencement and Graduation Speaking Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default GraduationCommencementSpeaker;
