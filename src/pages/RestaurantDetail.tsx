
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, UtensilsCrossed, PlusCircle, Bookmark, Share2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RestaurantCardProps } from '@/components/RestaurantCard';
import { restaurants, menuCategories, menuItems } from '@/data/restaurantData';
import { useToast } from '@/hooks/use-toast';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isVeg: boolean;
  bestSeller?: boolean;
  categoryId: string;
}

interface CartItem extends MenuItemProps {
  quantity: number;
}

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [restaurant, setRestaurant] = useState<RestaurantCardProps | undefined>();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    // Simulate fetching restaurant data
    const foundRestaurant = restaurants.find(r => r.id === id);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      
      // Set initial active category
      if (menuCategories.length > 0) {
        setActiveCategory(menuCategories[0].id);
      }
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [id]);

  const addToCart = (item: MenuItemProps) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        // If item already exists in cart, increase quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      } else {
        // If item is not in cart, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000
    });
  };

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading restaurant details...</p>
        </div>
      </div>
    );
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Restaurant Header */}
      <div className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="w-full md:w-60 h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold">{restaurant.name}</h1>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="text-gray-600">
                    <Bookmark className="h-4 w-4 mr-1" /> Save
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-600">
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-3">{restaurant.cuisines.join(", ")}</p>
              
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Connaught Place, New Delhi</span>
                <span className="mx-2">•</span>
                <span>2.5 km away</span>
              </div>
              
              <div className="flex flex-wrap gap-y-2">
                <div className="flex items-center mr-6">
                  <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded">
                    <Star className="h-3.5 w-3.5 mr-1" fill="white" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <span className="ml-1 text-sm text-gray-600">100+ ratings</span>
                </div>
                
                <div className="flex items-center mr-6">
                  <Clock className="h-4 w-4 mr-1 text-gray-600" />
                  <span className="text-sm">{restaurant.deliveryTime} mins</span>
                </div>
                
                <div className="flex items-center">
                  <UtensilsCrossed className="h-4 w-4 mr-1 text-gray-600" />
                  <span className="text-sm">₹{restaurant.priceForTwo} for two</span>
                </div>
              </div>
              
              {restaurant.discount && (
                <div className="mt-4 flex items-center">
                  <div className="bg-orange-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {restaurant.discount.text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-bold text-lg mb-4">Menu Categories</h2>
              <div className="space-y-2">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name} 
                    <span className="text-gray-400 text-xs ml-1">
                      ({menuItems.filter(item => item.categoryId === category.id).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="lg:w-2/4">
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {menuCategories.map((category) => {
                const categoryItems = menuItems.filter(item => item.categoryId === category.id);
                
                if (categoryItems.length === 0) return null;
                
                return (
                  <div 
                    key={category.id} 
                    id={`category-${category.id}`}
                    className="p-6"
                  >
                    <h2 className="font-bold text-xl mb-4">{category.name}</h2>
                    <div className="space-y-6">
                      {categoryItems.map((item) => (
                        <div key={item.id} className="flex">
                          <div className="flex-1 pr-4">
                            <div className="flex items-center">
                              {item.isVeg ? (
                                <div className="h-5 w-5 border border-green-600 flex items-center justify-center mr-2">
                                  <span className="h-3 w-3 rounded-full bg-green-600"></span>
                                </div>
                              ) : (
                                <div className="h-5 w-5 border border-red-600 flex items-center justify-center mr-2">
                                  <span className="h-3 w-3 rounded-full bg-red-600"></span>
                                </div>
                              )}
                              
                              <h3 className="font-medium">{item.name}</h3>
                              
                              {item.bestSeller && (
                                <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-sm">
                                  Bestseller
                                </span>
                              )}
                            </div>
                            
                            <div className="mt-1 mb-2">₹{item.price}</div>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                          
                          <div className="relative min-w-[100px] h-24 rounded-lg overflow-hidden">
                            {item.image ? (
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">No image</span>
                              </div>
                            )}
                            
                            <Button 
                              onClick={() => addToCart(item)}
                              className="absolute bottom-2 right-2 h-8 bg-white text-primary hover:bg-white/90 rounded-md shadow-md border border-gray-200"
                            >
                              <PlusCircle className="h-4 w-4" />
                              <span className="sr-only">Add to cart</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Cart Section */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="font-bold text-lg mb-4">Your Cart</h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 mb-2">Your cart is empty</p>
                  <p className="text-sm text-gray-400">Add items to get started!</p>
                </div>
              ) : (
                <>
                  <div className="max-h-80 overflow-y-auto mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
                        <div className="flex items-center">
                          {item.isVeg ? (
                            <div className="h-4 w-4 border border-green-600 flex items-center justify-center mr-2">
                              <span className="h-2 w-2 rounded-full bg-green-600"></span>
                            </div>
                          ) : (
                            <div className="h-4 w-4 border border-red-600 flex items-center justify-center mr-2">
                              <span className="h-2 w-2 rounded-full bg-red-600"></span>
                            </div>
                          )}
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="px-2 text-sm">x{item.quantity}</div>
                          <div className="w-16 text-right text-sm font-medium">₹{item.price * item.quantity}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className="font-medium">₹40</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Platform Fee</span>
                      <span className="font-medium">₹5</span>
                    </div>
                    <div className="flex justify-between font-bold mt-4 pt-4 border-t">
                      <span>Total</span>
                      <span>₹{cartTotal + 40 + 5}</span>
                    </div>
                    
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
