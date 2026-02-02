import { SectionCard } from '@/components/Shared/SectionCard';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import SectionHeader from '@/components/Shared/SectionHeader';
import { cn } from '@/lib/utils';

interface ErrorStateCardProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export default function ErrorStateCard({
  message,
  actionLabel = '返回',
  onAction,
  icon,
  title,
  className,
}: ErrorStateCardProps) {
  return (
    <SectionCard gap="xs" className={cn("profile-card", className)} contentClassName="px-6 py-4">
      {(icon || title) && (
        <SectionHeader icon={icon} title={title || undefined} />
      )}

      <div className="py-8 text-center">
        <p className="text-muted-foreground">{message}</p>
        {onAction && (
          <Button onClick={onAction} className="mt-4 h-8 text-xs px-2.5 rounded-full">
            {actionLabel}
          </Button>
        )}
      </div>
    </SectionCard>
  );
}
