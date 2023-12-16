import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-14 w-14 animate-spin opacity-60" />
    </div>
  );
}
