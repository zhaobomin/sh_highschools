import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowDown, RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
  threshold?: number;
  maxPullDistance?: number;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  onRefresh,
  children,
  threshold = 80,
  maxPullDistance = 120,
}) => {
  const [state, setState] = useState<'idle' | 'pulling' | 'refreshing'>('idle');
  const [pullDistance, setPullDistance] = useState(0);
  const startYRef = useRef<number>(0);
  const isRefreshingRef = useRef<boolean>(false);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (state === 'refreshing' || isRefreshingRef.current) return;
    
    // 只在页面顶部时才触发下拉刷新
    if (window.scrollY === 0) {
      startYRef.current = e.touches[0].clientY;
    }
  }, [state]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (state === 'refreshing' || isRefreshingRef.current) return;
    
    if (startYRef.current > 0 && window.scrollY === 0) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - startYRef.current;
      
      if (distance > 0) {
        e.preventDefault();
        setState('pulling');
        setPullDistance(Math.min(distance * 0.5, maxPullDistance));
      }
    }
  }, [state]);

  const handleTouchEnd = useCallback(async () => {
    if (state === 'pulling' && pullDistance >= threshold) {
      setState('refreshing');
      isRefreshingRef.current = true;
      
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        isRefreshingRef.current = false;
        setState('idle');
        setPullDistance(0);
      }
    } else {
      setState('idle');
      setPullDistance(0);
    }
    
    startYRef.current = 0;
  }, [state, pullDistance, threshold, onRefresh]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (state === 'refreshing' || isRefreshingRef.current) return;
    
    if (window.scrollY === 0) {
      startYRef.current = e.clientY;
    }
  }, [state]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (state === 'refreshing' || isRefreshingRef.current) return;
    
    if (startYRef.current > 0 && window.scrollY === 0) {
      const currentY = e.clientY;
      const distance = currentY - startYRef.current;
      
      if (distance > 0) {
        e.preventDefault();
        setState('pulling');
        setPullDistance(Math.min(distance * 0.5, maxPullDistance));
      }
    }
  }, [state]);

  const handleMouseUp = handleTouchEnd;

  useEffect(() => {
    if (state === 'refreshing') {
      startYRef.current = 0;
    }
  }, [state]);

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 下拉刷新指示器 */}
      <div
        className={`absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-300 ease-out z-10 overflow-hidden`}
        style={{
          transform: `translateY(${-70 + pullDistance}px)`,
          height: '70px',
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <div
            className={`transition-transform duration-300 ${state === 'pulling' ? 'rotate-180' : ''} ${state === 'refreshing' ? 'animate-spin' : ''}`}
          >
            {state === 'refreshing' ? (
              <RefreshCw className="h-5 w-5 text-primary" />
            ) : (
              <ArrowDown className="h-5 w-5 text-primary" />
            )}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {state === 'refreshing'
              ? '刷新中...'
              : state === 'pulling'
              ? '松开刷新'
              : '下拉刷新'}
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${pullDistance}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;