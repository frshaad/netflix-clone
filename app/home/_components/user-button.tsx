import { getServerSession } from 'next-auth';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authOptions } from '@/lib/auth-options';

import UserSignOutButton from './user-sign-out-button';

export default async function UserButton() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  const avatarSource = session.user?.image || '/avatar.png';
  const userShortName = session.user?.name?.slice(0, 2) || 'un';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative size-10 rounded-sm" variant="ghost">
          <Avatar className="size-10 rounded-sm">
            <AvatarImage src={avatarSource} />
            <AvatarFallback className="rounded-sm uppercase">
              {userShortName}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">
              {session.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <UserSignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
