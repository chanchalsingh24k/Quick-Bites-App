// ... existing imports ...
import React from 'react';
import { Link } from 'react-router-dom';

// ... existing code ...

const Corporate = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-8">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Swiggy is India's leading on-demand convenience platform with a tech-first approach to logistics 
            and a solution-first approach to consumer demands.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Food Delivery Card */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-50 rounded-full p-8 w-40 h-40 mx-auto mb-8 shadow-lg flex items-center justify-center">
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/meal-menue-logo-design-template-ca4328b873982607c2c66ab6d4f8ae45_screen.jpg?ts=1681605842"
                  alt="Food Delivery"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Food Delivery</h3>
              <p className="text-gray-600 text-lg mb-4">
                Delivering food from restaurants you love right to your doorstep
              </p>
              <Link to="/menu" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Browse Menu →
              </Link>
            </div>

            {/* QuickBite Mart Card */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-50 rounded-full p-8 w-40 h-40 mx-auto mb-8 shadow-lg flex items-center justify-center">
                <img
                  src="https://assets.simon.com/tenantlogos/36880.png"
                  alt="QuickBite Mart"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">QuickBite Mart</h3>
              <p className="text-gray-600 text-lg">
                Instant grocery delivery service for all your daily needs
              </p>
              <Link to="/quickbite-mart" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Shop Now →
              </Link>
            </div>

            {/* Dineout Card */}
            <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-50 rounded-full p-8 w-40 h-40 mx-auto mb-8 shadow-lg flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yDWPF4Z1ugzlYQ9r4iI_SYbt87J-yrK_Jw&s"
                  alt="Dineout"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Dineout</h3>
              <p className="text-gray-600 text-lg">
                Book tables and get amazing offers at the best restaurants
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ...Footer and rest of your code... */}
    </div>
  );
};

export default Corporate;