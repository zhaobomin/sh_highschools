import { SectionCard } from '@/components/Shared/SectionCard';
import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
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
import { useQuery } from '@tanstack/react-query';
import type { HighSchool, StudentProfile, TargetSchool } from '@/lib/types';
import { createId, loadStudentProfile, loadTargets, saveTargets } from '@/lib/appData';
import { listSchools } from '@/lib/dataClient';

export default function TargetsPage() {
  const { t } = useTranslation();

  const [profileDraft] = useState<StudentProfile>(() => loadStudentProfile());
  const [targets, setTargets] = useState<TargetSchool[]>(() => loadTargets());
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('');

  const { data: schoolsResp } = useQuery({
    queryKey: ['schools:list', { q: '', district: '全部', type: '全部', studentDistrict: profileDraft.district, middleSchoolId: profileDraft.middleSchoolId }],
    queryFn: () => listSchools({
      district: '全部',
      type: '全部',
      studentDistrict: profileDraft.district,
      middleSchoolId: profileDraft.middleSchoolId
    }),
  });

  const schools = (schoolsResp?.data ?? []) as HighSchool[];


  const targetSchools = useMemo(() => {
    const map = new Map(schools.map((s) => [s.id, s]));
    return targets
      .map((tgt) => map.get(tgt.schoolId))
      .filter((v): v is HighSchool => Boolean(v));
  }, [schools, targets]);





  const canAddSelected =
    Boolean(selectedSchoolId) && !targets.some((x) => x.schoolId === selectedSchoolId) && schools.some((s) => s.id === selectedSchoolId);

  const onRemoveTarget = (schoolId: string) => {
    const next = targets.filter((tgt) => tgt.schoolId !== schoolId);
    setTargets(next);
    saveTargets(next);
  };

  const onAddTarget = () => {
    if (!canAddSelected) return;
    const next: TargetSchool[] = [
      ...targets,
      {
        id: createId('target'),
        schoolId: selectedSchoolId,
        createdAt: new Date().toISOString(),
      },
    ];
    setTargets(next);
    saveTargets(next);
    setAddDialogOpen(false);
    setSelectedSchoolId('');
  };

  return (
    <div>
      <div className="space-y-4">
        <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <FileText className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">上海中考志愿与录取方式</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">三步走：自招，到区/到校，平行志愿</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full text-muted-foreground">
              <Info className="h-3 w-3" />
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
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                  <Target className="h-3.5 w-3.5 text-foreground" />
                </div>
                <div>
                  <div className="font-bold text-base">{t('ui.section.targets.list.title')}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{t('ui.section.targets.list.desc')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild className="h-6 text-[10px] px-2.5 rounded-full">
                  <Link to="/filter">{t('ui.action.goFilter')}</Link>
                </Button>
                <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="h-6 text-[10px] px-2.5 rounded-full">
                      <Plus className="h-3 w-3 mr-1" />
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
                        <Select value={selectedSchoolId} onValueChange={setSelectedSchoolId}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('ui.field.school.placeholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            {schools.map((s) => (
                              <SelectItem key={s.id} value={s.id}>
                                {s.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormField>
                    </div>
                    <DialogFooter>
                      <Button variant="secondary" onClick={() => setAddDialogOpen(false)}>
                        {t('ui.action.cancel')}
                      </Button>
                      <Button disabled={!canAddSelected} onClick={onAddTarget}>
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
                  return (
                    <Card key={s.id} className="shadow-sm border border-border/60">
                      <CardContent className="p-2 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-base truncate">{s.name}</div>
                            <div className="text-[10px] text-muted-foreground mt-0.5">
                              区域：{s.district} · 类型：{s.type}
                            </div>
                          </div>
                          {stats?.probability && (
                            <div className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-medium whitespace-nowrap flex-shrink-0">
                              模考概率 {stats.probability}%
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                            <span className="text-[10px] text-muted-foreground whitespace-nowrap">{profileDraft.district ? `${profileDraft.district}到区` : '到区分数'}</span>
                            <span className="text-sm font-semibold flex-1 text-center">{stats?.scoreToDistrict ?? '无数据'}</span>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                            <span className="text-[10px] text-muted-foreground whitespace-nowrap">到校分数</span>
                            <span className="text-sm font-semibold flex-1 text-center">{stats?.scoreToSchool ?? '无数据'}</span>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                            <span className="text-[10px] text-muted-foreground whitespace-nowrap">到区名额</span>
                            <span className="text-sm font-semibold flex-1 text-center">{stats?.quotaToDistrict ?? 0}</span>
                          </div>
                          <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                            <span className="text-[10px] text-muted-foreground whitespace-nowrap">到校名额</span>
                            <span className="text-sm font-semibold flex-1 text-center">{stats?.quotaToSchool ?? 0}</span>
                          </div>
                        </div>

                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-300 rounded-full"
                            style={{ width: `${stats?.probability ?? 0}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between pt-0.5">
                          <div className="text-[10px] text-muted-foreground">
                            模考概率基于历史成绩分布估算
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="h-6 text-[10px] px-2.5 rounded-full"
                            onClick={() => onRemoveTarget(s.id)}
                          >
                            {t('ui.action.remove')}
                          </Button>
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
  );
}
