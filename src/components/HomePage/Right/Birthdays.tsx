import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* Birthdays */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/19823330/pexels-photo-19823330/free-photo-of-young-woman-in-a-fashionable-outfit-with-cowboy-boots-posing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Benjamin Stewart</span>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMIMG */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="Gift" width={24} height={24} />
        <Link href={'/'} className="flex flex-col gap-1 text-sm">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See other 16 upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
