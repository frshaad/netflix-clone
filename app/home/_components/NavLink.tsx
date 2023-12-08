"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type Props = {
  path: string;
  label: string;
};

export default function NavLink({ path, label }: Props) {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={cn("text-sm font-normal text-gray-300", {
          "text-white underline": pathname === path,
        })}
        href={path}
      >
        {label}
      </Link>
    </li>
  );
}
