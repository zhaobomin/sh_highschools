import { ArrowLeft, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';

interface SchoolDetailLoadingSectionProps {
  onBack: () => void;
}

export default function SchoolDetailLoadingSection({ onBack }: SchoolDetailLoadingSectionProps) {
  return (
    <LoadingStateCard
      icon={<School className="h-4 w-4 text-foreground" />}
      title="学校详情"
      message="加载中..."
      actions={(
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
    />
  );
}
