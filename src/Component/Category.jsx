import React, { useContext } from 'react';
import { NewsContext } from '../ContextApi/Context.jsx';

const Category = () => {
  const { category, selectedCategory } = useContext(NewsContext);

  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  const handleChange = (event) => {
    selectedCategory(event.target.value);
  };

  return (
    <div className="bg-transparent sm:mt-20 lg:mt-40 mt-20 p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {/* Display buttons as dropdown on small screens */}
        <div className="sm:hidden relative">
          <select
            onChange={handleChange}
            value={category}
            className="block appearance-none w-full bg-gray-700 border border-gray-600 text-white py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
          >
            {categories.map((element, index) => (
              <option
                key={index}
                value={element}
                className="bg-gray-700 text-white"
              >
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12l-5-5 1.5-1.5L10 9.792l3.5-3.5L15 7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Display buttons as regular buttons on larger screens */}
        <div className="hidden sm:flex flex-wrap gap-2">
          {categories.map((element, index) => (
            <button
              key={index}
              onClick={() => selectedCategory(element)}
              className={`px-6 py-3 rounded-full text-lg font-semibold ${
                category === element ? 'text-white bg-blue-500' : 'text-white bg-gray-500 hover:bg-orange-400'
              }`}
            >
              {element.charAt(0).toUpperCase() + element.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
