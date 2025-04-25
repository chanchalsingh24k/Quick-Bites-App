
import { useState } from 'react';
import { Star, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  deliveryTime: number;
  priceForTwo: number;
  discount?: {
    text: string;
    percentage: number;
  };
  promoted?: boolean;
  className?: string;
}

const RestaurantCard = ({
  id,
  name,
  image,
  cuisines,
  rating,
  deliveryTime,
  priceForTwo,
  discount,
  promoted = false,
  className
}: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/restaurants/${id}`}
      className={cn(
        "block bg-white rounded-lg overflow-hidden transition-all duration-200",
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        
        {promoted && (
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs py-1 px-2 rounded">
            PROMOTED
          </div>
        )}
        
        {discount && (
          <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-1.5 px-4 font-medium">
            {discount.text}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded">
            <Star className="h-3.5 w-3.5 mr-1" fill="white" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <div className="flex items-center text-gray-500">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span className="text-sm">{deliveryTime} min</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <div className="text-gray-500 text-sm">₹{priceForTwo} for two</div>
        </div>
        
        <div className="border-t border-gray-100 pt-3 mt-2">
          <p className="text-gray-500 text-sm mb-2 line-clamp-1">
            {cuisines.join(", ")}
          </p>
          
          {discount && (
            <div className="flex items-center text-primary">
              <Tag className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{discount.percentage}% OFF up to ₹120</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
