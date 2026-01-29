import React, { useEffect, useState } from 'react';
import { Tabs, TabsList } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

interface BottomTabsProps extends React.ComponentProps<typeof Tabs> {
  list: React.ReactNode;
  safeArea?: boolean;
  contentPaddingClassName?: string;
  mobileBarClassName?: string;
}

export function BottomTabs({
  list,
  safeArea = true,
  contentPaddingClassName,
  mobileBarClassName,
  className,
  children,
  ...props
}: BottomTabsProps) {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 768px)');
    const onChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);

    setIsDesktop(mediaQueryList.matches);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', onChange);
      return () => mediaQueryList.removeEventListener('change', onChange);
    }

    mediaQueryList.addListener(onChange);
    return () => mediaQueryList.removeListener(onChange);
  }, []);

  const bar = (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[999] border-t bg-background shadow-[0_-1px_3px_rgba(0,0,0,0.05)]",
        safeArea && "bottom-tabs-safe-area",
        "md:static md:border-none md:bg-transparent md:shadow-none md:pb-0",
        mobileBarClassName
      )}
    >
      {list}
    </div>
  );

  return (
    <div className={cn("bottom-tabs-content-padding md:pb-0", contentPaddingClassName)}>
      <Tabs className={cn("space-y-4", className)} {...props}>
        {isDesktop ? bar : createPortal(bar, document.body)}
        {children}
      </Tabs>
    </div>
  );
}

export function BottomTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      className={cn(
        "grid h-14 w-full grid-cols-4 rounded-none bg-background p-0 text-muted-foreground",
        "md:h-10 md:w-[400px] md:rounded-lg md:bg-muted md:p-1",
        className
      )}
      {...props}
    />
  );
}
