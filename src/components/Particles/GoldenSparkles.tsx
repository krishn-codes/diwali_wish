import React, { useMemo } from 'react';

export const GoldenSparkles: React.FC = () => {
  // Generate stable random stars
  const stars = useMemo(() => {
    return Array.from({ length: 48 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 65, // upper 65% of screen
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
    }));
  }, []);

  // Floating gold dust / embers
  const embers = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 90,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
  }, []);

  // Drifting lotus petals
  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 70 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 6,
      scale: Math.random() * 0.5 + 0.6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-[#FFF2D6] star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 6px #FFE2A0',
          }}
        />
      ))}

      {/* Floating Gold Embers / Sparks */}
      {embers.map((ember) => (
        <div
          key={`ember-${ember.id}`}
          className="absolute rounded-full bg-gradient-to-t from-[#FF9B32] to-[#FFE2A0] animate-float-slow"
          style={{
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            animationDuration: `${ember.duration}s`,
            animationDelay: `${ember.delay}s`,
            boxShadow: '0 0 8px #FFDE59',
            opacity: 0.75,
          }}
        />
      ))}

      {/* Drifting Flower Petals */}
      {petals.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            transform: `scale(${petal.scale})`,
            animation: `petalDrift ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 16" className="w-5 h-3 fill-pink-400/70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <path d="M0 8 C6 2 18 2 24 8 C18 14 6 14 0 8 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
