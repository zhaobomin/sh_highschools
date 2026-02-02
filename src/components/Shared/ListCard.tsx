import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ListCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  stack?: boolean;
}

const sizeMap = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

export default function ListCard({
  children,
  className,
  contentClassName,
  size = 'sm',
  stack = false,
}: ListCardProps) {
  const stackClassName = stack ? 'space-y-2' : '';
  return (
    <Card className={cn('shadow-sm border border-border/60', className)}>
      <CardContent className={cn(sizeMap[size], stackClassName, contentClassName)}>{children}</CardContent>
    </Card>
  );
}
