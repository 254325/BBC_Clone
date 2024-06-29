import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[320px] h-screen bg-white">
      <div className="flex w-full mb-2 p-2 bg-[#f6f6f6]">
        <div className="flex w-full">
          <input
            placeholder="Search news, topics and more"
            className="p-[9px] w-full border border-black"
          />
          <button className="bg-black text-white p-[14px]">
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>

      <div className="flex flex-col p-2 font-bold w-full h-au bg-white">
        {[
          'Home', 'News', 'Sport', 'Business', 'Innovation', 'Culture',
          'Travel', 'Earth', 'Video', 'Live', 'Audio', 'Weather', 'Newsletter'
        ].map((item, index) => (
          <div key={index} className="flex w-full h-full menu-item border-b p-3 hover:bg-[#e6e8ea]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
