import { gsap } from 'gsap';

export const initParallaxMouse = (
  containerRef: HTMLElement | null,
  elements: { selector: string; depth: number }[]
) => {
  if (!containerRef) return () => {};

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;

    elements.forEach(({ selector, depth }) => {
      const targets = containerRef.querySelectorAll(selector);
      if (targets.length > 0) {
        gsap.to(targets, {
          x: xPos * depth * 25,
          y: yPos * depth * 25,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};

export const pulseElement = (element: HTMLElement | null) => {
  if (!element) return;
  gsap.to(element, {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 2.2,
    ease: 'sine.inOut',
  });
};
