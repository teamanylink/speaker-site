import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import LogoCloud from '../components/LogoCloud';
import FrameworkSection from '../components/FrameworkSection';
import SocialProofSection from '../components/SocialProofSection';
import FinalCTASection from '../components/FinalCTASection';
import TrustedBySection from '../components/TrustedBySection';
import WhyItMattersSection from '../components/WhyItMattersSection';
import { Features } from '../components/ui/features-6';
import AppleCardsCarouselDemo from '../components/ui/apple-cards-carousel-demo';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      {/* Removed extra news logos section to keep a single Trusted By area */}
      <Features />
      <AppleCardsCarouselDemo />
      <FrameworkSection />
      <WhyItMattersSection />
      <SocialProofSection />
      <TrustedBySection />
      <FinalCTASection />
    </div>
  );
}
