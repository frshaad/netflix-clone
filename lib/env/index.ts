import './environment-config';
import { type Environment, environmentSchema } from './schema';

export function validateEnvironment(): Environment {
  // eslint-disable-next-line n/no-process-env
  const parsed = environmentSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
}

const environment = validateEnvironment();
export default environment;
