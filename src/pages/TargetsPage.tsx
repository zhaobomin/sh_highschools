import { SectionCard } from '@/components/Shared/SectionCard';
import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Plus, Info, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import type { HighSchool } from '@/lib/types';
import { loadMiddleSchools } from '@/lib/appData';
import { addTargetSchool, getStudentProfile, listSchools, listTargetSchools, removeTargetSchool } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';

export default function TargetsPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('');
  const [schoolSearch, setSchoolSearch] = useState('');
  const [addingTarget, setAddingTarget] = useState(false);
  const [removingTargets, setRemovingTargets] = useState<Record<string, boolean>>({});

  const { data: profileResp } = useQuery({
    queryKey: ['studentProfile'],
    queryFn: getStudentProfile,
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  const { data: schoolsResp } = useQuery({
    queryKey: ['schools:all'],
    queryFn: () => listSchools({ district: '全部', type: '全部' }),
  });

  const { data: targetsResp, isLoading } = useQuery({
    queryKey: ['schools:targets'],
    queryFn: listTargetSchools,
  });

  const handleRefresh = async () => {
    await queryClient.refetchQueries({ queryKey: ['schools:all'] });
    await queryClient.refetchQueries({ queryKey: ['schools:targets'] });
  };

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
  const targetSchools = (targetsResp?.data ?? []) as HighSchool[];
  const targetIdSet = useMemo(() => new Set(targetSchools.map((s) => s.id)), [targetSchools]);
  const studentProfile = profileResp?.data ?? null;
  const middleSchools = useMemo(() => loadMiddleSchools(), []);
  const middleSchoolName = useMemo(() => {
    if (!studentProfile?.middle_school_id) return '';
    const match = middleSchools.find((ms) => ms.id === studentProfile.middle_school_id);
    return match?.name ?? '';
  }, [middleSchools, studentProfile?.middle_school_id]);

  const filteredSchools = useMemo(() => {
    if (!schoolSearch) return schools;
    const searchTerm = schoolSearch.toLowerCase();
    return schools.filter(s =>
      s.name.toLowerCase().includes(searchTerm)
    );
  }, [schools, schoolSearch]);

  const canAddSelected =
    Boolean(selectedSchoolId) && !targetIdSet.has(selectedSchoolId) && schools.some((s) => s.id === selectedSchoolId);

  const onRemoveTarget = async (schoolId: string) => {
    if (!window.confirm('确认移除该目标学校？')) {
      return;
    }
    setRemovingTargets((prev) => ({ ...prev, [schoolId]: true }));
    const previousTargets = queryClient.getQueryData<any>(['schools:targets']);
    const previousSchools = queryClient.getQueryData<any>(['schools:list']);
    queryClient.setQueryData(['schools:targets'], (oldData: any) => {
      if (!oldData?.data) return oldData;
      return {
        ...oldData,
        data: oldData.data.filter((school: HighSchool) => school.id !== schoolId),
      };
    });
    queryClient.setQueryData(['schools:list'], (oldData: any) => {
      if (!oldData?.data) return oldData;
      return {
        ...oldData,
        data: oldData.data.map((school: HighSchool) =>
          school.id === schoolId ? { ...school, isTarget: false } : school
        ),
      };
    });
    try {
      await removeTargetSchool({ schoolId });
    } catch (error: any) {
      if (previousTargets) {
        queryClient.setQueryData(['schools:targets'], previousTargets);
      }
      if (previousSchools) {
        queryClient.setQueryData(['schools:list'], previousSchools);
      }
    } finally {
      setRemovingTargets((prev) => {
        const next = { ...prev };
        delete next[schoolId];
        return next;
      });
    }
  };

  const onAddTarget = async () => {
    if (!canAddSelected || addingTarget) return;
    setAddingTarget(true);
    const previousTargets = queryClient.getQueryData<any>(['schools:targets']);
    const selectedSchool = schools.find((s) => s.id === selectedSchoolId);
    if (selectedSchool) {
      queryClient.setQueryData(['schools:targets'], (oldData: any) => {
        const current = (oldData?.data ?? []) as HighSchool[];
        if (current.some((s) => s.id === selectedSchool.id)) {
          return oldData;
        }
        return {
          ...oldData,
          data: [...current, { ...selectedSchool, isTarget: true }],
        };
      });
    }
    try {
      await addTargetSchool({ schoolId: selectedSchoolId });
      queryClient.setQueryData(['schools:list'], (oldData: any) => {
        if (!oldData?.data) return oldData;
        return {
          ...oldData,
          data: oldData.data.map((school: HighSchool) =>
            school.id === selectedSchoolId ? { ...school, isTarget: true } : school
          ),
        };
      });
      setAddDialogOpen(false);
      setSelectedSchoolId('');
      setSchoolSearch('');
    } catch (error: any) {
      if (previousTargets) {
        queryClient.setQueryData(['schools:targets'], previousTargets);
      }
      throw error;
    } finally {
      setAddingTarget(false);
    }
  };

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

            <SectionCard divider={false} gap="xs" className="bg-transparent border-none shadow-none p-0" contentClassName="p-0 pt-0">
              <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
                <div className="flex items-start justify-between pb-0">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                      <Target className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-base">学生画像</div>

                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
                    <Info className="h-4 w-4" />
                  </Button>
                </div>

                <Separator className="mb-3 opacity-50" />

                <div className="grid grid-cols-[96px_minmax(0,1fr)] gap-2">
                  <div className="rounded-lg border border-border/60 bg-muted/30 px-2 py-2 text-center">
                    <div className="text-[11px] text-muted-foreground">所在区</div>
                    <div className="text-sm font-semibold mt-0.5">
                      {studentProfile?.district || '未设置'}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-center">
                    <div className="text-[11px] text-muted-foreground">当前初中</div>
                    <div className="text-sm font-semibold mt-0.5 truncate whitespace-nowrap">
                      {middleSchoolName || '未设置'}
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
                <div className="flex items-start justify-between pb-0">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                      <Target className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-base">{t('ui.section.targets.list.title')}</div>

                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild className="h-8 text-xs px-2.5 rounded-full">
                      <Link to="/filter">{t('ui.action.goFilter')}</Link>
                    </Button>
                    <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" className="h-8 text-xs px-2.5 rounded-full">
                          <Plus className="h-4 w-4 mr-1" />
                          {t('ui.action.addTarget')}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{t('ui.dialog.addTarget.title')}</DialogTitle>
                          <DialogDescription>{t('ui.dialog.addTarget.desc')}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <FormField label={t('ui.field.school')}>
                            <Select value={selectedSchoolId} onValueChange={(v) => {
                              setSelectedSchoolId(v);
                              setSchoolSearch('');
                            }}>
                              <SelectTrigger>
                                <SelectValue placeholder={t('ui.field.school.placeholder')} />
                              </SelectTrigger>
                              <SelectContent>
                                <div className="p-2">
                                  <Input
                                    placeholder="搜索学校"
                                    value={schoolSearch}
                                    onChange={(e) => setSchoolSearch(e.target.value)}
                                    className="w-full"
                                    inputMode="search"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                  />
                                </div>
                                {filteredSchools.length === 0 ? (
                                  <div className="p-2 text-sm text-muted-foreground">没有找到匹配的学校</div>
                                ) : (
                                  filteredSchools.map((s) => (
                                    <SelectItem key={s.id} value={s.id}>
                                      {s.name}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                          </FormField>
                        </div>
                        <DialogFooter>
                          <Button variant="secondary" onClick={() => setAddDialogOpen(false)}>
                            {t('ui.action.cancel')}
                          </Button>
                          <Button disabled={!canAddSelected || addingTarget} onClick={onAddTarget}>
                            {t('ui.action.confirm')}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <Separator className="mb-3 opacity-50" />

                <div className="space-y-2">
                  {targetSchools.length === 0 ? (
                    <div className="text-sm text-muted-foreground py-6 text-center">{t('ui.states.emptyTargets')}</div>
                  ) : (
                    targetSchools.map((s) => {
                      const stats = s.stats;
                      const probability = stats?.probability ?? 0;
                      const p = probability / 100;
                      const level = levelFromProbability(p);
                      const barColor = level === 'high' ? 'bg-emerald-500' : level === 'mid' ? 'bg-amber-500' : 'bg-rose-500';
                      return (
                        <Card key={s.id} className="shadow-sm border border-border/60">
                          <CardContent className="p-2 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0 flex-1">
                                <div className="font-semibold text-base truncate">{s.name}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {s.district} · {s.type}
                                  {s.accommodation && ` · ${s.accommodation}`}
                                </div>
                              </div>
                              {stats?.probability && (
                                <div className={`px-2 py-0.5 rounded-full bg-gray-100 text-xs font-medium whitespace-nowrap flex-shrink-0 ${level === 'high' ? 'text-green-700' : level === 'mid' ? 'text-amber-700' : 'text-rose-700'}`}>
                                  {level === 'high' ? '保' : level === 'mid' ? '稳' : '冲'} · {stats.probability}%
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

                            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className={`h-full ${barColor} rounded-full`}
                                style={{ width: `${stats?.probability ?? 0}%` }}
                              />
                            </div>

                            <div className="flex items-center justify-between pt-0.5">
                              <div className="text-xs text-muted-foreground">
                                模考概率基于历史成绩分布估算
                              </div>
                              <div className="flex gap-1.5">
                                <Button variant="outline" size="sm" asChild className="h-8 text-xs px-2.5 rounded-full">
                                  <Link to={`/schools/${s.id}`}>详情</Link>
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="h-8 text-xs px-2.5 rounded-full"
                                  onClick={() => onRemoveTarget(s.id)}
                                  disabled={Boolean(removingTargets[s.id])}
                                >
                                  {removingTargets[s.id] ? '移除中' : t('ui.action.remove')}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })
                  )}
                </div>
              </SectionCard>
            </SectionCard>
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
