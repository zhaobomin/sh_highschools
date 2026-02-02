import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Edit2, ListChecks, Plus, Trash2 } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import type { TFunction } from 'i18next';
import type { MockExam } from '@/lib/types';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import ListCard from '@/components/Shared/ListCard';
import SectionHeader from '@/components/Shared/SectionHeader';
import EmptyState from '@/components/Shared/states/EmptyState';
import StateContainer from '@/components/Shared/states/StateContainer';
import { FormSection } from '@/components/Shared/FormSection';

interface DraftState {
  name: string;
  examDate: string;
  scores: MockExam['scores'];
}

interface MockListSectionProps {
  t: TFunction;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  editingId: string | null;
  openCreate: () => void;
  draft: DraftState;
  setDraft: Dispatch<SetStateAction<DraftState>>;
  saving: boolean;
  onSave: () => void;
  sortedExams: MockExam[];
  deleting: boolean;
  onEdit: (exam: MockExam) => void;
  onRemove: (id: string) => void;
  computeTotal: (scores: MockExam['scores']) => number;
}

export default function MockListSection({
  t,
  dialogOpen,
  setDialogOpen,
  editingId,
  openCreate,
  draft,
  setDraft,
  saving,
  onSave,
  sortedExams,
  deleting,
  onEdit,
  onRemove,
  computeTotal,
}: MockListSectionProps) {
  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<ListChecks className="h-4 w-4 text-foreground" />}
        title={t('ui.section.mocks.list.title')}
        actions={(
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

              <FormSection
                onSubmit={onSave}
                onCancel={() => setDialogOpen(false)}
                isSubmitting={saving}
                submitText={saving ? t('ui.action.saving') : t('ui.action.save')}
                cancelText={t('ui.action.cancel')}
                className="space-y-4 py-2"
                bodyClassName="space-y-4"
                actionsClassName="pt-2"
                cancelClassName="h-10 px-4"
                submitClassName="h-10 px-6"
              >
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
              </FormSection>
            </DialogContent>
          </Dialog>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      {sortedExams.length === 0 ? (
        <StateContainer>
          <EmptyState message={t('ui.states.emptyMocks')} />
        </StateContainer>
      ) : (
        <div className="space-y-2">
          {sortedExams.map((e) => (
            <ListCard key={e.id} size="md" contentClassName="flex items-center justify-between">
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
                    <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full" onClick={() => onEdit(e)} disabled={deleting}>
                      <Edit2 className="h-3 w-3 text-muted-foreground" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-6 w-6 rounded-full hover:text-destructive" onClick={() => onRemove(e.id)} disabled={deleting}>
                      {deleting ? (
                        <div className="animate-spin h-3 w-3 border-2 border-current border-t-transparent rounded-full"></div>
                      ) : (
                        <Trash2 className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
            </ListCard>
          ))}
        </div>
      )}
    </ProfileSectionCard>
  );
}
