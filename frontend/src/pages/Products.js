import React, { useState, useEffect } from 'react';
import TeaProductCard from '../components/TeaProductCard';

const Products = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                // Your fetch logic here
                const data = [
                    {
                        name: "Classic Earl Grey",
                        price: 19.99,
                        description: "A sophisticated blend with bergamot oil",
                        category: "Black Tea",
                        rating: 4.5,
                        isNew: true
                    },
                    // ... more products
                ];
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse bg-gray-200 h-96 rounded-xl"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <TeaProductCard key={index} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;