import { Navbar } from '@/components/Shared/Navbar';
import LoadingStateCard from '@/components/Shared/LoadingStateCard';
import StateContainer from '@/components/Shared/states/StateContainer';

interface SchoolDetailLoadingSectionProps {
  onBack: () => void;
}

export default function SchoolDetailLoadingSection({ onBack }: SchoolDetailLoadingSectionProps) {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background font-sans antialiased flex flex-col">
      <Navbar 
        title="学校详情"
        subtitle="加载中..."
        onBack={onBack}
        showBackButton={true}
        showAuthButtons={false}
      />
      <main className="flex-1 bg-muted/20">
        <div className="py-4 mx-auto px-2 sm:px-3 md:px-4 md:py-6">
          <StateContainer>
            <LoadingStateCard
              title="学校详情"
              message="加载中..."
              actions={null}
            />
          </StateContainer>
        </div>
      </main>
    </div>
  );
}
