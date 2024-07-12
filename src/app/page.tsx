import AddPost from "@/components/HomePage/Center/AddPost";
import Feed from "@/components/HomePage/Center/Feed";
import Stories from "@/components/HomePage/Center/Stories";
import LeftMenu from "@/components/HomePage/Left/LeftMenu";
import RightMenu from "@/components/HomePage/Right/RightMenu";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Stories />
        <AddPost />
        <Feed />
      </div>

      <div className="hidden lg:block xl:w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
};

export default Homepage;
