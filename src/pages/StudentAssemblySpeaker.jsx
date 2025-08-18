import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpeakerPageTemplate from '../components/SpeakerPageTemplate';

const StudentAssemblySpeaker = () => {
  const pageData = {
    title: "Youth Empowerment Speaker for Student Assemblies",
    subtitle: "Transforming school assemblies into powerful movement experiences that inspire students to find their voice, build confidence, and create positive change.",
    description: "Denis Estimon turns ordinary school assemblies into extraordinary empowerment experiences. With high-energy presentations that engage students from kindergarten through high school, Denis delivers age-appropriate messages that inspire action, build confidence, and create lasting positive change in school culture.",
    keyPoints: [
      "Age-appropriate content for K-12 student assemblies",
      "High-energy, interactive presentations that captivate audiences",
      "Proven track record with 1000+ successful school assemblies",
      "Addresses key youth issues: confidence, bullying, leadership, purpose",
      "Flexible formats: single assembly or multi-day programs"
    ],
    targetAudience: "K-12 Student Assemblies",
    topics: [
      "Finding Your Unique Voice & Purpose",
      "Building Unshakeable Confidence",
      "Leadership Skills for Young People",
      "Creating Positive School Culture",
      "Overcoming Challenges & Setbacks",
      "The Power of Kindness & Inclusion",
      "Goal Setting & Achievement",
      "Making a Difference in Your Community"
    ],
    benefits: [
      "Increased student engagement and participation",
      "Improved school climate and culture",
      "Enhanced student leadership development",
      "Better peer relationships and inclusion",
      "Reduced behavioral issues",
      "Increased academic motivation",
      "Stronger sense of school community",
      "Long-lasting positive impact"
    ],

    ctaText: "Book Student Assembly",
    seoTitle: "Youth Empowerment Speaker | Student Assembly Speaker | Denis Estimon",
    metaDescription: "Professional youth empowerment speaker Denis Estimon delivers inspiring student assemblies for K-12 schools. Expert in student engagement and empowerment. Book your event."
  };

  return (
    <>
      <Helmet>
        <title>{pageData.seoTitle}</title>
        <meta name="description" content={pageData.metaDescription} />
        <meta name="keywords" content="youth empowerment speaker, student assembly speaker, school assembly speaker, youth motivational speaker, student empowerment programs, K-12 speaker" />
        <meta property="og:title" content={pageData.seoTitle} />
        <meta property="og:description" content={pageData.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentumspeak.com/student-assembly-speaker" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageData.seoTitle} />
        <meta name="twitter:description" content={pageData.metaDescription} />
        <link rel="canonical" href="https://momentumspeak.com/student-assembly-speaker" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Denis Estimon",
            "jobTitle": "Youth Empowerment Speaker",
            "description": pageData.metaDescription,
            "url": "https://momentumspeak.com/student-assembly-speaker",
            "sameAs": [
              "https://www.linkedin.com/in/denisestimon",
              "https://twitter.com/denisestimon"
            ],
            "offers": {
              "@type": "Offer",
              "description": "Student Assembly and Youth Empowerment Speaking Services",
              "category": "Educational Services"
            }
          })}
        </script>
      </Helmet>
      
      <SpeakerPageTemplate {...pageData} />
    </>
  );
};

export default StudentAssemblySpeaker;
