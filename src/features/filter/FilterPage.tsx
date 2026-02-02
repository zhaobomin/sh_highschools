import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo, useState, useEffect, useRef } from 'react';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';
import ProfileSection from '@/features/filter/components/ProfileSection';
import RecommendationSection from '@/features/filter/components/RecommendationSection';
import type { District, HighSchool, HighSchoolType, MiddleSchool, StudentProfile } from '@/lib/types';
import { districts } from '@/mocks/data';
import { loadStudentProfile, saveStudentProfile, loadMiddleSchools, saveMiddleSchools, loadFilterSelects, saveFilterSelects } from '@/lib/appData';
import type { FilterSelectCache } from '@/lib/appData';
import { listSchools, getStudentProfile, saveStudentProfile as saveStudentProfileApi, getFilterOptions, addTargetSchool } from '@/lib/dataClient';

// 前端参数验证函数
const validateProfile = (profile: StudentProfile): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // 检查必填字段
  if (!profile.district) {
    errors.push('请选择所在区');
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
      const { districts: districtsFromApi, middle_schools: middleSchoolsFromApi } = filterOptionsResp.data;
      const normalizedSelects: FilterSelectCache = {
        districts: districtsFromApi ?? [],
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

  const [filters, setFilters] = useState<{ q: string; type: HighSchoolType | '全部' }>(() => ({
    q: '',
    type: '全部',
  }));
  const [middleSchoolSearch, setMiddleSchoolSearch] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [addingTargets, setAddingTargets] = useState<Record<string, boolean>>({});
  const [searchPhase, setSearchPhase] = useState<'idle' | 'saving' | 'searching'>('idle');

  const schoolFilters = useMemo(() => ({
    q: filters.q,
    district: (profile.district ?? '全部') as District | '全部',
    type: filters.type,
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
    isLoading: isSchoolsLoading,
    isFetching: isSchoolsFetching
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
    setSearchPhase('saving');

    // 前端参数验证
    const validation = validateProfile(profile);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const payload = {
      district: profile.district,
      middle_school_id: profile.middleSchoolId,
      stable_score: profile.stableScore,
      high_score: profile.highScore,
      low_score: profile.lowScore,
    };

    try {
      await saveProfileMutation.mutateAsync(payload);
      // 验证通过且保存成功后，执行搜索
      setSearchPhase('searching');
      refetchSchools?.();
    } catch (error: any) {
      // 统一处理后端错误
      const errorMessage = error.message || '保存学生画像失败，请稍后重试';
      setErrors([errorMessage]);
      setSearchPhase('idle');
    }
  };

  const handleAddTarget = async (schoolId: string) => {
    setAddingTargets((prev) => ({ ...prev, [schoolId]: true }));
    const previousSchools = queryClient.getQueryData<any>(['schools:list']);
    queryClient.setQueryData(['schools:list'], (oldData: any) => {
      if (!oldData?.data) return oldData;
      return {
        ...oldData,
        data: oldData.data.map((school: HighSchool) =>
          school.id === schoolId ? { ...school, isTarget: true } : school
        ),
      };
    });
    try {
      await addTargetSchool({ schoolId });
      await queryClient.invalidateQueries({ queryKey: ['schools:targets'] });
    } catch (error: any) {
      const errorMessage = error.message || '加入目标失败，请稍后重试';
      setErrors([errorMessage]);
      if (previousSchools) {
        queryClient.setQueryData(['schools:list'], previousSchools);
      }
    } finally {
      setAddingTargets((prev) => {
        const next = { ...prev };
        delete next[schoolId];
        return next;
      });
    }
  };

  // 根据当前筛选条件从缓存中获取初中学校列表
  const filteredMiddleSchools = useMemo(() => {
    // 首先从缓存的完整列表中筛选
    let filtered = cachedMiddleSchools;

    // 根据当前的区县进行筛选
    if (profile.district) {
      filtered = filtered.filter(ms => ms.district === profile.district);
    }

    // 根据搜索词进行筛选
    if (middleSchoolSearch) {
      const searchTerm = middleSchoolSearch.toLowerCase();
      filtered = filtered.filter(ms =>
        ms.name.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [cachedMiddleSchools, profile.district, middleSchoolSearch]);

  const schools = (schoolsResp?.data ?? []) as HighSchool[];
  const totalSchools = schools.length;
  const totalPages = Math.max(1, Math.ceil(totalSchools / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedSchools = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return schools.slice(start, start + pageSize);
  }, [schools, currentPage, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [schoolsResp?.data]);

  useEffect(() => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [currentPage, page]);

  useEffect(() => {
    if (searchPhase === 'searching' && !isSchoolsFetching) {
      setSearchPhase('idle');
    }
  }, [isSchoolsFetching, searchPhase]);

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {(isProfileLoading || isOptionsLoading) ? (
        <div className="space-y-3">
          <LoadingStateCard message="加载中..." />
        </div>
      ) : (
        <div>
          <div className="space-y-3">
            <ProfileSection
              profile={profile}
              updateProfile={updateProfile}
              filterSelects={filterSelects}
              filteredMiddleSchools={filteredMiddleSchools}
              middleSchoolSearch={middleSchoolSearch}
              setMiddleSchoolSearch={setMiddleSchoolSearch}
              errors={errors}
              filters={filters}
              setFilters={setFilters}
              handleSearch={handleSearch}
              searchPhase={searchPhase}
              isSaving={saveProfileMutation.isPending}
            />

            <RecommendationSection
              totalSchools={totalSchools}
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={pageSize}
              setPageSize={setPageSize}
              setPage={setPage}
              isSchoolsLoading={isSchoolsLoading}
              isSchoolsFetching={isSchoolsFetching}
              pagedSchools={pagedSchools}
              addingTargets={addingTargets}
              handleAddTarget={handleAddTarget}
            />
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
