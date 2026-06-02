import { useState, useEffect } from 'react';
import { useTheme } from '../../context/useTheme';
import { navItems } from '../../data/navigation';
import type { NavItem } from '../../types';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import darkIcon from '../../assets/icons/dark-mode.png';
import lightIcon from '../../assets/icons/light-mode.png';
import closeIcon from '../../assets/icons/x-close.png';
import hamburgerIcon from '../../assets/icons/hamburger-icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Auto-close mobile menu saat layar lebih besar dari 767px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mencegah body scroll saat mobile menu isOpen
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className='fixed w-full h-21 top-0 z-40 transition-all duration-300 backdrop-blur-2xl'>
        <div className='flex h-21 items-center justify-between px-4 py-6 md:px-10xl lg:px-11xl'>
          {/* Logo */}
          <Logo title='Your Logo' />

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center justify-between md:gap-3'>
            {navItems.map((item: NavItem) => (
              <div
                key={item.label}
                className='md:py-1 md:px-md lg:py-2 lg:px-xl rounded-full'
              >
                <a
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className='md:text-size-sm lg:text-size-md font-semibold hover:text-primary-200 dark:text-neutral-25'
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Toggle dark/light mode */}
          <div className='flex items-center gap-4'>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full cursor-pointer'
            >
              <img
                src={isDark ? lightIcon : darkIcon}
                alt='Toggle Theme Icon'
                className={`inline-flex min-w-5 h-5 ${isDark ? 'invert' : ''}`}
              />
            </button>

            <div className='hidden md:block'>
              <Button
                type='button'
                size='sm'
                background='orange'
                onClick={() => handleNavClick('#contact')}
                className='md:w-button-md lg:w-button-lg'
              >
                Let's Talk
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className='md:hidden p-2'
            >
              <img
                src={isMenuOpen ? closeIcon : hamburgerIcon}
                alt={isMenuOpen ? 'Close' : 'Menu'}
                className={`w-6 h-6 ${isDark ? '' : 'invert'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {isMenuOpen && (
        <>
          {/* Overlay — klik untuk menutup menu */}
          <div
            className={`fixed inset-0 z-50 md:hidden ${
              isDark ? 'bg-base-black' : 'bg-base-white'
            }`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden='true'
          />

          {/* Panel menu */}
          <div
            className={`fixed inset-x-0 top-0 z-50 flex flex-col md:hidden ${
              isDark ? 'bg-base-black' : 'bg-base-white'
            }`}
          >
            {/* Mobile Menu Header */}
            <div className='flex items-center justify-between px-4 py-6 h-16 border-b border-neutral-800'>
              <Logo title='Your Logo' />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label='Close menu'
                className='p-2'
              >
                <img
                  src={closeIcon}
                  alt='Close'
                  className={`w-6 h-6 ${isDark ? '' : 'invert'}`}
                />
              </button>
            </div>

            {/* Nav items */}
            <div className='flex flex-col px-4 gap-3 w-90.25'>
              {navItems.map((item: NavItem) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className='flex items-center h-9 py-2 px-1.5 gap-1.5 w-full rounded-full font-semibold text-size-sm transition-colors duration-200 hover:text-primary-200 dark:text-neutral-25'
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Button */}
            <div className='px-4 mt-3'>
              <Button
                type='button'
                size='sm'
                background='orange'
                onClick={() => handleNavClick('#contact')}
                className='w-90.25'
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
