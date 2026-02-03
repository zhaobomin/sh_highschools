import { SectionCard } from '@/components/Shared/SectionCard';
import { Users2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface SchoolEnrollmentSectionProps {
  enrollment?: {
    autonomous: number;
    toDistrict: number;
    toSchool: number;
    year: number | null;
  };
}

export default function SchoolEnrollmentSection({ enrollment }: SchoolEnrollmentSectionProps) {
  const yearLabel = enrollment?.year ? `${enrollment.year}` : '暂无';
  return (
    <SectionCard divider={false} contentClassName="px-6 py-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
          <Users2 className="h-4 w-4 text-muted-foreground" />
        </div>
        <h3 className="font-bold text-base">最近一年招生情况</h3>
      </div>
      <Separator className="mb-3 opacity-50" />
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{enrollment?.autonomous || 0}</div>
          <div className="text-xs text-muted-foreground">自招人数</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{enrollment?.toDistrict || 0}</div>
          <div className="text-xs text-muted-foreground">到区人数</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{enrollment?.toSchool || 0}</div>
          <div className="text-xs text-muted-foreground">到校人数</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground text-center mt-2">
        数据年份：{yearLabel}
      </div>
    </SectionCard>
  );
}
