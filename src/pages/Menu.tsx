import React, { useState } from 'react';
import { restaurants } from '@/data/restaurantData';
import { RestaurantCardProps } from "@/components/RestaurantCard";
import { useCart } from "../context/CartContext";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian: boolean;
  spicyLevel: number;
  restaurantId: string;  // Changed to string to match RestaurantCardProps
}

// Sample food items since they're not exported from restaurantData
const foodItems: FoodItem[] = [
  // Pizza Category
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh tomatoes, mozzarella, basil, and olive oil",
    price: 299,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pizza",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "2"
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Loaded with pepperoni, mozzarella cheese, and Italian herbs",
    price: 449,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pizza",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "8"
  },

  // Burgers Category
  {
    id: 3,
    name: "Classic Whopper",
    description: "Flame-grilled beef patty with fresh lettuce, tomatoes, mayo, and pickles",
    price: 249,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Burgers",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "1"
  },
  {
    id: 4,
    name: "Big Mac",
    description: "Two beef patties, special sauce, lettuce, cheese, pickles, onions",
    price: 199,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Burgers",
    isVegetarian: false,
    spicyLevel: 0,
    restaurantId: "6"
  },

  // Biryani Category
  {
    id: 5,
    name: "Paradise Special Biryani",
    description: "Aromatic basmati rice with tender meat, exotic spices, and saffron",
    price: 349,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Biryani",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "3"
  },
  {
    id: 6,
    name: "Veg Biryani",
    description: "Fragrant rice with mixed vegetables, herbs, and aromatic spices",
    price: 299,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Biryani",
    isVegetarian: true,
    spicyLevel: 1,
    restaurantId: "3"
  },

  // Chicken Category
  {
    id: 7,
    name: "Hot & Crispy Chicken",
    description: "KFC's signature chicken with 11 herbs and spices",
    price: 399,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "7"
  },
  {
    id: 8,
    name: "Andhra Chicken Curry",
    description: "Spicy Andhra style chicken curry with authentic spices",
    price: 299,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: false,
    spicyLevel: 3,
    restaurantId: "4"
  },

  // Healthy Food Category
  {
    id: 9,
    name: "Veggie Delite Sub",
    description: "Fresh vegetables on freshly baked bread with choice of sauces",
    price: 249,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Healthy Food",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "5"
  },
  {
    id: 10,
    name: "Greek Salad",
    description: "Fresh mixed greens, olives, feta cheese, and olive oil dressing",
    price: 199,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Healthy Food",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "5"
  },
  
  // Additional Pizza Options
  {
    id: 11,
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, BBQ sauce, red onions, and fresh cilantro",
    price: 399,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pizza",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "2"
  },
  {
    id: 12,
    name: "Veggie Supreme",
    description: "Loaded with bell peppers, mushrooms, olives, and onions",
    price: 349,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pizza",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "8"
  },

  // Additional Burger Options
  {
    id: 13,
    name: "Chicken Royale",
    description: "Crispy chicken fillet with lettuce and creamy mayo",
    price: 229,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Burgers",
    isVegetarian: false,
    spicyLevel: 0,
    restaurantId: "1"
  },
  {
    id: 14,
    name: "Veggie Burger",
    description: "Plant-based patty with fresh vegetables and signature sauce",
    price: 179,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Burgers",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "6"
  },

  // Additional Biryani Options
  {
    id: 15,
    name: "Hyderabadi Mutton Biryani",
    description: "Traditional mutton biryani with tender meat and aromatic rice",
    price: 399,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Biryani",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "3"
  },
  {
    id: 16,
    name: "Egg Biryani",
    description: "Flavorful rice with boiled eggs and special spice blend",
    price: 249,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Biryani",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "3"
  },

  // Additional Chicken Options
  {
    id: 17,
    name: "Butter Chicken",
    description: "Tender chicken in rich, creamy tomato-based gravy",
    price: 349,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "4"
  },
  {
    id: 18,
    name: "Chicken 65",
    description: "Spicy, deep-fried chicken with curry leaves and spices",
    price: 299,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 3,
    restaurantId: "4"
  },

  // Additional Healthy Food Options
  {
    id: 19,
    name: "Quinoa Bowl",
    description: "Nutrient-rich quinoa with roasted vegetables and tahini dressing",
    price: 279,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Healthy Food",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "5"
  },
  {
    id: 20,
    name: "Mediterranean Wrap",
    description: "Hummus, falafel, fresh vegetables, and tzatziki sauce",
    price: 229,
    image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Healthy Food",
    isVegetarian: true,
    spicyLevel: 0,
    restaurantId: "5"
  },

  // South Indian Category
  {
    id: 21,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutneys",
    price: 149,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: true,
    spicyLevel: 1,
    restaurantId: "4"
  },
  {
    id: 22,
    name: "Idli Sambar",
    description: "Soft steamed rice cakes served with lentil soup and coconut chutney",
    price: 99,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: true,
    spicyLevel: 1,
    restaurantId: "4"
  },
  {
    id: 23,
    name: "Rava Uttapam",
    description: "Savory semolina pancake topped with onions, tomatoes, and green chilies",
    price: 129,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: true,
    spicyLevel: 1,
    restaurantId: "4"
  },
  {
    id: 24,
    name: "Chicken Chettinad",
    description: "Spicy chicken curry in Chettinad style with coconut milk and curry leaves",
    price: 299,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: false,
    spicyLevel: 3,
    restaurantId: "4"
  },
  {
    id: 25,
    name: "Mysore Masala Dosa",
    description: "Special dosa with spicy red chutney spread and potato filling",
    price: 169,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "South Indian",
    isVegetarian: true,
    spicyLevel: 2,
    restaurantId: "4"
  },

  // Additional Chicken Dishes
  {
    id: 26,
    name: "Chicken Tikka",
    description: "Marinated and grilled chicken pieces with Indian spices",
    price: 349,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "4"
  },
  {
    id: 27,
    name: "Chicken Biryani",
    description: "Aromatic rice cooked with tender chicken and special spices",
    price: 299,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "3"
  },
  {
    id: 28,
    name: "Chicken Wings",
    description: "Crispy fried chicken wings with choice of sauces",
    price: 399,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "7"
  },
  {
    id: 29,
    name: "Chicken Korma",
    description: "Mild and creamy chicken curry with nuts and spices",
    price: 329,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 1,
    restaurantId: "4"
  },
  {
    id: 30,
    name: "Spicy Chicken Sandwich",
    description: "Grilled chicken with spicy mayo and fresh vegetables",
    price: 249,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Chicken",
    isVegetarian: false,
    spicyLevel: 2,
    restaurantId: "5"
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const { addToCart } = useCart();

  const categories = ['All', ...new Set(foodItems.map((item: FoodItem) => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? foodItems 
    : foodItems.filter((item: FoodItem) => item.category === selectedCategory);

  const handleImageError = (itemId: number) => {
    setImageError(prev => ({
      ...prev,
      [itemId]: true
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-4 overflow-x-auto">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item: FoodItem) => {
            const restaurant = restaurants.find((r: RestaurantCardProps) => r.id === item.restaurantId);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  {!imageError[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(item.id)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Image not available</span>
                    </div>
                  )}
                  {item.isVegetarian && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Veg
                    </div>
                  )}
                  {item.spicyLevel > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {Array(item.spicyLevel).fill('🌶️').join('')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-orange-500 font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>{restaurant?.name}</span>
                      <div className="flex items-center mt-1">
                        <span className="flex items-center text-yellow-400">
                          {'★'.repeat(Math.floor(restaurant?.rating || 0))}
                          <span className="text-gray-400">
                            {'★'.repeat(5 - Math.floor(restaurant?.rating || 0))}
                          </span>
                        </span>
                        <span className="ml-2">{restaurant?.rating}</span>
                      </div>
                    </div>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu; 