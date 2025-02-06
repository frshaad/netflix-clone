import { PrismaClient } from '@prisma/client';

import environment from './env';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  /*eslint no-var: "off"*/
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (environment.NODE_ENV !== 'production') globalThis.prisma = prisma;
