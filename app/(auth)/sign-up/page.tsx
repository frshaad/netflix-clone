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

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <>
      <Card className="mt-24 min-w-[360px] bg-black/80 md:mt-0">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <form className="space-y-4">
            <Input type="email" name="email" placeholder="Email" className="" />
            <Button
              type="submit"
              variant="destructive"
              className="w-full bg-[#e50914]"
            >
              Sign Up
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
            <p>Already have an account?</p>
            <Link href="/login" className="text-white hover:underline">
              Log In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
