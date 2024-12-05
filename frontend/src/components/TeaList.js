import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeaList = () => {
  const [teas, setTeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeas = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/teas/search');
        setTeas(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teas:', error);
        setLoading(false);
      }
    };
    fetchTeas();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid md:grid-cols-3 gap-6 p-4">
      {teas.map(tea => (
        <div key={tea.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={tea.image} alt={tea.title} className="w-full h-48 object-cover rounded-md"/>
          <h2 className="text-xl font-semibold mt-2">{tea.title}</h2>
          <p className="text-gray-600">${tea.price}</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default TeaList;