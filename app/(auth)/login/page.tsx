import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa6";

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

export default function LoginPage() {
  return (
    <form action="">
      <Card className="mt-24 min-w-[360px] bg-black/80 md:mt-0">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Log in to an existing account</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Input type="email" name="email" placeholder="Email" className="" />
          <Button type="submit" variant="destructive" className="bg-[#e50914]">
            Log In
          </Button>

          <Separator />

          <div className="flex items-center justify-center gap-x-3">
            <Button size="icon" variant="outline">
              <FaGithub size={20} />
            </Button>
            <Button size="icon" variant="outline">
              <FaGoogle size={20} />
            </Button>
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
    </form>
  );
}
