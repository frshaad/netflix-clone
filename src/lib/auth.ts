import { auth } from '@clerk/nextjs/server';

class AuthorizationError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export async function authenticateUser() {
  const { userId } = await auth();
  if (!userId) {
    throw new AuthorizationError();
  }
  return userId;
}
