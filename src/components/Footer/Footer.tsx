import React from 'react';
import { LotusIcon } from '../LotusIcon';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'wishes') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#080611] border-t border-diwali-gold/25 py-12 px-4 sm:px-8 overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-diwali-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <LotusIcon className="w-8 h-8 mb-3" />

        <h3 className="font-serif text-xl sm:text-2xl text-diwali-champagne font-semibold tracking-wider">
          Krishna Sharma
        </h3>

        <p className="font-cormorant text-base sm:text-lg italic text-diwali-ivory/80 max-w-md mt-1">
          "May this festival of lights illuminate your life with infinite prosperity, peace, and eternal happiness."
        </p>

        {/* Quick Links */}
        <div className="flex items-center gap-6 mt-6 text-xs sm:text-sm font-serif tracking-widest text-diwali-champagne/80">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-white transition-colors"
          >
            HOME
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('wishes')}
            className="hover:text-white transition-colors"
          >
            WISHES
          </button>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Golden Line */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-diwali-gold/40 to-transparent my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-diwali-ivory/50 font-light gap-2">
          <span>© {new Date().getFullYear()} Krishna Sharma. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for Beloved Family & Friends
          </span>
        </div>
      </div>
    </footer>
  );
};
