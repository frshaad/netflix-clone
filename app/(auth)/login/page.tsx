import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/authOptions";

import AuthButton from "../_components/AuthButton";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <>
      <Card className="mt-24 min-w-[360px] bg-black/80 md:mt-0">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Log in to an existing account</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <form method="post" action="/api/auth/signin" className="space-y-4">
            <Input type="email" name="email" placeholder="Email" className="" />
            <Button
              type="submit"
              variant="destructive"
              className="w-full bg-[#e50914]"
            >
              Log In
            </Button>
          </form>

          <Separator />

          <div className="flex items-center justify-center gap-x-3">
            <AuthButton provider="github" />
            <AuthButton provider="google" />
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <p>New to Netflix?</p>
            <Link href="/sign-up" className="text-white hover:underline">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
