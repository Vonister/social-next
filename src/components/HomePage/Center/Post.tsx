import Image from 'next/image';
import Comments from './Comments';

const Post = () => {
  return (
    <div className=" flex flex-col gap-4">
      {/* USER */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              'https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            alt="Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium cursor-pointer">Katharine Paul</span>
            <span className="text-xs text-gray-500">5min ago</span>
          </div>
        </div>
        <Image
          src={'/more.png'}
          alt="Avatar"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
      {/* DESCRIPTION */}
      <div className=" flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={
              'https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            alt="Avatar"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          aliquam nesciunt inventore possimus expedita saepe, repellendus et!
          Praesentium dolorum illum tempora debitis est veniam, harum illo velit
          vel, obcaecati ducimus!
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src={'/like.png'}
              alt="Avatar"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>{' '}
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>{' '}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={'/comment.png'}
              alt="Avatar"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>{' '}
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>{' '}
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={'/share.png'}
              alt="Avatar"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>{' '}
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>{' '}
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
