import React from 'react';

const Favorites = () => {
  const favorites = [
    {
      id: 1,
      name: "Paradise Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
      cuisine: "Indian, Biryani",
      rating: 4.5,
      deliveryTime: "30-35 min",
      priceForTwo: 500,
    },
    {
      id: 2,
      name: "McDonald's",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      cuisine: "Burgers, Fast Food",
      rating: 4.2,
      deliveryTime: "25-30 min",
      priceForTwo: 400,
    },
    {
      id: 3,
      name: "Domino's Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      cuisine: "Pizza, Italian",
      rating: 4.3,
      deliveryTime: "30-35 min",
      priceForTwo: 450,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {favorites.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.25.985-6.875L.61 7.14l6.905-.755L10 0l2.485 6.385 6.905.755-4.195 4.169.985 6.875z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium">
                      {restaurant.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {restaurant.deliveryTime}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    ₹{restaurant.priceForTwo} for two
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites; 