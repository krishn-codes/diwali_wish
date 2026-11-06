import React from 'react';
import { motion } from 'framer-motion';

export const KrishnaIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Divine Celestial Aura */}
      <div className="absolute inset-0 bg-radial-gradient rounded-full bg-gradient-to-tr from-[#FF9B32]/25 via-[#D9A441]/35 to-transparent blur-3xl animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#FFE2A0]/20 rounded-full blur-2xl" />

      {/* Floating Golden Musical Notes & Sparkles */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 pointer-events-none"
      >
        <span className="text-diwali-champagne text-lg drop-shadow-[0_0_8px_#FFE2A0]">♪</span>
      </motion.div>

      <motion.div
        animate={{
          y: [6, -6, 6],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-20 left-2 pointer-events-none"
      >
        <span className="text-diwali-gold text-sm drop-shadow-[0_0_6px_#D9A441]">♫</span>
      </motion.div>

      {/* Exquisite Divine Line Art of Lord Krishna */}
      <svg
        viewBox="0 0 500 520"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto filter drop-shadow-[0_0_24px_rgba(255,226,160,0.65)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="krishnaGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFE2A0" />
            <stop offset="70%" stopColor="#D9A441" />
            <stop offset="100%" stopColor="#FF9B32" />
          </linearGradient>

          <linearGradient id="peacockFeatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5d4" />
            <stop offset="30%" stopColor="#00bbf9" />
            <stop offset="60%" stopColor="#7b2cbf" />
            <stop offset="100%" stopColor="#ffe2a0" />
          </linearGradient>

          <radialGradient id="featherEye" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe2a0" />
            <stop offset="45%" stopColor="#00b4d8" />
            <stop offset="75%" stopColor="#03045e" />
            <stop offset="100%" stopColor="#d9a441" />
          </radialGradient>
        </defs>

        {/* Sacred Peacock Feather (Mor Pankh) on Crown */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="1.6" strokeLinecap="round">
          {/* Feather Central Spine */}
          <path d="M350 40 Q390 80 405 130" stroke="#FFE2A0" strokeWidth="2" />

          {/* Eye of Peacock Feather */}
          <ellipse cx="340" cy="55" rx="20" ry="26" fill="url(#featherEye)" stroke="#FFE2A0" strokeWidth="1.5" />
          <ellipse cx="340" cy="55" rx="11" ry="15" fill="#00b4d8" />
          <ellipse cx="340" cy="55" rx="6" ry="8" fill="#03045e" />
          <ellipse cx="339" cy="54" rx="2.5" ry="3.5" fill="#FFE2A0" />

          {/* Feather delicate wisps / barbs */}
          {[...Array(14)].map((_, i) => (
            <path
              key={`barb-left-${i}`}
              d={`M${340 - i * 1.5} ${40 + i * 5} Q${315 - i * 3} ${35 + i * 5} ${300 - i * 2} ${50 + i * 5}`}
              stroke="#FFE2A0"
              strokeWidth="0.9"
              opacity="0.85"
            />
          ))}
          {[...Array(14)].map((_, i) => (
            <path
              key={`barb-right-${i}`}
              d={`M${340 + i * 2} ${40 + i * 5} Q${375 + i * 3} ${45 + i * 5} ${395 + i * 2} ${65 + i * 5}`}
              stroke="#FFE2A0"
              strokeWidth="0.9"
              opacity="0.85"
            />
          ))}
        </g>

        {/* Ornate Crown (Mukut) */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M360 115 Q395 90 420 125 Q410 145 375 145 Z" fill="#29113D" fillOpacity="0.5" />
          {/* Crown Jewels and Pearls */}
          <circle cx="395" cy="115" r="3" fill="#FFE2A0" />
          <circle cx="380" cy="125" r="2.5" fill="#FFE2A0" />
          <circle cx="410" cy="125" r="2.5" fill="#FFE2A0" />
          <path d="M365 140 Q395 130 425 140" strokeWidth="2.2" />
        </g>

        {/* Divine Curls of Hair (Alakavali) */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="1.6" opacity="0.9">
          <path d="M420 135 Q445 155 435 185 Q425 210 440 230" />
          <path d="M410 145 Q430 170 420 200" />
          <path d="M365 140 Q350 160 360 185" />
        </g>

        {/* Serene Divine Face & Profile */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Forehead, Nose, Lips, Chin and Jawline */}
          <path d="M375 145 Q365 170 355 195 L345 220 Q355 224 358 226 Q348 235 344 240 Q355 245 365 242 Q355 258 368 268 Q395 272 410 240" />

          {/* Sacred Tilak (Urdhva Pundra) on Forehead */}
          <path d="M367 165 Q367 185 363 192" stroke="#FFE2A0" strokeWidth="2.2" />
          <path d="M363 192 Q367 195 371 192" stroke="#FFE2A0" strokeWidth="1.6" />
          <circle cx="367" cy="190" r="1.5" fill="#FF9B32" />

          {/* Lotus Eye (Kamalnayan) & Graceful Eyebrow */}
          <path d="M365 195 Q380 185 395 192" strokeWidth="1.8" /> {/* Eyebrow */}
          <path d="M370 203 Q382 198 394 205 Q382 212 370 203 Z" strokeWidth="1.5" fill="#FFE2A0" fillOpacity="0.2" />
          <circle cx="382" cy="204" r="2.5" fill="#FFE2A0" />

          {/* Divine Serene Smile */}
          <path d="M352 232 Q358 236 366 233" strokeWidth="1.6" />

          {/* Ear and Kundal (Earring) */}
          <path d="M412 210 Q425 225 415 240" strokeWidth="1.5" />
          {/* Makara Kundal (Fish/Makara shaped golden earring) */}
          <path d="M416 230 Q425 250 415 265 Q405 250 416 230 Z" fill="#FFE2A0" fillOpacity="0.4" strokeWidth="1.4" />
          <circle cx="415" cy="270" r="2.5" fill="#FFE2A0" />
        </g>

        {/* Sacred Flute (Bansuri) */}
        <g stroke="url(#krishnaGoldStroke)" strokeLinecap="round">
          {/* Flute Main Pipe */}
          <path
            d="M140 285 L395 242"
            stroke="url(#krishnaGoldStroke)"
            strokeWidth="5.5"
          />
          {/* Flute Open Holes & Gold Rings */}
          <circle cx="200" cy="275" r="2.5" fill="#080611" stroke="#FFE2A0" strokeWidth="1.2" />
          <circle cx="230" cy="270" r="2.5" fill="#080611" stroke="#FFE2A0" strokeWidth="1.2" />
          <circle cx="260" cy="265" r="2.5" fill="#080611" stroke="#FFE2A0" strokeWidth="1.2" />
          <circle cx="290" cy="260" r="2.5" fill="#080611" stroke="#FFE2A0" strokeWidth="1.2" />

          {/* Flute Ornate Tassel Hanging on Tip */}
          <path d="M140 285 Q130 305 135 325" strokeWidth="1.5" />
          <circle cx="135" cy="330" r="3.5" fill="#FFE2A0" />
          <path d="M132 333 L128 350 M135 334 L135 352 M138 333 L142 350" strokeWidth="1.2" />

          {/* Divine Melodic Light Trails radiating from the flute */}
          <path
            d="M130 280 C90 260 70 230 40 240 C10 250 20 300 70 310"
            stroke="#FFE2A0"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.8"
          />
        </g>

        {/* Delicate Hands & Fingers holding the Bansuri */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Right Hand Fingers on top of flute */}
          <path d="M285 240 Q290 225 298 238 L298 258" />
          <path d="M260 245 Q264 228 272 242 L272 262" />
          <path d="M235 250 Q238 232 245 246 L245 268" />
          {/* Hand Contour */}
          <path d="M305 255 Q335 270 330 305" />

          {/* Left Hand Fingers & Wrist */}
          <path d="M205 260 Q212 248 218 260 L218 275" />
          <path d="M175 268 Q182 254 190 266 L190 282" />
          <path d="M165 295 Q180 320 220 340" />

          {/* Golden Armlets (Keyur & Kankan) on Wrists */}
          <ellipse cx="325" cy="295" rx="8" ry="14" stroke="#FFE2A0" strokeWidth="2" />
          <ellipse cx="178" cy="308" rx="7" ry="12" stroke="#FFE2A0" strokeWidth="2" />
        </g>

        {/* Neck, Shoulders & Garlands (Vaijayanti Mala) */}
        <g stroke="url(#krishnaGoldStroke)" strokeWidth="1.8" strokeLinecap="round">
          {/* Neck & Collarbone */}
          <path d="M390 270 Q410 300 445 320" />
          <path d="M365 272 Q340 310 290 340" />

          {/* Vaijayanti Mala (Sacred Floral Necklace) */}
          <path d="M370 295 Q385 350 365 410 Q340 450 310 470" strokeWidth="2.2" strokeDasharray="6 6" stroke="#FFE2A0" />
          <path d="M385 290 Q405 340 395 400 Q380 440 340 480" strokeWidth="1.6" strokeDasharray="5 5" stroke="#D9A441" />

          {/* Pendant Jewel */}
          <circle cx="340" cy="475" r="4.5" fill="#FFE2A0" stroke="#FF9B32" strokeWidth="1.5" />

          {/* Shoulders & Torso */}
          <path d="M445 320 Q475 350 490 420" strokeWidth="1.8" />
          <path d="M290 340 Q250 380 230 450" strokeWidth="1.8" />
        </g>

        {/* Divine Sparkles & Stars surrounding Lord Krishna */}
        <g fill="#FFE2A0">
          <circle cx="120" cy="180" r="2.5" className="animate-pulse" />
          <circle cx="240" cy="100" r="2" className="animate-pulse" />
          <circle cx="450" cy="90" r="3" className="animate-pulse" />
          <circle cx="470" cy="260" r="2" className="animate-pulse" />
          <circle cx="180" cy="380" r="2.5" className="animate-pulse" />
          <circle cx="430" cy="450" r="2" className="animate-pulse" />
        </g>
      </svg>
    </div>
  );
};
