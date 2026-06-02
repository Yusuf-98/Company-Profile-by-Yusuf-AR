import type { CheckboxProps } from '../../types';
import checkboxUnchecked from '../../assets/icons/checkbox-unchecked.png';
import checkboxChecked from '../../assets/icons/checkbox-checked.png';

export default function ServiceCheckbox({
  service,
  checked,
  onToggle,
}: CheckboxProps) {
  return (
    <div
      role='checkbox'
      aria-checked={checked}
      tabIndex={0}
      onClick={() => onToggle(service.id)}
      onKeyDown={(e) =>
        (e.key === ' ' || e.key === 'Enter') && onToggle(service.id)
      }
      className='flex flex-row items-center gap-3 cursor-pointer select-none h-7.5'
    >
      <img
        src={checked ? checkboxChecked : checkboxUnchecked}
        alt={checked ? 'checked' : 'unchecked'}
        width={20}
        height={20}
        className='shrink-0'
      />
      <span className='font-medium text-size-sm md:text-size-md dark:text-neutral-25'>
        {service.label}
      </span>
    </div>
  );
}
