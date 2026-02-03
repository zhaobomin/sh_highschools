import { Separator } from '@/components/ui/separator';
import { Target } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';
import ListCard from '@/components/Shared/ListCard';
import { levelFromProbability } from '@/lib/evaluation';
import type { HighSchool } from '@/lib/types';

interface SchoolProfileSectionProps {
  district: string | null | undefined;
  middleSchoolName: string | null | undefined;
  stableScore: number | null | undefined;
  highScore: number | null | undefined;
  lowScore: number | null | undefined;
  recommendedSchool?: HighSchool | null;
}

export default function SchoolProfileSection({
  district,
  middleSchoolName,
  stableScore,
  highScore,
  lowScore,
  recommendedSchool,
}: SchoolProfileSectionProps) {
  const hasNoData = !district && !middleSchoolName && !stableScore && !highScore && !lowScore;
  const stats = recommendedSchool?.stats;
  const probability = stats?.probability ?? 0;
  const p = probability / 100;
  const level = levelFromProbability(p);

  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<Target className="h-4 w-4 text-foreground" />}
        title="学生画像"
      />

      <Separator className="mb-3 opacity-50" />

      {hasNoData ? (
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-xs text-muted-foreground">
            学生画像暂无数据，请先更新
          </div>
        </div>
      ) : (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5">
            <div className="text-xs text-muted-foreground">所在区</div>
            <div className="text-xs">{district || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5">
            <div className="text-xs text-muted-foreground">当前初中</div>
            <div className="text-xs truncate max-w-[60%]">{middleSchoolName || '未设置'}</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5">
            <div className="text-xs text-muted-foreground">分数区间</div>
            <div className="flex items-center gap-3">
              <div className="text-xs">稳定: {stableScore ?? '未设置'}</div>
              <div className="text-xs">上限: {highScore ?? '未设置'}</div>
              <div className="text-xs">下限: {lowScore ?? '未设置'}</div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-3">
        <div className="text-xs text-muted-foreground mb-2">
          基于学生画像的学校
        </div>
        {recommendedSchool ? (
          <ListCard stack>
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-base truncate">{recommendedSchool.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {recommendedSchool.district} · {recommendedSchool.type}
                  {recommendedSchool.accommodation && ` · ${recommendedSchool.accommodation}`}
                </div>
              </div>
              {stats?.probability && (
                <div className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${level === 'high' ? 'bg-green-100 text-green-700' : level === 'mid' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                  {level === 'high' ? '拿捏' : level === 'mid' ? '可冲' : '难'}
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">自招名额</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaAutonomous ?? 0}</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">到区名额</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaToDistrict ?? 0}</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">到校名额</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaToSchool ?? 0}</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">统招分数</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.scoreUnified ?? '-'}</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">到区分数</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.scoreToDistrict ?? '-'}</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                <span className="text-xs text-muted-foreground whitespace-nowrap">到校分数</span>
                <span className="text-xs font-semibold flex-1 text-center">{stats?.scoreToSchool ?? '-'}</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground">
              推荐度基于学生画像
            </div>
          </ListCard>
        ) : (
          <div className="text-xs text-muted-foreground py-2">
            暂无匹配学校
          </div>
        )}
      </div>
    </ProfileSectionCard>
  );
}
