import { ClerkProvider } from '@clerk/nextjs';

import env from '@/src/lib/env';

export default function ClerkAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      afterSignOutUrl={env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL}
      signInFallbackRedirectUrl={
        env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
      }
      signUpFallbackRedirectUrl={
        env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
      }
    >
      {children}
    </ClerkProvider>
  );
}
