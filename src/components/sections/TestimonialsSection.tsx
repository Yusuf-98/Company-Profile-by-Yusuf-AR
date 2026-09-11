import { useEffect, useRef, useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import Pagination from '../ui/Pagination';
import { testimonials } from '../../data/testimonials';
import { useTheme } from '../../context/useTheme';
import ChevronRight from '../../assets/icons/chevron-right.png';

const arrowButtonClass =
  'absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-300 hover:bg-primary-200 hover:border-primary-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-neutral-50 dark:disabled:hover:bg-neutral-950';

function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Active index from scroll position
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 594;
    const gap = 20;

    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const children = container.children;
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () =>
    scrollToIndex(Math.min(testimonials.list.length - 1, activeIndex + 1));

  // Mouse drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = e.pageX;
    dragScrollStartRef.current = container.scrollLeft;
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = scrollRef.current;
      if (!container || !isDraggingRef.current) return;
      e.preventDefault();
      const delta = e.pageX - dragStartXRef.current;
      container.scrollLeft = dragScrollStartRef.current - delta;
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
    };
  }, [isDragging]);

  return (
    <section id='testimonials' className='flex flex-col py-20 gap-10 w-full'>
      {/* Header */}
      <div className='w-full flex flex-col items-center gap-4'>
        <h1 className='font-bold text-size-display-sm md:text-size-display-lg lg:text-size-display-xl dark:text-neutral-25 text-neutral-950 text-center'>
          {testimonials.title}
        </h1>
        <p className='font-medium text-size-lg text-neutral-400 text-center'>
          {testimonials.description}
        </p>
      </div>

      {/* Cards Section */}
      <div className='w-full shrink-0 relative overflow-hidden'>
        {/* Left blur */}
        <div className='absolute left-0 top-0 h-full w-[clamp(0px,calc(49.67vw-195.20px),520px)] z-5 bg-linear-to-r from-neutral-25 via-neutral-25/90 to-transparent dark:from-black dark:via-neutral-950/80 dark:to-transparent pointer-events-none' />

        {/* Container Scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onDragStart={(e) => e.preventDefault()}
          className={`flex overflow-x-auto scrollbar-none w-full pr-[50%] ${
            isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
          }`}
        >
          {testimonials.list.map((testimonial) => (
            <div
              key={testimonial.id}
              className='snap-center mx-2.5 first:ml-[50%] last:mr-[50%]'
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Right blur */}
        <div className='absolute right-0 top-0 h-full w-[clamp(0px,calc(49.67vw-195.20px),520px)] z-5 bg-linear-to-l from-neutral-25 via-neutral-25/90 to-transparent dark:from-black dark:via-neutral-950/80 dark:to-transparent pointer-events-none' />

        {/* Prev arrow */}
        <button
          type='button'
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label='Previous testimonial'
          className={`${arrowButtonClass} left-2 md:left-4 lg:left-6`}
        >
          <img
            src={ChevronRight}
            alt=''
            aria-hidden='true'
            className={`w-4 h-4 md:w-5 md:h-5 rotate-180 ${isDark ? '' : 'invert'}`}
          />
        </button>

        {/* Next arrow */}
        <button
          type='button'
          onClick={handleNext}
          disabled={activeIndex === testimonials.list.length - 1}
          aria-label='Next testimonial'
          className={`${arrowButtonClass} right-2 md:right-4 lg:right-6`}
        >
          <img
            src={ChevronRight}
            alt=''
            aria-hidden='true'
            className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? '' : 'invert'}`}
          />
        </button>
      </div>

      {/* Pagination */}
      <Pagination
        total={testimonials.list.length}
        activeIndex={activeIndex}
        onClick={scrollToIndex}
        className='-mt-2'
      />
    </section>
  );
}

export default TestimonialsSection;
