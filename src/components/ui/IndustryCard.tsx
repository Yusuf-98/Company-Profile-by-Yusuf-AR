import type { IndustryProps } from '../../types';

export default function IndustryCard({
  id,
  description,
  image,
  imageAlt,
}: IndustryProps) {
  return (
    <div key={id} className='flex flex-col gap-5 md:ml-auto animate-fade-in'>
      <p className='text-size-sm md:text-size-md lg:text-size-lg font-medium'>
        {description}
      </p>
      <div className='w-full md:ml-auto'>
        <img
          src={image}
          alt={imageAlt}
          className='rounded-xl w-full h-50 md:h-auto object-cover'
        />
      </div>
    </div>
  );
}
