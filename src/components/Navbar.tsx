import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, User, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const Navbar = () => {
  const locations = [
    'New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh'
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location, setLocation] = useState('New Delhi');
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Location */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/017/192/997/non_2x/qb-logo-monogram-letter-qb-logo-design-qb-letter-logo-design-vector.jpgx" 
              alt="Foodie Logo" 
              className="h-9 w-auto" 
            />
          </Link>
          
          {/* Location Dropdown */}
          <div className="relative hidden md:flex items-center text-gray-700 font-medium cursor-pointer">
            <button 
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="flex items-center space-x-1"
            >
              <span>{location}</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </button>
            {isLocationDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-40 z-50">
                {locations.map((loc, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/corporate" className="hover:text-primary transition">QuickBite Corporate</Link>
          <Link to="/offers" className="hover:text-primary transition">
            Offers <sup className="text-[10px] text-orange-500 font-bold ml-1">NEW</sup>
          </Link>
          <Link to="/help" className="hover:text-primary transition">Help</Link>
          {!isLoggedIn && (
            <Link to="/signin" className="hover:text-primary transition">Sign In</Link>
          )}
        </div>

        {/* Search + Cart + User */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search */}
          <Button 
            variant="ghost" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Desktop Search */}
          <div className={`${isSearchOpen ? 'flex' : 'hidden'} md:flex absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-3 md:py-0`}>
            <div className="relative w-full md:w-[400px]">
              <Input
                placeholder="Search for restaurants and food"
                className="pr-8 border-gray-300 focus:border-primary"
              />
              <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>

          {/* Auth */}
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 p-1">
                  <User className="h-6 w-6" />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="flex flex-col space-y-1">
                  <Link to="/profile" className="px-4 py-2 hover:bg-gray-100 rounded-md">Profile</Link>
                  <Link to="/orders" className="px-4 py-2 hover:bg-gray-100 rounded-md">Orders</Link>
                  <Link to="/favorites" className="px-4 py-2 hover:bg-gray-100 rounded-md">Favorites</Link>
                  <Button 
                    variant="ghost" 
                    className="justify-start px-4 py-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Button 
              variant="default" 
              onClick={() => setIsLoggedIn(true)}
              className="bg-primary text-white hover:bg-primary/90"
            >
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
