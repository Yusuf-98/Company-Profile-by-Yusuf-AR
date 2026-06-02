import { useTheme } from '../../context/useTheme';
import type { FAQRowProps } from '../../types';
import PlusDarkIcon from '../../assets/icons/plus-dark.png';
import MinusDarkIcon from '../../assets/icons/minus-dark.png';
import PlusLightIcon from '../../assets/icons/plus-light.png';
import MinusLightIcon from '../../assets/icons/minus-light.png';

{
  /* FAQ Accordion */
}
function FAQRow({ item, isOpen, onToggle }: FAQRowProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const plusIcon = isDark ? PlusDarkIcon : PlusLightIcon;
  const minusIcon = isDark ? MinusDarkIcon : MinusLightIcon;
  return (
    <div className='flex flex-col gap-4 mb-4'>
      <button
        onClick={onToggle}
        className='w-full flex justify-between text-left group cursor-pointer'
        aria-expanded={isOpen}
      >
        {/* Question */}
        <span className='dark:text-neutral-25 font-bold text-size-lg md:text-size-xl lg:text-size-display-xs text-left'>
          {item.question}
        </span>
        <span className='dark:text-neutral-25 w-6 h-6 shrink-0 select-none'>
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? 'Collapse' : 'Expand'}
            className={`object-contain ${isDark ? 'w-6 h-6' : 'w-4 h-4'}`}
          />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-50 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {/* Answer */}
        <p className='text-neutral-400 font-medium text-size-sm md:text-size-md lg:text-size-xl'>
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default FAQRow;
