import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, User, LogIn, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import SearchResults from './SearchResults';

const cities = [
  'New Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow'
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location, setLocation] = useState('New Delhi');
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [locationSearchQuery, setLocationSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(locationSearchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchFocus = () => {
    setShowSearchResults(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Location */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" 
              alt="Foodie Logo" 
              className="h-9 w-auto" 
            />
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <div className="hidden md:flex items-center text-gray-700 font-medium cursor-pointer hover:text-primary transition">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
                <ChevronDown className="ml-1 h-4 w-4 text-primary" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    placeholder="Search for your city"
                    value={locationSearchQuery}
                    onChange={(e) => setLocationSearchQuery(e.target.value)}
                    className="pr-8"
                  />
                  <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2"
                      onClick={() => {
                        setLocation(city);
                        setLocationSearchQuery('');
                      }}
                    >
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{city}</span>
                    </button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/corporate" className="hover:text-primary transition">Swiggy Corporate</Link>
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
          <div 
            ref={searchRef}
            className={`${isSearchOpen ? 'flex' : 'hidden'} md:flex absolute md:relative left-0 top-full md:top-auto w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-3 md:py-0`}
          >
            <div className="relative w-full md:w-[400px]">
              <Input
                placeholder="Search for restaurants and food"
                className="pr-8 border-gray-300 focus:border-primary"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
              />
              <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              <SearchResults 
                searchQuery={searchQuery}
                isVisible={showSearchResults}
                onClose={() => setShowSearchResults(false)}
              />
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
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  👤
                </span>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Orders
                  </Link>
                  <Link
                    to="/favorites"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Favorites
                  </Link>
                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      setIsLoggedIn(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
