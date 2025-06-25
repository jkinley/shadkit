import { cn } from '@/lib/utils';
import { ArrowUpRightFromSquare } from 'lucide-react';

export function ExternalLink({ href, children, className, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn('inline-flex items-center gap-1 text-primary hover:underline', className)}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {children}
      <ArrowUpRightFromSquare className="h-4 w-4" />
    </a>
  );
}
