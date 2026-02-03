import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, School } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolHeaderSectionProps {
  school: {
    name: string;
    district?: string | null;
    type?: string | null;
    accommodation?: string | null;
    code?: string | null;
    fullType?: string | null;
    note?: string | null;
  };
  onBack?: () => void;
  showDetails?: boolean;
}

const renderValue = (value?: string | null) => value && value.trim().length > 0 ? value : '暂无';

export default function SchoolHeaderSection({ school, onBack, showDetails = true }: SchoolHeaderSectionProps) {
  const descriptionParts = [school.district, school.type, school.accommodation].filter(
    (value) => value && value.trim().length > 0
  ) as string[];
  const description = descriptionParts.length > 0 ? descriptionParts.join(' · ') : '信息完善中';
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<School className="h-4 w-4 text-foreground" />}
        title={school.name}
        description={description}
        actions={onBack ? (
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
        ) : undefined}
      />

      {showDetails && (
        <>
          <Separator className="mb-3 opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">学校全称：</span>
                <span className="text-sm">{renderValue(school.name)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">招生代码：</span>
                <span className="text-sm font-mono">{renderValue(school.code)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">所属区：</span>
                <span className="text-sm">{renderValue(school.district)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">学校类型：</span>
                <span className="text-sm">{renderValue(school.type)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">住宿情况：</span>
                <span className="text-sm">{renderValue(school.accommodation)}</span>
              </div>
              {school.note && (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">备注信息：</span>
                  <span className="text-sm">{school.note}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">完整类型：</span>
                <span className="text-sm">{renderValue(school.fullType)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </ProfileSectionCard>
  );
}
