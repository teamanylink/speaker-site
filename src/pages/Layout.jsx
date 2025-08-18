
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NewHeader } from '@/components/NewHeader';

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  // Scroll to top when page changes
  useEffect(() => {
    // We need to check for hash and scroll to element if it exists
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Set site metadata and SEO
  useEffect(() => {
    document.title = "Denis Estimon - Top University Speaker";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }
    metaDescription.content = "Denis Estimon is a top university speaker helping students turn fear of the future and AI anxiety into unstoppable momentum with The Movement Framework.";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NewHeader />

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
