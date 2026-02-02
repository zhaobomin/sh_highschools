import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolStats {
  scoreToDistrict?: number | null;
  scoreToSchool?: number | null;
  scoreUnified?: number | null;
  quotaToDistrict?: number | null;
  quotaToSchool?: number | null;
  quotaAutonomous?: number | null;
}

interface SchoolScoresSectionProps {
  stats: SchoolStats;
}

export default function SchoolScoresSection({ stats }: SchoolScoresSectionProps) {
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<School className="h-4 w-4 text-foreground" />}
        title="录取分数线"
      />

      <Separator className="mb-3 opacity-50" />

      <div className="space-y-2">
        <div className="grid grid-cols-1 gap-2">
          <DataCardGrid>
            <DataCard title="到区分数线" value={stats.scoreToDistrict || '无数据'} />
            <DataCard title="到校分数线" value={stats.scoreToSchool || '无数据'} />
            <DataCard title="统招分数线" value={stats.scoreUnified || '无数据'} />
            <DataCard title="到区名额" value={stats.quotaToDistrict || '无数据'} />
            <DataCard title="到校名额" value={stats.quotaToSchool || '无数据'} />
            <DataCard title="自招名额" value={stats.quotaAutonomous || '无数据'} />
          </DataCardGrid>
        </div>

        <div className="bg-muted/30 rounded-lg p-1.5">
          <h4 className="text-sm font-medium mb-2">分数线详情</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到区分数线</span>
              <span className="font-semibold">{stats.scoreToDistrict ?? '无数据'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到校分数线</span>
              <span className="font-semibold">{stats.scoreToSchool ?? '无数据'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">统一招生分数线</span>
              <span className="font-semibold">{stats.scoreUnified ?? '无数据'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到区名额</span>
              <span className="font-semibold">{stats.quotaToDistrict ?? '无数据'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">到校名额</span>
              <span className="font-semibold">{stats.quotaToSchool ?? '无数据'}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">自招名额</span>
              <span className="font-semibold">{stats.quotaAutonomous ?? '无数据'}</span>
            </div>
          </div>
        </div>
      </div>
    </ProfileSectionCard>
  );
}
