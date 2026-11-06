import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const FestiveMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Gentle meditative Indian raga notes (Raag Yaman / Bhupali: Sa, Re, Ga, Pa, Dha, Sa)
  const notes = [220, 247.5, 277.2, 330, 370, 440, 495, 554.4];

  const playPluck = (freq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sitar / Veena harmonic warmth
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.0);
  };

  const startMusic = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    setIsPlaying(true);

    // Initial chord
    playPluck(notes[0]);
    setTimeout(() => playPluck(notes[2]), 400);
    setTimeout(() => playPluck(notes[4]), 800);

    // Loop pleasant ambient drone & melody
    intervalRef.current = window.setInterval(() => {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      playPluck(randomNote);

      if (Math.random() > 0.5) {
        setTimeout(() => {
          playPluck(notes[Math.floor(Math.random() * notes.length)]);
        }, 600);
      }
    }, 2800);
  };

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute festive music" : "Play festive ambient music 🪕"}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#160D2B]/85 backdrop-blur-md border border-diwali-gold/40 text-diwali-champagne hover:text-white hover:border-diwali-gold transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)] group"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-diwali-gold animate-pulse" />
            <span className="text-xs font-serif tracking-wider text-diwali-ivory">Festive Ambience</span>
            <div className="flex gap-0.5 items-end h-3">
              <span className="w-0.5 h-full bg-diwali-gold animate-pulse" />
              <span className="w-0.5 h-2 bg-diwali-gold animate-pulse delay-75" />
              <span className="w-0.5 h-3 bg-diwali-gold animate-pulse delay-150" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-diwali-ivory/60 group-hover:text-diwali-champagne" />
            <span className="text-xs font-serif tracking-wider text-diwali-ivory/70 group-hover:text-diwali-champagne">
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
};
