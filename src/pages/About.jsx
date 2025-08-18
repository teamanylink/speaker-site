import React from 'react';
import HeroAboutSection from '../components/about/HeroAboutSection';
import StorySection from '../components/about/StorySection';
import QuoteSection from '../components/about/QuoteSection';
import WhyItMattersSection from '../components/about/WhyItMattersSection';
import WhatIDoSection from '../components/about/WhatIDoSection';
import SignatureTalkSection from '../components/about/SignatureTalkSection';
import AboutCTASection from '../components/about/AboutCTASection';

export default function About() {
  return (
    <div className="bg-gray-50">
      <HeroAboutSection />
      <StorySection />
      <QuoteSection />
      <WhyItMattersSection />
      <WhatIDoSection />
      <SignatureTalkSection />
      <AboutCTASection />
    </div>
  );
}