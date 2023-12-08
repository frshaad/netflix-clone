import Image from "next/image";

import BackgroundImage from "@/public/login_background.jpg";
import Logo from "@/public/netflix_logo.svg";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        priority
        fill
        className="-z-10 hidden brightness-50 sm:flex sm:object-cover"
      />
      <Image
        src={Logo}
        alt="Netflix logo"
        width={120}
        priority
        className="absolute left-4 top-4 h-auto object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
