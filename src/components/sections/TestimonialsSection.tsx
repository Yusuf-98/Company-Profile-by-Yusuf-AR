import { useRef, useState } from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import Pagination from '../ui/Pagination';
import { testimonials } from '../../data/testimonials';

function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleDotClick = (index: number) => {
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
          className='flex overflow-x-auto scrollbar-none w-full snap-x snap-mandatory pr-[50%]'
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
      </div>

      {/* Pagination */}
      <Pagination
        total={testimonials.list.length}
        activeIndex={activeIndex}
        onClick={handleDotClick}
        className='-mt-2'
      />
    </section>
  );
}

export default TestimonialsSection;
