import React from 'react';

export const PalaceScene: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Background Deep Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080611] via-[#160D2B] to-[#29113D] opacity-95" />

      {/* Moon on the Right with Golden Atmosphere */}
      <div className="absolute top-10 right-8 sm:right-20 md:right-28 lg:right-36 z-0">
        {/* Massive Moon Ambient Glow */}
        <div className="absolute -inset-16 rounded-full bg-[#FFE2A0]/20 blur-3xl animate-pulse" />
        <div className="absolute -inset-8 rounded-full bg-[#FFDE59]/25 blur-xl" />

        {/* Full Moon */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#FFFCE8] via-[#FFE2A0] to-[#E5AC44] shadow-[0_0_50px_rgba(255,226,160,0.85)] flex items-center justify-center overflow-hidden">
          {/* Subtle Moon surface craters */}
          <div className="absolute top-4 left-6 w-8 h-8 rounded-full bg-[#D9A441]/25 blur-[2px]" />
          <div className="absolute top-12 left-12 w-12 h-10 rounded-full bg-[#C28C2B]/20 blur-[3px]" />
          <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#D9A441]/20 blur-[2px]" />
          {/* Soft passing cloud whisps */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFE2A0]/20 to-transparent" />
        </div>

        {/* Translucent Clouds crossing moon */}
        <div className="absolute -bottom-6 -left-12 w-48 h-12 bg-[#29113D]/60 rounded-full blur-xl" />
        <div className="absolute -top-4 -right-8 w-40 h-10 bg-[#160D2B]/50 rounded-full blur-lg" />
      </div>

      {/* Illuminated Indian Palace Architecture (Left & Center-Left) */}
      <div className="absolute bottom-28 sm:bottom-32 md:bottom-36 left-0 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-[480px] sm:h-[540px] z-0 opacity-90">
        {/* Palace Warm Golden Backlight Glow */}
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF9B32]/35 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-[#FFE2A0]/25 rounded-full blur-2xl" />

        {/* Detailed Palace Vector Silhouette with Golden Illumination */}
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full filter drop-shadow-[0_0_30px_rgba(255,180,60,0.45)]"
          preserveAspectRatio="xMinYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="palaceStoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#874e14" />
              <stop offset="40%" stopColor="#4a2408" />
              <stop offset="80%" stopColor="#250f1d" />
              <stop offset="100%" stopColor="#14081b" />
            </linearGradient>

            <linearGradient id="windowGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FFE2A0" />
              <stop offset="100%" stopColor="#FF9B32" />
            </linearGradient>

            <linearGradient id="domeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D9A441" />
              <stop offset="50%" stopColor="#FFE2A0" />
              <stop offset="100%" stopColor="#8A5A18" />
            </linearGradient>
          </defs>

          {/* Distant background towers */}
          <g opacity="0.6">
            <path d="M420 300 L435 240 Q445 220 455 240 L470 300 Z" fill="#25102a" stroke="#d9a441" strokeWidth="0.8" />
            <path d="M480 320 L495 260 Q505 245 515 260 L530 320 Z" fill="#25102a" stroke="#d9a441" strokeWidth="0.8" />
          </g>

          {/* Main Central Grand Shikhara / Dome (Left-Center) */}
          {/* Spire Pin */}
          <path d="M140 60 L140 100" stroke="#FFE2A0" strokeWidth="2.5" />
          <circle cx="140" cy="58" r="4" fill="#FFE2A0" />
          <circle cx="140" cy="75" r="3" fill="#D9A441" />

          {/* Grand Onion Dome (Rajput / Mughal Chhatri) */}
          <path
            d="M140 95 C110 135 70 170 70 215 C70 235 90 245 140 245 C190 245 210 235 210 215 C210 170 170 135 140 95 Z"
            fill="url(#domeGold)"
            stroke="#FFE2A0"
            strokeWidth="1.5"
          />

          {/* Dome Fluting & Ribs */}
          <path d="M140 95 Q115 170 115 245" stroke="#FFF2D6" strokeWidth="1" opacity="0.75" />
          <path d="M140 95 Q140 170 140 245" stroke="#FFF2D6" strokeWidth="1.2" opacity="0.85" />
          <path d="M140 95 Q165 170 165 245" stroke="#FFF2D6" strokeWidth="1" opacity="0.75" />

          {/* Dome Base Drum & Balustrade */}
          <rect x="75" y="245" width="130" height="24" rx="2" fill="url(#palaceStoneGrad)" stroke="#FFE2A0" strokeWidth="1" />
          {/* Decorative arched niches on drum */}
          <g fill="url(#windowGlow)">
            {[90, 115, 140, 165, 185].map((x, i) => (
              <path key={i} d={`M${x - 6} 265 Q${x} 250 ${x + 6} 265 Z`} />
            ))}
          </g>

          {/* Secondary Left Tower Dome */}
          <path d="M40 160 L40 190" stroke="#FFE2A0" strokeWidth="1.5" />
          <circle cx="40" cy="158" r="3" fill="#FFE2A0" />
          <path
            d="M40 190 C20 215 5 235 5 260 C5 272 18 278 40 278 C62 278 75 272 75 260 C75 235 60 215 40 190 Z"
            fill="url(#domeGold)"
            stroke="#FFE2A0"
            strokeWidth="1"
          />

          {/* Right Pavilion Tower & Chhatri */}
          <path d="M260 140 L260 170" stroke="#FFE2A0" strokeWidth="1.5" />
          <circle cx="260" cy="138" r="3" fill="#FFE2A0" />
          <path
            d="M260 170 C240 195 225 215 225 240 C225 252 238 258 260 258 C282 258 295 252 295 240 C295 215 280 195 260 170 Z"
            fill="url(#domeGold)"
            stroke="#FFE2A0"
            strokeWidth="1"
          />

          {/* Palace Multi-tier Facade Walls */}
          {/* Level 1 Upper Stories */}
          <path
            d="M5 278 L295 258 L380 290 L380 480 L0 480 Z"
            fill="url(#palaceStoneGrad)"
            stroke="#FFE2A0"
            strokeWidth="1"
          />

          {/* Ornate Jharokha (Overhanging Balconies with Arches) */}
          {/* Main Central Jharokha */}
          <rect x="105" y="280" width="70" height="55" rx="3" fill="#2d131f" stroke="#FFE2A0" strokeWidth="1.2" />
          {/* Arches inside central jharokha */}
          <path d="M115 330 L115 305 Q125 290 135 305 L135 330 Z" fill="url(#windowGlow)" />
          <path d="M145 330 L145 305 Q155 290 165 305 L165 330 Z" fill="url(#windowGlow)" />
          {/* Balcony Railing */}
          <rect x="102" y="325" width="76" height="12" fill="#522b10" stroke="#FFE2A0" strokeWidth="1" />

          {/* Left Wing Jharokha */}
          <rect x="25" y="295" width="45" height="40" fill="#2d131f" stroke="#FFE2A0" strokeWidth="1" />
          <path d="M35 330 L35 310 Q47 300 60 310 L60 330 Z" fill="url(#windowGlow)" />

          {/* Right Wing Jharokha */}
          <rect x="235" y="280" width="50" height="45" fill="#2d131f" stroke="#FFE2A0" strokeWidth="1" />
          <path d="M245 320 L245 300 Q260 290 275 300 L275 320 Z" fill="url(#windowGlow)" />

          {/* Lower Level Grand Colonnade & Rows of Illuminated Windows */}
          <g fill="url(#windowGlow)" stroke="#FFE2A0" strokeWidth="0.8">
            {[40, 75, 110, 145, 180, 215, 250, 285, 320, 355].map((x, i) => (
              <g key={i}>
                {/* Arch window */}
                <path d={`M${x} 390 L${x} 365 Q${x + 10} 350 ${x + 20} 365 L${x + 20} 390 Z`} />
                {/* Lower tiny lamp */}
                <circle cx={x + 10} cy={420} r="2.5" fill="#FFE2A0" />
              </g>
            ))}
          </g>

          {/* Palace Steps (Ghats) leading into the sacred water */}
          <path d="M0 450 L380 450 L400 465 L0 465 Z" fill="#381b10" stroke="#FFE2A0" strokeWidth="0.8" />
          <path d="M0 465 L400 465 L420 480 L0 480 Z" fill="#29120b" stroke="#FFE2A0" strokeWidth="0.8" />
          <path d="M0 480 L420 480 L440 500 L0 500 Z" fill="#1b0a06" stroke="#FFE2A0" strokeWidth="0.8" />

          {/* Festoon of Festival Lights / Diyas along the palace roofline */}
          <g fill="#FFE2A0">
            {[...Array(35)].map((_, i) => (
              <circle
                key={`roof-light-${i}`}
                cx={15 + i * 11}
                cy={250 + Math.sin(i * 0.4) * 6}
                r="2"
                className="animate-pulse"
                style={{ animationDelay: `${(i % 5) * 0.2}s` }}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Reflective Water Surface (Bottom 35% of the viewport) */}
      <div className="absolute bottom-0 inset-x-0 h-44 sm:h-52 md:h-64 z-0 pointer-events-none">
        {/* Water Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080611] via-[#120a22]/90 to-transparent" />

        {/* Palace Reflection in Water */}
        <div className="absolute top-0 left-0 w-3/5 h-full opacity-45 filter blur-[3px] scale-y-[-0.8] origin-top animate-water-shimmer">
          <div className="w-full h-40 bg-gradient-to-b from-[#FF9B32]/70 via-[#D9A441]/40 to-transparent" />
        </div>

        {/* Moon Reflection Trail in Water */}
        <div className="absolute top-0 right-12 sm:right-24 md:right-32 w-28 sm:w-36 h-full opacity-60 filter blur-[2px] animate-water-shimmer">
          <div className="w-full h-32 bg-gradient-to-b from-[#FFE2A0]/80 via-[#D9A441]/40 to-transparent rounded-[50%]" />
        </div>

        {/* Shimmering Horizontal Light Ripple Lines */}
        <div className="absolute inset-0 flex flex-col justify-around opacity-40">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFDE59]/50 to-transparent animate-pulse" />
          <div className="w-4/5 mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#FFE2A0]/60 to-transparent" />
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />
          <div className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#FF9B32]/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};
