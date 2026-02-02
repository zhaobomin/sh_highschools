import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StateContainerProps {
  children: ReactNode;
  className?: string;
}

export default function StateContainer({ children, className }: StateContainerProps) {
  // 为了避免react-native依赖问题，我们使用一个简单的方法来处理安全区域
  // 在实际的iOS设备上，Capacitor会自动处理安全区域
  return (
    <div className={cn('space-y-3', className)}>
      {children}
    </div>
  );
}
