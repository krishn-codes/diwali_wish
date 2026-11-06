import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface UrliDiyaProps {
  onLight?: () => void;
  className?: string;
}

export const UrliDiya: React.FC<UrliDiyaProps> = ({ onLight, className = "" }) => {
  const [isSparking, setIsSparking] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsSparking(true);
    setTimeout(() => setIsSparking(false), 1200);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height * 0.3) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#FFE2A0', '#FF9B32', '#D9A441', '#FF4500'],
      ticks: 120,
      gravity: 0.8,
      scalar: 0.9,
    });

    if (onLight) onLight();
  };

  return (
    <div
      onClick={handleClick}
      title="Click the sacred Diya to shower blessings ✨"
      className={`relative cursor-pointer group select-none ${className}`}
    >
      {/* Ambient Radial Aura */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-radial-gradient pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700 bg-diwali-orange/30 blur-2xl animate-pulse" />

      {/* Flame Container */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Flame Glow Halos */}
        <div className="absolute -top-12 w-20 h-28 bg-[#FF9B32]/40 rounded-full blur-xl animate-pulse" />
        <div className="absolute -top-8 w-14 h-20 bg-[#FFE2A0]/60 rounded-full blur-md" />

        {/* Animated Multi-layered Flame */}
        <div className="relative w-8 h-20 origin-bottom animate-flame">
          {/* Outer Flame (Orange) */}
          <div className="absolute inset-0 w-8 h-20 bg-gradient-to-t from-[#FF4500] via-[#FF9B32] to-[#FFE2A0] rounded-[50%_50%_20%_20%/60%_60%_40%_40%] shadow-[0_0_24px_#FF9B32,0_0_40px_#D9A441]" />

          {/* Middle Flame (Bright Gold-Yellow) */}
          <div className="absolute inset-x-1.5 bottom-1 h-14 bg-gradient-to-t from-[#FF9B32] via-[#FFDE59] to-[#FFFFFF] rounded-[50%_50%_25%_25%/65%_65%_35%_35%] shadow-[0_0_12px_#FFE2A0]" />

          {/* Inner Flame Core (White-hot energy) */}
          <div className="absolute inset-x-2.5 bottom-1.5 h-8 bg-gradient-to-t from-[#FFE2A0] via-[#FFFFFF] to-[#FFFFFF] rounded-[50%_50%_30%_30%/70%_70%_30%_30%] opacity-95" />

          {/* Wick */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-[#422006] rounded-t-sm" />
        </div>
      </div>

      {/* Urli Diya Brass Vessel SVG */}
      <div className="relative z-10 -mt-2 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]">
        <svg
          viewBox="0 0 340 140"
          className="w-72 sm:w-80 md:w-96 h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Brass Metallic Gradients */}
            <linearGradient id="brassOuter" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="25%" stopColor="#D9A441" />
              <stop offset="50%" stopColor="#8A5A18" />
              <stop offset="75%" stopColor="#D9A441" />
              <stop offset="100%" stopColor="#4A2E07" />
            </linearGradient>

            <linearGradient id="brassInnerOil" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#5C3204" />
              <stop offset="35%" stopColor="#B37415" />
              <stop offset="50%" stopColor="#FFDE59" />
              <stop offset="65%" stopColor="#B37415" />
              <stop offset="100%" stopColor="#5C3204" />
            </linearGradient>

            <linearGradient id="rimPattern" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE2A0" />
              <stop offset="50%" stopColor="#D9A441" />
              <stop offset="100%" stopColor="#FFE2A0" />
            </linearGradient>

            <radialGradient id="gheeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#FFDE59" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#D9A441" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#5C3204" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* Diya Body Bowl */}
          <path
            d="M20 38 Q170 145 320 38 Q300 120 170 125 Q40 120 20 38Z"
            fill="url(#brassOuter)"
            stroke="#FFE2A0"
            strokeWidth="1.2"
          />

          {/* Intricate Filigree / Carved Details on Diya base */}
          <path
            d="M50 65 Q170 115 290 65"
            stroke="#FFE2A0"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.85"
          />
          <path
            d="M80 82 Q170 120 260 82"
            stroke="#FFE2A0"
            strokeWidth="0.8"
            opacity="0.7"
          />

          {/* Traditional Leaf/Petal carvings around bowl */}
          <g opacity="0.85" stroke="#FFE2A0" strokeWidth="1">
            <path d="M70 55 Q85 80 100 55" />
            <path d="M100 55 Q115 80 130 55" />
            <path d="M130 55 Q145 80 160 55" />
            <path d="M160 55 Q175 80 190 55" />
            <path d="M190 55 Q205 80 220 55" />
            <path d="M220 55 Q235 80 250 55" />
            <path d="M250 55 Q265 80 280 55" />
          </g>

          {/* Oil Reservoir (Golden Ghee Pool) */}
          <ellipse cx="170" cy="38" rx="148" ry="24" fill="url(#brassInnerOil)" stroke="#FFE2A0" strokeWidth="1.5" />
          <ellipse cx="170" cy="38" rx="120" ry="16" fill="url(#gheeGlow)" />

          {/* Golden Rim Petal Beads */}
          <g fill="#FFE2A0" opacity="0.95">
            {[...Array(27)].map((_, i) => {
              const angle = (i / 26) * Math.PI;
              const cx = 170 + 148 * Math.cos(angle);
              const cy = 38 - 14 * Math.sin(angle);
              return <circle key={i} cx={cx} cy={cy} r="2.5" />;
            })}
          </g>

          {/* Diya Base Pedestal */}
          <path
            d="M130 122 Q170 132 210 122 L215 132 Q170 138 125 132 Z"
            fill="url(#brassOuter)"
            stroke="#FFE2A0"
            strokeWidth="1"
          />
        </svg>

        {/* Accompanying Floating Lotuses beside the Urli Diya (from reference) */}
        {/* Pink Lotus 1 */}
        <div className="absolute -left-10 bottom-2 pointer-events-none">
          <svg viewBox="0 0 100 60" className="w-20 h-12 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            <ellipse cx="50" cy="45" rx="35" ry="8" fill="#1b4332" opacity="0.8" />
            {/* Outer pink petals */}
            <path d="M50 15 C40 28 20 40 50 46 C80 40 60 28 50 15Z" fill="#ff758f" />
            <path d="M35 24 C20 32 15 42 45 46 C32 40 28 32 35 24Z" fill="#ff4d6d" />
            <path d="M65 24 C80 32 85 42 55 46 C68 40 72 32 65 24Z" fill="#ff4d6d" />
            {/* Center golden pollen */}
            <ellipse cx="50" cy="42" rx="6" ry="3" fill="#ffe2a0" />
          </svg>
        </div>

        {/* Pink Lotus 2 (Right side) */}
        <div className="absolute -right-8 bottom-3 pointer-events-none">
          <svg viewBox="0 0 80 50" className="w-16 h-10 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            <ellipse cx="40" cy="38" rx="28" ry="6" fill="#1b4332" opacity="0.8" />
            <path d="M40 12 C32 22 16 32 40 38 C64 32 48 22 40 12Z" fill="#ff758f" />
            <path d="M28 20 C16 26 12 34 36 38 C26 33 22 26 28 20Z" fill="#ff4d6d" />
            <path d="M52 20 C64 26 68 34 44 38 C54 33 58 26 52 20Z" fill="#ff4d6d" />
            <ellipse cx="40" cy="35" rx="5" ry="2.5" fill="#ffe2a0" />
          </svg>
        </div>

        {/* Scattered Lotus Petals drifting on water */}
        <div className="absolute -left-4 -bottom-4 w-5 h-3 bg-pink-500/80 rounded-full rotate-45 blur-[0.5px] opacity-80" />
        <div className="absolute -left-12 -bottom-2 w-4 h-2.5 bg-pink-400/70 rounded-full -rotate-12 blur-[0.5px] opacity-75" />
        <div className="absolute right-12 -bottom-3 w-4 h-2 bg-pink-400/80 rounded-full rotate-24 blur-[0.5px] opacity-75" />
      </div>

      {/* Water Reflection Ripples below the Diya */}
      <div className="relative -mt-6 z-0 flex flex-col items-center pointer-events-none opacity-70 animate-water-shimmer">
        <div className="w-64 sm:w-80 h-10 bg-gradient-to-b from-[#FF9B32]/40 via-[#D9A441]/20 to-transparent rounded-[50%] blur-md" />
        <div className="w-48 sm:w-60 h-4 bg-gradient-to-r from-transparent via-[#FFE2A0]/45 to-transparent rounded-[50%] -mt-6 blur-sm" />
      </div>

      {/* Interactive Tooltip on hover */}
      <div className="text-center mt-1">
        <span className="text-[11px] uppercase tracking-widest text-diwali-champagne/60 group-hover:text-diwali-champagne font-medium transition-colors">
          {isSparking ? '✨ Blessed with Divine Light ✨' : 'Click to shower light'}
        </span>
      </div>
    </div>
  );
};
