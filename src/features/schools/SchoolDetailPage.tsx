import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSchoolDetail } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';
import SchoolHeaderSection from '@/features/schools/components/SchoolHeaderSection';
import SchoolScoresSection from '@/features/schools/components/SchoolScoresSection';
import SchoolProbabilitySection from '@/features/schools/components/SchoolProbabilitySection';
import SchoolEnrollmentSection from '@/features/schools/components/SchoolEnrollmentSection';
import SchoolIntroductionSection from '@/features/schools/components/SchoolIntroductionSection';
import AdmissionGuideSection from '@/components/Shared/AdmissionGuideSection';
import SchoolDetailLoadingSection from '@/features/schools/components/SchoolDetailLoadingSection';
import SchoolDetailErrorSection from '@/features/schools/components/SchoolDetailErrorSection';
import StateContainer from '@/components/Shared/states/StateContainer';

export default function SchoolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: schoolResp, isLoading, error } = useQuery({
    queryKey: ['schools:detail', id],
    queryFn: () => getSchoolDetail(id || ''),
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

  const stats = school.stats || {};
  const probability = stats.probability ?? 0;
  const p = probability / 100;
  const level = levelFromProbability(p);
  const barColor = level === 'high' ? 'bg-emerald-500' : level === 'mid' ? 'bg-amber-500' : 'bg-rose-500';

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background font-sans antialiased flex flex-col">
      <main className="flex-1 bg-muted/20">
        <div className="py-4 mx-auto px-2 sm:px-3 md:px-4 md:py-6">
          <StateContainer className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] space-y-4">
            <SchoolHeaderSection school={school} onBack={handleBack} />
            <SchoolEnrollmentSection enrollment={school.enrollment} />
            <SchoolIntroductionSection school={school} />
            <SchoolScoresSection scores={school.scores} year={school.enrollment?.year ?? null} />

            {probability > 0 && (
              <SchoolProbabilitySection
                probability={probability}
                level={level}
                barColor={barColor}
              />
            )}

            <AdmissionGuideSection />
          </StateContainer>
        </div>
      </main>
    </div>
  );
}
