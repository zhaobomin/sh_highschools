import React from 'react';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  required?: boolean;
  helpText?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ 
  label, 
  required, 
  helpText, 
  error, 
  children, 
  className 
}: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label className={cn("text-xs text-muted-foreground font-normal", error && "text-destructive")}>
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {children}
      {helpText && !error && <p className="text-sm text-muted-foreground">{helpText}</p>}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
