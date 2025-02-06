import Image from 'next/image';

import BackgroundImage from '@/public/login_background.jpg';
import Logo from '@/public/netflix_logo.svg';

type Properties = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Properties) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        alt="background image"
        className="-z-10 hidden brightness-50 sm:flex sm:object-cover"
        src={BackgroundImage}
        fill
        priority
      />
      <Image
        alt="Netflix logo"
        className="absolute left-4 top-4 h-auto object-contain md:left-10 md:top-6"
        src={Logo}
        width={120}
        priority
      />
      {children}
    </div>
  );
}
