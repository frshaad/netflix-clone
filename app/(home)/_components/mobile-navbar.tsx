import Link from 'next/link';

import { Menu } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { links } from './navbar-links.constant';

export default function MobileNavbar() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer rounded-sm p-1 text-gray-300 transition hover:bg-slate-700">
            <Menu />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56" forceMount>
          {links.map((link) => (
            <DropdownMenuItem className="cursor-pointer" key={link.id}>
              <Link className="w-full" href={link.href}>
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
