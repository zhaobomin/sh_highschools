import { SectionCard } from '@/components/Shared/SectionCard';
import { DataCard, DataCardGrid } from '@/components/Shared/DataCard';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/Shared/FormField';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calculator, ListChecks, Plus, Trash2, Edit2 } from 'lucide-react';
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
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { MockExam } from '@/lib/types';
import { mockExamsApi } from '@/lib/api';
import PullToRefresh from '@/components/Shared/PullToRefresh';

function computeTotal(scores: MockExam['scores']): number {
  const values = Object.values(scores).filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  return values.reduce((sum, v) => sum + v, 0);
}

export default function MocksPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 刷新数据
  const handleRefresh = async () => {
    await Promise.all([
      queryClient.refetchQueries({ queryKey: ['mockExams'] }),
      queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
    ]);
  };

  const [draft, setDraft] = useState<{
    name: string;
    examDate: string;
    scores: MockExam['scores'];
  }>({
    name: '',
    examDate: '',
    scores: {
      chinese: null,
      math: null,
      english: null,
      politics: null,
      history: null,
      pe: null,
    },
  });

  // 使用 useQuery 获取模考数据
  const { data: exams = [], isLoading: isExamsLoading } = useQuery({
    queryKey: ['mockExams'],
    queryFn: async () => {
      const response = await mockExamsApi.getExams();
      return response.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5分钟
    gcTime: 10 * 60 * 1000, // 10分钟
  });

  // 使用 useQuery 获取统计数据
  const { data: stats = { count: 0, mean: null, std: null, min: null, max: null }, isLoading: isStatsLoading } = useQuery({
    queryKey: ['mockExamStats'],
    queryFn: async () => {
      const response = await mockExamsApi.getStats();
      return response.data || { count: 0, mean: null, std: null, min: null, max: null };
    },
    staleTime: 5 * 60 * 1000, // 5分钟
    gcTime: 10 * 60 * 1000, // 10分钟
  });

  const loading = isExamsLoading || isStatsLoading;

  const sortedExams = useMemo(() => {
    return [...exams].sort((a, b) => {
      const ad = a.examDate ?? '';
      const bd = b.examDate ?? '';
      if (ad !== bd) return bd.localeCompare(ad);
      return b.createdAt.localeCompare(a.createdAt);
    });
  }, [exams]);

  const openCreate = () => {
    setEditingId(null);
    setDraft({
      name: '',
      examDate: '',
      scores: {
        chinese: null,
        math: null,
        english: null,
        politics: null,
        history: null,
        pe: null,
      },
    });
    setDialogOpen(true);
  };

  const openEdit = (exam: MockExam) => {
    setEditingId(exam.id);
    setDraft({
      name: exam.name,
      examDate: exam.examDate ?? '',
      scores: { ...exam.scores },
    });
    setDialogOpen(true);
  };

  // 使用 useMutation 管理保存操作
  const { mutate: upsert, isPending: saving } = useMutation({
    mutationFn: async () => {
      const examData = {
        name: draft.name.trim() || t('ui.label.unnamed'),
        examDate: draft.examDate || null,
        scores: draft.scores,
      };

      if (editingId) {
        // 更新现有记录
        return await mockExamsApi.updateExam(editingId, examData);
      } else {
        // 创建新记录
        return await mockExamsApi.createExam(examData);
      }
    },
    onSuccess: async () => {
      // 保存成功后刷新缓存
      await Promise.all([
        queryClient.refetchQueries({ queryKey: ['mockExams'] }),
        queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
      ]);
      setDialogOpen(false);
    },
    onError: (error) => {
      console.error('保存模考记录失败:', error);
    },
  });

  // 使用 useMutation 管理删除操作
  const { mutate: remove, isPending: deleting } = useMutation({
    mutationFn: async (id: string) => {
      return await mockExamsApi.deleteExam(id);
    },
    onSuccess: async () => {
      // 删除成功后刷新缓存
      await Promise.all([
        queryClient.refetchQueries({ queryKey: ['mockExams'] }),
        queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
      ]);
    },
    onError: (error) => {
      console.error('删除模考记录失败:', error);
    },
  });

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {loading ? (
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
                    <Calculator className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.mocks.stats.title')}</div>

                  </div>
                </div>
              </div>

              <Separator className="mb-3 opacity-50" />

              <DataCardGrid>
                <DataCard title={t('ui.metric.count')} value={stats.count} />
                <DataCard title={t('ui.metric.mean')} value={stats.mean == null ? '-' : stats.mean.toFixed(1)} />
                <DataCard title={t('ui.metric.max')} value={stats.max == null ? '-' : stats.max} />
                <DataCard title={t('ui.metric.min')} value={stats.min == null ? '-' : stats.min} />
              </DataCardGrid>
              <div className="text-xs text-muted-foreground mt-1 text-center">
                {t('ui.metric.std')}: {stats.std == null ? '-' : stats.std.toFixed(2)}
              </div>
            </SectionCard>

            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <ListChecks className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">{t('ui.section.mocks.list.title')}</div>

                  </div>
                </div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={openCreate} className="h-8 text-xs px-2.5 rounded-full">
                      <Plus className="h-4 w-4 mr-1" />
                      {t('ui.action.addMock')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <DialogHeader>
                      <DialogTitle className="text-base font-bold">{editingId ? t('ui.dialog.editMock.title') : t('ui.dialog.addMock.title')}</DialogTitle>
                      <DialogDescription className="text-sm">{t('ui.dialog.addMock.desc')}</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-2">
                      <div className="space-y-3">
                        <FormField label={t('ui.field.mockName')} required>
                          <Input
                            value={draft.name}
                            onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))}
                            className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent"
                            placeholder="请输入考试名称"
                          />
                        </FormField>
                        <FormField label={t('ui.field.mockDate')}>
                          <Input
                            type="date"
                            value={draft.examDate}
                            onChange={(e) => setDraft((p) => ({ ...p, examDate: e.target.value }))}
                            className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent"
                          />
                        </FormField>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold mb-3">{t('ui.section.mocks.scores.title')}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <FormField label={t('ui.field.score.chinese')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.chinese ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, chinese: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.math')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.math ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, math: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.english')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.english ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, english: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.politics')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.politics ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, politics: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.history')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.history ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, history: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.pe')}>
                            <Input
                              inputMode="numeric"
                              type="number"
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                              value={draft.scores.pe ?? ''}
                              onChange={(e) =>
                                setDraft((p) => ({
                                  ...p,
                                  scores: { ...p.scores, pe: e.target.value === '' ? null : Number(e.target.value) },
                                }))
                              }
                              placeholder="0"
                            />
                          </FormField>
                          <FormField label={t('ui.field.score.total')}>
                            <Input
                              value={computeTotal(draft.scores)}
                              readOnly
                              className="w-full h-10 px-4 text-base rounded-md border border-input bg-muted/20 text-center font-semibold"
                            />
                          </FormField>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{t('ui.field.score.total.help')}</p>
                      </div>
                    </div>

                    <DialogFooter className="pt-2">
                      <Button variant="secondary" className="h-10 px-4" disabled={saving}>
                        {t('ui.action.cancel')}
                      </Button>
                      <Button className="h-10 px-6" onClick={() => upsert()} disabled={saving}>
                        {saving ? t('ui.action.saving') : t('ui.action.save')}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Separator className="mb-3 opacity-50" />

              {sortedExams.length === 0 ? (
                <div className="text-sm text-muted-foreground py-6 text-center">{t('ui.states.emptyMocks')}</div>
              ) : (
                <div className="space-y-2">
                  {sortedExams.map((e) => (
                    <Card key={e.id} className="shadow-sm border border-border/60">
                      <CardContent className="p-2 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">{e.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{e.examDate ?? '无日期'}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-right">
                            <div className="text-base font-bold text-primary">{e.totalScore}</div>
                            <div className="text-xs text-muted-foreground">总分</div>
                          </div>
                          <div className="flex gap-1">
                            <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full" onClick={() => openEdit(e)} disabled={deleting}>
                              <Edit2 className="h-3 w-3 text-muted-foreground" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:text-destructive" onClick={() => remove(e.id)} disabled={deleting}>
                              {deleting ? (
                                <div className="animate-spin h-3 w-3 border-2 border-current border-t-transparent rounded-full"></div>
                              ) : (
                                <Trash2 className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </SectionCard>
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
