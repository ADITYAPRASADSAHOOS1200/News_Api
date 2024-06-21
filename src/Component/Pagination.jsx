// Pagination.jsx

import React, { useContext } from 'react';
import { NewsContext } from '../ContextApi/Context';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Pagination = () => {
  const { page, setPage, totalResults } = useContext(NewsContext);
  const PageSize = 10;
  const totalPage = Math.ceil(totalResults / PageSize);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`lg:px-5 lg:py-3  md:px-5 md:py-3 px-2 py-2 sm:px-1 sm:py-2  border-2 border-black  sm:m-[1px] md:m-1 lg:m-1  text-sm font-semibold rounded-md ${page === i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-row mt-20     mb-20 sm:flex-row   items-center justify-center gap-2  sm:gap-0 p-1 sm:p-0 md:p-8 lg:p-10">
      <button
        className={`lg:px-5 lg:py-3 px-3 py-2 md:px-5 md:py-3 sm:px-1 sm:py-2   rounded-md ${page === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-500'}`}
        onClick={handlePrevious}
        disabled={page === 1}
      >
        <FaArrowLeft className="inline-block mr-1 sm:mr-0" /> Prev
      </button>

      <div className="flex flex-wrap items-center  mt-2 sm:mt-0">
        {renderPageNumbers()}
      </div>

      <button
        className={`lg:px-5 lg:py-3 px-2 py-2 md:px-5 md:py-3 sm:px-1 sm:py-2  rounded-md ${page === totalPage ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-500'}`}
        onClick={handleNext}
        disabled={page === totalPage}
      >
        Next <FaArrowRight className="inline-block ml-1 sm:ml-0" />
      </button>
    </div>
  );
};

export default Pagination;

