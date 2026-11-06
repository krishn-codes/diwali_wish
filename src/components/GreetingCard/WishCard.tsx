import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MiniDiya } from '../Diya/MiniDiya';
import { Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WishCardProps {
  id: number;
  message: string;
  delay?: number;
}

export const WishCard: React.FC<WishCardProps> = ({ id, message, delay = 0 }) => {
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleCopyWish = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FFE2A0', '#FF9B32', '#D9A441'],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-2xl p-6 sm:p-8 bg-[#160D2B]/75 backdrop-blur-xl border border-diwali-gold/30 hover:border-diwali-champagne/70 transition-all duration-500 shadow-[0_12px_32px_-8px_rgba(8,6,17,0.85)] hover:shadow-[0_20px_45px_-8px_rgba(217,164,65,0.25)] flex flex-col justify-between overflow-hidden min-h-[190px] sm:min-h-[210px]"
    >
      {/* Radial Hover Spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(217, 164, 65, 0.18), transparent 70%)`,
          }}
        />
      )}

      {/* Ornate Golden Corner Flourishes */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-diwali-gold/60 rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-diwali-gold/60 rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-diwali-gold/60 rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-diwali-gold/60 rounded-br-sm" />

      {/* Card Header Tag */}
      <div className="flex items-center justify-between mb-4 z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-diwali-gold animate-ping" />
          <span className="text-[11px] uppercase tracking-widest text-diwali-champagne/80 font-serif">
            Diwali Blessing 0{id}
          </span>
        </div>
        <button
          onClick={handleCopyWish}
          title="Copy this wish to send to loved ones"
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-diwali-champagne hover:text-white border border-diwali-gold/30"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Main Wish Text */}
      <div className="z-10 pr-12 sm:pr-14 my-auto">
        <p className="font-cormorant text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-diwali-ivory/95 group-hover:text-white transition-colors">
          "{message}"
        </p>
      </div>

      {/* Miniature Glowing Diya in Bottom Right Corner (From Reference) */}
      <div className="absolute bottom-4 right-4 z-10">
        <MiniDiya />
      </div>

      {/* Bottom Subtle Shimmer Bar */}
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-diwali-gold/40 to-transparent group-hover:via-diwali-champagne transition-all" />
    </motion.div>
  );
};
