import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  icon,
  title,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between pb-0', className)}>
      <div className="flex items-center gap-2">
        {icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
            {icon}
          </div>
        )}
        <div>
          <div className="font-bold text-base">{title}</div>
          {description && <div className="text-xs text-muted-foreground">{description}</div>}
        </div>
      </div>
      {actions}
    </div>
  );
}
