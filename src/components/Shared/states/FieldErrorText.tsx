interface FieldErrorTextProps {
  message?: string;
  className?: string;
}

export default function FieldErrorText({ message, className }: FieldErrorTextProps) {
  if (!message) return null;

  return (
    <p className={className ?? 'mt-1 text-sm text-destructive'}>{message}</p>
  );
}
