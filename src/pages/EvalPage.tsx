import { SectionCard } from '@/components/Shared/SectionCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
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
  const targets = evaluation?.targets ?? [];

  const hasModel = model.mean != null && model.std != null;

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
