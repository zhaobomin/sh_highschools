import { SectionCard } from '@/components/Shared/SectionCard';
import { FormField } from '@/components/Shared/FormField';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState, useEffect, useRef } from 'react';
import { Info, User, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import type { District, HighSchool, HighSchoolType, MiddleSchool, StudentProfile, TargetSchool } from '@/lib/types';
import { districts, highSchoolTypes } from '@/mocks/data';
import { createId, loadStudentProfile, loadTargets, saveStudentProfile, saveTargets, loadMiddleSchools, saveMiddleSchools, loadFilterSelects, saveFilterSelects } from '@/lib/appData';
import type { FilterSelectCache } from '@/lib/appData';
import { listSchools, getStudentProfile, saveStudentProfile as saveStudentProfileApi, getFilterOptions } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';

// 前端参数验证函数
const validateProfile = (profile: StudentProfile): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // 检查必填字段
  if (!profile.district) {
    errors.push('请选择所在区');
  }

  if (!profile.juniorType) {
    errors.push('请选择初中类型');
  }

  if (!profile.middleSchoolId) {
    errors.push('请选择当前初中学校');
  }

  // 检查分数字段
  const validateScore = (score: number | null, name: string) => {
    if (score === null) {
      errors.push(`请填写${name}`);
    } else if (score < 0 || score > 750) {
      errors.push(`${name}必须在0-750之间`);
    }
  };

  validateScore(profile.stableScore, '稳定分');
  validateScore(profile.highScore, '上限分');
  validateScore(profile.lowScore, '下限分');

  // 检查分数逻辑关系
  if (profile.stableScore !== null && profile.highScore !== null && profile.stableScore > profile.highScore) {
    errors.push('稳定分不能高于上限分');
  }

  if (profile.stableScore !== null && profile.lowScore !== null && profile.stableScore < profile.lowScore) {
    errors.push('稳定分不能低于下限分');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export default function FilterPage() {
  const queryClient = useQueryClient();

  // 获取学生画像数据
  const { data: profileData, isLoading: isProfileLoading } = useQuery({
    queryKey: ['studentProfile'],
    queryFn: getStudentProfile,
    retry: false,
    refetchOnMount: true, // 页面刷新时重新获取数据
    refetchOnWindowFocus: false, // 窗口聚焦时不重新获取数据
    staleTime: 300000, // 5分钟内数据视为新鲜
  });

  // 加载缓存的初中学校列表
  const [cachedMiddleSchools, setCachedMiddleSchools] = useState<MiddleSchool[]>(() => {
    return loadMiddleSchools();
  });

  // 初始化一个空的学生画像
  const [profile, setProfile] = useState<StudentProfile>(() => ({
    district: null,
    juniorType: null,
    middleSchoolId: null,
    stableScore: null,
    highScore: null,
    lowScore: null,
  }));

  const [filterSelects, setFilterSelects] = useState<FilterSelectCache>(() => loadFilterSelects());

  // 当从后端获取到学生画像数据时，更新本地状态和缓存
  useEffect(() => {
    if (profileData?.data) {
      const backendProfile = profileData.data;
      const updatedProfile: StudentProfile = {
        district: backendProfile.district || null,
        juniorType: backendProfile.junior_type || null,
        middleSchoolId: backendProfile.middle_school_id || null,
        stableScore: backendProfile.stable_score || null,
        highScore: backendProfile.high_score || null,
        lowScore: backendProfile.low_score || null,
      };
      setProfile(updatedProfile);
      saveStudentProfile(updatedProfile);
    } else {
      // 如果后端没有数据，从本地存储加载
      const localProfile = loadStudentProfile();
      // Validate/Fix district if it contains "区" or "县" which might be legacy data
      if (localProfile.district && !districts.includes(localProfile.district)) {
        const clean = localProfile.district.replace(/[区县]/g, '') as District;
        if (districts.includes(clean)) {
          localProfile.district = clean;
          saveStudentProfile(localProfile);
        }
      }
      setProfile(localProfile);
    }
  }, [profileData]);

  const {
    data: filterOptionsResp,
    isLoading: isOptionsLoading
  } = useQuery({
    queryKey: ['filter:options'],
    queryFn: getFilterOptions,
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 3600000,
  });

  useEffect(() => {
    if (filterOptionsResp?.data) {
      const { districts: districtsFromApi, junior_types: juniorTypesFromApi, middle_schools: middleSchoolsFromApi } = filterOptionsResp.data;
      const normalizedSelects: FilterSelectCache = {
        districts: districtsFromApi ?? [],
        juniorTypes: juniorTypesFromApi ?? [],
      };

      setFilterSelects(normalizedSelects);
      saveFilterSelects(normalizedSelects);

      if (middleSchoolsFromApi) {
        saveMiddleSchools(middleSchoolsFromApi);
        setCachedMiddleSchools(middleSchoolsFromApi);
      } else {
        // Clear cache when backend explicitly reports no middle schools
        saveMiddleSchools([]);
        setCachedMiddleSchools([]);
      }
    }
  }, [filterOptionsResp?.data]);



  // 保存学生画像数据到后端的mutation
  const saveProfileMutation = useMutation({
    mutationFn: saveStudentProfileApi,
    onSuccess: (data) => {
      console.log('Student profile saved successfully:', data);
    },
    onError: (error) => {
      console.error('Error saving student profile:', error);
    },
  });

  const [targets, setTargets] = useState<TargetSchool[]>(() => loadTargets());
  const [filters, setFilters] = useState<{ q: string; type: HighSchoolType | '全部' }>(() => ({
    q: '',
    type: '全部',
  }));
  const [middleSchoolSearch, setMiddleSchoolSearch] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const schoolFilters = useMemo(() => ({
    q: filters.q,
    district: (profile.district ?? '全部') as District | '全部',
    type: filters.type,
    studentDistrict: profile.district,
    middleSchoolId: profile.middleSchoolId,
    stableScore: profile.stableScore,
    highScore: profile.highScore,
    lowScore: profile.lowScore,
  }), [filters, profile.district, profile.middleSchoolId, profile.stableScore, profile.highScore, profile.lowScore]);

  const schoolFiltersRef = useRef(schoolFilters);
  schoolFiltersRef.current = schoolFilters;

  const updateProfile = (patch: Partial<StudentProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      saveStudentProfile(next);
      return next;
    });
  };

  const {
    data: schoolsResp,
    refetch: refetchSchools,
    isLoading: isSchoolsLoading
  } = useQuery({
    queryKey: ['schools:list'],
    queryFn: () => listSchools(schoolFiltersRef.current),
    retry: false,
    enabled: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handleRefresh = async () => {
    await queryClient.refetchQueries({ queryKey: ['studentProfile'] });
    await queryClient.refetchQueries({ queryKey: ['filter:options'] });
    if (schoolsResp) {
      await refetchSchools();
    }
  };

  const handleSearch = async () => {
    // 清除之前的错误信息
    setErrors([]);

    // 前端参数验证
    const validation = validateProfile(profile);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const payload = {
      district: profile.district,
      junior_type: profile.juniorType,
      middle_school_id: profile.middleSchoolId,
      stable_score: profile.stableScore,
      high_score: profile.highScore,
      low_score: profile.lowScore,
    };

    try {
      await saveProfileMutation.mutateAsync(payload);
      // 验证通过且保存成功后，执行搜索
      refetchSchools?.();
    } catch (error: any) {
      // 统一处理后端错误
      const errorMessage = error.message || '保存学生画像失败，请稍后重试';
      setErrors([errorMessage]);
    }
  };

  // 根据当前筛选条件从缓存中获取初中学校列表
  const filteredMiddleSchools = useMemo(() => {
    // 首先从缓存的完整列表中筛选
    let filtered = cachedMiddleSchools;

    // 根据当前的区县和初中类型进行筛选
    if (profile.district) {
      filtered = filtered.filter(ms => ms.district === profile.district);
    }
    if (profile.juniorType) {
      filtered = filtered.filter(ms => ms.type === profile.juniorType);
    }

    // 根据搜索词进行筛选
    if (middleSchoolSearch) {
      const searchTerm = middleSchoolSearch.toLowerCase();
      filtered = filtered.filter(ms =>
        ms.name.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [cachedMiddleSchools, profile.district, profile.juniorType, middleSchoolSearch]);

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
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
    <PullToRefresh onRefresh={handleRefresh}>
      {(isProfileLoading || isOptionsLoading || isSchoolsLoading) ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-2"></div>
            <div className="text-sm text-muted-foreground">加载中...</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-3">
            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <div className="flex items-start justify-between pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                    <User className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-base">孩子画像（含当前初中）</div>

                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
                  <Info className="h-4 w-4" />
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
                      {filterSelects.districts.length === 0 ? (
                        <div className="px-3 py-2 text-sm text-muted-foreground">选项加载中</div>
                      ) : (
                        filterSelects.districts.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))
                      )}
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
                      {filterSelects.juniorTypes.length === 0 ? (
                        <div className="px-3 py-2 text-sm text-muted-foreground">选项加载中</div>
                      ) : (
                        filterSelects.juniorTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </FormField>
                <FormField label='当前初中学校（用于"到校"名额）' required>
                  <Select
                    value={profile.middleSchoolId ?? ''}
                    onValueChange={(v) => {
                      updateProfile({ middleSchoolId: v });
                      setMiddleSchoolSearch('');
                    }}
                    disabled={!profile.district || !profile.juniorType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择当前初中学校" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="p-2">
                        <Input
                          placeholder="搜索初中学校"
                          value={middleSchoolSearch}
                          onChange={(e) => setMiddleSchoolSearch(e.target.value)}
                          className="w-full"
                          inputMode="search"
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                        />
                      </div>
                      {filteredMiddleSchools.length === 0 ? (
                        <div className="p-2 text-sm text-muted-foreground">没有找到匹配的初中学校</div>
                      ) : (
                        filteredMiddleSchools.map((ms) => (
                          <SelectItem key={ms.id} value={ms.id}>
                            {ms.name}
                          </SelectItem>
                        ))
                      )}
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
                {/* 错误提示区域 */}
                {errors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3">
                    <div className="text-sm font-medium text-red-800 mb-1">请修正以下问题：</div>
                    <ul className="text-sm text-red-700 space-y-1">
                      {errors.map((error, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">•</span>
                          <span>{error}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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

                <div className="pt-1.5">
                  <Button
                    className="w-full"
                    size="default"
                    onClick={handleSearch}
                    disabled={saveProfileMutation.isPending}
                  >
                    搜索推荐
                  </Button>
                </div>
              </div>
            </SectionCard>

            <SectionCard divider={false} gap="xs" className="bg-transparent border-none shadow-none p-0" contentClassName="p-0 pt-0">
              <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
                <div className="flex items-start justify-between pb-0">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
                      <School className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-base">推荐学校池</div>

                    </div>
                  </div>
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
                </div>

                <Separator className="mb-3 opacity-50" />

                <div className="space-y-2">
                  {schools.map((s) => {
                    const inTargets = targetIdSet.has(s.id);
                    const stats = s.stats;
                    const probability = stats?.probability ?? 0;
                    const p = probability / 100;
                    const level = levelFromProbability(p);
                    return (
                      <Card key={s.id} className="shadow-sm">
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
                              <div className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${level === 'high' ? 'bg-green-100 text-green-700' : level === 'mid' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                                {level === 'high' ? '稳' : level === 'mid' ? '冲' : '保'}
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-3 gap-1.5">
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">自招名额</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.quotaAutonomous ?? 0}</span>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">到区名额</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.quotaToDistrict ?? 0}</span>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">到校名额</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.quotaToSchool ?? 0}</span>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">统招分数</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.scoreUnified ?? '-'}</span>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">到区分数</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.scoreToDistrict ?? '-'}</span>
                            </div>
                            <div className="bg-muted/30 rounded-lg p-1.5 flex justify-between items-center">
                              <span className="text-xs text-muted-foreground whitespace-nowrap">到校分数</span>
                              <span className="text-sm font-semibold flex-1 text-center">{stats?.scoreToSchool ?? '-'}</span>
                            </div>

                          </div>

                          <div className="flex items-center justify-between pt-0.5">
                            <div className="text-xs text-muted-foreground">
                              推荐度基于学生画像与学校录取数据
                            </div>
                            <div className="flex gap-1.5">
                              <Button variant="outline" size="sm" asChild className="h-8 text-xs px-2.5 rounded-full">
                                <Link to={`/schools/${s.id}`}>详情</Link>
                              </Button>
                              <Button
                                size="sm"
                                disabled={inTargets}
                                onClick={() => addTarget(s.id)}
                                variant={inTargets ? "secondary" : "default"}
                                className={`h-8 text-xs px-2.5 rounded-full ${inTargets ? 'text-green-700 bg-green-100 hover:bg-green-200' : ''}`}
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
      )}
    </PullToRefresh>
  );
}
