import type { InputFieldProps } from '../../types';

export default function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  touched,
  error,
  rows = 4,
  onChange,
  onBlur,
}: InputFieldProps) {
  const baseClass = `
    w-full rounded-lg px-4 py-2 outline-none
    dark:bg-base-black border
    font-medium text-size-md dark:text-neutral-25
    placeholder:text-neutral-500
    transition-colors
    ${
      touched && error && value.trim().length > 0
        ? 'border-red-500 focus:border-red-500'
        : 'border-neutral-800 focus:border-primary-200'
    }
  `;

  return (
    <div className='flex flex-col items-start gap-1.5 w-full'>
      <label className='font-bold text-size-sm dark:text-neutral-25'>
        {label}
      </label>

      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={baseClass}
        />
      )}

      {touched && error && value.trim().length > 0 && (
        <span className='text-red-500 text-size-xs font-medium'>{error}</span>
      )}
    </div>
  );
}
