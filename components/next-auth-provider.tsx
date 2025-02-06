'use client';

import { SessionProvider } from 'next-auth/react';

type Properties = {
  children: React.ReactNode;
};

export default function NextAuthProvider({ children }: Properties) {
  return <SessionProvider>{children}</SessionProvider>;
}
