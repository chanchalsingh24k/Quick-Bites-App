import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  image: string;
  location: string;
  distance: string;
}

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Hut",
    cuisine: ["Pizza", "Italian", "Fast Food"],
    rating: 4.2,
    deliveryTime: "30-35",
    priceForTwo: "₹400",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
    location: "Connaught Place",
    distance: "1.2 km"
  },
  {
    id: 2,
    name: "Burger King",
    cuisine: ["Burgers", "American", "Fast Food"],
    rating: 4.1,
    deliveryTime: "25-30",
    priceForTwo: "₹350",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop",
    location: "Rajouri Garden",
    distance: "2.5 km"
  },
  {
    id: 3,
    name: "Biryani Blues",
    cuisine: ["Biryani", "North Indian", "Mughlai"],
    rating: 4.4,
    deliveryTime: "40-45",
    priceForTwo: "₹500",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop",
    location: "Lajpat Nagar",
    distance: "3.1 km"
  },
  {
    id: 4,
    name: "Chinese Wok",
    cuisine: ["Chinese", "Asian", "Thai"],
    rating: 4.0,
    deliveryTime: "35-40",
    priceForTwo: "₹450",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    location: "Green Park",
    distance: "2.8 km"
  }
];

interface SearchResultsProps {
  searchQuery: string;
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults = ({ searchQuery, isVisible, onClose }: SearchResultsProps) => {
  const [results, setResults] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (searchQuery) {
      // Filter restaurants based on search query
      const filtered = mockRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden z-50">
      {results.length > 0 ? (
        <div className="max-h-[70vh] overflow-y-auto">
          {results.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurants/${restaurant.id}`}
              className="block hover:bg-gray-50"
              onClick={onClose}
            >
              <div className="flex p-4 border-b">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="ml-1 text-sm text-gray-600">{restaurant.deliveryTime} mins</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{restaurant.priceForTwo} for two</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{restaurant.cuisine.join(", ")}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{restaurant.location}</span>
                    <span className="mx-2">•</span>
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="p-4 text-center text-gray-500">
          No restaurants found matching "{searchQuery}"
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults; 