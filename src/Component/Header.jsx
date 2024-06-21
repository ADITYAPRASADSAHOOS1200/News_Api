import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons/fa

const Header = ({ setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="h-20 z-50 fixed top-0 left-0 right-0 sm:h-16 md:h-20 lg:h-24 bg-gray-700 flex items-center justify-between gap-4 px-1 sm:px-6 md:px-8 lg:px-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-orange-400">
        NeighbourHood News
      </h1>
      <div className="flex items-center border-2 border-orange-400 rounded-lg">
        <FaSearch className="text-orange-400 text-lg ml-2" />
        <input
          className="text-base sm:text-lg md:text-xl lg:text-2xl rounded-md mr-10 font-semibold text-orange-400 bg-transparent px-2 py-1 sm:px-3 outline-none w-40 sm:w-48 md:w-64"
          type="text"
          placeholder="Search for news"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Header;





