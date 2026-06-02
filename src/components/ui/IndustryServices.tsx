import { useState } from 'react';
import { industry } from '../../data/industry';
import IndustryCard from './IndustryCard';

export default function IndustryServices() {
  const [activeId, setActiveId] = useState<number>(1);

  const active = industry.industries.find((i) => i.id === activeId)!;

  return (
    <div className='flex flex-col gap-6 md:gap-11 lg:gap-16 px-4 py-10 md:px-10xl lg:px-11xl lg:py-20'>
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
        <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 lg:shrink-0 lg:pt-1'>
          {industry.industries.map((indust) => {
            const isActive = indust.id === activeId;
            return (
              <button
                key={indust.id}
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
        <div className='flex-1 max-w-210 min-w-0'>
          <IndustryCard
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
