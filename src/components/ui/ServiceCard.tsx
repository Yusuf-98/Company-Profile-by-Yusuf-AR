import type { ServiceCardProps } from '../../types';

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div
      className={
        'h-full rounded-2xl border border-neutral-900 flex flex-col pt-12 pb-5 px-5 gap-4 lg:pt-16 cursor-pointer transition-all duration-500 ease-in-out relative hover:border-primary-300/80 hover:scale-103'
      }
    >
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 lg:w-20 lg:h-20 object-contain absolute -top-5 lg:-top-6.5'
      />
      <div className='flex flex-col gap-1'>
        <h3 className='dark:text-neutral-25 font-bold text-size-md lg:text-size-xl'>
          {title}
        </h3>
        <p className='text-neutral-400 font-medium text-size-sm lg:text-size-md'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
