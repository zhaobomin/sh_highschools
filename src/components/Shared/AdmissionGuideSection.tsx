import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText, Info } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

export default function AdmissionGuideSection() {
  return (
    <ProfileSectionCard>
      <SectionHeader
        icon={<FileText className="h-4 w-4 text-foreground" />}
        title="上海中考志愿与录取方式"
        actions={(
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground">
            <Info className="h-4 w-4" />
          </Button>
        )}
      />

      <Separator className="mb-3 opacity-50" />

      <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
        <div className="space-y-1.5">
          <p>1） 录取按批次顺序进行：先“<span className="font-bold text-foreground">自主招生</span>”，再“<span className="font-bold text-foreground">名额分配综合评价（到区/到校）</span>”，最后“<span className="font-bold text-foreground">统一招生</span>”。</p>
          <p>2） 被前一批次录取后，后一批次志愿自动失效。</p>
          <p>3） 志愿填报一般在学业考试后、成绩公布前进行（线上填报+线下确认）。</p>
        </div>
        <Separator className="opacity-50" />
        <div>
          <p>名额分配综合评价分为：<span className="font-bold text-primary">到区</span>（面向完成中招报名的学生）与<span className="font-bold text-primary">到校</span>（对“本校在籍在读满3年的应届生”等有资格限制）。</p>
          <p className="mt-1">统一招生通常包含多志愿（1-15志愿）与征求志愿。</p>
        </div>
      </div>
    </ProfileSectionCard>
  );
}
