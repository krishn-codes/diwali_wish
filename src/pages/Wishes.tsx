import React from 'react';
import { motion } from 'framer-motion';
import { LotusIcon } from '../components/LotusIcon';
import { WishCard } from '../components/GreetingCard/WishCard';
import { KrishnaIllustration } from '../components/KrishnaIllustration';
import { HangingLantern } from '../components/Lantern/FloatingLanterns';
import { FloatingDiya } from '../components/Diya/FloatingDiya';
import { Footer } from '../components/Footer/Footer';
import { Home as HomeIcon, Sparkles } from 'lucide-react';

interface WishesProps {
  onNavigate: (page: 'home' | 'wishes') => void;
}

const WISHES_DATA = [
  {
    id: 1,
    message: "May this Diwali bring new hopes, bright opportunities and endless happiness.",
  },
  {
    id: 2,
    message: "May the light of Diwali remove all negativity and fill your life with positivity.",
  },
  {
    id: 3,
    message: "Wishing you prosperity, good health and success in everything you do.",
  },
  {
    id: 4,
    message: "Let the glow of diyas light up your path towards your dreams.",
  },
];

export const Wishes: React.FC<WishesProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#080611] text-diwali-ivory pt-24 pb-12 overflow-x-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#160D2B] via-[#080611] to-[#1a0a2a] pointer-events-none" />

      {/* Hanging Palace Lanterns in Upper Corners */}
      <div className="absolute top-0 left-6 sm:left-14 z-20 hidden sm:block">
        <HangingLantern chainLength={70} swayDelay={0.5} scale={1.1} />
      </div>
      <div className="absolute top-0 right-6 sm:right-14 z-20 hidden sm:block">
        <HangingLantern chainLength={85} swayDelay={1.8} scale={1.05} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Page Top Header */}
        <div className="text-center flex flex-col items-center mt-2 sm:mt-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <LotusIcon className="w-10 h-10 sm:w-12 sm:h-12" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider gold-gradient-text drop-shadow-[0_0_25px_rgba(217,164,65,0.4)]"
          >
            Diwali Wishes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-cormorant text-base sm:text-xl md:text-2xl text-diwali-champagne/90 mt-2 sm:mt-3 flex items-center gap-1.5"
          >
            <span>A collection of heartfelt wishes for you and your family</span>
            <span className="text-red-400">❤️</span>
          </motion.p>
        </div>

        {/* 2x2 Grid of Glassmorphic Golden Greeting Cards (Matching Reference Panel 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-20 sm:mb-28">
          {WISHES_DATA.map((wish, index) => (
            <WishCard
              key={wish.id}
              id={wish.id}
              message={wish.message}
              delay={index}
            />
          ))}
        </div>

        {/* Floating Lotuses & Diyas along water edge between sections */}
        <div className="flex items-center justify-around opacity-75 my-8 pointer-events-none">
          <FloatingDiya scale={0.75} delay={0.2} />
          <LotusIcon className="w-6 h-6 opacity-60" />
          <FloatingDiya scale={0.8} delay={1.4} />
          <LotusIcon className="w-6 h-6 opacity-60" />
          <FloatingDiya scale={0.7} delay={2.1} />
        </div>

        {/* Dedicated Lord Krishna & Personal Signature Section (Matching Reference Panel 3) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl p-6 sm:p-10 md:p-14 bg-[#160D2B]/80 backdrop-blur-2xl border border-diwali-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden my-12"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-diwali-gold/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-diwali-orange/20 blur-3xl pointer-events-none" />

          {/* Palace Silhouette in distance */}
          <div className="absolute bottom-0 left-0 w-1/3 opacity-25 pointer-events-none">
            <svg viewBox="0 0 300 200" className="w-full h-auto fill-[#FFE2A0]">
              <path d="M10 200 L10 160 Q20 140 30 160 L50 160 L60 120 Q75 90 90 120 L100 160 L140 160 L150 100 Q170 70 190 100 L200 160 L240 160 L250 130 Q265 110 280 130 L290 160 L300 200 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Personalized Greeting & Blessings */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              <span className="font-serif text-xs sm:text-sm uppercase tracking-widest text-diwali-champagne/80 font-medium">
                Personalized Greeting
              </span>

              <h3 className="font-script text-3xl sm:text-4xl md:text-5xl text-diwali-champagne mt-2">
                With love &amp; best wishes,
              </h3>

              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <span className="font-script text-4xl sm:text-6xl md:text-7xl font-bold text-gold-sweep drop-shadow-[0_2px_15px_rgba(217,164,65,0.7)]">
                  Krishna Sharma
                </span>
                <span className="text-diwali-orange text-2xl animate-pulse">♡</span>
              </div>

              {/* Lotus Separator */}
              <div className="flex items-center justify-center lg:justify-start gap-3 my-6">
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-diwali-gold" />
                <LotusIcon className="w-6 h-6" />
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-diwali-gold" />
              </div>

              {/* Lakshmi Blessing */}
              <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-diwali-ivory font-medium leading-relaxed max-w-xl">
                "May the divine blessings of Maa Lakshmi always be with you and bless your home with wealth, peace, and eternal prosperity."
              </p>

              <p className="text-sm sm:text-base text-diwali-champagne/80 font-light mt-3">
                May your Diwali sparkle with joy, moments of laughter, and dreams fulfilled.
              </p>

              {/* Bottom Actions Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-diwali-gold/20">
                {/* Back to Home Button (From Reference) */}
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onNavigate('home');
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#080611]/80 hover:bg-[#080611] text-diwali-champagne border border-diwali-gold/50 hover:border-diwali-gold hover:shadow-[0_0_20px_rgba(217,164,65,0.5)] transition-all font-serif text-xs sm:text-sm tracking-wider font-semibold group"
                >
                  <HomeIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Home</span>
                </button>

                {/* "Happy Diwali ✨" (From Reference) */}
                <div className="flex items-center gap-2 text-diwali-champagne font-script text-2xl sm:text-3xl">
                  <span>Happy Diwali</span>
                  <Sparkles className="w-5 h-5 text-diwali-gold animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Right Column: Divine Lord Krishna Line Illustration (Matching Reference Panel 3) */}
            <div className="lg:col-span-5 flex justify-center">
              <KrishnaIllustration className="w-full max-w-sm sm:max-w-md" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
