import { lazy, Suspense, useState } from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';
import type { ServiceCardProps } from '../../types';

const ServiceDetailModal = lazy(() => import('./ServiceDetailModal'));

function ITServices() {
  const [selected, setSelected] = useState<ServiceCardProps | null>(null);

  return (
    <div className='custom-container flex flex-col py-10 gap-10 md:py-15 md:gap-14 lg:py-20 lg:gap-16'>
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
            <ServiceCard {...service} onClick={() => setSelected(service)} />
          </div>
        ))}
      </div>

      <Suspense fallback={null}>
        <ServiceDetailModal service={selected} onClose={() => setSelected(null)} />
      </Suspense>
    </div>
  );
}

export default ITServices;
