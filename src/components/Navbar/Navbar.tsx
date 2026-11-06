import React from 'react';
import { Home, Sparkles, Heart } from 'lucide-react';
import { LotusIcon } from '../LotusIcon';
import confetti from 'canvas-confetti';

interface NavbarProps {
  currentPage: 'home' | 'wishes';
  onNavigate: (page: 'home' | 'wishes') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const triggerSpreadLove = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#FFE2A0', '#FF9B32', '#FF4D6D', '#FFB703', '#FFFFFF'],
      ticks: 150,
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 md:px-12 py-3 sm:py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo (Left) */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="transition-transform duration-300 group-hover:scale-110">
            <LotusIcon className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <span className="font-serif text-base sm:text-lg tracking-wider text-diwali-ivory font-semibold group-hover:text-diwali-champagne transition-colors">
            Krishna Sharma
          </span>
        </button>

        {/* Navigation Pills (Center) */}
        <nav className="flex items-center p-1 sm:p-1.5 rounded-full bg-[#160D2B]/80 backdrop-blur-md border border-diwali-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {/* Home Button */}
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              currentPage === 'home'
                ? 'bg-gradient-to-r from-[#D9A441] to-[#FF9B32] text-diwali-midnight font-bold shadow-[0_0_15px_rgba(217,164,65,0.6)]'
                : 'text-diwali-ivory/80 hover:text-diwali-champagne hover:bg-white/5'
            }`}
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Home</span>
          </button>

          {/* Wishes Button */}
          <button
            onClick={() => onNavigate('wishes')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              currentPage === 'wishes'
                ? 'bg-gradient-to-r from-[#D9A441] to-[#FF9B32] text-diwali-midnight font-bold shadow-[0_0_15px_rgba(217,164,65,0.6)]'
                : 'text-diwali-ivory/80 hover:text-diwali-champagne hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Wishes</span>
          </button>
        </nav>

        {/* Right Side: Spread Love CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={triggerSpreadLove}
            title="Click to spread Diwali love & blessings ❤️"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-diwali-gold/30 text-diwali-champagne hover:text-white transition-all text-xs sm:text-sm font-script tracking-wide group"
          >
            <span className="font-serif text-xs sm:text-sm font-normal">Spread Love</span>
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
