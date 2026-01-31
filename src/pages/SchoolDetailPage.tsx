
import { useParams, useNavigate } from 'react-router-dom';
import { SectionCard } from '@/components/Shared/SectionCard';
import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, School, FileText, Info } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getSchoolDetail } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';

export default function SchoolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: school, isLoading, error } = useQuery({
    queryKey: ['schools:detail', id],
    queryFn: () => getSchoolDetail(id || ''),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div>
        <div className="space-y-3">
          <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
            <div className="flex items-start justify-between pb-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                  <School className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="font-bold text-base">学校详情</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>

            <Separator className="mb-3 opacity-50" />

            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/3"></div>
            </div>
          </SectionCard>
        </div>
      </div>
    );
  }

  if (error || !school) {
    return (
      <div>
        <div className="space-y-3">
          <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
            <div className="flex items-start justify-between pb-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                  <School className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="font-bold text-base">学校详情</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={handleBack}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </div>

            <Separator className="mb-3 opacity-50" />

            <div className="py-8 text-center">
              <p className="text-muted-foreground">无法加载学校信息，请稍后重试</p>
              <Button onClick={handleBack} className="mt-4 h-8 text-xs px-2.5 rounded-full">返回</Button>
            </div>
          </SectionCard>
        </div>
      </div>
    );
  }

  const stats = school.stats || {};
  const probability = stats.probability ?? 0;
  const p = probability / 100;
  const level = levelFromProbability(p);
  const barColor = level === 'high' ? 'bg-emerald-500' : level === 'mid' ? 'bg-amber-500' : 'bg-rose-500';

  return (
    <div>
      <div className="space-y-3">
        {/* 学校基本信息 */}
        <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                <School className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">{school.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {school.district} · {school.type}
                  {school.accommodation && ` · ${school.accommodation}`}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>

          <Separator className="mb-3 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">学校全称：</span>
                <span className="text-sm">{school.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">招生代码：</span>
                <span className="text-sm font-mono">{school.code || '无数据'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">所属区：</span>
                <span className="text-sm">{school.district}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">学校类型：</span>
                <span className="text-sm">{school.type}</span>
              </div>
              {school.accommodation && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">住宿情况：</span>
                  <span className="text-sm">{school.accommodation}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              {school.fullType && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">完整类型：</span>
                  <span className="text-sm">{school.fullType}</span>
                </div>
              )}
            </div>
          </div>
        </SectionCard>

        {/* 录取分数线 */}
        <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                <School className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">录取分数线</div>
              </div>
            </div>
          </div>

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

            {/* 分数线信息 */}
            <div className="bg-muted/30 rounded-lg p-1.5">
              <h4 className="text-sm font-medium mb-2">分数线详情</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">到区分数线</span>
                  <span className="font-semibold">{school.stats?.scoreToDistrict ?? '无数据'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">到校分数线</span>
                  <span className="font-semibold">{school.stats?.scoreToSchool ?? '无数据'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">统一招生分数线</span>
                  <span className="font-semibold">{school.stats?.scoreUnified ?? '无数据'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">到区名额</span>
                  <span className="font-semibold">{school.stats?.quotaToDistrict ?? '无数据'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">到校名额</span>
                  <span className="font-semibold">{school.stats?.quotaToSchool ?? '无数据'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">自招名额</span>
                  <span className="font-semibold">{school.stats?.quotaAutonomous ?? '无数据'}</span>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 录取概率分析 */}
        {probability > 0 && (
          <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
            <div className="flex items-start justify-between pb-0">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                  <School className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <div className="font-bold text-base">录取概率分析</div>
                </div>
              </div>
            </div>

            <Separator className="mb-3 opacity-50" />

            <div className="space-y-2">
              <Card className="shadow-sm">
                <CardContent className="p-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-base">模考录取概率</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        基于学生模考成绩和学校历史分数线估算
                      </div>
                    </div>
                    <div className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${level === 'high' ? 'bg-green-100 text-green-700' : level === 'mid' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                      {level === 'high' ? '高概率' : level === 'mid' ? '中概率' : '低概率'}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${barColor} rounded-full transition-all duration-500 ease-out`}
                        style={{ width: `${probability}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span className="font-medium">{probability}%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-2 text-xs text-muted-foreground">
                    <p>• 高概率（保）：75%以上</p>
                    <p>• 中概率（稳）：40%-75%</p>
                    <p>• 低概率（冲）：40%以下</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SectionCard>
        )}

        {/* 志愿录取说明 */}
        <SectionCard gap="xs" className="profile-card" contentClassName="px-6 py-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                <FileText className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">上海中考志愿与录取方式</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
              <Info className="h-4 w-4" />
            </Button>
          </div>

          <Separator className="mb-3 opacity-50" />

          <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
            <div className="space-y-1.5">
              <p>1） 录取按批次顺序进行：先“<span className="font-bold text-foreground">自主招生</span>”，再“<span className="font-bold text-foreground">名额分配综合评价（到区/到校）</span>”，最后“<span className="font-bold text-foreground">统一招生</span>”。</p>
              <p>2） 被前一批次录取后，后一批次志愿自动失效。</p>
              <p>3） 志愿填报一般在学业考试后、成绩公布前进行（线上填报+线下确认）。</p>
            </div>
            <Separator className="opacity-50" />
            <div>
              <p>名额分配综合评价分为：<span className="font-bold text-primary">到区</span>（面向完成中招报名的学生）与<span className="font-bold text-primary">到校</span>（对“本校在籍在读满3年的应届生”等有资格限制）。</p>
              <p className="mt-1">统一招生通常包含多志愿（1-15志愿）与征求志愿。</p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
