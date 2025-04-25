import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import RestaurantDetail from "./pages/RestaurantDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PizzaCollection from "@/components/PizzaCollection";
import Corporate from "./pages/Corporate";
import SignIn from "./pages/SignIn";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/restaurants/:id" element={<RestaurantDetail />} />
              <Route path="/pizzacollection" element={<PizzaCollection />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/help" element={<Help />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
