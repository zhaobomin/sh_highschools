import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center border rounded-lg bg-destructive/5 text-destructive">
      <AlertCircle className="w-12 h-12" />
      <h3 className="text-lg font-semibold">{title || t('ui.states.error.default')}</h3>
      <p className="text-sm opacity-80">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="border-destructive/20 hover:bg-destructive/10">
          {t('ui.action.retry', 'Retry')}
        </Button>
      )}
    </div>
  );
}
