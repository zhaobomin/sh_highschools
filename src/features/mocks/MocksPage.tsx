import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PullToRefresh from '@/components/Shared/PullToRefresh';
import type { MockExam } from '@/lib/types';
import { mockExamsApi } from '@/lib/api';
import MockStatsSection from '@/features/mocks/components/MockStatsSection';
import MockListSection from '@/features/mocks/components/MockListSection';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';
import StateContainer from '@/components/Shared/states/StateContainer';

function computeTotal(scores: MockExam['scores']): number {
  const values = Object.values(scores).filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  return values.reduce((sum, v) => sum + v, 0);
}

export default function MocksPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // 刷新数据
  const handleRefresh = async () => {
    await Promise.all([
      queryClient.refetchQueries({ queryKey: ['mockExams'] }),
      queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
    ]);
  };

  const [draft, setDraft] = useState<{
    name: string;
    examDate: string;
    scores: MockExam['scores'];
  }>({
    name: '',
    examDate: '',
    scores: {
      chinese: null,
      math: null,
      english: null,
      politics: null,
      history: null,
      pe: null,
    },
  });

  // 使用 useQuery 获取模考数据
  const { data: exams = [], isLoading: isExamsLoading } = useQuery({
    queryKey: ['mockExams'],
    queryFn: async () => {
      const response = await mockExamsApi.getExams();
      return response.data || [];
    },
    staleTime: 5 * 60 * 1000, // 5分钟
    gcTime: 10 * 60 * 1000, // 10分钟
  });

  // 使用 useQuery 获取统计数据
  const { data: stats = { count: 0, mean: null, std: null, min: null, max: null }, isLoading: isStatsLoading } = useQuery({
    queryKey: ['mockExamStats'],
    queryFn: async () => {
      const response = await mockExamsApi.getStats();
      return response.data || { count: 0, mean: null, std: null, min: null, max: null };
    },
    staleTime: 5 * 60 * 1000, // 5分钟
    gcTime: 10 * 60 * 1000, // 10分钟
  });

  const loading = isExamsLoading || isStatsLoading;

  const sortedExams = useMemo(() => {
    return [...exams].sort((a, b) => {
      const ad = a.examDate ?? '';
      const bd = b.examDate ?? '';
      if (ad !== bd) return bd.localeCompare(ad);
      return b.createdAt.localeCompare(a.createdAt);
    });
  }, [exams]);

  const openCreate = () => {
    setEditingId(null);
    setDraft({
      name: '',
      examDate: '',
      scores: {
        chinese: null,
        math: null,
        english: null,
        politics: null,
        history: null,
        pe: null,
      },
    });
    setDialogOpen(true);
  };

  const openEdit = (exam: MockExam) => {
    setEditingId(exam.id);
    setDraft({
      name: exam.name,
      examDate: exam.examDate ?? '',
      scores: { ...exam.scores },
    });
    setDialogOpen(true);
  };

  // 使用 useMutation 管理保存操作
  const { mutate: upsert, isPending: saving } = useMutation({
    mutationFn: async () => {
      const examData = {
        name: draft.name.trim() || t('ui.label.unnamed'),
        examDate: draft.examDate || null,
        scores: draft.scores,
      };

      if (editingId) {
        // 更新现有记录
        return await mockExamsApi.updateExam(editingId, examData);
      } else {
        // 创建新记录
        return await mockExamsApi.createExam(examData);
      }
    },
    onSuccess: async () => {
      // 保存成功后刷新缓存
      await Promise.all([
        queryClient.refetchQueries({ queryKey: ['mockExams'] }),
        queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
      ]);
      setDialogOpen(false);
    },
    onError: (error) => {
      console.error('保存模考记录失败:', error);
    },
  });

  // 使用 useMutation 管理删除操作
  const { mutate: remove, isPending: deleting } = useMutation({
    mutationFn: async (id: string) => {
      return await mockExamsApi.deleteExam(id);
    },
    onSuccess: async () => {
      // 删除成功后刷新缓存
      await Promise.all([
        queryClient.refetchQueries({ queryKey: ['mockExams'] }),
        queryClient.refetchQueries({ queryKey: ['mockExamStats'] }),
      ]);
    },
    onError: (error) => {
      console.error('删除模考记录失败:', error);
    },
  });

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      {loading ? (
        <StateContainer>
          <LoadingStateCard message="加载中..." />
        </StateContainer>
      ) : (
        <div>
          <div className="space-y-4">
            <MockStatsSection t={t} stats={stats} />

            <MockListSection
              t={t}
              dialogOpen={dialogOpen}
              setDialogOpen={setDialogOpen}
              editingId={editingId}
              openCreate={openCreate}
              draft={draft}
              setDraft={setDraft}
              saving={saving}
              onSave={() => upsert()}
              sortedExams={sortedExams}
              deleting={deleting}
              onEdit={openEdit}
              onRemove={(id) => remove(id)}
              computeTotal={computeTotal}
            />
          </div>
        </div>
      )}
    </PullToRefresh>
  );
}
