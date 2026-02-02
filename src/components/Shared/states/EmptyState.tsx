import type { ReactNode } from 'react';

interface EmptyStateProps {
  message: string;
  action?: ReactNode;
  className?: string;
  variant?: 'default' | 'compact';
}

export default function EmptyState({ message, action, className, variant = 'default' }: EmptyStateProps) {
  const fallbackClassName = variant === 'compact' ? 'py-0 text-center' : 'py-6 text-center space-y-3';
  return (
    <div className={className ?? fallbackClassName}>
      <div className="text-sm text-muted-foreground">{message}</div>
      {action}
    </div>
  );
}
