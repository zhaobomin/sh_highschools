import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSchoolDetail, getSchoolEvaluation, getStudentProfile, listSchools } from '@/lib/dataClient';
import SchoolScoresSection from '@/features/schools/components/SchoolScoresSection';
import SchoolEnrollmentSection from '@/features/schools/components/SchoolEnrollmentSection';
import SchoolIntroductionSection from '@/features/schools/components/SchoolIntroductionSection';
import SchoolDetailLoadingSection from '@/features/schools/components/SchoolDetailLoadingSection';
import SchoolDetailErrorSection from '@/features/schools/components/SchoolDetailErrorSection';
import StateContainer from '@/components/Shared/states/StateContainer';
import SchoolProfileSection from '@/features/schools/components/SchoolProfileSection';
import { Navbar } from '@/components/Shared/Navbar';
import { useTranslation } from 'react-i18next';

export default function SchoolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: schoolResp, isLoading, error } = useQuery({
    queryKey: ['schools:detail', id],
    queryFn: () => getSchoolDetail(id || ''),
    enabled: !!id,
  });
  const { data: profileResp } = useQuery({
    queryKey: ['studentProfile'],
    queryFn: getStudentProfile,
    retry: false,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });
  const profileData = profileResp?.data ?? null;
  const { data: schoolsResp } = useQuery({
    queryKey: [
      'schools:all',
      profileData?.district ?? '全部',
      profileData?.stable_score ?? null,
      profileData?.high_score ?? null,
      profileData?.low_score ?? null,
      profileData?.middle_school_id ?? null,
    ],
    queryFn: () =>
      listSchools({
        district: profileData?.district ?? '全部',
        type: '全部',
        stableScore: profileData?.stable_score ?? null,
        highScore: profileData?.high_score ?? null,
        lowScore: profileData?.low_score ?? null,
        middleSchoolId: profileData?.middle_school_id ?? null,
      }),
    enabled: Boolean(profileData),
  });
  const { data: evalResp, isLoading: isEvalLoading, error: evalError } = useQuery({
    queryKey: ['schools:evaluation', id],
    queryFn: () => getSchoolEvaluation(id || ''),
    enabled: !!id,
  });

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <SchoolDetailLoadingSection onBack={handleBack} />
    );
  }

  const school = schoolResp?.data ?? null;

  if (error || !school) {
    return (
      <SchoolDetailErrorSection onBack={handleBack} />
    );
  }
  const studentProfile = profileData;
  const middleSchoolName = studentProfile?.middle_school_name ?? '';
  const recommendedSchool = schoolsResp?.data?.find((s) => s.id === school.id) ?? null;
  const evaluation = evalResp?.data ?? null;
  const model = evaluation?.model ?? { mean: null, std: null, count: 0, source: 'none' };
  const evalSchool = evaluation?.targets?.[0] ?? null;

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background font-sans antialiased flex flex-col">
      <Navbar
        showAuthButtons={false}
        showBackButton
        onBack={handleBack}
        title={school.name}
        subtitle={`${school.district} · ${school.type}`}
      />
      <main className="flex-1 bg-muted/20">
        <div className="py-4 mx-auto px-2 sm:px-3 md:px-4 md:py-6">
          <StateContainer className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] space-y-4">
            <SchoolIntroductionSection school={school} />
            <SchoolEnrollmentSection enrollment={school.enrollment} />
            <SchoolScoresSection scores={school.scores} year={school.enrollment?.year ?? null} />
            <SchoolProfileSection
              district={studentProfile?.district}
              middleSchoolName={middleSchoolName}
              stableScore={studentProfile?.stable_score}
              highScore={studentProfile?.high_score}
              lowScore={studentProfile?.low_score}
              recommendedSchool={recommendedSchool}
              evalSchool={evalSchool}
              evalModel={model}
              isEvalLoading={isEvalLoading}
              evalError={Boolean(evalError)}
              evalNote="基于模拟考试评估"
              t={t}
            />
          </StateContainer>
        </div>
      </main>
    </div>
  );
}
