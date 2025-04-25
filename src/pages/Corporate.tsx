// src/pages/Corporate.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Corporate = () => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState({
    logo: false,
    food: false,
    instamart: false,
    dineout: false,
    appStore: false,
    playStore: false
  });

  const handleImageError = (imageKey: keyof typeof imageError) => {
    setImageError(prev => ({ ...prev, [imageKey]: true }));
  };

  const handleFoodDeliveryClick = () => {
    navigate('/menu'); // Navigate to the menu page where users can add items to cart
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6">
            ABOUT US
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-4xl mx-auto">
            Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div 
              className="text-center cursor-pointer transform transition-transform hover:scale-105"
              onClick={handleFoodDeliveryClick}
            >
              <div className="bg-white rounded-full p-6 w-32 h-32 mx-auto mb-6 shadow-lg flex items-center justify-center hover:shadow-xl">
                {imageError.food ? (
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ) : (
                  <img
                    src="/images/food-delivery.png"
                    alt="Food Delivery"
                    className="w-full h-full object-contain"
                    onError={() => handleImageError('food')}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Food</h3>
              <p className="text-gray-600">Order food from your favorite restaurants</p>
              <span className="inline-block mt-3 text-orange-500 hover:text-orange-600">
                Browse Menu →
              </span>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-32 h-32 mx-auto mb-6 shadow-lg flex items-center justify-center">
                {imageError.instamart ? (
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ) : (
                  <img
                    src="/images/instamart.png"
                    alt="Instamart"
                    className="w-full h-full object-contain"
                    onError={() => handleImageError('instamart')}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Instamart</h3>
              <p className="text-gray-600">Instant grocery delivery service</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-32 h-32 mx-auto mb-6 shadow-lg flex items-center justify-center">
                {imageError.dineout ? (
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <img
                    src="/images/dineout.png"
                    alt="Dineout"
                    className="w-full h-full object-contain"
                    onError={() => handleImageError('dineout')}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Dineout</h3>
              <p className="text-gray-600">Book tables and get great offers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              {imageError.logo ? (
                <div className="h-8 mb-4 text-2xl font-bold">Swiggy</div>
              ) : (
                <img
                  src="/images/swiggy-logo.png"
                  alt="Swiggy"
                  className="h-8 mb-4"
                  onError={() => handleImageError('logo')}
                />
              )}
              <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
                <li><Link to="/team" className="text-gray-600 hover:text-primary">Team</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
                <li><Link to="/investor-relations" className="text-gray-600 hover:text-primary">Investor Relations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact us</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-600 hover:text-primary">Help & Support</Link></li>
                <li><Link to="/partner" className="text-gray-600 hover:text-primary">Partner with us</Link></li>
                <li><Link to="/ride" className="text-gray-600 hover:text-primary">Ride with us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms & Conditions</Link></li>
                <li><Link to="/cookie-policy" className="text-gray-600 hover:text-primary">Cookie Policy</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Available in</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-600">Bangalore</span></li>
                <li><span className="text-gray-600">Delhi</span></li>
                <li><span className="text-gray-600">Mumbai</span></li>
                <li><span className="text-gray-600">Pune</span></li>
                <li><button className="text-primary hover:text-primary/90">679 cities</button></li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">For better experience, download the Swiggy app now</h3>
            <div className="flex space-x-4">
              {imageError.appStore ? (
                <div className="h-12 bg-black text-white px-4 rounded flex items-center">App Store</div>
              ) : (
                <img
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  className="h-12"
                  onError={() => handleImageError('appStore')}
                />
              )}
              {imageError.playStore ? (
                <div className="h-12 bg-black text-white px-4 rounded flex items-center">Google Play</div>
              ) : (
                <img
                  src="/images/play-store.png"
                  alt="Get it on Google Play"
                  className="h-12"
                  onError={() => handleImageError('playStore')}
                />
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Corporate;
  