import React, { useState } from 'react';

const TeaList = () => {
<<<<<<< HEAD
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'green', 'black', 'herbal'

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

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.type?.toLowerCase() === filter);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 p-4">{error}</div>
  );
=======
  const [filter, setFilter] = useState('all');
  
  // Static tea data
  const teas = [
    {
      id: 1,
      title: "Japanese Sencha",
      type: "green",
      price: 24.99,
      description: "Premium green tea with a delicate, grassy sweet flavor",
      image: "/images/tea-placeholder.jpg"
    },
    {
      id: 2,
      title: "English Breakfast",
      type: "black",
      price: 19.99,
      description: "Classic black tea blend, full-bodied with a robust flavor",
      image: "/images/tea-placeholder.jpg"
    },
    {
      id: 3,
      title: "Chamomile Dream",
      type: "herbal",
      price: 18.99,
      description: "Soothing herbal tea with sweet, floral notes",
      image: "/images/tea-placeholder.jpg"
    }
  ];

  const filteredTeas = filter === 'all' 
    ? teas 
    : teas.filter(tea => tea.type === filter);
>>>>>>> 54145ad (Refactor TeaList component to use static data, implement filtering by tea type, and enhance UI with improved layout and styling)

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-8 flex justify-center space-x-4">
          {['all', 'green', 'black', 'herbal'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === type 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Tea Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeas.map(tea => (
            <div 
              key={tea.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img 
                  src={tea.image} 
                  alt={tea.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
<<<<<<< HEAD
                  onError={(e) => {
                    e.target.src = '/images/tea-placeholder.jpg';
                  }}
=======
>>>>>>> 54145ad (Refactor TeaList component to use static data, implement filtering by tea type, and enhance UI with improved layout and styling)
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-green-600 font-semibold">
                  ${tea.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2 text-gray-800">{tea.title}</h2>
<<<<<<< HEAD
                  <p className="text-gray-600 text-sm line-clamp-2">{tea.description || 'Delicious premium tea'}</p>
=======
                  <p className="text-gray-600 text-sm line-clamp-2">{tea.description}</p>
>>>>>>> 54145ad (Refactor TeaList component to use static data, implement filtering by tea type, and enhance UI with improved layout and styling)
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">
<<<<<<< HEAD
                    {tea.type || 'Classic Blend'}
=======
                    {tea.type.charAt(0).toUpperCase() + tea.type.slice(1)}
>>>>>>> 54145ad (Refactor TeaList component to use static data, implement filtering by tea type, and enhance UI with improved layout and styling)
                  </span>
                  <button 
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 
                             transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTeas.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            No teas found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default TeaList;