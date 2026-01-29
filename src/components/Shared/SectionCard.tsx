import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  divider?: boolean;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  contentClassName?: string;
}

const gapMap = {
  xs: 'space-y-2',
  sm: 'space-y-3',
  md: 'space-y-4',
  lg: 'space-y-6',
};

export function SectionCard({
  title,
  description,
  children,
  divider = false,
  gap = 'md',
  className,
  contentClassName
}: SectionCardProps) {
  return (
    <Card className={className}>
      {(title || description) && (
        <>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </CardHeader>
          {divider && <Separator />}
        </>
      )}
      <CardContent className={cn("pt-3", gapMap[gap], contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
