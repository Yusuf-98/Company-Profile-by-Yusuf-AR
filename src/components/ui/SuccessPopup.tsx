import type { SuccessPopupProps } from '../../types';
import Button from './Button';
import messageImage from '../../assets/icons/success-popup.png';

export default function SuccessPopup({
  data,
  isOpen,
  onClose,
}: SuccessPopupProps) {
  if (!isOpen) return null;

  return (
    <div>
      {/* ── Backdrop ─── */}
      <div
        className='fixed inset-0 z-40 bg-base-black/80'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* ── Modal ── */}
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='popup-title'
        className='fixed inset-0 z-50 flex items-center justify-center px-4'
      >
        <div className='flex flex-col items-start w-full max-w-129.5 border border-neutral-800 rounded-2xl overflow-hidden'>
          <div className='w-full flex items-center justify-center p-2 h-56.25 bg-neutral-50 dark:bg-neutral-950 rounded-t-2xl'>
            <img
              src={messageImage}
              alt='Message received illustration'
              className='h-full w-auto object-contain'
            />
          </div>

          <div className='w-full flex flex-col items-center px-8 pt-8 pb-10 gap-8 bg-base-white dark:bg-base-black rounded-b-2xl'>
            <div className='flex flex-col items-center gap-2 w-full'>
              <h3
                id='popup-title'
                className='w-full text-center font-bold text-size-lg md:text-size-xl dark:text-neutral-25'
              >
                {data.title}
              </h3>
              <p className='w-full text-center font-medium text-size-sm md:text-size-md text-neutral-400'>
                {data.description}
              </p>
            </div>

            {/* Back to Home button */}
            <Button
              background='orange'
              size='md'
              type='button'
              onClick={onClose}
              className='w-full'
            >
              {data.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
