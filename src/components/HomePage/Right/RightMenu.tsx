import React from 'react';
import FriendRequest from './FriendRequest';
import Birthdays from './Birthdays';
import Ads from './Ads';
import UserInformation from './UserInformation';
import UserMedia from './UserMedia';

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInformation />
          <UserMedia />
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMenu;
