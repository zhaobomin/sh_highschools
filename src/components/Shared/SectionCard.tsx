import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  divider?: boolean;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'default' | 'plain';
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
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
  variant = 'default',
  className,
  headerClassName,
  titleClassName,
  descriptionClassName,
  contentClassName
}: SectionCardProps) {
  const variantClassName = variant === 'plain' ? 'bg-transparent border-none shadow-none p-0' : '';
  return (
    <Card className={cn(variantClassName, className)}>
      {(title || description) && (
        <>
          <CardHeader className={cn("pb-2", headerClassName)}>
            <CardTitle className={cn("text-sm font-semibold", titleClassName)}>{title}</CardTitle>
            <CardDescription className={cn("text-xs", descriptionClassName)}>{description}</CardDescription>
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
