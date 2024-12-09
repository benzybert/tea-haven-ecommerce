import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const TeaProductCard = ({ 
  name = "Classic Earl Grey",
  price = 19.99,
  description = "A sophisticated blend with bergamot oil",
  imageUrl = "/api/placeholder/300/300"
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800">{name}</h3>
          <span className="text-lg font-semibold text-green-600">${price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TeaProductCard;