import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSchoolDetail } from '@/lib/dataClient';
import { levelFromProbability } from '@/lib/evaluation';
import SchoolHeaderSection from '@/features/schools/components/SchoolHeaderSection';
import SchoolScoresSection from '@/features/schools/components/SchoolScoresSection';
import SchoolProbabilitySection from '@/features/schools/components/SchoolProbabilitySection';
import AdmissionGuideSection from '@/components/Shared/AdmissionGuideSection';
import SchoolDetailLoadingSection from '@/features/schools/components/SchoolDetailLoadingSection';
import SchoolDetailErrorSection from '@/features/schools/components/SchoolDetailErrorSection';

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
      <div>
        <div className="space-y-3">
          <SchoolDetailLoadingSection onBack={handleBack} />
        </div>
      </div>
    );
  }

  const school = schoolResp?.data ?? null;

  if (error || !school) {
    return (
      <div>
        <div className="space-y-3">
          <SchoolDetailErrorSection onBack={handleBack} />
        </div>
      </div>
    );
  }

  const stats = school.stats || {};
  const probability = stats.probability ?? 0;
  const p = probability / 100;
  const level = levelFromProbability(p);
  const barColor = level === 'high' ? 'bg-emerald-500' : level === 'mid' ? 'bg-amber-500' : 'bg-rose-500';

  return (
    <div>
      <div className="space-y-3">
        <SchoolHeaderSection school={school} onBack={handleBack} />

        <SchoolScoresSection stats={stats} />

        {probability > 0 && (
          <SchoolProbabilitySection
            probability={probability}
            level={level}
            barColor={barColor}
          />
        )}

        <AdmissionGuideSection />
      </div>
    </div>
  );
}
