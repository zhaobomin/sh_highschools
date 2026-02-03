import { Users2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolEnrollmentSectionProps {
  enrollment?: {
    totalQuota: number;
    sportsQuota: number;
    artQuota: number;
    toDistrictTotal: number;
    toSchoolTotal: number;
    boardingStatus?: string | null;
    year: number | null;
  };
}

export default function SchoolEnrollmentSection({ enrollment }: SchoolEnrollmentSectionProps) {
  const yearLabel = enrollment?.year ? `${enrollment.year}` : '暂无';
  const formatNumber = (value?: number | null) => (
    value === null || value === undefined ? '暂无' : value
  );
  const boardingStatus = enrollment?.boardingStatus?.trim() || '暂无';
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<Users2 className="h-4 w-4 text-foreground" />}
        title="招生情况"
        description={`数据年份：${yearLabel}`}
      />

      <Separator className="mb-3 opacity-50" />

      <DataCardGrid className="gap-2 grid-cols-3">
        <DataCard title="自招总人数" value={formatNumber(enrollment?.totalQuota)} valueClassName="text-sm font-normal" />
        <DataCard title="自招艺术生" value={formatNumber(enrollment?.artQuota)} valueClassName="text-sm font-normal" />
        <DataCard title="自招体育生" value={formatNumber(enrollment?.sportsQuota)} valueClassName="text-sm font-normal" />
        <DataCard title="到区总人数" value={formatNumber(enrollment?.toDistrictTotal)} valueClassName="text-sm font-normal" />
        <DataCard title="到校总人数" value={formatNumber(enrollment?.toSchoolTotal)} valueClassName="text-sm font-normal" />
        <DataCard title="住宿情况" value={boardingStatus} valueClassName="text-sm font-normal" />
      </DataCardGrid>
    </ProfileSectionCard>
  );
}
