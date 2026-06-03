import { ComponentProps } from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 cursor-pointer';

  const variants = {
    solid: 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm',
    outline: 'border-2 border-brand-300 text-brand-700 hover:bg-brand-50',
    ghost: 'text-brand-600 hover:bg-brand-50',
  };

  const variantStyles = variants[variant] || variants.solid;

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
