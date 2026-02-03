import React from 'react';

interface DataCardProps {
  title: string;
  value: React.ReactNode;
  className?: string;
  titleClassName?: string;
  valueClassName?: string;
}

export function DataCard({
  title,
  value,
  className,
  titleClassName,
  valueClassName,
}: DataCardProps) {
  return (
    <div className={`bg-muted/30 rounded-lg p-1.5 text-center ${className}`}>
      <div className={`text-[8px] text-muted-foreground ${titleClassName || ''}`}>{title}</div>
      <div className={`text-base font-bold mt-0.5 ${valueClassName || ''}`}>{value}</div>
    </div>
  );
}

interface DataCardGridProps {
  children: React.ReactNode;
  className?: string;
}

export function DataCardGrid({ children, className }: DataCardGridProps) {
  return (
    <div className={`grid gap-1 grid-cols-2 lg:grid-cols-4 ${className}`}>
      {children}
    </div>
  );
}
