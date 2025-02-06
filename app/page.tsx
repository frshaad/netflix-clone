import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth-options';

export default async function RedirectPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }
  return redirect('/home');
}
