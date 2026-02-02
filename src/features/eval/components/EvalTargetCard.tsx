import { levelFromProbability } from '@/lib/evaluation';
import type { TFunction } from 'i18next';
import type { TargetEvaluationSchool, TargetEvaluationModel } from '@/lib/dataClient';
import ListCard from '@/components/Shared/ListCard';

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

interface EvalTargetCardProps {
  school: TargetEvaluationSchool;
  model: TargetEvaluationModel;
  hasModel: boolean;
  t: TFunction;
}

export default function EvalTargetCard({ school, model, hasModel, t }: EvalTargetCardProps) {
  const overall = school.overall?.probability ?? null;
  const overallPct = overall == null ? null : Math.round(overall * 100);
  const overallLevel = school.overall?.level ?? (overall == null ? 'na' : levelFromProbability(overall));
  const levelStyle = levelStyles[overallLevel] ?? levelStyles.na;
  const barStyle = levelBar[overallLevel] ?? levelBar.na;

  const channels: Array<{ key: 'autonomous' | 'district' | 'school' | 'unified'; label: string }> = [
    { key: 'autonomous', label: t('ui.eval.channel.autonomous') },
    { key: 'district', label: t('ui.eval.channel.district') },
    { key: 'school', label: t('ui.eval.channel.school') },
    { key: 'unified', label: t('ui.eval.channel.unified') },
  ];

  return (
    <ListCard size="lg" contentClassName="space-y-3">
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
            {hasModel
              ? t('ui.eval.explain', { mean: model.mean?.toFixed(1), std: model.std?.toFixed(2) })
              : t('ui.eval.explain.na')}
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
    </ListCard>
  );
}
