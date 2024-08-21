import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInformation = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* NAME */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">Ida Griffith</span>
        <span className="text-sm text-gray-500">@idagriffith</span>
      </div>
      {/* BIO */}
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi
        obcaecati iure, ea reprehenderit accusantium doloribus explicabo quis
        fugit eum.
      </p>
      {/* MORE INFO */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image src={'/map.png'} alt="Location" width={16} height={16} />
          <span className="text-gray-500">
            Living in{' '}
            <span className="font-bold text-gray-700">American Samoa</span>{' '}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/school.png'} alt="Location" width={16} height={16} />
          <span className="text-gray-500">
            Went to{' '}
            <span className="font-bold text-gray-700">
              Something University
            </span>{' '}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/work.png'} alt="Location" width={16} height={16} />
          <span className="text-gray-500">
            Works at{' '}
            <span className="font-bold text-gray-700">Some Company</span>{' '}
          </span>
        </div>
      </div>

      {/* OTHER LINK */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={'/link.png'} alt="Location" width={16} height={16} />
          <span className="text-blue-500">abc.link</span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={'/date.png'} alt="Location" width={16} height={16} />
          <span className="text-gray-500">Joined November 2021</span>
        </div>
      </div>

      {/* BUTTON */}
      <button className="w-full rounded-lg bg-blue-500 p-2 text-white">
        Following
      </button>

      <div className="flex items-center justify-end">
        <span className="text-red-400 cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

export default UserInformation;
