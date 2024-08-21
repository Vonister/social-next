import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Ads = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image
          src={'/more.png'}
          alt="More"
          width={14}
          height={14}
          className="cursor-pointer"
        />
      </div>
      {/* Image */}
      <div
        className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
      >
        <div
          className={`relative w-full ${
            size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      {/* header */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/3670580/pexels-photo-3670580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Profile"
          width={24}
          height={24}
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="font-medium text-blue-500">Rena Williams</span>
      </div>
      {/* DESCRIPTION */}
      <div>
        <span className={`${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus,
          omnis dignissimos alias adipisci maxime sed cupiditate dolorum nihil
          ipsum, quas rem, numquam est iste doloremque iure sunt repellat eum.
        </span>
      </div>

      {/* BUTTON */}
      <button className="w-full rounded-lg bg-gray-200 p-2 text-gray-500">
        Learn More
      </button>
    </div>
  );
};

export default Ads;
