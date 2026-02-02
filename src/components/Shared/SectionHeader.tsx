import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
}

export default function SectionHeader({
  icon,
  title,
  description,
  actions,
  className,
  iconWrapperClassName,
  titleClassName,
  descriptionClassName,
  actionsClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex items-start justify-between pb-0', className)}>
      <div className="flex items-center gap-2">
        {icon && (
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-full bg-muted/50", iconWrapperClassName)}>
            {icon}
          </div>
        )}
        <div>
          <div className={cn("font-bold text-base", titleClassName)}>{title}</div>
          {description && (
            <div className={cn("text-xs text-muted-foreground", descriptionClassName)}>{description}</div>
          )}
        </div>
      </div>
      {actions && <div className={cn("", actionsClassName)}>{actions}</div>}
    </div>
  );
}
