import React, { useContext, useState, useEffect } from 'react';
import Header from '../Component/Header';
import { NewsContext } from '../ContextApi/Context';
import { useNavigate } from 'react-router-dom';
import Category from '../Component/Category';
import Pagination from '../Component/Pagination'; // Import Pagination component
import Footer from '../Component/Footer';

const Homepage = () => {
  const { data, loading } = useContext(NewsContext);
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const handleNavigation = (sourceId) => {
    navigate(`/details/${sourceId}`);
  };

  return (
    <section className="min-h-screen flex flex-col relative">
      <Header setSearchQuery={setSearchQuery} />
      <Category />
      {loading ? (
        <h1 className="text-3xl text-center mt-40">Loading...</h1>
      ) : (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.length > 0 &&
            filteredData.map((curElem, index) => (
              <div key={index} className="p-4 bg-white rounded shadow-md shadow-gray-500">
                <div>
                  {curElem.urlToImage && (
                    <img
                      src={curElem.urlToImage}
                      alt={'news'}
                      className="w-full h-42 object-cover mb-2 rounded"
                    />
                  )}
                </div>
                <h2 className="text-xl font-bold mb-2">{curElem.title}</h2>
                <button
                  onClick={() => handleNavigation(curElem.source.name)}
                  className="text-lg font-semibold text-blue-600"
                >
                  Read more
                </button>
              </div>
            ))}
        </div>
      )}
      <Pagination /> {/* Render Pagination component here */}
      <Footer />
    </section>
  );
};

export default Homepage;
