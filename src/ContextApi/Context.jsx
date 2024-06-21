import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const API_KEY = 'c0fb6c5ca17f4b5a8708832e164c7a8a';
  const PageSize = 10;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'in',
            category: category,
            apiKey: API_KEY,
            page: page,
            pageSize: PageSize,
          },
        });
        console.log(response.data.articles);
        setData(response.data.articles);
        setTotalResults(response.data.totalResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, page]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const selectedCategory = (newCategory) => {
    setCategory(newCategory);
    setPage(1); // Reset page to 1 when category changes
  };

  return (
    <NewsContext.Provider value={{
      data: filteredData,
      page,
      setPage,
      totalResults,
      loading,
      category,
      selectedCategory,
      setSearchQuery
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };

