import React from 'react';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      {/* LEFT */}
      <div className="md:hidden xl:block w-[20%]">
        <Link
          href="/"
          className="font-bold text-xl text-blue-600 flex gap-2 items-center"
        >
          <Image src={'/fblogo.png'} alt="FBLogo" width={20} height={20} />
          Feysbuk
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] ">
        <div className="text-sm flex gap-6 text-gray-600">
          <Link href={'/'} className="flex gap-2 items-center">
            <Image
              src={'/home.png'}
              alt="Home"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Home</span>
          </Link>
          <Link href={'/'} className="flex gap-2 items-center">
            <Image
              src={'/stories.png'}
              alt="Stories"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Stories</span>
          </Link>
          <Link href={'/'} className="flex gap-2 items-center">
            <Image
              src={'/friends.png'}
              alt="Friends"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Friends</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div className="inline-block text-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] " />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={'/people.png'} alt="People" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image
                src={'/messages.png'}
                alt="Messages"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={'/notifications.png'}
                alt="Notfications"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="text-sm">
              <Link href={'/sign-in'} className="flex items-center gap-2">
                <Image src={'/login.png'} alt="Login" width={20} height={20} />
                <span>Login/Register</span>
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
