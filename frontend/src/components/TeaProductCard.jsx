import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import PrimaryButton from '../common/buttons/PrimaryButton';

const TeaProductCard = ({ /* ...props */ }) => {
  return (
    <div className="group relative max-w-sm rounded-xl...">
      <div className="relative h-72 overflow-hidden">
        {/* ... image ... */}
        
        {/* Wishlist Button */}
        <PrimaryButton 
          onClick={() => {}}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 
                     text-gray-600 hover:bg-white hover:shadow-md"
        >
          <Heart className="w-5 h-5 hover:text-red-500" />
        </PrimaryButton>

        {/* ... */}
      </div>

      <div className="p-5">
        {/* ... */}
        
        {/* Add to Cart Button */}
        <PrimaryButton 
          onClick={() => {}}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </div>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default TeaProductCard;