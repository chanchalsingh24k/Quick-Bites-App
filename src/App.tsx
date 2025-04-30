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

// ✅ Import your new Corporate component
import Corporate from "./pages/Corporate"; 

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
              <Route path="/corporate" element={<Corporate />} /> {/* ✅ Updated to use Corporate */}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
