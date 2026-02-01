import { SectionCard } from '@/components/Shared/SectionCard';
import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TrendingUp, School, Info, Target } from 'lucide-react';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import { getTargetEvaluation } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';

const levelStyles: Record<string, string> = {
  high: 'bg-emerald-500/10 text-emerald-700 border-emerald-200',
  mid: 'bg-amber-500/10 text-amber-700 border-amber-200',
  low: 'bg-rose-500/10 text-rose-700 border-rose-200',
  na: 'bg-muted text-muted-foreground border-border/50',
};

const levelBar: Record<string, string> = {
  high: 'bg-emerald-500',
  mid: 'bg-amber-500',
  low: 'bg-rose-500',
  na: 'bg-muted',
};

export default function EvalPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data: evalResp, isLoading } = useQuery({
    queryKey: ['schools:evaluation'],
    queryFn: getTargetEvaluation,
  });

  const handleRefresh = async () => {
    await queryClient.refetchQueries({ queryKey: ['schools:evaluation'] });
  };

  const evaluation = evalResp?.data ?? null;
  const model = evaluation?.model ?? { mean: null, std: null, count: 0, source: 'none' };
  const profile = evaluation?.profile ?? {};
  const targets = evaluation?.targets ?? [];

  const hasModel = model.mean != null && model.std != null;
  const hasEstimate = profile?.stableScore != null || profile?.highScore != null || profile?.lowScore != null;

  const modelSourceLabel = useMemo(() => {
    if (model.source === 'mocks') return t('ui.metric.modelSource.mocks');
    if (model.source === 'estimate') return t('ui.metric.modelSource.estimate');
    return t('ui.metric.modelSource.none');
  }, [model.source, t]);

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-2"></div>
            <div className="text-sm text-muted-foreground">加载中...</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <TrendingUp className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.eval.overview.title')}</div>
                    <div className="text-xs text-muted-foreground">{t('ui.section.eval.overview.desc')}</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
                  <Info className="h-4 w-4" />
                </Button>
              </div>

              <Separator className="mb-3 opacity-50" />

              <div className="grid gap-3 md:grid-cols-2">
                <Card className="border border-border/60 shadow-none">
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{t('ui.section.eval.model.title')}</div>
                      <Badge variant="outline" className="text-[10px]">
                        {modelSourceLabel}
                      </Badge>
                    </div>
                    <DataCardGrid className="lg:grid-cols-3">
                      <DataCard title={t('ui.metric.mockCount')} value={model.count} />
                      <DataCard title={t('ui.metric.mean')} value={model.mean == null ? '-' : model.mean.toFixed(1)} />
                      <DataCard title={t('ui.metric.std')} value={model.std == null ? '-' : model.std.toFixed(2)} />
                    </DataCardGrid>
                    {!hasModel && (
                      <div className="text-[10px] text-muted-foreground text-center">{t('ui.eval.hint.noModel')}</div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border border-border/60 shadow-none">
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{t('ui.section.scoreEstimate.title')}</div>
                      <Badge variant="secondary" className="text-[10px]">
                        {hasEstimate ? t('ui.eval.estimate.ready') : t('ui.eval.estimate.empty')}
                      </Badge>
                    </div>
                    <DataCardGrid className="lg:grid-cols-3">
                      <DataCard title={t('ui.field.score.stable')} value={profile?.stableScore ?? '-'} />
                      <DataCard title={t('ui.field.score.high')} value={profile?.highScore ?? '-'} />
                      <DataCard title={t('ui.field.score.low')} value={profile?.lowScore ?? '-'} />
                    </DataCardGrid>
                    <div className="text-[10px] text-muted-foreground text-center">
                      {t('ui.section.scoreEstimate.desc')}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {!hasModel && (
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  <Button asChild size="sm" variant="secondary" className="h-8 rounded-full px-3">
                    <Link to="/mocks">{t('ui.action.addMock')}</Link>
                  </Button>
                  <Button asChild size="sm" className="h-8 rounded-full px-3">
                    <Link to="/targets">{t('ui.section.profile.title')}</Link>
                  </Button>
                </div>
              )}
            </SectionCard>

            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <Target className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.eval.path.title')}</div>
                    <div className="text-xs text-muted-foreground">{t('ui.section.eval.path.desc')}</div>
                  </div>
                </div>
              </div>

              <Separator className="mb-3 opacity-50" />

              <div className="grid gap-2 md:grid-cols-3">
                <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
                  <div className="text-xs font-semibold">{t('ui.eval.channel.autonomous')}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{t('ui.eval.path.autonomous.note')}</div>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
                  <div className="text-xs font-semibold">{t('ui.eval.channel.district')} / {t('ui.eval.channel.school')}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{t('ui.eval.path.quota.note')}</div>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-2">
                  <div className="text-xs font-semibold">{t('ui.eval.channel.unified')}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{t('ui.eval.path.unified.note')}</div>
                </div>
              </div>
            </SectionCard>

            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <School className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.eval.list.title')}</div>
                    <div className="text-xs text-muted-foreground">{t('ui.section.eval.list.desc')}</div>
                  </div>
                </div>
              </div>

              <Separator className="mb-3 opacity-50" />

              {targets.length === 0 ? (
                <div className="py-6 text-center space-y-3">
                  <div className="text-sm text-muted-foreground">{t('ui.eval.hint.noTargets')}</div>
                  <Button asChild size="sm" className="h-8 text-sm px-3 rounded-full">
                    <Link to="/filter">{t('ui.action.goFilter')}</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {targets.map((school: any) => {
                    const overall = school.overall?.probability ?? null;
                    const overallPct = overall == null ? null : Math.round(overall * 100);
                    const overallLevel = school.overall?.level ?? (overall == null ? 'na' : levelFromProbability(overall));
                    const levelStyle = levelStyles[overallLevel] ?? levelStyles.na;
                    const barStyle = levelBar[overallLevel] ?? levelBar.na;

                    const channels = [
                      { key: 'autonomous', label: t('ui.eval.channel.autonomous') },
                      { key: 'district', label: t('ui.eval.channel.district') },
                      { key: 'school', label: t('ui.eval.channel.school') },
                      { key: 'unified', label: t('ui.eval.channel.unified') },
                    ];

                    return (
                      <Card key={school.id} className="border border-border/60 shadow-sm">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="font-semibold text-base">{school.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {school.district} · {school.type}
                              </div>
                            </div>
                            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${levelStyle}`}>
                              <span>{t('ui.eval.overall')}</span>
                              <span className="font-semibold">{overallPct == null ? '-' : `${overallPct}%`}</span>
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <div className="text-muted-foreground">{t('ui.eval.overall')}</div>
                              <div className="font-medium">{overallPct == null ? '-' : `${overallPct}%`}</div>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className={`h-full ${barStyle}`} style={{ width: `${overallPct ?? 0}%` }} />
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {hasModel ? t('ui.eval.explain', { mean: model.mean?.toFixed(1), std: model.std?.toFixed(2) }) : t('ui.eval.explain.na')}
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <div className="grid grid-cols-5 text-[10px] text-muted-foreground">
                              <div>{t('ui.eval.channel.name')}</div>
                              <div>{t('ui.eval.channel.score')}</div>
                              <div>{t('ui.eval.channel.quota')}</div>
                              <div>{t('ui.eval.channel.gap')}</div>
                              <div className="text-right">{t('ui.eval.channel.probability')}</div>
                            </div>

                            {channels.map((channel) => {
                              const detail = school.channels?.[channel.key] ?? {};
                              const prob = detail.probability ?? null;
                              const probPct = prob == null ? null : Math.round(prob * 100);
                              const gap = detail.gap ?? null;
                              const gapText = gap == null ? '-' : `${gap > 0 ? '+' : ''}${gap}`;
                              const gapClass = gap == null ? 'text-muted-foreground' : gap >= 0 ? 'text-emerald-600' : 'text-rose-600';

                              return (
                                <div key={channel.key} className="grid grid-cols-5 items-center text-xs rounded-md border border-border/60 px-2 py-1.5">
                                  <div className="font-medium">{channel.label}</div>
                                  <div>{detail.score == null ? '-' : detail.score}</div>
                                  <div>{detail.quota == null ? '-' : detail.quota}</div>
                                  <div className={gapClass}>{gapText}</div>
                                  <div className="text-right font-medium">{probPct == null ? '-' : `${probPct}%`}</div>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </SectionCard>
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
