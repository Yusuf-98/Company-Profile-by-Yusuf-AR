/**
 * Button Component
 */
import React from 'react';
import type { ButtonBg, ButtonProps, ButtonSize } from '../../types';

const Button: React.FC<ButtonProps> = ({
  size,
  background,
  children,
  onClick,
  className = '',
  type,
  disabled = false,
}) => {
  const baseStyles: Record<ButtonBg, string> = {
    orange:
      'flex items-center justify-center p-2 gap-1 rounded-full shadow-inner bg-primary-200 text-white hover:text-neutral-800 hover:scale-102 focus:outline-2 active:shadow-inner active:bg-primary-300 transition-all duration-300 ease-in-out cursor-pointer',
    white:
      'flex items-center justify-center p-2 gap-1 rounded-full shadow-inner bg-base-white text-base-black hover:text-primary-200 hover:bg-neutral-100 hover:scale-102 focus:outline-2 active:shadow-inner active:bg-neutral-100 transition-all duration-300 ease-in-out cursor-pointer',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-11 font-medium text-size-sm',
    md: 'h-12 font-bold text-size-md -tracking-1',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const buttonClasses = `
    ${baseStyles[background]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''} 
    ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
