import { SectionCard } from '@/components/Shared/SectionCard';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
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

  const profile = useMemo(() => loadStudentProfile(), []);
  const targets = useMemo(() => loadTargets(), []);
  const exams = useMemo(() => loadMockExams(), []);

  const model = useMemo(() => deriveModel(profile, exams), [profile, exams]);

  const { data: schoolsResp } = useQuery({
    queryKey: ['schools:list', { q: '', district: '全部', type: '全部' }],
    queryFn: () => listSchools({ district: '全部', type: '全部' }),
  });

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
  const schoolById = useMemo(() => new Map(schools.map((s) => [s.id, s])), [schools]);

  const targetSchoolIds = useMemo(() => targets.map((x) => x.schoolId), [targets]);

  const { data: scoreLineBatchResp } = useQuery({
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
    <div>
      <div className="space-y-4">
        <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <TrendingUp className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">{t('ui.section.eval.model.title')}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{t('ui.section.eval.model.desc')}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full text-muted-foreground">
              <Info className="h-3 w-3" />
            </Button>
          </div>

          <Separator className="mb-3 opacity-50" />

          <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.mockCount')}</div>
              <div className="text-xl font-bold mt-0.5">{model.count}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.mean')}</div>
              <div className="text-xl font-bold mt-0.5">{model.mean == null ? '-' : model.mean.toFixed(1)}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.std')}</div>
              <div className="text-xl font-bold mt-0.5">{model.std == null ? '-' : model.std.toFixed(2)}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.modelSource')}</div>
              <div className="text-sm font-medium mt-1">
                {model.source === 'mocks'
                  ? t('ui.metric.modelSource.mocks')
                  : model.source === 'estimate'
                    ? t('ui.metric.modelSource.estimate')
                    : t('ui.metric.modelSource.none')}
              </div>
            </div>
          </div>
          {model.source === 'none' && (
            <div className="text-[10px] text-muted-foreground mt-2 text-center">{t('ui.section.eval.model.hint')}</div>
          )}
        </SectionCard>

        <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <School className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">{t('ui.section.eval.list.title')}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{t('ui.section.eval.list.desc')}</div>
              </div>
            </div>
          </div>

          <Separator className="mb-3 opacity-50" />

          {targetSchools.length === 0 ? (
            <div className="py-6 text-center space-y-3">
              <div className="text-sm text-muted-foreground">{t('ui.states.emptyTargets')}</div>
              <Button asChild size="sm" className="h-7 text-xs px-3 rounded-full">
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
                          <div className="text-[10px] text-muted-foreground mt-0.5">
                            {s.district} · {s.type} · {sl ? `${t('ui.label.scoreLine')}: ${sl.score} (${sl.year})` : t('ui.label.scoreLine.na')}
                          </div>
                        </div>
                        <div className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-muted/30 whitespace-nowrap">
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
                        <div className="text-[10px] text-muted-foreground">
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
  );
}
