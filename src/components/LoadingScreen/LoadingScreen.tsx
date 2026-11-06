import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LotusIcon } from '../LotusIcon';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080611] text-diwali-ivory overflow-hidden select-none"
      >
        {/* Background Ambient Glow */}
        <div className="absolute w-96 h-96 rounded-full bg-[#29113D]/70 blur-3xl animate-pulse" />
        <div className="absolute w-64 h-64 rounded-full bg-[#FF9B32]/15 blur-2xl" />

        {/* Lotus Icon with Sacred Blooming Pulse */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative">
            {/* Pulsing Aura */}
            <div className="absolute -inset-4 rounded-full bg-diwali-gold/30 blur-xl animate-pulse" />
            <LotusIcon className="w-20 h-20 sm:w-24 sm:h-24" />
          </div>

          {/* Diya Flame Ignition */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-3.5 h-8 -mt-2 bg-gradient-to-t from-[#FF4500] via-[#FFDE59] to-[#FFFFFF] rounded-[50%_50%_20%_20%/60%_60%_40%_40%] animate-flame shadow-[0_0_20px_#FF9B32]"
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-serif text-2xl sm:text-3xl tracking-widest text-diwali-champagne mt-6 text-center font-bold"
          >
            SHUBH DEEPAVALI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="font-cormorant italic text-sm sm:text-base text-diwali-ivory/80 mt-1"
          >
            A Divine Celebration with Krishna Sharma
          </motion.p>
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="relative z-10 mt-10 w-48 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden border border-diwali-gold/30">
          <motion.div
            className="h-full bg-gradient-to-r from-diwali-gold via-diwali-champagne to-diwali-orange"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[10px] tracking-widest uppercase text-diwali-gold/70 mt-3 font-serif">
          Illuminating Experience... {progress}%
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
