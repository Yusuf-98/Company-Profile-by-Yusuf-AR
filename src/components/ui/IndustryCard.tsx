import type { IndustryProps } from '../../types';

export default function IndustryCard({
  id,
  description,
  image,
  imageAlt,
}: IndustryProps) {
  return (
    <div className='flex flex-col gap-5 md:ml-auto'>
      <p className='text-size-sm md:text-size-md lg:text-size-lg font-medium'>
        {description}
      </p>
      <div className='w-full md:ml-auto'>
        <img
          key={id}
          src={image}
          alt={imageAlt}
          className='rounded-xl w-full h-50 md:h-auto object-cover transition-opacity duration-300'
        />
      </div>
    </div>
  );
}
