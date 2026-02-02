import { SectionCard } from '@/components/Shared/SectionCard';
import { BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface SchoolIntroductionSectionProps {
  school: {
    name: string;
    introduction?: string;
  };
}

export default function SchoolIntroductionSection({ school }: SchoolIntroductionSectionProps) {
  const defaultIntroduction = `
    ${school.name}是一所位于上海市的高中学校，致力于为学生提供优质的教育资源和学习环境。
    学校拥有一支高素质的教师队伍，注重学生的全面发展，培养学生的创新能力和实践能力。
    学校设施齐全，为学生提供良好的学习和生活条件。
  `;

  return (
    <SectionCard divider={false} contentClassName="px-6 py-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/50">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </div>
        <h3 className="font-bold text-base">学校介绍</h3>
      </div>
      <Separator className="mb-3 opacity-50" />
      <div className="text-sm text-foreground/80 leading-relaxed">
        {school.introduction || defaultIntroduction}
      </div>
    </SectionCard>
  );
}
