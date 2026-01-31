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
import type { MockExam, MockExamStats } from '@/lib/types';
import { createId, loadMockExams, saveMockExams } from '@/lib/appData';

function computeTotal(scores: MockExam['scores']): number {
  const values = Object.values(scores).filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  return values.reduce((sum, v) => sum + v, 0);
}

function computeStats(exams: MockExam[]): MockExamStats {
  const totals = exams.map((e) => e.totalScore).filter((v) => Number.isFinite(v));
  if (totals.length === 0) return { count: 0, mean: null, std: null, min: null, max: null };

  const count = totals.length;
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  const mean = totals.reduce((a, b) => a + b, 0) / count;
  const variance = totals.reduce((acc, v) => acc + (v - mean) ** 2, 0) / count;
  const std = Math.sqrt(variance);

  return { count, mean, std, min, max };
}

export default function MocksPage() {
  const { t } = useTranslation();

  const [exams, setExams] = useState<MockExam[]>(() => loadMockExams());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
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
      physics: null,
      chemistry: null,
      politics: null,
      history: null,
    },
  });

  const sortedExams = useMemo(() => {
    return [...exams].sort((a, b) => {
      const ad = a.examDate ?? '';
      const bd = b.examDate ?? '';
      if (ad !== bd) return bd.localeCompare(ad);
      return b.createdAt.localeCompare(a.createdAt);
    });
  }, [exams]);

  const stats = useMemo(() => computeStats(exams), [exams]);

  const openCreate = () => {
    setEditingId(null);
    setDraft({
      name: '',
      examDate: '',
      scores: {
        chinese: null,
        math: null,
        english: null,
        physics: null,
        chemistry: null,
        politics: null,
        history: null,
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

  const upsert = () => {
    const now = new Date().toISOString();
    const totalScore = computeTotal(draft.scores);

    if (editingId) {
      const next = exams.map((e) =>
        e.id === editingId
          ? {
            ...e,
            name: draft.name.trim() || e.name,
            examDate: draft.examDate || null,
            scores: draft.scores,
            totalScore,
            updatedAt: now,
          }
          : e
      );
      setExams(next);
      saveMockExams(next);
      setDialogOpen(false);
      return;
    }

    const next: MockExam[] = [
      ...exams,
      {
        id: createId('mock'),
        name: draft.name.trim() || t('ui.label.unnamed'),
        examDate: draft.examDate || null,
        scores: draft.scores,
        totalScore,
        createdAt: now,
        updatedAt: now,
      },
    ];
    setExams(next);
    saveMockExams(next);
    setDialogOpen(false);
  };

  const remove = (id: string) => {
    const next = exams.filter((e) => e.id !== id);
    setExams(next);
    saveMockExams(next);
  };

  return (
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
                      <FormField label={t('ui.field.score.physics')}>
                        <Input
                          inputMode="numeric"
                          type="number"
                          className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                          value={draft.scores.physics ?? ''}
                          onChange={(e) =>
                            setDraft((p) => ({
                              ...p,
                              scores: { ...p.scores, physics: e.target.value === '' ? null : Number(e.target.value) },
                            }))
                          }
                          placeholder="0"
                        />
                      </FormField>
                      <FormField label={t('ui.field.score.chemistry')}>
                        <Input
                          inputMode="numeric"
                          type="number"
                          className="w-full h-10 px-4 text-base rounded-md border border-input bg-transparent text-center"
                          value={draft.scores.chemistry ?? ''}
                          onChange={(e) =>
                            setDraft((p) => ({
                              ...p,
                              scores: { ...p.scores, chemistry: e.target.value === '' ? null : Number(e.target.value) },
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
                  <Button variant="secondary" className="h-10 px-4">
                    {t('ui.action.cancel')}
                  </Button>
                  <Button className="h-10 px-6" onClick={upsert}>
                    {t('ui.action.save')}
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
                        <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full" onClick={() => openEdit(e)}>
                          <Edit2 className="h-3 w-3 text-muted-foreground" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:text-destructive" onClick={() => remove(e.id)}>
                          <Trash2 className="h-3 w-3" />
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
  );
}
