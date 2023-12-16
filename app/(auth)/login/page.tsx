import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/authOptions";

import AuthButton from "../_components/AuthButton";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/home");
  }

  return (
    <Card className="mt-24 min-w-[360px] bg-black/80 md:mt-0">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Continue to your Netflix account</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <AuthButton provider="google" />
        <AuthButton provider="github" />
      </CardContent>
    </Card>
  );
}
