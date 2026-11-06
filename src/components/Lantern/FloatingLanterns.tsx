import React from 'react';
import { motion } from 'framer-motion';

// Hanging Ornate Palace Lantern
export const HangingLantern: React.FC<{
  className?: string;
  chainLength?: number;
  swayDelay?: number;
  scale?: number;
}> = ({ className = "", chainLength = 60, swayDelay = 0, scale = 1 }) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center pointer-events-none select-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        animation: `gentleSway ${5 + swayDelay}s ease-in-out infinite`,
        animationDelay: `${swayDelay}s`,
        transformOrigin: 'top center',
      }}
    >
      {/* Hanging Chain */}
      <div
        className="w-[1.5px] bg-gradient-to-b from-[#FFE2A0]/40 via-[#D9A441] to-[#D9A441]"
        style={{ height: chainLength }}
      />

      {/* Ornate Brass Cap */}
      <div className="-mt-1 z-10">
        <svg viewBox="0 0 50 20" className="w-10 h-4 fill-[#D9A441]">
          <path d="M25 0 L32 8 L42 12 L8 12 L18 8 Z" stroke="#FFE2A0" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Lantern Body with Inner Glowing Flame */}
      <div className="relative w-12 h-16 -mt-0.5 rounded-lg border border-[#D9A441]/70 bg-gradient-to-b from-[#29113D]/60 via-[#FF9B32]/40 to-[#FFE2A0]/70 backdrop-blur-sm shadow-[0_0_25px_rgba(255,155,50,0.6)] flex items-center justify-center overflow-hidden">
        {/* Ornate Lattice Overlay */}
        <div className="absolute inset-0 border border-[#D9A441]/40 flex flex-col justify-between p-1">
          <div className="w-full h-[1px] bg-[#FFE2A0]/50" />
          <div className="w-full h-[1px] bg-[#FFE2A0]/50" />
          <div className="w-full h-[1px] bg-[#FFE2A0]/50" />
        </div>

        {/* Center Flame */}
        <div className="w-2.5 h-5 bg-gradient-to-t from-[#FF4500] via-[#FFDE59] to-[#FFFFFF] rounded-full animate-flame shadow-[0_0_15px_#FF9B32]" />
      </div>

      {/* Ornate Bottom Finial / Tassel */}
      <div className="-mt-0.5 z-10 flex flex-col items-center">
        <svg viewBox="0 0 30 25" className="w-6 h-5 fill-[#D9A441]">
          <path d="M5 0 L25 0 L15 12 Z" stroke="#FFE2A0" strokeWidth="0.8" />
          <circle cx="15" cy="18" r="2.5" fill="#FFE2A0" />
        </svg>
      </div>
    </div>
  );
};

// Floating Sky Lantern
export const SkyLantern: React.FC<{
  x: string; // percentage e.g. "15%"
  y: string; // percentage e.g. "25%"
  scale?: number;
  duration?: number;
  delay?: number;
}> = ({ x, y, scale = 1, duration = 8, delay = 0 }) => {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-10"
      style={{ left: x, top: y }}
      animate={{
        y: [-12, 12, -12],
        x: [-4, 6, -4],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <div
        className="relative flex flex-col items-center"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Ambient Halo */}
        <div className="absolute -inset-4 rounded-full bg-[#FF9B32]/30 blur-lg animate-pulse" />

        {/* Lantern Paper Cylinder */}
        <div className="relative w-11 h-14 rounded-t-md rounded-b-[4px] bg-gradient-to-b from-[#FFDE59]/90 via-[#FF9B32]/85 to-[#E65100]/95 shadow-[0_0_20px_rgba(255,180,60,0.8),inset_0_0_10px_rgba(255,255,255,0.7)] flex flex-col justify-end items-center pb-1.5 border-t border-[#FFF2D6]">
          {/* Paper Ribs */}
          <div className="absolute inset-0 flex justify-around opacity-30">
            <div className="w-[1px] h-full bg-white/60" />
            <div className="w-[1px] h-full bg-white/60" />
          </div>

          {/* Candle/Flame at bottom */}
          <div className="w-2 h-3.5 bg-gradient-to-t from-[#FFDE59] to-[#FFFFFF] rounded-full shadow-[0_0_8px_#FFFFFF] animate-flame" />

          {/* Wooden/Bamboo ring rim */}
          <div className="w-10 h-1 bg-[#5C3204] rounded-full mt-0.5 border-t border-[#FFE2A0]/40" />
        </div>
      </div>
    </motion.div>
  );
};
