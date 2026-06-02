import type { HeroProps } from '../../types';
import Button from './Button';

const Hero = ({ title, titleSpan, description }: HeroProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-10'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-size-display-lg md:text-size-hero-md lg:text-size-hero-lg dark:text-neutral-25'>
          {title}
          <span className='font-bold text-size-display-lg md:text-size-hero-md lg:text-size-hero-lg text-primary-200'>
            {titleSpan}
          </span>
        </h1>
        <p className='font-semibold text-size-md md:text-size-lg lg:text-size-xl dark:text-neutral-25'>
          {description}
        </p>
      </div>
      <Button
        size='md'
        background='orange'
        type='button'
        onClick={() => {
          const el = document.querySelector('#contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        children="Let's Talk"
        className='w-full md:w-50'
      />
    </div>
  );
};

export default Hero;
