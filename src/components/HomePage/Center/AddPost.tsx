import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="flex bg-white shadow-md p-4 rounded-lg gap-4 justify-between text-sm mb-4">
      {/* AVATAR */}
      <Image
        src={
          "https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt="Avatar"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            className="bg-slate-100 rounded-lg p-2 flex-1 outline-none"
            placeholder="What's on your mind?"
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt="Avatar"
            width={20}
            height={20}
            className="w-5 h-5 rounded-full object-cover self-end"
          />
        </div>

        {/* POST OPTIONS */}
        <div className="flex gap-4 items-center mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addImage.png"} alt="Image" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} alt="Video" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/addEvent.png"} alt="Event" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} alt="Poll" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
