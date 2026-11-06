import React from 'react';
import { motion } from 'framer-motion';
import { LotusIcon } from '../LotusIcon';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AboutDiwaliProps {
  onExploreWishes: () => void;
}

export const AboutDiwali: React.FC<AboutDiwaliProps> = ({ onExploreWishes }) => {
  return (
    <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#160D2B] via-[#29113D] to-[#080611] overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-radial-gradient from-diwali-gold/15 to-transparent blur-3xl pointer-events-none" />

      {/* Golden Divider Line at Top */}
      <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 mb-14">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-diwali-gold/50 to-diwali-gold" />
        <LotusIcon className="w-8 h-8" />
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-diwali-gold/50 to-diwali-gold" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-diwali-champagne/70 font-serif">
            The Essence of Deepavali
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mt-2 gold-gradient-text drop-shadow-[0_0_20px_rgba(217,164,65,0.4)]">
            About Diwali
          </h2>
        </motion.div>

        {/* Short Festive Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-xl sm:text-2xl md:text-3xl italic text-diwali-ivory/90 leading-relaxed mt-6 max-w-2xl mx-auto"
        >
          "A festival of lights, a celebration of positivity, and a timeless reminder that good always triumphs over evil."
        </motion.p>

        {/* Extended poetic passage for high-end feeling */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-diwali-champagne/80 font-light mt-4 max-w-xl mx-auto leading-relaxed"
        >
          As millions of diyas ignite across the night, may their sacred flames illuminate your path with boundless wisdom, cherished memories, and eternal bliss.
        </motion.p>

        {/* "Explore Wishes →" CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <button
            onClick={onExploreWishes}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D9A441] via-[#FF9B32] to-[#D9A441] text-diwali-midnight font-serif font-bold text-sm sm:text-base tracking-wider shadow-[0_0_30px_rgba(217,164,65,0.6)] hover:shadow-[0_0_45px_rgba(255,180,60,0.9)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-diwali-midnight" />
            <span>Explore Wishes</span>
            <ArrowRight className="w-4 h-4 text-diwali-midnight group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Holy City Silhouette at the bottom edge */}
      <div className="relative w-full mt-16 sm:mt-24 pointer-events-none">
        {/* Golden Horizon Glow */}
        <div className="absolute -top-12 inset-x-0 h-24 bg-gradient-to-t from-[#FF9B32]/30 via-[#D9A441]/10 to-transparent blur-xl" />

        <svg
          viewBox="0 0 1200 180"
          className="w-full h-auto opacity-80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D9A441" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#8A5A18" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#080611" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Ayodhya / Varanasi Ghats & Temples Silhouette */}
          <path
            d="M0 180 L0 120 Q50 90 90 120 L120 120 L130 80 Q140 60 150 80 L160 120 L210 120 L220 70 Q240 40 260 70 L270 120 L340 120 L350 90 Q370 70 390 90 L400 120 L480 120 L495 50 Q515 20 535 50 L550 120 L620 120 L635 85 Q655 65 675 85 L690 120 L760 120 L780 40 Q800 10 820 40 L840 120 L910 120 L930 75 Q950 55 970 75 L990 120 L1080 120 L1095 80 Q1115 60 1135 80 L1150 120 L1200 120 L1200 180 Z"
            fill="url(#cityGrad)"
          />

          {/* Tiny lamps along riverbanks */}
          <g fill="#FFE2A0">
            {[30, 80, 130, 180, 230, 290, 360, 430, 500, 570, 640, 710, 780, 850, 920, 990, 1060, 1130, 1180].map((x, i) => (
              <circle key={i} cx={x} cy={118} r="2" className="animate-pulse" />
            ))}
          </g>
        </svg>

        {/* Lotus blossoms in water */}
        <div className="absolute bottom-2 left-10 flex gap-4">
          <LotusIcon className="w-6 h-6 opacity-75" />
          <LotusIcon className="w-5 h-5 opacity-55" />
        </div>
        <div className="absolute bottom-2 right-12 flex gap-4">
          <LotusIcon className="w-6 h-6 opacity-75" />
          <LotusIcon className="w-5 h-5 opacity-55" />
        </div>
      </div>
    </section>
  );
};
