import { ConsultationData } from '../../data/consultation';
import Button from './Button';

function ConsultationCard() {
  return (
    <div className='w-full lg:max-w-82.25 flex flex-col items-start justify-center gap-4 md:gap-5 lg:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl lg:rounded-4xl bg-primary-300'>
      {/* Header */}
      <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-size-display-sm md:text-size-display-md lg:text-size-display-lg text-base-white'>
          {ConsultationData.title}
        </h1>
        <p className='font-semibold text-size-sm md:text-size-md lg:text-size-lg text-base-white'>
          {ConsultationData.subtitle}
        </p>
      </div>
      {/* Image + Button */}
      <div>
        <img
          src={ConsultationData.image}
          alt={ConsultationData.alt}
          className='w-full object-cover rounded-2xl'
        />
      </div>
      <div className='w-full'>
        <Button
          size='md'
          background='white'
          type='button'
          children='Free Consultation'
          className='w-full font-bold'
          onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </div>
  );
}

export default ConsultationCard;
