import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Info, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AppShellProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function AppShell({ children, hideFooter = true }: AppShellProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname.startsWith('/')) return '上海中考择校';
    if (location.pathname.startsWith('/mocks')) return t('ui.page.title.mocks');
    if (location.pathname.startsWith('/eval')) return t('ui.page.title.eval');
    return t('ui.page.title.targets');
  }, [location.pathname, t]);

  const pageSubtitle = useMemo(() => {
    if (location.pathname.startsWith('/filter')) return '筛选：推荐学校池（加入目标）';
    if (location.pathname.startsWith('/targets')) return '目标：跟踪清单与标记';
    if (location.pathname.startsWith('/mocks')) return '模考：科目结构与多次录入';
    if (location.pathname.startsWith('/eval')) return '评估：目标达成可能性';
    return '';
  }, [location.pathname]);

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background font-sans antialiased flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm pt-safe">
        <div className="container flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 rounded-xl border border-border/50 bg-muted/20">
              <AvatarImage src="/logo.png" alt="Logo" className="object-cover p-1.5 opacity-80" />
              <AvatarFallback className="rounded-xl bg-muted/20 text-muted-foreground text-xs">SH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-bold leading-none tracking-tight">
                {pageTitle}
              </span>
              {pageSubtitle && (
                <span className="text-[11px] text-muted-foreground leading-none">
                  {pageSubtitle}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-muted/30 hover:bg-muted/50">
              <Info className="h-4.5 w-4.5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-muted/30 hover:bg-muted/50">
              <Upload className="h-4.5 w-4.5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-muted/20">
        <div className="py-4 mx-auto px-2 sm:px-3 md:px-4 md:py-6">
          {children}
        </div>
      </main>
      {!hideFooter && (
        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ by Trae AI.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
