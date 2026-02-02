import { SectionCard } from '@/components/Shared/SectionCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { HighSchool } from '@/lib/types';
import { levelFromProbability } from '@/lib/evaluation';
import ListCard from '@/components/Shared/ListCard';
import SectionHeader from '@/components/Shared/SectionHeader';
import EmptyState from '@/components/Shared/states/EmptyState';

interface RecommendationSectionProps {
  totalSchools: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setPageSize: (size: number) => void;
  setPage: (page: number) => void;
  isSchoolsLoading: boolean;
  isSchoolsFetching: boolean;
  pagedSchools: HighSchool[];
  addingTargets: Record<string, boolean>;
  handleAddTarget: (schoolId: string) => void;
}

export default function RecommendationSection({
  totalSchools,
  currentPage,
  totalPages,
  pageSize,
  setPageSize,
  setPage,
  isSchoolsLoading,
  isSchoolsFetching,
  pagedSchools,
  addingTargets,
  handleAddTarget,
}: RecommendationSectionProps) {
  return (
    <SectionCard divider={false} gap="xs" className="bg-transparent border-none shadow-none p-0" contentClassName="p-0 pt-0">
      <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
        <SectionHeader
          icon={<School className="h-4 w-4 text-foreground" />}
          title="推荐学校池"
          actions={(
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" x2="12" y1="20" y2="10" />
                <line x1="18" x2="18" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="16" />
              </svg>
            </Button>
          )}
        />

        <Separator className="mb-3 opacity-50" />

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-muted-foreground">
              {totalSchools} 所·{totalSchools === 0 ? 0 : currentPage}/{totalSchools === 0 ? 0 : totalPages} 页
            </div>
            <div className="flex items-center gap-2">
              <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setPage(1); }}>
                <SelectTrigger className="h-8 w-[92px] text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[6, 10, 15, 20].map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      每页 {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2 text-xs"
                  disabled={totalSchools === 0 || currentPage <= 1}
                  onClick={() => setPage(Math.max(1, currentPage - 1))}
                >
                  上一页
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2 text-xs"
                  disabled={totalSchools === 0 || currentPage >= totalPages}
                  onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
                >
                  下一页
                </Button>
              </div>
            </div>
          </div>

          {isSchoolsLoading || isSchoolsFetching ? (
            <div className="rounded-lg border border-dashed p-4 text-center text-sm text-muted-foreground">
              加载中…
            </div>
          ) : totalSchools === 0 ? (
            <div className="rounded-lg border border-dashed p-4">
              <EmptyState message="暂无匹配的推荐学校，请调整条件后再试。" variant="compact" />
            </div>
          ) : (
            pagedSchools.map((s) => {
              const inTargets = Boolean(s.isTarget);
              const isAdding = Boolean(addingTargets[s.id]);
              const stats = s.stats;
              const probability = stats?.probability ?? 0;
              const p = probability / 100;
              const level = levelFromProbability(p);
              return (
                <ListCard key={s.id} stack>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-base truncate">{s.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {s.district} · {s.type}
                          {s.accommodation && ` · ${s.accommodation}`}
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
                        <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaAutonomous ?? '-'}</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">到区名额</span>
                        <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaToDistrict ?? '-'}</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">到校名额</span>
                        <span className="text-xs font-semibold flex-1 text-center">{stats?.quotaToSchool ?? '-'}</span>
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

                    <div className="flex items-center justify-between pt-0.5">
                      <div className="text-xs text-muted-foreground">
                        推荐度基于学生画像
                      </div>
                      <div className="flex gap-1.5">
                        <Button variant="outline" size="sm" asChild className="h-8 text-xs px-2.5 rounded-full">
                          <Link to={`/schools/${s.id}`}>详情</Link>
                        </Button>
                        <Button
                          size="sm"
                          disabled={inTargets || isAdding}
                          onClick={() => handleAddTarget(s.id)}
                          variant={inTargets ? 'secondary' : 'default'}
                          className={`h-8 text-xs px-2.5 rounded-full ${inTargets ? 'text-green-700 bg-green-100 hover:bg-green-200' : ''}`}
                        >
                          {isAdding ? '加入中' : inTargets ? '已在目标' : '加入目标'}
                        </Button>
                      </div>
                    </div>
                </ListCard>
              );
            })
          )}
        </div>
      </SectionCard>
    </SectionCard>
  );
}
