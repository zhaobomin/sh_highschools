import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, School } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolHeaderSectionProps {
  school: {
    name: string;
    district: string;
    type: string;
    accommodation?: string | null;
    code?: string | null;
    fullType?: string | null;
  };
  onBack: () => void;
}

export default function SchoolHeaderSection({ school, onBack }: SchoolHeaderSectionProps) {
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<School className="h-4 w-4 text-foreground" />}
        title={school.name}
        description={(
          <>
            {school.district} · {school.type}
            {school.accommodation && ` · ${school.accommodation}`}
          </>
        )}
        actions={(
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">学校全称：</span>
            <span className="text-sm">{school.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">招生代码：</span>
            <span className="text-sm font-mono">{school.code || '无数据'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">所属区：</span>
            <span className="text-sm">{school.district}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">学校类型：</span>
            <span className="text-sm">{school.type}</span>
          </div>
          {school.accommodation && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">住宿情况：</span>
              <span className="text-sm">{school.accommodation}</span>
            </div>
          )}
        </div>
        <div className="space-y-2">
          {school.fullType && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">完整类型：</span>
              <span className="text-sm">{school.fullType}</span>
            </div>
          )}
        </div>
      </div>
    </ProfileSectionCard>
  );
}
