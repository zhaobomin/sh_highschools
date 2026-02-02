import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onCancel?: () => void;
  isSubmitting?: boolean;
  submitText?: string;
  cancelText?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  actionsClassName?: string;
  submitClassName?: string;
  cancelClassName?: string;
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
  className,
  headerClassName,
  bodyClassName,
  actionsClassName,
  submitClassName,
  cancelClassName,
}: FormSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div className={cn("space-y-1", headerClassName)}>
          {title && <h3 className="text-lg font-medium">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          <Separator className="my-4" />
        </div>
      )}

      <div className={cn("space-y-4", bodyClassName)}>
        {children}
      </div>

      <div className={cn("flex items-center justify-end gap-4 pt-4", actionsClassName)}>
        {onCancel && (
          <Button variant="secondary" onClick={onCancel} disabled={isSubmitting} className={cancelClassName}>
            {cancelText}
          </Button>
        )}
        <Button onClick={onSubmit} disabled={isSubmitting} className={submitClassName}>
          {isSubmitting ? "提交中" : submitText}
        </Button>
      </div>
    </div>
  );
}
