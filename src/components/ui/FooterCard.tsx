import { footerData } from '../../data/footerData';
import Logo from './Logo';
import { useTheme } from '../../context/useTheme';

export default function FooterCard() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div
      className='
        flex flex-col items-start
        w-full p-5 lg:p-10 gap-6 md:gap-10 lg:gap-15
        dark:bg-neutral-950
        border dark:border-neutral-800
        rounded-4xl
      '
    >
      <div className='flex flex-col md:flex-row-reverse justify-between items-start gap-6 md:gap-[clamp(120px,calc(120px+(320-120)*((100vw-769px)/(1023-769))),320px)] lg:gap-[clamp(160px,calc(160px+(600-160)*((100vw-1024px)/(1440-1024))),600px)]'>
        {/* Logo */}
        <div className='flex flex-row items-center gap-3'>
          <Logo title='Your Logo' />
        </div>
        {/* Headline */}
        <div
          className='font-bold text-size-display-sm -tracking-1 md:text-size-display-md lg:text-size-display-lg uppercase
                dark:text-neutral-25'
        >
          {footerData.headline}
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className='w-full border dark:border-neutral-800 mt-6 mb-4 md:m-0' />

      {/* ── Bottom row: nav (kiri) + social icons (kanan) ── */}
      <div className='flex flex-col gap-6 md:flex-row md:justify-between items-start w-full'>
        {/* Nav links */}
        <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0'>
          {footerData.navItems.map((item) => (
            <div className='flex items-center h-9 py-2 md:px-4 md:gap-1.5'>
              <a
                key={item.label}
                href={item.href}
                className={`font-medium text-size-sm md:text-size-md
                dark:text-neutral-25 
                transition-colors duration-200 whitespace-nowrap ${isDark ? 'hover:text-primary-200' : 'hover:text-primary-200'}`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className='flex flex-row md:justify-between items-start gap-4'>
          {footerData.socialItems.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.name}
              className={`w-10 h-10 rounded-full border
                dark:border-neutral-800 dark:bg-neutral-950
                flex items-center justify-center
                transition-color duration-800 shrink-0 ${isDark ? 'hover:bg-primary-200' : 'hover:bg-primary-200'}
              `}
            >
              <img
                src={isDark ? social.icon.dark : social.icon.light}
                alt={social.name}
                className='object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
