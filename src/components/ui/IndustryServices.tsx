import { useRef, useState } from 'react';
import { industry } from '../../data/industry';
import IndustryCard from './IndustryCard';

export default function IndustryServices() {
  const [activeId, setActiveId] = useState<number>(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = industry.industries.find((i) => i.id === activeId)!;
  const activeIndex = industry.industries.findIndex((i) => i.id === activeId);

  const focusTab = (index: number) => {
    const count = industry.industries.length;
    const nextIndex = (index + count) % count;
    setActiveId(industry.industries[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        focusTab(activeIndex + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        focusTab(activeIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(industry.industries.length - 1);
        break;
    }
  };

  return (
    <div className='custom-container flex flex-col gap-6 md:gap-11 lg:gap-16 py-10 lg:py-20'>
      {/* Header */}
      <div className='flex flex-col gap-3.5'>
        <h2 className='dark:text-white font-bold text-size-display-md md:text-size-display-lg lg:text-size-display-xl'>
          {industry.title}
        </h2>
        <p className='font-medium text-neutral-400 text-sm md:text-size-md lg:text-size-lg'>
          {industry.description}
        </p>
      </div>
      {/* Body */}
      <div className='flex flex-col gap-6 md:justify-between md:flex-row md:gap-16 md:items-start'>
        <div
          role='tablist'
          aria-label={industry.title}
          aria-orientation='vertical'
          onKeyDown={handleKeyDown}
          className='flex flex-col gap-3 md:gap-4 lg:gap-6 lg:shrink-0 lg:pt-1'
        >
          {industry.industries.map((indust, index) => {
            const isActive = indust.id === activeId;
            return (
              <button
                key={indust.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`industry-tab-${indust.id}`}
                role='tab'
                aria-selected={isActive}
                aria-controls={`industry-panel-${indust.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(indust.id)}
                className={[
                  'flex items-center gap-1.5 md:gap-2 text-size-md -tracking-1 md:text-size-lg lg:text-size-xl text-left transition-all duration-300 cursor-pointer',
                  isActive
                    ? 'dark:text-neutral-25 font-semibold'
                    : 'text-neutral-600 font-normal hover:text-neutral-400',
                ].join(' ')}
              >
                <span
                  className={[
                    'w-1 h-6 md:h-8 rounded-full transition-all duration-300 shrink-0',
                    isActive ? 'bg-primary-200' : 'bg-neutral-600',
                  ].join(' ')}
                />
                <span className='font-bold text-size-md md:text-size-xl'>
                  {indust.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* Label + Image */}
        <div
          id={`industry-panel-${active.id}`}
          role='tabpanel'
          aria-labelledby={`industry-tab-${active.id}`}
          tabIndex={0}
          className='flex-1 max-w-210 min-w-0'
        >
          <IndustryCard
            key={active.id}
            id={active.id}
            description={active.description}
            image={active.image}
            imageAlt={active.imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
