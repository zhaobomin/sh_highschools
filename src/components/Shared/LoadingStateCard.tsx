import { SectionCard } from '@/components/Shared/SectionCard';
import type { ReactNode } from 'react';
import SectionHeader from '@/components/Shared/SectionHeader';
import { cn } from '@/lib/utils';

interface LoadingStateCardProps {
  message?: string;
  icon?: ReactNode;
  title?: string;
  actions?: ReactNode;
  className?: string;
}

export default function LoadingStateCard({
  message = '加载中...',
  icon,
  title,
  actions,
  className,
}: LoadingStateCardProps) {
  return (
    <SectionCard gap="xs" className={cn("profile-card", className)} contentClassName="px-6 py-4">
      {(icon || title || actions) && (
        <SectionHeader icon={icon} title={title || undefined} actions={actions} />
      )}

      <div className="mt-3 space-y-4 animate-pulse">
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-1/3"></div>
        <div className="text-sm text-muted-foreground">{message}</div>
      </div>
    </SectionCard>
  );
}
