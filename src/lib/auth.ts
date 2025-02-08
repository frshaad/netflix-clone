import { cache } from 'react';

import { auth } from '@clerk/nextjs/server';

class AuthorizationError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'AuthorizationError';
  }
}
export const authenticateUser = cache(async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new AuthorizationError();
  }
  return userId;
});
