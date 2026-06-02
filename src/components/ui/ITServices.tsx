import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

function ITServices() {
  return (
    <div className='flex flex-col py-10 px-4 gap-10 md:py-15 md:px-10xl md:gap-14 lg:py-20 lg:px-11xl lg:gap-16'>
      {/* Header */}
      <div className='flex flex-col gap-3.5'>
        <h1 className='font-semibold text-size-display-sm md:text-size-display-lg lg:text-size-display-xl text-center dark:text-neutral-25'>
          {services.title}
        </h1>
        <p className='font-medium text-size-sm md:text-size-lg text-center text-neutral-400'>
          {services.description}
        </p>
      </div>
      {/* Body */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-10 items-stretch'>
        {services.list.map((service) => (
          <div key={service.id}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ITServices;
