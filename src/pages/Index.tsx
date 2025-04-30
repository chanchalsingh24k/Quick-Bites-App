import HeroSection from '@/components/HeroSection';
import FoodCategory from '@/components/FoodCategory';
import RestaurantCard, { RestaurantCardProps } from '@/components/RestaurantCard';
import TopOffersBanner from '@/components/TopOffersBanner';
import AppFeatures from '@/components/AppFeatures';
import DownloadApp from '@/components/DownloadApp';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

// Mock data
const foodCategories = [
  {
     id: "1", name: "Pizza", image: "https://c4.wallpaperflare.com/wallpaper/872/124/875/pizza-dish-cheese-pastries-wallpaper-preview.jpg" },
  { id: "2", name: "Burger", image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1600&h=900" },
  { id: "3", name: "Biryani", image: "https://pipingpotcurry.com/wp-content/uploads/2019/09/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg" },
  { id: "4", name: "Rolls", image: "https://feenix.co.in/wp-content/uploads/2022/07/veg-spring-roll.jpg" },
  { id: "5", name: "Chicken", image: "https://thebigmansworld.com/wp-content/uploads/2024/11/air-fryer-fried-chicken-recipe.jpg" },
  { id: "6", name: "Thali", image: "https://en-chatelaine.mblycdn.com/ench/resized/2022/03/900x900/thali-feature.jpg" },
  { id: "7", name: "Chinese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSodh2_bz3T_LLA16yP9WdpyAoAUkC5-TdA&s" },
  { id: "8", name: "Desserts", image: "https://www.acouplecooks.com/wp-content/uploads/2022/02/Lava-Cake-005s.jpg" },
];

const restaurants: RestaurantCardProps[] = [
  {
    id: "1",
    name: "Burger King",
    image: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/f6db539ccdfb2865aa8c1cfc88fc1e40167a2029d5b39daf6221681e684accf0.jpg",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
    deliveryTime: 29,
    priceForTwo: 350,
    discount: {
      text: "50% OFF up to ₹100",
      percentage: 50
    },
    promoted: true
  },
  {
    id: "2",
    name: "La Pino'z Pizza",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEMIP3qMPWelaKr18nGW9RRLwpOucxkdh2A&s",
    cuisines: ["Pizzas", "Italian"],
    rating: 4.0,
    deliveryTime: 25,
    priceForTwo: 400,
    discount: {
      text: "₹125 OFF",
      percentage: 25
    }
  },
  {
    id: "3",
    name: "Paradise Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU81mRgxRPs3lvtXa084l5QOZE38htOSF2A&s",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    rating: 4.3,
    deliveryTime: 35,
    priceForTwo: 500
  },
  {
    id: "4",
    name: "Meghana Foods",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFT5HPg6QBOrcQf0fKUNx5UbkqmPBux9aLQ&s",
    cuisines: ["South Indian", "Andhra"],
    rating: 4.5,
    deliveryTime: 32,
    priceForTwo: 450,
    promoted: true
  },
  {
    id: "5",
    name: "Subway",
    image: "https://b.zmtcdn.com/data/pictures/chains/9/3200059/3679c0c7694e0c06c6d446a56046a95a.jpg",
    cuisines: ["Healthy Food", "Salads", "Snacks"],
    rating: 4.0,
    deliveryTime: 28,
    priceForTwo: 350,
    discount: {
      text: "20% OFF",
      percentage: 20
    }
  },
  {
    id: "6",
    name: "McDonald's",
    image: "https://gingermediagroup.com/wp-content/uploads/2023/07/marketing-campaign-of-mcdonalds.jpg",
    cuisines: ["Burgers", "Fast Food", "Desserts"],
    rating: 4.1,
    deliveryTime: 20,
    priceForTwo: 400,
    discount: {
      text: "FREE DELIVERY",
      percentage: 0
    }
  },
  {
    id: "7",
    name: "KFC",
    image: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2FKFC+OOH+1+HotSpicyCOB+land.jpg&c=0",
    cuisines: ["Fried Chicken", "Fast Food"],
    rating: 4.2,
    deliveryTime: 30,
    priceForTwo: 450,
    discount: {
      text: "FLAT 20% OFF",
      percentage: 20
    },
    promoted: true
  },
  {
    id: "8",
    name: "Domino's Pizza",
    image: "https://i.ytimg.com/vi/8fokE3rwBtE/maxresdefault.jpg",
    cuisines: ["Pizzas", "Italian", "Pastas"],
    rating: 3.9,
    deliveryTime: 35,
    priceForTwo: 500
  }
];

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Food Categories */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What's on your mind?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {foodCategories.map((category) => (
              <FoodCategory 
                key={category.id} 
                id={category.id} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Top restaurant chains */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Top Restaurant Chains</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.slice(0, 4).map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id} 
                {...restaurant} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Special Offers Banner */}
      <TopOffersBanner />
      
      {/* All Restaurants */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">All Restaurants Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard 
                key={restaurant.id} 
                {...restaurant} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* App Features Section */}
      <AppFeatures />
      
      {/* Download App Section */}
      <DownloadApp />
      
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <Button 
          className="fixed bottom-8 right-8 rounded-full h-12 w-12 p-0 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
