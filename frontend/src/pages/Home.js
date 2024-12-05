import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to TeaHaven</h1>
          <p className="text-xl mb-8">Discover the finest teas from around the world</p>
          <button className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700">
            Shop Now
          </button>
        </div>
      </div>
      
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        {/* Add product grid here */}
      </div>
    </div>
  );
};

export default Home;