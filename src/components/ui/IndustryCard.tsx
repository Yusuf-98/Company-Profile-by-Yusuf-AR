import { useState } from 'react';
import type { IndustryProps } from '../../types';

export default function IndustryCard({
  description,
  image,
  imageAlt,
}: IndustryProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='flex flex-col gap-5 md:ml-auto animate-fade-in'>
      <p className='text-size-sm md:text-size-md lg:text-size-lg font-medium'>
        {description}
      </p>
      <div className='w-full md:ml-auto'>
        <img
          src={image}
          alt={imageAlt}
          loading='lazy'
          onLoad={() => setLoaded(true)}
          className={`rounded-xl w-full aspect-[840/351] object-cover transition-opacity duration-500 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}
