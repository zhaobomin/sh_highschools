import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ListCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function ListCard({ children, className, contentClassName }: ListCardProps) {
  return (
    <Card className={cn('shadow-sm border border-border/60', className)}>
      <CardContent className={cn('p-2', contentClassName)}>{children}</CardContent>
    </Card>
  );
}
