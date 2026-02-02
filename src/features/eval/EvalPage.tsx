import { SectionCard } from '@/components/Shared/SectionCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import { getTargetEvaluation } from '@/lib/dataClient';
import EvalTargetCard from '@/features/eval/components/EvalTargetCard';
import SectionHeader from '@/components/Shared/SectionHeader';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';
import EmptyState from '@/components/Shared/states/EmptyState';
import StateContainer from '@/components/Shared/states/StateContainer';

export default function EvalPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { data: evalResp, isLoading } = useQuery({
    queryKey: ['schools:evaluation'],
    queryFn: getTargetEvaluation,
  });

  const handleRefresh = async () => {
    await queryClient.refetchQueries({ queryKey: ['schools:evaluation'] });
  };

  const evaluation = evalResp?.data ?? null;
  const model = evaluation?.model ?? { mean: null, std: null, count: 0, source: 'none' };
  const targets = evaluation?.targets ?? [];

  const hasModel = model.mean != null && model.std != null;

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {isLoading ? (
        <StateContainer>
          <LoadingStateCard message="加载中..." />
        </StateContainer>
      ) : (
        <div>
          <div className="space-y-4">
            <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
              <SectionHeader
                icon={<School className="h-4 w-4 text-foreground" />}
                title={t('ui.section.eval.list.title')}
                description={t('ui.section.eval.list.desc')}
              />

              <Separator className="mb-3 opacity-50" />

              {targets.length === 0 ? (
                <StateContainer>
                  <EmptyState
                    message={t('ui.eval.hint.noTargets')}
                    action={(
                      <Button asChild size="sm" className="h-8 text-sm px-3 rounded-full">
                        <Link to="/filter">{t('ui.action.goFilter')}</Link>
                      </Button>
                    )}
                  />
                </StateContainer>
              ) : (
                <div className="space-y-3">
                  {targets.map((school) => (
                    <EvalTargetCard
                      key={school.id}
                      school={school}
                      model={model}
                      hasModel={hasModel}
                      t={t}
                    />
                  ))}
                </div>
              )}
            </SectionCard>
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
