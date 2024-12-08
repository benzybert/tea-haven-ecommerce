import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeaList = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/teas/search');
        setTeas(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teas:', error);
        setError('Failed to load tea products. Please try again later.');
        setLoading(false);
      }
    };
    fetchTeas();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 p-4">{error}</div>
  );

  if (teas.length === 0) return (
    <div className="text-center text-gray-600 p-4">No tea products found.</div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {teas.map(tea => (
          <div key={tea.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img 
                src={tea.image} 
                alt={tea.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => {
                  e.target.src = '/images/tea-placeholder.jpg';
                }}
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                ${tea.price}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{tea.title}</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tea.description || 'Delicious premium tea'}</p>
            <div className="flex justify-between items-center">
              <button 
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex-1"
                onClick={() => {/* Add to cart functionality */}}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaList;