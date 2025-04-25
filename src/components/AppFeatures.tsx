
import { Truck, Clock, CreditCard, Utensils } from 'lucide-react';

const features = [
  {
    title: "Lightning-Fast Delivery",
    description: "Food delivered to your doorstep faster than you can say 'I'm hungry'.",
    icon: Truck
  },
  {
    title: "Live Order Tracking",
    description: "Know exactly where your order is with our real-time tracking system.",
    icon: Clock
  },
  {
    title: "Easy Payment Options",
    description: "Multiple payment methods available for a hassle-free experience.",
    icon: CreditCard
  },
  {
    title: "Wide Restaurant Selection",
    description: "From local favorites to international cuisines, we have it all.",
    icon: Utensils
  }
];

const AppFeatures = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Foodie?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering more than just food. We're delivering experiences, convenience, and satisfaction with every order.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
