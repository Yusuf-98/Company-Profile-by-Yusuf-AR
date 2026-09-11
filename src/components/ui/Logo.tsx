import logoIconLarge from '../../assets/icons/logo-large.png';
import logoIconSmall from '../../assets/icons/logo-small.png';
import type { LogoProps } from '../../types';

const LogoIcon = () => {
  return (
    <picture>
      {/* Desktop logo */}
      <source media='(min-width: 768px)' srcSet={logoIconLarge} />

      {/* Mobile logo */}
      <img
        src={logoIconSmall}
        alt='Logo image'
        aria-hidden='true'
        className='block object-contain'
      />
    </picture>
  );
};

const Logo = ({
  title,
  description,
  onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }),
}: LogoProps) => {
  return (
    <div
      role='img'
      aria-label={description ? `${title} - ${description}` : title}
      className='inline-flex items-center min-w-35.25 md:min-w-40 gap-2 md:gap-2.5'
    >
      <LogoIcon />
      <a href='#' onClick={onClick} className='flex flex-col leading-none no-underline'>
        <span className='font-logo font-semibold dark:text-white text-size-xl md:text-size-display-xs'>
          {title}
        </span>
        {description && (
          <span className='font-medium text-[8px] md:text-[9.5px] tracking-wide whitespace-nowrap text-neutral-500 dark:text-neutral-400'>
            {description}
          </span>
        )}
      </a>
    </div>
  );
};

export default Logo;
