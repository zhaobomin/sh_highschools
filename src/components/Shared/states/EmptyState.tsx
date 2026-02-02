import type { ReactNode } from 'react';

interface EmptyStateProps {
  message: string;
  action?: ReactNode;
  className?: string;
}

export default function EmptyState({ message, action, className }: EmptyStateProps) {
  return (
    <div className={className ?? 'py-6 text-center space-y-3'}>
      <div className="text-sm text-muted-foreground">{message}</div>
      {action}
    </div>
  );
}
