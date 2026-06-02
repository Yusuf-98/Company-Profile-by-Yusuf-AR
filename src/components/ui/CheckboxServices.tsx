import type { CheckboxServicesProps } from '../../types';
import ServiceCheckbox from './ServiceCheckbox';

export default function CheckboxServices({
  label,
  services,
  selectedServices,
  touched,
  error,
  onToggle,
}: CheckboxServicesProps) {
  const col1 = services.slice(0, 3);
  const col2 = services.slice(3);

  return (
    <div className='flex flex-col items-start gap-3.5 w-full'>
      <label className='font-bold text-size-sm dark:text-neutral-25'>
        {label}
      </label>

      <div className='flex flex-col md:flex-row gap-3.5 md:gap-3.5'>
        <div className='flex flex-col gap-4 flex-1 w-76'>
          {col1.map((service) => (
            <ServiceCheckbox
              key={service.id}
              label={service.label}
              service={service}
              checked={selectedServices.includes(service.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
        <div className='flex flex-col gap-4 flex-1'>
          {col2.map((service) => (
            <ServiceCheckbox
              key={service.id}
              label={service.label}
              service={service}
              checked={selectedServices.includes(service.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>

      {touched && error && (
        <span className='text-red-500 text-size-xs font-medium'>{error}</span>
      )}
    </div>
  );
}
