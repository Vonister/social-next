import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex-1 flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="Avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 ">
          <input
            type="text"
            placeholder="Write a comment..."
            className=" outline-none bg-transparent  flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt="Emoji"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div>
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src={
              "https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium"> Roger Sharp</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              saepe magni provident nemo iste ullam explicabo vero aspernatur
              perferendis sequi, commodi voluptatibus debitis error. Unde quam
              atque corrupti qui libero.
            </p>
            <div className="flex gap-8 items-center text-xs text-gray-500">
              <div className="flex items-center gap-4 ">
                <Image
                  src={"/like.png"}
                  alt="Avatar"
                  width={12}
                  height={12}
                  className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>{" "}
                <span className="text-gray-500">
                  123 <span className="hidden md:inline">Likes</span>{" "}
                </span>
              </div>
              <span className="">Reply</span>
            </div>
          </div>
          {/* ICON */}
          <Image
            src={"/more.png"}
            alt="More"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
