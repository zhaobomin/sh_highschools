import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Info, Target } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface ProfileSummarySectionProps {
  district: string | null | undefined;
  middleSchoolName: string;
}

export default function ProfileSummarySection({
  district,
  middleSchoolName,
}: ProfileSummarySectionProps) {
  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<Target className="h-4 w-4 text-foreground" />}
        title="学生画像"
        actions={(
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
            <Info className="h-4 w-4" />
          </Button>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      <div className="grid grid-cols-[96px_minmax(0,1fr)] gap-2">
        <div className="rounded-lg border border-border/60 bg-muted/30 px-2 py-2 text-center">
          <div className="text-[11px] text-muted-foreground">所在区</div>
          <div className="text-sm font-semibold mt-0.5">
            {district || '未设置'}
          </div>
        </div>
        <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-center">
          <div className="text-[11px] text-muted-foreground">当前初中</div>
          <div className="text-sm font-semibold mt-0.5 truncate whitespace-nowrap">
            {middleSchoolName || '未设置'}
          </div>
        </div>
      </div>
    </ProfileSectionCard>
  );
}
