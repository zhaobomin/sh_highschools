import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  submitText?: string;
  cancelText?: string;
}

export function FormSection({
  title,
  description,
  children,
  onSubmit,
  onCancel,
  isSubmitting = false,
  submitText = "Save",
  cancelText = "Cancel",
}: FormSectionProps) {
  return (
    <div className="space-y-6">
      {(title || description) && (
        <div className="space-y-1">
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          <Separator className="my-4" />
        </div>
      )}
      
      <div className="space-y-4">
        {children}
      </div>

      <div className="flex items-center justify-end gap-4 pt-4">
        {onCancel && (
          <Button variant="secondary" onClick={onCancel} disabled={isSubmitting}>
            {cancelText}
          </Button>
        )}
        <Button onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : submitText}
        </Button>
      </div>
    </div>
  );
}
