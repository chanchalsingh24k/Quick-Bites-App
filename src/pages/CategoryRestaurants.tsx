import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurantData';

const foodCategories = [
  { id: "1", name: "Pizza" },
  { id: "2", name: "Burger" },
  { id: "3", name: "Biryani" },
  { id: "4", name: "Rolls" },
  { id: "5", name: "Chicken" },
  { id: "6", name: "Thali" },
  { id: "7", name: "Chinese" },
  { id: "8", name: "Desserts" },
];

const CategoryRestaurants = () => {
  const { id } = useParams();
  const category = foodCategories.find(cat => cat.id === id);

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Category not found</div>;
  }

  // Filter restaurants that serve this category
  const filteredRestaurants = restaurants.filter(r =>
    r.cuisines.some(cuisine =>
      cuisine.toLowerCase().includes(category.name.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-4xl font-bold mb-6">{category.name} Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredRestaurants.length > 0 ? filteredRestaurants.map(r => (
          <div key={r.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={r.image} alt={r.name} className="w-40 h-40 object-cover rounded mb-2" />
            <h3 className="font-bold text-lg mb-1">{r.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{r.cuisines.join(', ')}</p>
            <span className="font-semibold text-orange-600">₹{r.priceForTwo} for two</span>
          </div>
        )) : <div className="col-span-full text-center text-gray-500">No restaurants found for this category.</div>}
      </div>
    </div>
  );
};

export default CategoryRestaurants; 