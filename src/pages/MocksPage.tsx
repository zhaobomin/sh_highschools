import { SectionCard } from '@/components/Shared/SectionCard';
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
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <Calculator className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">{t('ui.section.mocks.stats.title')}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{t('ui.section.mocks.stats.desc')}</div>
              </div>
            </div>
          </div>

          <Separator className="mb-3 opacity-50" />

          <div className="grid gap-2 grid-cols-2 lg:grid-cols-4">
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.count')}</div>
              <div className="text-xl font-bold mt-0.5">{stats.count}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.mean')}</div>
              <div className="text-xl font-bold mt-0.5">{stats.mean == null ? '-' : stats.mean.toFixed(1)}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.max')}</div>
              <div className="text-xl font-bold mt-0.5">{stats.max == null ? '-' : stats.max}</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-3 text-center">
              <div className="text-[10px] text-muted-foreground">{t('ui.metric.min')}</div>
              <div className="text-xl font-bold mt-0.5">{stats.min == null ? '-' : stats.min}</div>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground mt-2 text-center">
            {t('ui.metric.std')}: {stats.std == null ? '-' : stats.std.toFixed(2)}
          </div>
        </SectionCard>

        <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <ListChecks className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">{t('ui.section.mocks.list.title')}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{t('ui.section.mocks.list.desc')}</div>
              </div>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" onClick={openCreate} className="h-6 text-[10px] px-2.5 rounded-full">
                  <Plus className="h-3 w-3 mr-1" />
                  {t('ui.action.addMock')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{editingId ? t('ui.dialog.editMock.title') : t('ui.dialog.addMock.title')}</DialogTitle>
                  <DialogDescription>{t('ui.dialog.addMock.desc')}</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField label={t('ui.field.mockName')} required>
                      <Input value={draft.name} onChange={(e) => setDraft((p) => ({ ...p, name: e.target.value }))} className="profile-input text-base text-left px-3" />
                    </FormField>
                    <FormField label={t('ui.field.mockDate')}>
                      <Input
                        type="date"
                        value={draft.examDate}
                        onChange={(e) => setDraft((p) => ({ ...p, examDate: e.target.value }))}
                        className="profile-input text-base text-left px-3"
                      />
                    </FormField>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    <FormField label={t('ui.field.score.chinese')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.chinese ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, chinese: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.math')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.math ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, math: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.english')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.english ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, english: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.physics')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.physics ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, physics: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.chemistry')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.chemistry ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, chemistry: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.politics')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.politics ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, politics: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.history')}>
                      <Input
                        inputMode="numeric"
                        type="number"
                        className="profile-input text-lg"
                        value={draft.scores.history ?? ''}
                        onChange={(e) =>
                          setDraft((p) => ({
                            ...p,
                            scores: { ...p.scores, history: e.target.value === '' ? null : Number(e.target.value) },
                          }))
                        }
                      />
                    </FormField>
                    <FormField label={t('ui.field.score.total')} helpText={t('ui.field.score.total.help')}>
                      <Input value={computeTotal(draft.scores)} readOnly className="profile-input text-lg bg-muted/20" />
                    </FormField>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                    {t('ui.action.cancel')}
                  </Button>
                  <Button onClick={upsert}>{t('ui.action.save')}</Button>
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
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-base">{e.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{e.examDate ?? '无日期'}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{e.totalScore}</div>
                        <div className="text-[10px] text-muted-foreground">总分</div>
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full" onClick={() => openEdit(e)}>
                          <Edit2 className="h-3.5 w-3.5 text-muted-foreground" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full hover:text-destructive" onClick={() => remove(e.id)}>
                          <Trash2 className="h-3.5 w-3.5" />
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
