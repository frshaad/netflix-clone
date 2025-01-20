"use client";

import { Loader2 } from "lucide-react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

type Props = {
  provider: BuiltInProviderType;
};

export default function AuthButton({ provider }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      onClick={async () => {
        setIsLoading(true);
        await signIn(provider);
      }}
      variant="outline"
      size="lg"
      className="flex items-center gap-4"
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-5 animate-spin" />
      ) : (
        <div>
          {provider === "github" ? (
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
