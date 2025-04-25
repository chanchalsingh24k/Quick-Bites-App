
import { Button } from './ui/button';

const DownloadApp = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get the Foodie App</h2>
            <p className="text-gray-600 mb-6">
              Download the app for faster ordering, exclusive mobile-only offers, and real-time order tracking. Available for iOS and Android devices.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
                <img 
                  src="https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" 
                  alt="App Store" 
                  className="h-8"
                />
              </Button>
              
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100">
                <img 
                  src="https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" 
                  alt="Google Play" 
                  className="h-8"
                />
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 font-medium">No minimum order value</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 font-medium">Live order tracking</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" 
              alt="Foodie App" 
              className="mx-auto w-full max-w-xs md:max-w-md"
            />
            
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[70%] rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_640/rng/md/carousel/production/faxdufvkcllzse67eqry" 
                alt="App Screenshot" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
