import { ComponentProps } from 'react';
import { Clock, Flame, UtensilsCrossed } from "lucide-react";

type BadgeType = 'time' | 'calories' | 'category' | 'default';

interface BadgeProps extends ComponentProps<'span'> {
  type?: BadgeType;
  icon?: boolean;
}

export function Badge({ type = 'default', icon = true, className = '', children, ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide';

  const variants = {
    time: 'bg-surface-peach text-brand-800',
    calories: 'bg-green-50 text-green-700',
    category: 'bg-surface-peach text-brand-700',
    default: 'bg-gray-100 text-gray-700',
  };

  const styles = variants[type] || variants.default;

  return (
    <span className={`${baseStyles} ${styles} ${className}`} {...props}>
      {icon && type === 'time' && <Clock className="w-3.5 h-3.5 opacity-70" />}
      {icon && type === 'calories' && <Flame className="w-3.5 h-3.5 opacity-70" />}
      {icon && type === 'category' && <UtensilsCrossed className="w-3.5 h-3.5 opacity-70" />}
      {children}
    </span>
  );
}
