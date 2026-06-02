import type { PortfolioProps } from '../../types';

function PortfolioCard({ id, category, label, image, alt }: PortfolioProps) {
  return (
    <div className='group gap-3 w-full h-auto cursor-pointer'>
      <div className='overflow-hidden rounded-2xl'>
        <img
          key={id}
          src={image}
          alt={alt}
          className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
        />
      </div>
      <div className='flex flex-col items-start w-full'>
        <p className='font-medium text-size-sm md:text-size-md text-primary-200 transition-opacity duration-300 group-hover:opacity-80'>
          {category}
        </p>
        <p className='font-bold text-size-md md:text-size-xl dark:text-neutral-25 transition-colors duration-300 group-hover:text-neutral-500'>
          {label}
        </p>
      </div>
    </div>
  );
}

export default PortfolioCard;
