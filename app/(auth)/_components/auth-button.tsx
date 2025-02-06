'use client';

import { useState } from 'react';

import { Loader2 } from 'lucide-react';
import type { BuiltInProviderType } from 'next-auth/providers/index';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

type Properties = {
  provider: BuiltInProviderType;
};

export default function AuthButton({ provider }: Properties) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      className="flex items-center gap-4"
      disabled={isLoading}
      size="lg"
      variant="outline"
      onClick={async () => {
        setIsLoading(true);
        await signIn(provider);
      }}
    >
      {isLoading ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <div>
          {provider === 'github' ? (
            <FaGithub size={20} />
          ) : (
            <FaGoogle size={20} />
          )}
        </div>
      )}
      <p className="font-light">
        Continue with <span className="font-medium capitalize">{provider}</span>
      </p>
    </Button>
  );
}
