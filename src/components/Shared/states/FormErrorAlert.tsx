import { Alert, AlertDescription } from '@/components/ui/alert';

interface FormErrorAlertProps {
  message?: string;
  className?: string;
}

export default function FormErrorAlert({ message, className }: FormErrorAlertProps) {
  if (!message) return null;

  return (
    <Alert variant="destructive" className={className ?? 'mb-4'}>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
