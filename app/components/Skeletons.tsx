'use client';

/**
 * Skeleton components for Suspense fallbacks
 * Provides loading UI while content is being fetched or processed
 */

export function FormSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Name field skeleton */}
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-full" />
      
      {/* Email field skeleton */}
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-full" />
      
      {/* Message field skeleton (taller) */}
      <div className="h-32 bg-slate-200 dark:bg-slate-700 rounded w-full" />
      
      {/* Submit button skeleton */}
      <div className="h-10 bg-slate-300 dark:bg-slate-600 rounded w-32" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 animate-pulse space-y-4">
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 animate-pulse">
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        {/* Title skeleton */}
        <div className="h-14 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
        
        {/* Subtitle skeletons */}
        <div className="space-y-3">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
        </div>
        
        {/* CTA buttons skeleton */}
        <div className="flex gap-4 pt-8">
          <div className="h-12 bg-slate-300 dark:bg-slate-600 rounded w-40" />
          <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded w-40" />
        </div>
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-full animate-pulse" />
      ))}
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-slate-200 dark:bg-slate-700 rounded ${
            i === lines - 1 ? 'w-4/5' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header skeleton */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-32 animate-pulse" />
          <div className="flex gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-24 animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <HeroSkeleton />
        <CardGridSkeleton count={3} />
      </div>
    </div>
  );
}
