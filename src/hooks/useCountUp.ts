import { useEffect, useRef, useState } from 'react';

export function useCountUp<T extends HTMLElement>(value: string, duration = 1500) {
  // --- Parse value ---
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  // --- Initial display ---
  const [display, setDisplay] = useState(() => {
    if (target === null || target <= 1) return value;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return value;
    return `1${suffix}`;
  });
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null || target <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // --- Animate on intersect ---
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = 1 + (target - 1) * eased;

          if (progress < 1) {
            setDisplay(`${current.toFixed(decimals)}${suffix}`);
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, target, suffix, decimals, duration]);

  return { ref, display };
}
