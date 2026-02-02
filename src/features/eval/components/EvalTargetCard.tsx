import type { TFunction } from 'i18next';
import type { TargetEvaluationSchool, TargetEvaluationModel } from '@/lib/dataClient';
import ListCard from '@/components/Shared/ListCard';

interface EvalTargetCardProps {
  school: TargetEvaluationSchool;
  model: TargetEvaluationModel;
  t: TFunction;
}

export default function EvalTargetCard({ school, model, t }: EvalTargetCardProps) {
  const channels: Array<{ key: 'autonomous' | 'district' | 'school' | 'unified'; label: string }> = [
    { key: 'autonomous', label: t('ui.eval.channel.autonomous') },
    { key: 'district', label: t('ui.eval.channel.district') },
    { key: 'school', label: t('ui.eval.channel.school') },
    { key: 'unified', label: t('ui.eval.channel.unified') },
  ];

  // 判断是否为单模考情况
  const isSingleMock = model.source === 'mocks' && model.count === 1;

  return (
    <ListCard size="lg" contentClassName="space-y-3">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-base">{school.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">
            {school.district} · {school.type}
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        {/* 使用响应式网格布局，根据屏幕宽度自动适配 */}
        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 text-[10px] text-muted-foreground whitespace-nowrap gap-2">
          <div className="min-w-[60px] text-center">{t('ui.eval.channel.name')}</div>
          <div className="min-w-[60px] text-center">{t('ui.eval.channel.quota')}</div>
          <div className="min-w-[80px] text-center">{t('ui.eval.channel.score')}</div>
          {isSingleMock ? (
            <>
              <div className="min-w-[160px] text-center">{t('ui.eval.channel.gap')}</div>
            </>
          ) : (
            <>
              <div className="min-w-[70px] text-center">{t('ui.eval.channel.best')}</div>
              <div className="min-w-[70px] text-center">{t('ui.eval.channel.worst')}</div>
            </>
          )}
          <div className="min-w-[60px] text-center">{t('ui.eval.channel.status')}</div>
        </div>

        {channels.map((channel) => {
          const detail = school.channels?.[channel.key] ?? {};
          const gap = detail.gap ?? null;
          const gaps = detail.gaps ?? { best: null, worst: null };
          const status = detail.status ?? null;
          const gapText = gap == null ? '-' : `${gap > 0 ? '+' : ''}${gap}`;

          // 状态图标和样式
          const getStatusIcon = (status: string | null) => {
            if (status === 'green') return '🟢';
            if (status === 'yellow') return '🟡';
            if (status === 'red') return '🔴';
            return '-';
          };

          return (
            <div key={channel.key} className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6 items-center text-xs rounded-md border border-border/60 px-2 py-1.5 whitespace-nowrap gap-2">
              <div className="font-medium min-w-[60px] text-left">{channel.label}</div>
              <div className="min-w-[60px] text-center">{detail.quota == null ? '-' : detail.quota}</div>
              <div className="min-w-[80px] text-center">{detail.score == null ? '-' : detail.score}</div>
              {isSingleMock ? (
                // 单模考情况：显示模考差距
                <>
                  <div className={`min-w-[160px] text-center ${gap == null ? 'text-muted-foreground' : gap > 0 ? 'text-emerald-600' : gap < 0 ? 'text-rose-600' : 'text-muted-foreground'}`}>{gapText}</div>
                  <div className="min-w-[60px] text-center">{getStatusIcon(status)}</div>
                </>
              ) : (
                // 多模考情况：显示两个差距值
                <>
                  <div className={`min-w-[70px] text-center ${gaps.best == null ? 'text-muted-foreground' : gaps.best > 0 ? 'text-emerald-600' : gaps.best < 0 ? 'text-rose-600' : 'text-muted-foreground'}`}>{gaps.best == null ? '-' : `${gaps.best > 0 ? '+' : ''}${gaps.best}`}</div>
                  <div className={`min-w-[70px] text-center ${gaps.worst == null ? 'text-muted-foreground' : gaps.worst > 0 ? 'text-emerald-600' : gaps.worst < 0 ? 'text-rose-600' : 'text-muted-foreground'}`}>{gaps.worst == null ? '-' : `${gaps.worst > 0 ? '+' : ''}${gaps.worst}`}</div>
                  <div className="min-w-[60px] text-center">{getStatusIcon(status)}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </ListCard>
  );
}
