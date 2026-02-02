import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import { SectionCard } from '@/components/Shared/SectionCard';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';
import type { HighSchool } from '@/lib/types';
import { addTargetSchool, getStudentProfile, listSchools, listTargetSchools, removeTargetSchool } from '@/lib/dataClient';
import ProfileSummarySection from '@/features/targets/components/ProfileSummarySection';
import TargetsListSection from '@/features/targets/components/TargetsListSection';
import AdmissionGuideSection from '@/components/Shared/AdmissionGuideSection';

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
  const middleSchoolName = studentProfile?.middle_school_name ?? '';

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
        <div className="space-y-3">
          <LoadingStateCard message="加载中..." />
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            <AdmissionGuideSection />

            <SectionCard divider={false} gap="xs" className="bg-transparent border-none shadow-none p-0" contentClassName="p-0 pt-0">
              <ProfileSummarySection
                district={studentProfile?.district}
                middleSchoolName={middleSchoolName}
              />

              <TargetsListSection
                t={t}
                addDialogOpen={addDialogOpen}
                setAddDialogOpen={setAddDialogOpen}
                selectedSchoolId={selectedSchoolId}
                setSelectedSchoolId={setSelectedSchoolId}
                schoolSearch={schoolSearch}
                setSchoolSearch={setSchoolSearch}
                filteredSchools={filteredSchools}
                canAddSelected={canAddSelected}
                addingTarget={addingTarget}
                onAddTarget={onAddTarget}
                targetSchools={targetSchools}
                onRemoveTarget={onRemoveTarget}
                removingTargets={removingTargets}
              />
            </SectionCard>
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
