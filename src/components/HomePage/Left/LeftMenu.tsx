import React from 'react';
import ProfileCard from './ProfileCard';
import Link from 'next/link';
import Image from 'next/image';
import menuItems from './menuItems';
import Ads from '../Right/Ads';

const LeftMenu = ({ type }: { type?: 'home' | 'profile' }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === 'home' && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-4">
        {menuItems.items.map((item, index) => {
          return (
            <Link
              href="/"
              className="flex items-center gap-4 rounded-lg hover:bg-slate-100 p-2"
              key={index}
            >
              <Image src={item.icon} alt="Menu Item" width={20} height={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
      <div>
        <Ads size="sm" />
      </div>
    </div>
  );
};

export default LeftMenu;
