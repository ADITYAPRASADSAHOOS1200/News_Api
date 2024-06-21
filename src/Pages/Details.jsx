import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Assuming your route includes an article ID parameter
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            apiKey: 'c0fb6c5ca17f4b5a8708832e164c7a8a', // Replace with your News API key
            country: 'in', // Add any other parameters as needed
          },
        });

        const fetchedArticles = response.data.articles;
        const selectedArticle = fetchedArticles.find(article => article.source.name === id); // Modify this condition as per the unique identifier in your data
        
        if (selectedArticle) {
          setArticle(selectedArticle);
        }

        console.log(selectedArticle);
      } catch (error) {
        console.error('Error fetching article:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Dependency array includes id to refetch if it changes

  return (
    <div className="flex flex-col min-h-screen mt-20">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-3xl text-white mt-40  font-semibold text-center">Loading article...</p>
        ) : article ? (
          <div className="bg-white rounded shadow-md shadow-gray-500 p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-lg sm:text-xl mb-4">{article.description}</p>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto max-h-96 object-cover mb-4 rounded"
              />
            )}
            <p className="text-base sm:text-lg">{article.content}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Read full article
            </a>
           <div>
           <button
              onClick={() => navigate('/')}
              className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 "
            >
              Go back 
            </button>
           </div>
          </div>
        ) : (
          <p className="text-xl text-center">No article found.</p>
        )}
      </div>
    
    </div>
  );
};

export default Details;
