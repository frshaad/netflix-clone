import { cn } from '@/src/lib/utils';

function Skeleton({
  className,
  ...properties
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...properties}
    />
  );
}

export { Skeleton };
