import React from 'react';

const Products = () => {
<<<<<<< HEAD
  const products = [
    {
      id: 1,
      name: "Green Tea",
      price: 19.99,
      description: "Premium Japanese Sencha",
      image: "/images/green-tea.jpg"
    },
    {
      id: 2,
      name: "Earl Grey",
      price: 24.99,
      description: "Classic Black Tea with Bergamot",
      image: "/images/earl-grey.jpg"
    },
    {
      id: 3,
      name: "Chamomile",
      price: 14.99,
      description: "Calming Herbal Tea",
      image: "/images/chamomile.jpg"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Tea Collection</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${product.price}</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
=======
    const product = {
        image: 'path/to/your/image.jpg' // Replace with your actual image path
    };

    return (
        <div className="container mx-auto p-4">
            <div className="h-48 bg-cover bg-center rounded-md mb-4" 
                     style={{backgroundImage: `url(${product.image})`}}>
            </div>
            Products Page
        </div>
    );
>>>>>>> f6b54fc (Add product images and enhance Products page layout with background image)
};

export default Products;