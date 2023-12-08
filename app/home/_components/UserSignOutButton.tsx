"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function UserSignOutButton() {
  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className="flex cursor-pointer items-center gap-2"
    >
      <LogOut size={16} /> <span>Sign out</span>
    </DropdownMenuItem>
  );
}
