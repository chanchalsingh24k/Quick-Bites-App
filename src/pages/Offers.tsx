import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag, Percent, Star, Truck } from 'lucide-react';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  code: string;
  type: 'percentage' | 'fixed' | 'free-delivery';
  icon: React.ReactNode;
  bgColor: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "50% OFF up to ₹100",
    description: "On your first order",
    discount: "50%",
    validUntil: "Valid till 30th April 2024",
    code: "WELCOME50",
    type: "percentage",
    icon: <Percent className="h-6 w-6" />,
    bgColor: "bg-orange-100"
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "On orders above ₹199",
    discount: "FREE",
    validUntil: "Valid till 31st May 2024",
    code: "FREESHIP",
    type: "free-delivery",
    icon: <Truck className="h-6 w-6" />,
    bgColor: "bg-green-100"
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    description: "On selected items",
    discount: "BOGO",
    validUntil: "Valid till 15th May 2024",
    code: "BOGO50",
    type: "fixed",
    icon: <Tag className="h-6 w-6" />,
    bgColor: "bg-blue-100"
  },
  {
    id: 4,
    title: "20% OFF on Premium",
    description: "For Premium members",
    discount: "20%",
    validUntil: "Valid till 30th June 2024",
    code: "PREMIUM20",
    type: "percentage",
    icon: <Star className="h-6 w-6" />,
    bgColor: "bg-purple-100"
  }
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Offers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
              onClick={() => setSelectedOffer(offer)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {offer.icon}
                    <h2 className="text-xl font-semibold text-gray-900">{offer.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {offer.validUntil}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Code:</span>
                    <code className="bg-white px-2 py-1 rounded text-sm font-mono">{offer.code}</code>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(offer.code);
                      }}
                      className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {offer.discount}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offer Details Modal */}
        {selectedOffer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {selectedOffer.icon}
                  <h2 className="text-xl font-semibold">{selectedOffer.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedOffer.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                {selectedOffer.validUntil}
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-2">How to use:</p>
                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                  <li>Add items to your cart</li>
                  <li>Go to checkout</li>
                  <li>Enter code: <code className="bg-white px-2 py-1 rounded font-mono">{selectedOffer.code}</code></li>
                  <li>Apply the offer</li>
                </ol>
              </div>
              <Link
                to="/"
                className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => setSelectedOffer(null)}
              >
                Start Ordering
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;
  