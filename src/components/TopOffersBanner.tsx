
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const TopOffersBanner = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get huge savings with Foodie exclusive offers</h2>
            <p className="text-gray-600 mb-6">
              Order from your favorite restaurants and get exclusive discounts, special combo deals, and limited-time offers available only on Foodie.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/offers">
                View All Offers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="p-4">
                <div className="text-primary font-bold text-lg mb-1">50% OFF</div>
                <div className="text-gray-700 text-sm mb-2">Up to ₹100</div>
                <div className="text-xs text-gray-500">Valid on orders above ₹299</div>
              </div>
              <div className="bg-orange-100 p-3 text-primary text-xs font-semibold">
                USE CODE: WELCOME50
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="p-4">
                <div className="text-primary font-bold text-lg mb-1">FREE DELIVERY</div>
                <div className="text-gray-700 text-sm mb-2">Save up to ₹30</div>
                <div className="text-xs text-gray-500">Valid on orders above ₹199</div>
              </div>
              <div className="bg-orange-100 p-3 text-primary text-xs font-semibold">
                USE CODE: FREEDEL
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="p-4">
                <div className="text-primary font-bold text-lg mb-1">₹125 OFF</div>
                <div className="text-gray-700 text-sm mb-2">On first 3 orders</div>
                <div className="text-xs text-gray-500">Valid on orders above ₹499</div>
              </div>
              <div className="bg-orange-100 p-3 text-primary text-xs font-semibold">
                USE CODE: TREAT125
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <div className="p-4">
                <div className="text-primary font-bold text-lg mb-1">20% OFF</div>
                <div className="text-gray-700 text-sm mb-2">Up to ₹150</div>
                <div className="text-xs text-gray-500">Valid on orders above ₹399</div>
              </div>
              <div className="bg-orange-100 p-3 text-primary text-xs font-semibold">
                USE CODE: SPECIAL20
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOffersBanner;
