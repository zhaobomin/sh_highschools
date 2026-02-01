import { SectionCard } from '@/components/Shared/SectionCard';
import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Button } from '@/components/ui/button';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { HighSchool, MockExam, StudentProfile } from '@/lib/types';
import { loadMockExams, loadStudentProfile, loadTargets } from '@/lib/appData';
import { getLatestScoreLine, listSchools } from '@/lib/dataClient';
import { levelFromProbability, probabilityToReach } from '@/lib/evaluation';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TrendingUp, School, Info } from 'lucide-react';
import PullToRefresh from '@/components/Shared/PullToRefresh';

function computeStatsFromExams(exams: MockExam[]) {
  const totals = exams.map((e) => e.totalScore).filter((v) => Number.isFinite(v));
  if (totals.length === 0) return { count: 0, mean: null as number | null, std: null as number | null };
  const count = totals.length;
  const mean = totals.reduce((a, b) => a + b, 0) / count;
  const variance = totals.reduce((acc, v) => acc + (v - mean) ** 2, 0) / count;
  const std = Math.sqrt(variance);
  return { count, mean, std };
}

function deriveModel(profile: StudentProfile, exams: MockExam[]) {
  const stats = computeStatsFromExams(exams);
  if (stats.count >= 2 && stats.mean != null && stats.std != null && stats.std > 0) {
    return { mean: stats.mean, std: stats.std, source: 'mocks' as const, count: stats.count };
  }
  if (
    profile.stableScore != null &&
    profile.highScore != null &&
    profile.lowScore != null &&
    profile.highScore > profile.lowScore
  ) {
    const mean = profile.stableScore;
    const std = Math.max(5, (profile.highScore - profile.lowScore) / 4);
    return { mean, std, source: 'estimate' as const, count: stats.count };
  }
  return { mean: null as number | null, std: null as number | null, source: 'none' as const, count: stats.count };
}

export default function EvalPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const profile = useMemo(() => loadStudentProfile(), []);
  const targets = useMemo(() => loadTargets(), []);
  const exams = useMemo(() => loadMockExams(), []);

  // 刷新数据
  const handleRefresh = async () => {
    await Promise.all([
      queryClient.refetchQueries({ queryKey: ['schools:list'] }),
      queryClient.refetchQueries({ queryKey: ['scoreLines:latest:batch'] }),
    ]);
  };

  const model = useMemo(() => deriveModel(profile, exams), [profile, exams]);

  const { data: schoolsResp, isLoading: isSchoolsLoading } = useQuery({
    queryKey: ['schools:list', { q: '', district: '全部', type: '全部' }],
    queryFn: () => listSchools({ district: '全部', type: '全部' }),
  });

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
  const schoolById = useMemo(() => new Map(schools.map((s) => [s.id, s])), [schools]);

  const targetSchoolIds = useMemo(() => targets.map((x) => x.schoolId), [targets]);

  const { data: scoreLineBatchResp, isLoading: isScoreLinesLoading } = useQuery({
    queryKey: ['scoreLines:latest:batch', { schoolIds: targetSchoolIds, district: profile.district }],
    enabled: targetSchoolIds.length > 0,
    queryFn: async () => {
      const pairs = await Promise.all(
        targetSchoolIds.map(async (schoolId) => {
          const resp = await getLatestScoreLine({ schoolId, district: profile.district });
          return [schoolId, resp.data] as const;
        })
      );
      return Object.fromEntries(pairs);
    },
  });

  const scoreLineBySchoolId = (scoreLineBatchResp ?? {}) as Record<string, { score: number; year: number } | null>;

  const targetSchools = useMemo(() => {
    return targets
      .map((tgt) => schoolById.get(tgt.schoolId))
      .filter((v): v is HighSchool => Boolean(v));
  }, [schoolById, targets]);

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {(isSchoolsLoading || isScoreLinesLoading) ? (
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
                    <div className="font-bold text-base">{t('ui.section.eval.model.title')}</div>

                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
                  <Info className="h-4 w-4" />
                </Button>
              </div>

              <Separator className="mb-3 opacity-50" />

              <DataCardGrid>
                <DataCard title={t('ui.metric.mockCount')} value={model.count} />
                <DataCard title={t('ui.metric.mean')} value={model.mean == null ? '-' : model.mean.toFixed(1)} />
                <DataCard title={t('ui.metric.std')} value={model.std == null ? '-' : model.std.toFixed(2)} />
                <DataCard title={t('ui.metric.modelSource')} value={
                  <div className="text-xs font-medium">
                    {model.source === 'mocks'
                      ? t('ui.metric.modelSource.mocks')
                      : model.source === 'estimate'
                        ? t('ui.metric.modelSource.estimate')
                        : t('ui.metric.modelSource.none')}
                  </div>
                } />
              </DataCardGrid>
              {model.source === 'none' && (
                <div className="text-[8px] text-muted-foreground mt-1 text-center">{t('ui.section.eval.model.hint')}</div>
              )}
            </SectionCard>

            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <School className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.eval.list.title')}</div>

                  </div>
                </div>
              </div>

              <Separator className="mb-3 opacity-50" />

              {targetSchools.length === 0 ? (
                <div className="py-6 text-center space-y-3">
                  <div className="text-sm text-muted-foreground">{t('ui.states.emptyTargets')}</div>
                  <Button asChild size="sm" className="h-8 text-sm px-3 rounded-full">
                    <Link to="/filter">{t('ui.action.goFilter')}</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {targetSchools.map((s) => {
                    const sl = scoreLineBySchoolId[s.id];
                    const threshold = sl?.score ?? null;
                    const canCalc = threshold != null && model.mean != null && model.std != null;
                    const p = canCalc ? probabilityToReach(threshold!, model.mean!, model.std!) : null;
                    const level = p == null ? null : levelFromProbability(p);
                    const pct = p == null ? 0 : Math.round(p * 100);
                    const barColor =
                      level === 'high' ? 'bg-emerald-500' : level === 'mid' ? 'bg-amber-500' : level === 'low' ? 'bg-rose-500' : 'bg-muted';
                    const tagText =
                      level === 'high' ? t('ui.eval.level.high') : level === 'mid' ? t('ui.eval.level.mid') : level === 'low' ? t('ui.eval.level.low') : t('ui.eval.level.na');

                    return (
                      <Card key={s.id} className="shadow-sm border border-border/60">
                        <CardContent className="p-3 space-y-2">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="font-semibold text-base truncate">{s.name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {s.district} · {s.type} · {sl ? `${t('ui.label.scoreLine')}: ${sl.score} (${sl.year})` : t('ui.label.scoreLine.na')}
                              </div>
                            </div>
                            <div className="text-xs font-medium px-2 py-0.5 rounded-full border bg-muted/30 whitespace-nowrap">
                              {tagText}
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <div className="text-muted-foreground">{t('ui.eval.probability')}</div>
                              <div className="font-medium">{canCalc ? `${pct}%` : '-'}</div>
                            </div>
                            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                              <div className={`h-full ${barColor}`} style={{ width: `${canCalc ? pct : 0}%` }} />
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {canCalc ? t('ui.eval.explain', { mean: model.mean!.toFixed(1), std: model.std!.toFixed(2) }) : t('ui.eval.explain.na')}
                            </div>
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
