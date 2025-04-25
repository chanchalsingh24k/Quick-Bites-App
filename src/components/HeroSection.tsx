
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
          alt="Food background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Hungry? We've Got You Covered
          </h1>
          <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Order food from the best local restaurants with just a few clicks and enjoy fast delivery straight to your doorstep.
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded mb-3">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <Input 
                placeholder="Enter your delivery location" 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search for restaurant, cuisine or dish" 
                  className="pl-10"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Find Food
              </Button>
            </div>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg fill="white" viewBox="0 0 20 20" className="h-5 w-5">
                  <path d="M10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2ZM5 6C5 3.23858 7.23858 1 10 1C12.7614 1 15 3.23858 15 6C15 8.76142 12.7614 11 10 11C7.23858 11 5 8.76142 5 6ZM5 15.5C5 13.9872 7.23858 13 10 13C12.7614 13 15 13.9872 15 15.5V19H16V15.5C16 13.1699 12.866 12 10 12C7.13401 12 4 13.1699 4 15.5V19H5V15.5Z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">24,000+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg fill="white" viewBox="0 0 20 20" className="h-5 w-5">
                  <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">2,000+</div>
                <div className="text-white/80 text-sm">Food Partners</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <svg fill="white" viewBox="0 0 20 20" className="h-5 w-5">
                  <path d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H14C15.1046 6 16 6.89543 16 8V15C16 16.1046 15.1046 17 14 17H6C4.89543 17 4 16.1046 4 15V8ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11C11.5523 11 12 10.5523 12 10C12 9.44772 11.5523 9 11 9H9ZM7 13C7 12.4477 7.44772 12 8 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H8C7.44772 14 7 13.5523 7 13Z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">100+</div>
                <div className="text-white/80 text-sm">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
