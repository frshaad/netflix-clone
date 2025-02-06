import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/auth-options';

import Navbar from './_components/navbar';

type Properties = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: Properties) {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');

  return (
    <>
      <Navbar />
      <main className="mx-auto w-11/12 max-w-7xl sm:w-full sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
