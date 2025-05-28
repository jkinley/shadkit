import type { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AutoGridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  colWidth?: string;
  mode?: string;
  gap?: string;
}

const AutoGrid = ({ children, className, colWidth, mode, gap, ...props }: AutoGridProps) => {
  const gridVars = {
    '--col-width': colWidth,
    '--layout': mode,
    '--gap': gap
  } as CSSProperties;

  return (
    <div className={cn('autogrid', className)} style={gridVars} {...props}>
      {children}
    </div>
  );
};

export { AutoGrid };
