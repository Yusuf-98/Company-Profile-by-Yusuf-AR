import type { Testimonial } from '../../types';
import QuoteIcon from '../../assets/icons/quote-icon.png';
import StarIcon from '../../assets/icons/star-icon.png';

const TestimonialCard = ({
  name,
  position,
  company,
  message,
  avatar,
  rating,
}: Testimonial) => {
  const stars = Array.from({ length: rating ?? 0 });

  return (
    <div className='relative w-90.25 md:w-120 lg:w-148.5 my-9.5 group rounded-2xl cursor-pointer'>
      {/* Border Animasinya */}
      <div
        className='absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-border'
        style={{
          background:
            'conic-gradient(from var(--angle), #ff6c37, #000000 50%, #ff6c37)',
        }}
      />

      {/* Konten Utama */}
      <div className='relative rounded-2xl bg-neutral-25 dark:bg-neutral-950 flex justify-center border-[0.5px] border-neutral-900 group-hover:border-transparent'>
        <img
          src={QuoteIcon}
          alt='Quote Icon'
          className='w-16 h-16 lg:w-20 lg:h-20 object-contain absolute -top-8.5 left-12.5 lg:-top-11 z-2'
        />

        <div className='flex flex-col items-center justify-center pt-10 pb-16 px-6 gap-4 lg:pt-12 lg:px-8 lg:gap-6'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <div className='flex gap-1 group-hover:scale-120 transition-transform duration-300'>
              {stars.map((_, index) => (
                <img
                  key={index}
                  src={StarIcon}
                  alt='Rating Star'
                  className='w-6 h-6'
                />
              ))}
            </div>
            <p className='font-semibold text-size-sm text-center text-neutral-950 dark:text-neutral-25 lg:text-size-lg'>
              {message}
            </p>
          </div>
          <div>
            <p className='font-semibold text-size-sm text-center text-neutral-950 dark:text-neutral-25 lg:text-size-lg'>
              {name}
            </p>
            <p className='font-semibold text-size-sm text-center text-primary-200 lg:text-size-lg'>
              {position} at {company}
            </p>
          </div>
        </div>

        <img
          src={avatar || '/default-avatar.png'}
          alt={name}
          className='w-15 h-15 rounded-full lg:w-19 lg:h-19 object-contain absolute -bottom-6 lg:-bottom-7.5 z-2'
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
