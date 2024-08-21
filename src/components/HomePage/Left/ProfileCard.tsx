import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-4">
      <div className="relative h-20">
        <Image
          src="https://images.pexels.com/photos/16889725/pexels-photo-16889725/free-photo-of-chairs-and-table-near-window-in-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="background Image"
          fill
          className="object-cover rounded-lg"
        />
        <Image
          src="https://images.pexels.com/photos/14598678/pexels-photo-14598678.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Profile Image"
          width={48}
          height={48}
          className="object-cover w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white"
        />
      </div>

      <div className="flex items-center flex-col gap-2">
        <span className="font-semibold text-lg mt-2">Edward James Recido</span>
        <span className="text-xs text-gray-500"> 500 Followers</span>
        <Link
          href={'/profile/123'}
          className="bg-blue-500 text-white text-xs p-2 rounded-md"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
