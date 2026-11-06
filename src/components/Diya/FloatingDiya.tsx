import React from 'react';

interface FloatingDiyaProps {
  scale?: number;
  className?: string;
  delay?: number;
  flameSize?: 'sm' | 'md';
}

export const FloatingDiya: React.FC<FloatingDiyaProps> = ({
  scale = 1,
  className = "",
  delay = 0,
}) => {
  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={{
        transform: `scale(${scale})`,
        animation: `float ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Flame */}
      <div className="relative flex flex-col items-center">
        {/* Flame glow */}
        <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#FF9B32]/50 blur-md animate-pulse" />
        <div className="w-2.5 h-6 bg-gradient-to-t from-[#FF4500] via-[#FFDE59] to-[#FFFFFF] rounded-[50%_50%_20%_20%/60%_60%_40%_40%] animate-flame shadow-[0_0_12px_#FF9B32]" />
      </div>

      {/* Terracotta/Brass Diya base */}
      <div className="-mt-1 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
        <svg viewBox="0 0 70 30" className="w-14 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 10 Q35 32 65 10 Q55 24 35 25 Q15 24 5 10Z"
            fill="url(#floatingDiyaGrad)"
            stroke="#FFE2A0"
            strokeWidth="0.8"
          />
          <ellipse cx="35" cy="10" rx="30" ry="6" fill="#6B3A0A" stroke="#D9A441" strokeWidth="0.8" />
          <ellipse cx="35" cy="10" rx="22" ry="4" fill="#FFC72C" opacity="0.6" />
          <defs>
            <linearGradient id="floatingDiyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE2A0" />
              <stop offset="50%" stopColor="#A85C16" />
              <stop offset="100%" stopColor="#4A2605" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Reflection in water */}
      <div className="relative -mt-1 opacity-60 animate-water-shimmer">
        <div className="w-12 h-2.5 bg-gradient-to-b from-[#FF9B32]/50 to-transparent rounded-[50%] blur-[1.5px] mx-auto" />
      </div>
    </div>
  );
};
