import { useEffect } from 'react';
import type { PortfolioPreviewModalProps } from '../../types';
import { useTheme } from '../../context/useTheme';
import closeIcon from '../../assets/icons/x-close.png';

export default function PortfolioPreviewModal({
  item,
  onClose,
}: PortfolioPreviewModalProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div>
      {/* ── Backdrop + Modal ── */}
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='portfolio-preview-title'
        onClick={onClose}
        className='fixed inset-0 z-50 flex items-center justify-center px-4 bg-base-black/80'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='relative flex flex-col items-start w-full max-w-180 border border-neutral-800 rounded-2xl overflow-hidden bg-base-white dark:bg-base-black'
        >
          <button
            type='button'
            onClick={onClose}
            aria-label='Close preview'
            className='absolute top-3 right-3 z-10 p-2 rounded-full bg-base-black/60 cursor-pointer'
          >
            <img
              src={closeIcon}
              alt=''
              aria-hidden='true'
              className={`w-5 h-5 ${isDark ? '' : 'invert'}`}
            />
          </button>

          <img
            src={item.image}
            alt={item.alt}
            className='w-full max-h-120 object-cover'
          />

          <div className='w-full flex flex-col items-start gap-1 p-6'>
            <p className='font-medium text-size-sm md:text-size-md text-primary-200'>
              {item.category}
            </p>
            <h3
              id='portfolio-preview-title'
              className='font-bold text-size-lg md:text-size-xl dark:text-neutral-25'
            >
              {item.label}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
