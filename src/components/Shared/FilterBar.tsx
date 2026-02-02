import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FilterBarProps {
  children: React.ReactNode;
  onReset?: () => void;
  onApply?: () => void;
  className?: string;
  sticky?: boolean;
}

export function FilterBar({ children, onReset, onApply, className, sticky = false }: FilterBarProps) {
  const stickyClass = "bg-background shadow-sm border-none sticky top-[88px] z-30 mx-[-1rem] px-4 rounded-none md:static md:mx-0 md:rounded-lg md:border";
  return (
    <div className={`flex flex-col gap-4 p-4 border rounded-lg bg-muted/30 md:flex-row md:items-end ${sticky ? stickyClass : ''} ${className}`}>
      <div className="flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        {onReset && (
          <Button variant="ghost" size="icon" onClick={onReset} title="Reset filters">
            <X className="h-4 w-4" />
          </Button>
        )}
        {onApply && (
          <Button onClick={onApply}>Apply</Button>
        )}
      </div>
    </div>
  );
}
