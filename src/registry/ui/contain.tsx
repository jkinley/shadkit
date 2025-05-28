import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: string;
  gutter?: string;
}
const Contain = ({ children, className, maxWidth, gutter, ...props }: ContainProps) => {
  const containVars = {
    '--max-width': maxWidth,
    '--gutter': gutter
  } as CSSProperties;

  return (
    <div className={cn('contain', className)} style={containVars} {...props}>
      {children}
    </div>
  );
};

export { Contain };
