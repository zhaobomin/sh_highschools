import { SectionCard } from '@/components/Shared/SectionCard';
import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Info, User, School } from 'lucide-react';
import type { District, HighSchool, HighSchoolType, MiddleSchool, StudentProfile, TargetSchool } from '@/lib/types';
import { districts, highSchoolTypes } from '@/mocks/data';
import { createId, loadStudentProfile, loadTargets, saveStudentProfile, saveTargets } from '@/lib/appData';
import { listMiddleSchools, listSchools } from '@/lib/dataClient';

export default function FilterPage() {

  const [profile, setProfile] = useState<StudentProfile>(() => {
    const p = loadStudentProfile();
    // Validate/Fix district if it contains "区" or "县" which might be legacy data
    if (p.district && !districts.includes(p.district)) {
      const clean = p.district.replace(/[区县]/g, '') as District;
      if (districts.includes(clean)) {
        p.district = clean;
        saveStudentProfile(p);
      } else {
        // If still invalid, reset or keep (but it won't match anything)
        // For safety, let's keep it but it will likely show no results until user changes it.
        // Or we could reset it:
        // p.district = null;
      }
    }
    return p;
  });
  const [targets, setTargets] = useState<TargetSchool[]>(() => loadTargets());
  const [filters, setFilters] = useState<{ q: string; type: HighSchoolType | '全部' }>(() => ({
    q: '',
    type: '全部',
  }));

  const schoolFilters: {
    q: string;
    district: District | '全部';
    type: HighSchoolType | '全部';
    studentDistrict: District | null;
    middleSchoolId: string | null;
  } = {
    q: filters.q,
    type: filters.type,
    district: (profile.district ?? '全部') as District | '全部',
    studentDistrict: profile.district,
    middleSchoolId: profile.middleSchoolId,
  };

  const updateProfile = (patch: Partial<StudentProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      saveStudentProfile(next);
      return next;
    });
  };

  const {
    data: schoolsResp,
  } = useQuery({
    queryKey: ['schools:list', schoolFilters],
    queryFn: () => listSchools(schoolFilters),
    retry: false,
  });

  const { data: middleSchoolsResp } = useQuery({
    queryKey: ['middleSchools:list', { district: profile.district, type: profile.juniorType }],
    queryFn: () => listMiddleSchools({ district: profile.district, type: profile.juniorType }),
    enabled: Boolean(profile.district) && Boolean(profile.juniorType),
  });

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
  const middleSchools = (middleSchoolsResp?.data ?? []) as MiddleSchool[];
  const targetIdSet = useMemo(() => new Set(targets.map((x) => x.schoolId)), [targets]);

  const addTarget = (schoolId: string) => {
    if (targetIdSet.has(schoolId)) return;
    const next: TargetSchool[] = [
      ...targets,
      {
        id: createId('target'),
        schoolId,
        createdAt: new Date().toISOString(),
      },
    ];
    setTargets(next);
    saveTargets(next);
  };

  return (
    <div>
      <div className="space-y-3">
        <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
          <div className="flex items-start justify-between pb-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                <User className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div>
                <div className="font-bold text-base">孩子画像（含当前初中）</div>
                <div className="text-[10px] text-muted-foreground mt-0.5">用于到校名额匹配与推荐解释。</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full text-muted-foreground">
              <Info className="h-3 w-3" />
            </Button>
          </div>

          <Separator className="mb-3 opacity-50" />

          <div className="space-y-1.5">
            <FormField label="所在区" required>
              <Select
                value={profile.district ?? ''}
                onValueChange={(v) => {
                  const district = v as District;
                  updateProfile({
                    district,
                    middleSchoolId: null,
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择所在区" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField label="初中类型" required>
              <Select
                value={profile.juniorType ?? ''}
                onValueChange={(v) => {
                  updateProfile({
                    juniorType: v as StudentProfile['juniorType'],
                    middleSchoolId: null,
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="公办">公办</SelectItem>
                  <SelectItem value="民办">民办</SelectItem>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label='当前初中学校（用于"到校"名额）' required>
              <Select
                value={profile.middleSchoolId ?? ''}
                onValueChange={(v) => {
                  updateProfile({ middleSchoolId: v });
                }}
                disabled={!profile.district || !profile.juniorType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择当前初中学校" />
                </SelectTrigger>
                <SelectContent>
                  {middleSchools.map((ms) => (
                    <SelectItem key={ms.id} value={ms.id}>
                      {ms.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          </div>

          <div className="mt-1.5 grid gap-1.5 grid-cols-3">
            <div className="profile-score-card">
              <div className="profile-score-label">稳定分（估计）</div>
              <Input
                inputMode="numeric"
                type="number"
                className="profile-input text-lg"
                value={profile.stableScore ?? ''}
                onChange={(e) =>
                  updateProfile({
                    stableScore: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="profile-score-card">
              <div className="profile-score-label">上限分（估计）</div>
              <Input
                inputMode="numeric"
                type="number"
                className="profile-input text-lg"
                value={profile.highScore ?? ''}
                onChange={(e) =>
                  updateProfile({
                    highScore: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="profile-score-card">
              <div className="profile-score-label">下限分（估计）</div>
              <Input
                inputMode="numeric"
                type="number"
                className="profile-input text-lg"
                value={profile.lowScore ?? ''}
                onChange={(e) =>
                  updateProfile({
                    lowScore: e.target.value === '' ? null : Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="mt-1.5 space-y-1.5">
            <FormField label="筛选：学校类型">
              <Select value={filters.type} onValueChange={(v) => setFilters((p) => ({ ...p, type: v as any }))}>
                <SelectTrigger>
                  <SelectValue placeholder="全部" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="全部">全部</SelectItem>
                  {highSchoolTypes.map((tp) => (
                    <SelectItem key={tp} value={tp}>
                      {tp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          </div>
        </SectionCard>

        <SectionCard divider={false} gap="xs" className="bg-transparent border-none shadow-none p-0" contentClassName="p-0 pt-0">
          <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
            <div className="flex items-start justify-between pb-0">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/50">
                  <School className="h-3.5 w-3.5 text-foreground" />
                </div>
                <div>
                  <div className="font-bold text-base">推荐学校池</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">"加入目标"跟踪达成概率</div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
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
            </div>

            <Separator className="mb-3 opacity-50" />

            <div className="space-y-2">
              {schools.map((s) => {
                const inTargets = targetIdSet.has(s.id);
                const stats = s.stats;
                return (
                  <Card key={s.id} className="shadow-sm">
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
                          <span className="text-[10px] text-muted-foreground whitespace-nowrap">{profile.district ? `${profile.district}到区` : '到区分数'}</span>
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
                        <div className="flex gap-1.5">
                          <Button variant="outline" size="sm" className="h-6 text-[10px] px-2.5 rounded-full">
                            详情
                          </Button>
                          <Button
                            size="sm"
                            disabled={inTargets}
                            onClick={() => addTarget(s.id)}
                            variant={inTargets ? "secondary" : "default"}
                            className={`h-6 text-[10px] px-2.5 rounded-full ${inTargets ? 'text-green-700 bg-green-100 hover:bg-green-200' : ''}`}
                          >
                            {inTargets ? '已在目标' : '加入目标'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </SectionCard>
        </SectionCard>
      </div >
    </div >
  );
}
