import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolScoresSectionProps {
  scores?: {
    toDistrict?: [number | null, number | null] | null;
    toSchool?: [number | null, number | null] | null;
    unified?: number | null;
    parallel?: number | null;
  };
  year?: number | null;
}

const formatScore = (value?: number | null) => {
  if (value === null || value === undefined) return '无数据';
  return value;
};

const formatRange = (range?: [number | null, number | null] | null) => {
  if (!range) return '无数据';
  const [min, max] = range;
  if (min == null && max == null) return '无数据';
  if (min != null && max != null) {
    return min === max ? `${min}` : `${min} - ${max}`;
  }
  return `${min ?? max}`;
};

export default function SchoolScoresSection({ scores, year }: SchoolScoresSectionProps) {
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<School className="h-4 w-4 text-foreground" />}
        title="录取分数线"
        description={year ? `数据年份：${year}` : '数据年份：暂无'}
      />

      <Separator className="mb-3 opacity-50" />

      <div className="space-y-2">
        <div className="grid grid-cols-1 gap-2">
          <DataCardGrid>
            <DataCard title="到区分数线" value={formatRange(scores?.toDistrict)} />
            <DataCard title="到校分数线" value={formatRange(scores?.toSchool)} />
            <DataCard title="统招分数线" value={formatScore(scores?.unified)} />
            <DataCard title="平行志愿分数线" value={formatScore(scores?.parallel)} />
          </DataCardGrid>
        </div>

        <div className="bg-muted/30 rounded-lg p-1.5">
          <h4 className="text-sm font-medium mb-2">分数线详情</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到区分数线</span>
              <span className="font-semibold">{formatRange(scores?.toDistrict)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到校分数线</span>
              <span className="font-semibold">{formatRange(scores?.toSchool)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">统一招生分数线</span>
              <span className="font-semibold">{formatScore(scores?.unified)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">平行志愿分数线</span>
              <span className="font-semibold">{formatScore(scores?.parallel)}</span>
            </div>
          </div>
        </div>
      </div>
    </ProfileSectionCard>
  );
}
