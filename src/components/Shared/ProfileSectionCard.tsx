import type { ReactNode } from 'react';
import { SectionCard } from '@/components/Shared/SectionCard';
import { cn } from '@/lib/utils';

interface ProfileSectionCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  divider?: boolean;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  title?: React.ReactNode;
  description?: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function ProfileSectionCard({
  children,
  className,
  contentClassName,
  divider,
  gap = 'xs',
  title,
  description,
  headerClassName,
  titleClassName,
  descriptionClassName,
}: ProfileSectionCardProps) {
  return (
    <SectionCard
      divider={divider}
      gap={gap}
      className={cn('profile-card', className)}
      contentClassName={cn('px-4 pb-4', contentClassName)}
      title={title}
      description={description}
      headerClassName={headerClassName}
      titleClassName={titleClassName}
      descriptionClassName={descriptionClassName}
    >
      {children}
    </SectionCard>
  );
}
