import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva('animate-spin shrink-0 rounded-full border-4 border-t-transparent', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {}

export function Spinner({ className, size, ...props }: SpinnerProps) {
  return <div className={cn(spinnerVariants({ size }), 'border-current', className)} {...props} />;
}
