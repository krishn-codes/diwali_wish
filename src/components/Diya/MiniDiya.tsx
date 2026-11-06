import React from 'react';

interface MiniDiyaProps {
  className?: string;
}

export const MiniDiya: React.FC<MiniDiyaProps> = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Ambient warm light cast on card */}
      <div className="absolute -top-10 w-24 h-24 bg-[#FF9B32]/30 rounded-full blur-xl pointer-events-none animate-pulse" />

      {/* Mini Flame */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-2.5 h-6 bg-gradient-to-t from-[#FF4500] via-[#FFDE59] to-[#FFFFFF] rounded-[50%_50%_20%_20%/60%_60%_40%_40%] animate-flame shadow-[0_0_14px_#FF9B32,0_0_24px_#FFE2A0]" />
        <div className="w-0.5 h-1.5 bg-[#422006] -mt-0.5 rounded-sm" />
      </div>

      {/* Mini Diya Bowl */}
      <div className="-mt-1 z-10 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
        <svg viewBox="0 0 80 40" className="w-12 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="miniBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="35%" stopColor="#D9A441" />
              <stop offset="70%" stopColor="#8A5A18" />
              <stop offset="100%" stopColor="#4A2E07" />
            </linearGradient>
            <radialGradient id="miniGhee" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE2A0" />
              <stop offset="70%" stopColor="#B37415" />
              <stop offset="100%" stopColor="#5C3204" />
            </radialGradient>
          </defs>

          {/* Diya body */}
          <path
            d="M6 12 Q40 40 74 12 Q66 32 40 33 Q14 32 6 12Z"
            fill="url(#miniBrassGrad)"
            stroke="#FFE2A0"
            strokeWidth="0.8"
          />
          {/* Engraving line */}
          <path d="M16 20 Q40 32 64 20" stroke="#FFE2A0" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.8" />
          {/* Oil pool */}
          <ellipse cx="40" cy="12" rx="34" ry="7" fill="url(#miniGhee)" stroke="#FFE2A0" strokeWidth="0.8" />
          <ellipse cx="40" cy="12" rx="22" ry="4" fill="#FFE2A0" opacity="0.6" />
        </svg>
      </div>

      {/* Surface Reflection */}
      <div className="w-10 h-1.5 bg-gradient-to-r from-transparent via-[#FF9B32]/40 to-transparent blur-sm rounded-full -mt-0.5" />
    </div>
  );
};
