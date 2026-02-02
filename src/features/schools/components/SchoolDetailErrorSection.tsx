import { School } from 'lucide-react';
import ErrorStateCard from '@/components/Shared/ErrorStateCard';

interface SchoolDetailErrorSectionProps {
  onBack: () => void;
}

export default function SchoolDetailErrorSection({ onBack }: SchoolDetailErrorSectionProps) {
  return (
    <ErrorStateCard
      icon={<School className="h-4 w-4 text-foreground" />}
      title="学校详情"
      message="无法加载学校信息，请稍后重试"
      actionLabel="返回"
      onAction={onBack}
    />
  );
}
