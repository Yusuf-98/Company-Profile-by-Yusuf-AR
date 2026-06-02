import { useState } from 'react';
import type { StepCardProps } from '../../types';
import UpArrow from '../../assets/icons/chevron-up.png';
import DownArrow from '../../assets/icons/chevron-down.png';

// -- Bubble constants
export const BUBBLE_TOP = 18;
export const BUBBLE_SIZE = 48;
export const BUBBLE_CENTER = BUBBLE_TOP + BUBBLE_SIZE / 2;

export function StepCard({
  step,
  active,
  isMobile,
  bubbleRef,
  onToggle,
}: StepCardProps) {
  const [open, setOpen] = useState(true);

  // -- Toggle card & notify parent after 1 frame
  const handleToggle = () => {
    setOpen((v) => !v);
    requestAnimationFrame(() => onToggle?.());
  };

  // -- Mobile layout
  if (isMobile) {
    return (
      <div className='relative flex items-start mb-5 pl-13'>
        {/* -- Bubble */}
        <div
          ref={bubbleRef}
          className={[
            'absolute left-0 z-10 shrink-0',
            'w-12 h-12 p-2 rounded-full flex items-center justify-center',
            'dark:text-neutral-25 text-size-xs md:text-size-md text-center font-bold transition-colors duration-300',
            active ? 'bg-primary-200' : 'bg-neutral-400',
          ].join(' ')}
          style={{ top: `${BUBBLE_TOP}px` }}
        >
          {step.id}
        </div>

        {/* -- Card */}
        <div
          className='flex-1 dark:bg-neutral-950 border dark:border-neutral-900 rounded-2xl p-6 cursor-pointer select-none'
          onClick={handleToggle}
        >
          <div className='flex items-center justify-between gap-3'>
            <span className='dark:text-neutral-25 font-bold text-size-md md:text-size-xl leading-snug'>
              {step.title}
            </span>
            <img
              src={open ? UpArrow : DownArrow}
              alt={open ? 'collapse' : 'expand'}
              className='w-6 h-6 shrink-0 opacity-60'
            />
          </div>
          {open && (
            <p className='text-neutral-400 text-size-sm md:text-size-md mt-1 leading-relaxed'>
              {step.subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  // -- Desktop zigzag layout
  return (
    <div
      className={[
        'w-full relative flex items-start mb-10',
        step.side === 'left'
          ? 'flex-row pr-[calc(50%+2.5rem)]'
          : 'flex-row-reverse pl-[calc(50%+2.5rem)]',
      ].join(' ')}
    >
      {/* -- Card */}
      <div
        className='flex-1 dark:bg-neutral-950 border dark:border-neutral-900 rounded-2xl p-6 cursor-pointer select-none'
        onClick={handleToggle}
      >
        <div className='flex items-center justify-between gap-1'>
          <span className='dark:text-neutral-25 font-bold text-size-md -tracking-1 md:text-size-xl'>
            {step.title}
          </span>
          <img
            src={open ? UpArrow : DownArrow}
            alt={open ? 'collapse' : 'expand'}
            className='w-6 h-6 shrink-0 opacity-60'
          />
        </div>
        {open && (
          <p className='text-neutral-400 text-size-sm md:text-size-md mt-1'>
            {step.subtitle}
          </p>
        )}
      </div>

      {/* -- Bubble */}
      <div
        ref={bubbleRef}
        className={[
          'absolute left-1/2 -translate-x-1/2 z-10',
          'w-12 h-12 p-2 rounded-full border dark:border-neutral-900 flex items-center justify-center',
          'dark:text-neutral-25 text-size-xs md:text-size-md text-center font-bold transition-colors duration-300',
          active ? 'bg-primary-200' : 'bg-neutral-400',
        ].join(' ')}
        style={{ top: `${BUBBLE_TOP}px` }}
      >
        {step.id}
      </div>
    </div>
  );
}
