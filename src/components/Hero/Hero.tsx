import React from 'react';
import { motion } from 'framer-motion';
import { LotusIcon } from '../LotusIcon';
import { UrliDiya } from '../Diya/UrliDiya';
import { FloatingDiya } from '../Diya/FloatingDiya';
import { SkyLantern, HangingLantern } from '../Lantern/FloatingLanterns';
import { PalaceScene } from '../PalaceScene';
import { ChevronDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onExploreWishes: () => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWishes, onScrollDown }) => {
  const handleDiyaClick = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { x: 0.25, y: 0.75 },
      colors: ['#FFE2A0', '#FF9B32', '#D9A441', '#FFFFFF'],
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-8 px-4 sm:px-8 select-none">
      {/* Visual Background Palace & Moon Scenery */}
      <PalaceScene />

      {/* Hanging Palace Lanterns in Upper Corners */}
      <div className="absolute top-0 left-6 sm:left-12 z-20 hidden sm:block">
        <HangingLantern chainLength={75} swayDelay={0} scale={1.1} />
      </div>
      <div className="absolute top-0 right-6 sm:right-12 z-20 hidden sm:block">
        <HangingLantern chainLength={90} swayDelay={1.5} scale={1.05} />
      </div>

      {/* Floating Sky Lanterns in Depth Layers */}
      <SkyLantern x="18%" y="16%" scale={0.75} duration={7} delay={0} />
      <SkyLantern x="8%" y="30%" scale={0.55} duration={9} delay={1.8} />
      <SkyLantern x="42%" y="14%" scale={0.65} duration={8.5} delay={2.5} />
      <SkyLantern x="84%" y="32%" scale={0.8} duration={7.5} delay={0.8} />
      <SkyLantern x="90%" y="18%" scale={0.5} duration={9.2} delay={3.2} />

      {/* Center Main Greeting Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center mt-6 sm:mt-10 md:mt-14 px-4 flex flex-col items-center">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-serif uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base text-diwali-champagne/90 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Wishing you and your family a very
          </span>
        </motion.div>

        {/* Happy Diwali Hero Heading (Glorious Calligraphy Script) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="my-2 sm:my-3 relative"
        >
          {/* Ambient Heading Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-diwali-gold/30 via-diwali-orange/40 to-diwali-gold/30 blur-2xl rounded-full pointer-events-none" />

          <h1 className="font-script text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-normal text-gold-sweep drop-shadow-[0_4px_30px_rgba(255,155,50,0.7)] leading-none select-none">
            Happy Diwali
          </h1>
        </motion.div>

        {/* Ornate Lotus Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="my-3 sm:my-4 flex items-center justify-center gap-3"
        >
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-diwali-gold" />
          <LotusIcon className="w-8 h-8 sm:w-9 sm:h-9" />
          <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-diwali-gold" />
        </motion.div>

        {/* Heartfelt Blessing Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-cormorant text-lg sm:text-2xl md:text-3xl text-diwali-ivory font-normal leading-relaxed max-w-2xl text-shadow drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          "May the divine light of Diwali fill your life with happiness, prosperity, good health and endless joy."
        </motion.p>

        {/* Script Wish */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl text-diwali-champagne mt-3 sm:mt-4 drop-shadow-[0_2px_15px_rgba(217,164,65,0.6)]"
        >
          Have a wonderful Diwali!
        </motion.p>

        {/* Personal Signature: Krishna Sharma */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-4 sm:mt-5 flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-light tracking-widest text-diwali-champagne/80 uppercase font-serif">
            With warm wishes,
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-script text-3xl sm:text-4xl text-diwali-champagne font-semibold tracking-wide">
              Krishna Sharma
            </span>
            <span className="text-diwali-orange text-lg">♡</span>
          </div>
        </motion.div>

        {/* Action Button: Explore Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-6 sm:mt-8"
        >
          <button
            onClick={onExploreWishes}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#D9A441] to-[#FF9B32] text-diwali-midnight font-serif font-bold text-sm sm:text-base tracking-wider shadow-[0_0_25px_rgba(217,164,65,0.7)] hover:shadow-[0_0_40px_rgba(255,180,60,0.95)] hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-diwali-midnight" />
            <span>Explore Wishes →</span>
          </button>
        </motion.div>
      </div>

      {/* Foreground Scene: Urli Diya & Floating Diyas on Calm Reflective Water */}
      <div className="relative z-30 w-full mt-10 sm:mt-16 flex items-end justify-between px-2 sm:px-8">
        {/* Large Urli Diya in Left Foreground (Recreating Reference) */}
        <div className="relative">
          <UrliDiya onLight={handleDiyaClick} />
        </div>

        {/* Scattered Floating Diyas across water */}
        <div className="hidden sm:flex items-center gap-8 md:gap-16 pb-4">
          <FloatingDiya scale={0.75} delay={0.5} />
          <FloatingDiya scale={0.6} delay={1.8} />
          <FloatingDiya scale={0.85} delay={1.2} />
        </div>

        {/* Bottom Right: Animated Mouse Scroll Down Indicator */}
        <motion.div
          onClick={onScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center cursor-pointer group pb-3"
          title="Scroll down to explore"
        >
          <span className="text-[10px] tracking-widest uppercase font-serif text-diwali-champagne/70 group-hover:text-diwali-champagne transition-colors mb-2">
            Scroll Down
          </span>

          {/* Mouse Outline with animated wheel */}
          <div className="w-5 h-8 rounded-full border border-diwali-gold/60 group-hover:border-diwali-champagne p-1 flex justify-center shadow-[0_0_10px_rgba(217,164,65,0.3)] transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-diwali-champagne"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-diwali-gold/70 group-hover:text-diwali-champagne animate-bounce mt-1" />
        </motion.div>
      </div>
    </div>
  );
};
