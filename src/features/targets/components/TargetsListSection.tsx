import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TFunction } from 'i18next';
import type { HighSchool } from '@/lib/types';
import { levelFromProbability } from '@/lib/evaluation';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import ListCard from '@/components/Shared/ListCard';
import SectionHeader from '@/components/Shared/SectionHeader';
import EmptyState from '@/components/Shared/states/EmptyState';
import StateContainer from '@/components/Shared/states/StateContainer';
import { FormSection } from '@/components/Shared/FormSection';

interface TargetsListSectionProps {
  t: TFunction;
  addDialogOpen: boolean;
  setAddDialogOpen: (open: boolean) => void;
  selectedSchoolId: string;
  setSelectedSchoolId: (value: string) => void;
  schoolSearch: string;
  setSchoolSearch: (value: string) => void;
  filteredSchools: HighSchool[];
  addingTarget: boolean;
  onAddTarget: () => void;
  targetSchools: HighSchool[];
  onRemoveTarget: (schoolId: string) => void;
  removingTargets: Record<string, boolean>;
}

export default function TargetsListSection({
  t,
  addDialogOpen,
  setAddDialogOpen,
  selectedSchoolId,
  setSelectedSchoolId,
  schoolSearch,
  setSchoolSearch,
  filteredSchools,
  addingTarget,
  onAddTarget,
  targetSchools,
  onRemoveTarget,
  removingTargets,
}: TargetsListSectionProps) {
  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<Target className="h-4 w-4 text-foreground" />}
        title={t('ui.section.targets.list.title')}
        actions={(
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
                <FormSection
                  onSubmit={onAddTarget}
                  onCancel={() => setAddDialogOpen(false)}
                  isSubmitting={addingTarget}
                  submitText={t('ui.action.confirm')}
                  cancelText={t('ui.action.cancel')}
                  className="space-y-4"
                  actionsClassName="pt-2"
                >
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
                </FormSection>
              </DialogContent>
            </Dialog>
          </div>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      <div className="space-y-2">
        {targetSchools.length === 0 ? (
          <StateContainer>
            <EmptyState message={t('ui.states.emptyTargets')} />
          </StateContainer>
        ) : (
          targetSchools.map((s) => {
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
                      {level === 'high' ? '保' : level === 'mid' ? '稳' : '冲'}
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

                <div className="flex items-center justify-between pt-0.5">
                  <div className="text-xs text-muted-foreground">
                    推荐度基于学生画像
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
              </ListCard>
            );
          })
        )}
      </div>
    </ProfileSectionCard>
  );
}
