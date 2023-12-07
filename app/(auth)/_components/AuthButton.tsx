"use client";

import { BuiltInProviderType } from "next-auth/providers/index";
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

type Props = {
  provider: BuiltInProviderType;
};

export default function AuthButton({ provider }: Props) {
  return (
    <Button
      onClick={async () => await signIn(provider)}
      size="icon"
      variant="outline"
    >
      {provider === "github" ? <FaGithub size={20} /> : <FaGoogle size={20} />}
    </Button>
  );
}
