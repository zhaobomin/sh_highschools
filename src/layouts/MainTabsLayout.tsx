import { AppShell } from '@/components/Shared/AppShell';
import { BottomTabs, BottomTabsList } from '@/components/Shared/BottomTabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, ClipboardList, School, Target } from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type TabKey = 'targets' | 'filter' | 'mocks' | 'eval';

function getTabFromPathname(pathname: string): TabKey {
  if (pathname.startsWith('/filter')) return 'filter';
  if (pathname.startsWith('/mocks')) return 'mocks';
  if (pathname.startsWith('/eval')) return 'eval';
  return 'targets';
}

function getPathFromTab(tab: TabKey): string {
  switch (tab) {
    case 'filter':
      return '/filter';
    case 'mocks':
      return '/mocks';
    case 'eval':
      return '/eval';
    case 'targets':
    default:
      return '/targets';
  }
}

export default function MainTabsLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = useMemo(() => getTabFromPathname(location.pathname), [location.pathname]);

  return (
    <AppShell hideFooter>
      <BottomTabs
        value={activeTab}
        onValueChange={(value) => {
          navigate(getPathFromTab(value as TabKey));
        }}
        className="mt-0"
        list={
          <BottomTabsList className="shadow-none">
            <TabsTrigger
              value="targets"
              className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all"
            >
              <Target className="h-5 w-5 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-sm font-medium">{t('ui.tab.targets')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="filter"
              className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all"
            >
              <School className="h-5 w-5 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-sm font-medium">{t('ui.tab.filter')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="mocks"
              className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all"
            >
              <ClipboardList className="h-5 w-5 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-sm font-medium">{t('ui.tab.mocks')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="eval"
              className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all"
            >
              <BarChart3 className="h-5 w-5 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-sm font-medium">{t('ui.tab.eval')}</span>
            </TabsTrigger>
          </BottomTabsList>
        }
      >
        <div className="space-y-4">
          <Outlet />
        </div>
      </BottomTabs>
    </AppShell>
  );
}

