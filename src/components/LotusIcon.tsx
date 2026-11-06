import React from 'react';

interface LotusIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const LotusIcon: React.FC<LotusIconProps> = ({
  className = "w-7 h-7",
  size,
  glow = true,
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'drop-shadow-[0_0_12px_rgba(217,164,65,0.7)]' : ''}`}
      style={size ? { width: size, height: size } : {}}
    >
      <defs>
        <linearGradient id="lotusGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D9A441" />
          <stop offset="50%" stopColor="#FFE2A0" />
          <stop offset="100%" stopColor="#FF9B32" />
        </linearGradient>
        <linearGradient id="lotusPetalInner" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FF9B32" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFE2A0" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Central petal */}
      <path
        d="M32 10 C30 22 24 38 32 50 C40 38 34 22 32 10Z"
        fill="url(#lotusGoldGrad)"
        stroke="#FFE2A0"
        strokeWidth="1.2"
      />

      {/* Inner left petal */}
      <path
        d="M30 18 C22 26 18 38 27 49 C25 40 27 28 30 18Z"
        fill="url(#lotusPetalInner)"
        stroke="#FFE2A0"
        strokeWidth="1"
        opacity="0.9"
      />

      {/* Inner right petal */}
      <path
        d="M34 18 C42 26 46 38 37 49 C39 40 37 28 34 18Z"
        fill="url(#lotusPetalInner)"
        stroke="#FFE2A0"
        strokeWidth="1"
        opacity="0.9"
      />

      {/* Outer left petal */}
      <path
        d="M26 28 C14 34 10 44 22 51 C18 43 21 34 26 28Z"
        fill="url(#lotusGoldGrad)"
        stroke="#D9A441"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Outer right petal */}
      <path
        d="M38 28 C50 34 54 44 42 51 C46 43 43 34 38 28Z"
        fill="url(#lotusGoldGrad)"
        stroke="#D9A441"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Far outer left wing */}
      <path
        d="M20 38 C8 42 6 49 17 53 C12 47 15 42 20 38Z"
        fill="url(#lotusGoldGrad)"
        stroke="#D9A441"
        strokeWidth="0.8"
        opacity="0.65"
      />

      {/* Far outer right wing */}
      <path
        d="M44 38 C56 42 58 49 47 53 C52 47 49 42 44 38Z"
        fill="url(#lotusGoldGrad)"
        stroke="#D9A441"
        strokeWidth="0.8"
        opacity="0.65"
      />

      {/* Base lotus cushion */}
      <path
        d="M22 51 Q32 55 42 51 Q32 57 22 51Z"
        fill="#FFE2A0"
        stroke="#D9A441"
        strokeWidth="1"
      />
      <circle cx="32" cy="50" r="1.5" fill="#FFFFFF" />
    </svg>
  );
};
