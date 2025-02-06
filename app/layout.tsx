import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextAuthProvider from '@/components/next-auth-provider';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Netflix Clone created by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={cn('dark', inter.className)}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
