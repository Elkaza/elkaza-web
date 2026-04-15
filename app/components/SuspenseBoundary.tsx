import { Suspense, ReactNode } from 'react';
import {
  FormSkeleton,
  CardSkeleton,
  CardGridSkeleton,
  HeroSkeleton,
  ListSkeleton,
  TextSkeleton,
  PageLoadingSkeleton,
} from './Skeletons';

export type SuspenseType = 'form' | 'card' | 'card-grid' | 'hero' | 'list' | 'text' | 'page' | 'custom';

interface SuspenseBoundaryProps {
  children: ReactNode;
  fallback?: SuspenseType | ReactNode;
  fallbackCount?: number;
}

/**
 * Utility to get the appropriate fallback skeleton
 */
function getFallback(type: SuspenseType | ReactNode, count?: number) {
  if (typeof type === 'object' || typeof type === 'function') {
    return type; // Custom fallback JSX
  }

  switch (type) {
    case 'form':
      return <FormSkeleton />;
    case 'card':
      return <CardSkeleton />;
    case 'card-grid':
      return <CardGridSkeleton count={count} />;
    case 'hero':
      return <HeroSkeleton />;
    case 'list':
      return <ListSkeleton count={count} />;
    case 'text':
      return <TextSkeleton lines={count} />;
    case 'page':
      return <PageLoadingSkeleton />;
    default:
      return null;
  }
}

/**
 * SuspenseBoundary component with pre-built skeleton fallbacks
 * 
 * Usage:
 * ```
 * <SuspenseBoundary fallback="form">
 *   <MyAsyncForm />
 * </SuspenseBoundary>
 * 
 * // Or custom fallback:
 * <SuspenseBoundary fallback={<MyCustomLoader />}>
 *   <MyComponent />
 * </SuspenseBoundary>
 * ```
 */
export function SuspenseBoundary({
  children,
  fallback = 'page',
  fallbackCount,
}: SuspenseBoundaryProps) {
  const fallbackUI = getFallback(fallback, fallbackCount);

  return <Suspense fallback={fallbackUI}>{children}</Suspense>;
}

/**
 * Higher-order component to wrap async components with Suspense
 */
export function withSuspense<P extends object>(
  Component: React.ComponentType<P>,
  fallback: SuspenseType | ReactNode = 'page'
) {
  const Wrapped = (props: P) => (
    <SuspenseBoundary fallback={fallback}>
      <Component {...props} />
    </SuspenseBoundary>
  );

  Wrapped.displayName = `withSuspense(${Component.displayName || Component.name})`;

  return Wrapped;
}
