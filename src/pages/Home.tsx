import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const popularRestaurants = [
    {
      id: 1,
      name: "Paradise Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
      cuisine: "Indian, Biryani",
      rating: 4.5,
      deliveryTime: "30-35 min",
    },
    {
      id: 2,
      name: "McDonald's",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      cuisine: "Burgers, Fast Food",
      rating: 4.2,
      deliveryTime: "25-30 min",
    },
    {
      id: 3,
      name: "Domino's Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      cuisine: "Pizza, Italian",
      rating: 4.3,
      deliveryTime: "30-35 min",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Food delivery and more
            </h1>
            <p className="text-lg mb-8">
              Discover the best food & drinks in your area
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="flex-grow p-3 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="bg-orange-700 px-6 py-3 rounded-r-md hover:bg-orange-800 transition-colors">
                Find Food
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Restaurants Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">
                Fast and reliable delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
              <p className="text-gray-600">
                We ensure the best food quality for you
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">
                Simple and convenient ordering process
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 