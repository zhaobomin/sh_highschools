import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Info, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface ProfileSummarySectionProps {
  district: string | null | undefined;
  middleSchoolName: string;
  stableScore: number | null | undefined;
  highScore: number | null | undefined;
  lowScore: number | null | undefined;
}

export default function ProfileSummarySection({
  district,
  middleSchoolName,
  stableScore,
  highScore,
  lowScore,
}: ProfileSummarySectionProps) {
  // Check if profile has no data
  const hasNoData = !district && !middleSchoolName && !stableScore && !highScore && !lowScore;

  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<Target className="h-4 w-4 text-foreground" />}
        title="学生画像"
        actions={(<Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
          <Info className="h-4 w-4" />
        </Button>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      {hasNoData ? (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="text-sm text-muted-foreground mb-4">
            学生画像暂无数据，请先更新
          </div>
          <Button variant="default" size="sm" asChild>
            <Link to="/filter">更新</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
            <div className="text-sm text-muted-foreground">所在区</div>
            <div className="text-sm font-semibold">{district || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
            <div className="text-sm text-muted-foreground">当前初中</div>
            <div className="text-sm font-semibold truncate max-w-[60%]">{middleSchoolName || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
            <div className="text-sm text-muted-foreground">稳定分</div>
            <div className="text-sm font-semibold">{stableScore || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
            <div className="text-sm text-muted-foreground">上限分</div>
            <div className="text-sm font-semibold">{highScore || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-3 py-2">
            <div className="text-sm text-muted-foreground">下限分</div>
            <div className="text-sm font-semibold">{lowScore || '未设置'}</div>
          </div>
        </div>
      )}
    </ProfileSectionCard>
  );
}
