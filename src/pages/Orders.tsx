import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 1,
      restaurant: "Paradise Biryani",
      items: ["Chicken Biryani", "Raita"],
      total: 349,
      status: "Delivered",
      date: "2024-02-20",
    },
    {
      id: 2,
      restaurant: "McDonald's",
      items: ["Big Mac", "French Fries", "Coke"],
      total: 299,
      status: "In Progress",
      date: "2024-02-21",
    },
    {
      id: 3,
      restaurant: "Domino's Pizza",
      items: ["Pepperoni Pizza", "Garlic Bread"],
      total: 499,
      status: "Cancelled",
      date: "2024-02-19",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Orders</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {orders.map((order) => (
                <div key={order.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{order.restaurant}</h3>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      {order.items.join(", ")}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Amount:</span>
                      <span className="text-lg font-semibold">₹{order.total}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-4">
                    <button className="text-sm text-orange-600 hover:text-orange-700">
                      View Details
                    </button>
                    {order.status === "Delivered" && (
                      <button className="text-sm text-orange-600 hover:text-orange-700">
                        Reorder
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders; 