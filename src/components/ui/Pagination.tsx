import type { PaginationProps } from '../../types';

function Pagination({
  total,
  activeIndex,
  onClick,
  className,
}: PaginationProps) {
  return (
    <div className={`flex w-full justify-center gap-x-1.5 ${className || ''}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'bg-orange-500' : 'bg-neutral-800'
          }`}
        />
      ))}
    </div>
  );
}

export default Pagination;
