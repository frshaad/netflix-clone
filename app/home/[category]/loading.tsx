import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="mt-10 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-60 w-full" />
    </section>
  );
}
