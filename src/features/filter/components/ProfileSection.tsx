import { SectionCard } from '@/components/Shared/SectionCard';
import { FormField } from '@/components/Shared/FormField';
import { FormSection } from '@/components/Shared/FormSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Info, User } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import type { District, HighSchoolType, MiddleSchool, StudentProfile } from '@/lib/types';
import type { FilterSelectCache } from '@/lib/appData';
import { highSchoolTypes } from '@/mocks/data';
import SectionHeader from '@/components/Shared/SectionHeader';
import ErrorList from '@/components/Shared/states/ErrorList';

interface ProfileFilters {
  q: string;
  type: HighSchoolType | '全部';
}

interface ProfileSectionProps {
  profile: StudentProfile;
  updateProfile: (patch: Partial<StudentProfile>) => void;
  filterSelects: FilterSelectCache;
  filteredMiddleSchools: MiddleSchool[];
  middleSchoolSearch: string;
  setMiddleSchoolSearch: (value: string) => void;
  errors: string[];
  filters: ProfileFilters;
  setFilters: Dispatch<SetStateAction<ProfileFilters>>;
  handleSearch: () => void;
  searchPhase: 'idle' | 'saving' | 'searching';
  isSaving: boolean;
}

export default function ProfileSection({
  profile,
  updateProfile,
  filterSelects,
  filteredMiddleSchools,
  middleSchoolSearch,
  setMiddleSchoolSearch,
  errors,
  filters,
  setFilters,
  handleSearch,
  searchPhase,
  isSaving,
}: ProfileSectionProps) {
  const submitLabel = searchPhase === 'saving'
    ? '保存画像中'
    : searchPhase === 'searching'
      ? '推荐搜索中'
      : '搜索推荐';

  return (
    <SectionCard gap="xs" className="profile-card" contentClassName="px-4 pb-4">
      <SectionHeader
        icon={<User className="h-4 w-4 text-foreground" />}
        title="孩子画像（含当前初中）"
        actions={(
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
            <Info className="h-4 w-4" />
          </Button>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      <FormSection
        onSubmit={handleSearch}
        submitText={submitLabel}
        isSubmitting={isSaving}
        actionsClassName="pt-1.5 w-full"
        submitClassName="w-full"
        className="space-y-4"
        bodyClassName="space-y-1.5"
      >
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
        <FormField label='当前初中学校（用于"到校"名额）' required>
          <Select
            value={profile.middleSchoolId ?? ''}
            onValueChange={(v) => {
              updateProfile({ middleSchoolId: v });
              setMiddleSchoolSearch('');
            }}
            disabled={!profile.district}
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
          <ErrorList errors={errors} />

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
      </FormSection>
    </SectionCard>
  );
}
