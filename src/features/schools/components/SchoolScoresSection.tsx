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

      <DataCardGrid className="gap-2 grid-cols-3">
        <DataCard title="统招分数线" value={formatScore(scores?.unified)} valueClassName="text-sm font-normal" />
        <DataCard title="到区分数线" value={formatRange(scores?.toDistrict)} valueClassName="text-sm font-normal" />
        <DataCard title="到校分数线" value={formatRange(scores?.toSchool)} valueClassName="text-sm font-normal" />
      </DataCardGrid>
    </ProfileSectionCard>
  );
}
