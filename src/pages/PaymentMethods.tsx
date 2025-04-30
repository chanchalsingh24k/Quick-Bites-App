import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMethods = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button onClick={() => navigate(-1)} className="mb-6 text-orange-500 hover:underline">&larr; Back to Profile</button>
        <h1 className="text-4xl font-bold text-center mb-8">Payment Methods</h1>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <span>Visa **** 1234</span>
              <button className="text-red-500 hover:underline text-sm">Remove</button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded">
              <span>Mastercard **** 5678</span>
              <button className="text-red-500 hover:underline text-sm">Remove</button>
            </div>
          </div>
          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Add New Card</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods; 