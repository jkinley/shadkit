import * as React from 'react';
import { cn } from '@/lib/utils';

const StatList = React.forwardRef<HTMLDListElement, React.HTMLAttributes<HTMLDListElement>>(
  ({ className, ...props }, ref) => <dl ref={ref} className={cn('grid gap-4', className)} {...props} />
);
StatList.displayName = 'StatList';

const Stat = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-center p-4 bg-muted text-muted-foreground rounded-lg border', className)}
    {...props}
  />
));
Stat.displayName = 'Stat';

const StatTitle = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
  <dt ref={ref} className={cn('text-sm font-medium', className)} {...props} />
));
StatTitle.displayName = 'StatTitle';

const StatValue = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
  <dd ref={ref} className={cn('text-3xl font-semibold', className)} {...props} />
));
StatValue.displayName = 'StatValue';

const StatDescription = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => <dd ref={ref} className={cn('text-sm', className)} {...props} />
);
StatDescription.displayName = 'StatDescription';

export { StatList, Stat, StatTitle, StatValue, StatDescription };
