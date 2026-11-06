import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
  flicker: boolean;
}

interface Spark {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
}

const PALETTES = [
  ['#FFE2A0', '#D9A441', '#FF9B32', '#FFF2D6', '#FFFFFF'], // Gold Divine
  ['#FF5E7E', '#FF99C8', '#FFE2A0', '#FFAA00', '#FFFFFF'], // Royal Magenta-Gold
  ['#D9A441', '#FFB703', '#FB8500', '#FFDE59', '#FFEED9'], // Warm Flame
  ['#7B2CBF', '#9D4EDD', '#C77DFF', '#FFE2A0', '#FFFFFF'], // Royal Violet
];

export const FireworksCanvas: React.FC<{
  interactive?: boolean;
  frequency?: number; // ms between ambient launches
  className?: string;
}> = ({ interactive = true, frequency = 4500, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let rockets: Spark[] = [];
    let isRunning = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createExplosion = (x: number, y: number, colorSet?: string[]) => {
      const colors = colorSet || PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const count = 45 + Math.floor(Math.random() * 35);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 1.2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012,
          color,
          size: Math.random() * 2.2 + 1,
          flicker: Math.random() > 0.5,
        });
      }
    };

    const launchRocket = (targetX?: number, targetY?: number) => {
      const x = targetX ?? Math.random() * (canvas.width * 0.7) + canvas.width * 0.15;
      const startY = canvas.height;
      const endY = targetY ?? Math.random() * (canvas.height * 0.35) + canvas.height * 0.08;

      rockets.push({
        x,
        y: startY,
        targetY: endY,
        vy: -(Math.random() * 4 + 7.5),
        color: '#FFE2A0',
        exploded: false,
      });
    };

    // Ambient timer
    const interval = setInterval(() => {
      if (!isRunning) return;
      if (document.hidden) return;
      launchRocket();
    }, frequency);

    // Initial burst on mount
    setTimeout(() => launchRocket(canvas.width * 0.75, canvas.height * 0.2), 800);
    setTimeout(() => launchRocket(canvas.width * 0.85, canvas.height * 0.28), 2400);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & render rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;

        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.shadowColor = '#FFE2A0';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Trail
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x, r.y + 12);
        ctx.strokeStyle = 'rgba(255, 226, 160, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (r.y <= r.targetY) {
          createExplosion(r.x, r.y);
          rockets.splice(i, 1);
        }
      }

      // Update & render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.045; // gravity
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.6 : p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleClick = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      launchRocket(clickX, clickY);
    };

    window.addEventListener('click', handleClick);

    return () => {
      isRunning = false;
      clearInterval(interval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
    };
  }, [frequency, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
};
