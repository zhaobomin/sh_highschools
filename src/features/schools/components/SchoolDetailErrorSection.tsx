import { Navbar } from '@/components/Shared/Navbar';
import ErrorStateCard from '@/components/Shared/ErrorStateCard';
import StateContainer from '@/components/Shared/states/StateContainer';

interface SchoolDetailErrorSectionProps {
  onBack: () => void;
}

export default function SchoolDetailErrorSection({ onBack }: SchoolDetailErrorSectionProps) {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/20">
        <div className="py-4 mx-auto px-2 sm:px-3 md:px-4 md:py-6">
          <StateContainer>
            <ErrorStateCard
              title="学校详情"
              message="无法加载学校信息，请稍后重试"
              actionLabel="返回"
              onAction={onBack}
            />
          </StateContainer>
        </div>
      </main>
    </div>
  );
}
