import React, { useRef } from 'react';
import { Hero } from '../components/Hero/Hero';
import { AboutDiwali } from '../components/Hero/AboutDiwali';
import { Footer } from '../components/Footer/Footer';

interface HomeProps {
  onNavigate: (page: 'home' | 'wishes') => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#080611] text-diwali-ivory overflow-x-hidden">
      {/* Cinematic Hero */}
      <Hero
        onExploreWishes={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          onNavigate('wishes');
        }}
        onScrollDown={handleScrollToAbout}
      />

      {/* About Diwali Section */}
      <div ref={aboutRef}>
        <AboutDiwali
          onExploreWishes={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            onNavigate('wishes');
          }}
        />
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
