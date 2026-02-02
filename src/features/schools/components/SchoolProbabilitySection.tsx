import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { School } from 'lucide-react';
import ProfileSectionCard from '@/components/Shared/ProfileSectionCard';
import SectionHeader from '@/components/Shared/SectionHeader';

interface SchoolProbabilitySectionProps {
  probability: number;
  level: 'high' | 'mid' | 'low' | 'na';
  barColor: string;
}

export default function SchoolProbabilitySection({
  probability,
  level,
  barColor,
}: SchoolProbabilitySectionProps) {
  return (
    <ProfileSectionCard contentClassName="px-6 py-4">
      <SectionHeader
        icon={<School className="h-4 w-4 text-foreground" />}
        title="录取概率分析"
      />

      <Separator className="mb-3 opacity-50" />

      <div className="space-y-2">
        <Card className="shadow-sm">
          <CardContent className="p-2 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-base">模考录取概率</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  基于学生模考成绩和学校历史分数线估算
                </div>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${level === 'high' ? 'bg-green-100 text-green-700' : level === 'mid' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                {level === 'high' ? '保' : level === 'mid' ? '稳' : '冲'}
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${barColor} rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${probability}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span className="font-medium">{probability}%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-2 text-xs text-muted-foreground">
              <p>• 高概率（保）：75%以上</p>
              <p>• 中概率（稳）：40%-75%</p>
              <p>• 低概率（冲）：40%以下</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProfileSectionCard>
  );
}
