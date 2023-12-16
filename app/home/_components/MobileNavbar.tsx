import { Menu } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { links } from "./Navlinks.constant";

export default function MobileNavbar() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer rounded-sm p-1 text-gray-300 transition hover:bg-slate-700">
            <Menu />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          {links.map((link) => (
            <DropdownMenuItem key={link.id} className="cursor-pointer">
              <Link href={link.href} className="w-full">
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
