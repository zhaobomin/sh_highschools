import type { ReactNode } from 'react';
import { SectionCard } from '@/components/Shared/SectionCard';
import { cn } from '@/lib/utils';

interface ProfileSectionCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  divider?: boolean;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function ProfileSectionCard({
  children,
  className,
  contentClassName,
  divider,
  gap = 'xs',
}: ProfileSectionCardProps) {
  return (
    <SectionCard
      divider={divider}
      gap={gap}
      className={cn('profile-card', className)}
      contentClassName={cn('px-4 pb-4', contentClassName)}
    >
      {children}
    </SectionCard>
  );
}
