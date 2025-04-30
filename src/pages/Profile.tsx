import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Manage Payment Methods</h2>
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
  );
};

const Profile = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-3xl text-gray-500">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Chanchal Thakur</h2>
                <p className="text-gray-600">chanchalsingh062003@gmail.com</p>
              </div>
            </div>
            
            <div
              className="cursor-pointer bg-white rounded-xl shadow p-6 flex flex-col items-start hover:shadow-md transition border"
              onClick={() => navigate('/payment-methods')}
            >
              <div className="bg-orange-100 rounded-full p-3 mb-3">
                <svg width="24" height="24" fill="none" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>
              </div>
              <div className="font-bold text-lg mb-1">Easy Payment Options</div>
              <div className="text-gray-600 text-sm">Multiple payment methods available for a hassle-free experience.</div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue="Chanchal Thakur"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue="chanchalsingh062003@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    defaultValue="123 Main St, City"
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="emailNotifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    defaultChecked
                  />
                  <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="smsNotifications"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    defaultChecked
                  />
                  <label htmlFor="smsNotifications" className="ml-2 block text-sm text-gray-700">
                    SMS Notifications
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} />
      </div>
    </div>
  );
};

export default Profile; 