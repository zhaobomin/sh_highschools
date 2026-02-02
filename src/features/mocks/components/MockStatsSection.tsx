import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Separator } from '@/components/ui/separator';
import { Calculator } from 'lucide-react';
import type { TFunction } from 'i18next';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface MockStats {
  count: number;
  mean: number | null;
  std: number | null;
  min: number | null;
  max: number | null;
}

interface MockStatsSectionProps {
  t: TFunction;
  stats: MockStats;
}

export default function MockStatsSection({ t, stats }: MockStatsSectionProps) {
  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<Calculator className="h-4 w-4 text-foreground" />}
        title={t('ui.section.mocks.stats.title')}
      />

      <Separator className="mb-3 opacity-50" />

      <DataCardGrid>
        <DataCard title={t('ui.metric.count')} value={stats.count} />
        <DataCard title={t('ui.metric.mean')} value={stats.mean == null ? '-' : stats.mean.toFixed(1)} />
        <DataCard title={t('ui.metric.max')} value={stats.max == null ? '-' : stats.max} />
        <DataCard title={t('ui.metric.min')} value={stats.min == null ? '-' : stats.min} />
      </DataCardGrid>
      <div className="text-xs text-muted-foreground mt-1 text-center">
        {t('ui.metric.std')}: {stats.std == null ? '-' : stats.std.toFixed(2)}
      </div>
    </ProfileSectionCard>
  );
}
