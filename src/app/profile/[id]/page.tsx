import Feed from '@/components/HomePage/Center/Feed';
import LeftMenu from '@/components/HomePage/Left/LeftMenu';
import RightMenu from '@/components/HomePage/Right/RightMenu';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden relative xl:block w-[20%] ">
        <div className="sticky top-[104px]">
          <LeftMenu type="profile" />
        </div>
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col  items-center justify-center">
            <div className="relative w-full h-64">
              <Image
                src="https://images.pexels.com/photos/26890445/pexels-photo-26890445/free-photo-of-penguins-on-a-rocky-slope.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="cover photo"
                fill
                className="object-cover rounded-lg"
              />

              <Image
                src="https://images.pexels.com/photos/20632485/pexels-photo-20632485/free-photo-of-portrait-of-man-in-hat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="profile photo"
                width={128}
                height={128}
                className="w-32 h-32 object-cover absolute left-0 right-0 m-auto -bottom-16 rounded-full ring-4 ring-white "
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Edward James Recido
            </h1>
            <div className="flex items-center gap-12 mb-4">
              <div className="flex flex-col items-center font-medium">
                <span>123</span>
                <span className="text-xs">Posts</span>
              </div>
              <div className="flex flex-col items-center font-medium">
                <span>1.2k</span>
                <span className="text-xs">Followers</span>
              </div>
              <div className="flex flex-col items-center font-medium">
                <span>1k</span>
                <span className="text-xs">Following</span>
              </div>
            </div>
          </div>
        </div>
        <Feed />
      </div>

      <div className="hidden lg:block xl:w-[30%]">
        <div className="sticky top-[104px]">
          <RightMenu userId="test" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
