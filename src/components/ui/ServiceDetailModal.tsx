import { useEffect } from 'react';
import type { ServiceDetailModalProps } from '../../types';
import closeIcon from '../../assets/icons/x-close.png';
import { useTheme } from '../../context/useTheme';

export default function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div>
      {/* ── Backdrop + Modal ── */}
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='service-detail-title'
        onClick={onClose}
        className='fixed inset-0 z-50 flex items-center justify-center px-4 bg-base-black/80'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='relative flex flex-col items-start w-full max-w-140 max-h-[85vh] overflow-y-auto border border-neutral-800 rounded-2xl p-8 gap-6 bg-base-white dark:bg-base-black'
        >
          <button
            type='button'
            onClick={onClose}
            aria-label='Close details'
            className='absolute top-4 right-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 cursor-pointer'
          >
            <img
              src={closeIcon}
              alt=''
              aria-hidden='true'
              className={`w-5 h-5 ${isDark ? '' : 'invert'}`}
            />
          </button>

          <div className='flex items-center gap-4'>
            <img
              src={service.icon}
              alt=''
              aria-hidden='true'
              className='w-14 h-14 object-contain shrink-0'
            />
            <h3
              id='service-detail-title'
              className='font-bold text-size-lg md:text-size-xl dark:text-neutral-25'
            >
              {service.title}
            </h3>
          </div>

          <p className='text-neutral-400 font-medium text-size-sm md:text-size-md'>
            {service.detail.longDescription}
          </p>

          {/* Highlights */}
          <ul className='flex flex-col gap-2 w-full'>
            {service.detail.highlights.map((item) => (
              <li
                key={item}
                className='flex items-start gap-2 text-size-sm md:text-size-md dark:text-neutral-25'
              >
                <span className='text-primary-200 font-bold' aria-hidden='true'>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Metrics bar chart */}
          <div className='flex flex-col gap-4 w-full'>
            {service.detail.metrics.map((metric) => (
              <div key={metric.label} className='flex flex-col gap-1.5 w-full'>
                <div className='flex items-center justify-between gap-2 text-size-sm dark:text-neutral-25'>
                  <span className='text-neutral-400 font-medium'>{metric.label}</span>
                  <span className='font-bold text-primary-200 shrink-0'>{metric.display}</span>
                </div>
                <div
                  role='img'
                  aria-label={`${metric.label}: ${metric.display}`}
                  className='w-full h-2 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden'
                >
                  <div
                    className='h-full rounded-full bg-primary-200'
                    style={{ width: `${Math.min(100, Math.max(0, metric.value))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
