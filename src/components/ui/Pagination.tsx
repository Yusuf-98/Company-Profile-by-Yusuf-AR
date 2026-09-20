import type { PaginationProps } from '../../types';

function Pagination({
  total,
  activeIndex,
  onClick,
  className,
}: PaginationProps) {
  return (
    <div className={`flex w-full justify-center ${className || ''}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex ? 'true' : undefined}
          className='p-1.5 flex items-center justify-center cursor-pointer'
        >
          <span
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-orange-500' : 'bg-neutral-800'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default Pagination;
