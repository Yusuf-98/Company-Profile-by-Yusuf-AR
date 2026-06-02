import { useState, useRef, useEffect } from 'react';
import { processHeader, steps } from '../../data/processData';
import { StepCard, BUBBLE_SIZE, BUBBLE_CENTER } from './ProcessStepCard';

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstBubbleRef = useRef<HTMLDivElement>(null);
  const lastBubbleRef = useRef<HTMLDivElement>(null);

  const [fillPct, setFillPct] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  // -- Vertical line position state
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  // -- Recalculate vertical line position
  const updateLine = () => {
    const tl = timelineRef.current;
    const first = firstBubbleRef.current;
    const last = lastBubbleRef.current;
    if (!tl || !first || !last) return;

    const tlTop = tl.getBoundingClientRect().top + window.scrollY;
    const firstTop = first.getBoundingClientRect().top + window.scrollY;
    const lastTop = last.getBoundingClientRect().top + window.scrollY;

    setLineTop(firstTop - tlTop + BUBBLE_SIZE / 2);
    setLineHeight(
      lastTop - tlTop + BUBBLE_SIZE / 2 - (firstTop - tlTop + BUBBLE_SIZE / 2)
    );
  };

  // -- Detect mobile/desktop on resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // -- Initial line calculation on mount
  useEffect(() => {
    const id = setTimeout(updateLine, 100);
    return () => clearTimeout(id);
  }, []);

  // -- Scroll handler: fill progress + active bubbles
  useEffect(() => {
    const TRIGGER = 0.65;

    function onScroll() {
      const tl = timelineRef.current;
      const first = firstBubbleRef.current;
      if (!tl || !first) return;

      updateLine();

      const viewH = window.innerHeight;
      const firstTop = first.getBoundingClientRect().top + BUBBLE_SIZE / 2;
      const scrolled = viewH * TRIGGER - firstTop;
      const pct = Math.min(
        100,
        Math.max(0, (scrolled / (lineHeight || 1)) * 100)
      );
      setFillPct(pct);

      const stepEls = tl.querySelectorAll<HTMLDivElement>('[data-step]');
      const active = Array.from(stepEls).map((el) => {
        return el.getBoundingClientRect().top + BUBBLE_CENTER < viewH * TRIGGER;
      });
      setActiveSteps(active);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [lineHeight]);

  const lineLeft = isMobile ? `${BUBBLE_SIZE / 2}px` : '50%';

  return (
    <div
      className='w-full dark:bg-base-black min-h-screen py-10 md:py-20 px-4 md:px-10xl lg:px-11xl'
    >
      {/* -- Header */}
      <div className='flex flex-col gap-3 md:gap-3.5 mb-16'>
        <h2 className='dark:text-neutral-25 text-center text-size-display-sm md:text-size-display-lg lg:text-size-display-xl font-bold'>
          {processHeader.title}
        </h2>
        <p className='text-neutral-400 text-center text-size-sm md:text-size-lg mx-auto'>
          {processHeader.description}
        </p>
      </div>

      {/* -- Timeline container */}
      <div ref={timelineRef} className='relative mx-auto'>
        {/* -- Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: lineLeft,
            top: `${lineTop}px`,
            height: `${lineHeight}px`,
            width: '1px',
            transform: 'translateX(-50%)',
            zIndex: 0,
            transition: 'top 0.35s ease, height 0.35s ease',
          }}
        >
          {/* -- Line background */}
          <div className='absolute inset-0 bg-neutral-200' />
          {/* -- Line fill/progress */}
          <div
            className='absolute left-0 top-0 w-full bg-primary-200 transition-[height] duration-100 ease-linear'
            style={{ height: `${fillPct}%` }}
          />
        </div>

        {/* -- Step cards */}
        {steps.map((step, i) => {
          const isFirst = i === 0;
          const isLast = i === steps.length - 1;
          return (
            <div key={step.id} data-step>
              <StepCard
                step={step}
                active={activeSteps[i] ?? false}
                isMobile={isMobile}
                bubbleRef={
                  isFirst ? firstBubbleRef : isLast ? lastBubbleRef : undefined
                }
                onToggle={updateLine}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
