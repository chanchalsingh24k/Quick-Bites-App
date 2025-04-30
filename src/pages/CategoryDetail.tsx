import { useParams } from 'react-router-dom';
import { menuItems } from '../data/restaurantData';

const foodCategories = [
  { id: "1", name: "Pizza", image: "https://c4.wallpaperflare.com/wallpaper/872/124/875/pizza-dish-cheese-pastries-wallpaper-preview.jpg" },
  { id: "2", name: "Burger", image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6HASPARCZHYNN4XTUYT7H6PTE.jpg&w=1600&h=900" },
  { id: "3", name: "Biryani", image: "https://pipingpotcurry.com/wp-content/uploads/2019/09/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg" },
  { id: "4", name: "Rolls", image: "https://feenix.co.in/wp-content/uploads/2022/07/veg-spring-roll.jpg" },
  { id: "5", name: "Chicken", image: "https://thebigmansworld.com/wp-content/uploads/2024/11/air-fryer-fried-chicken-recipe.jpg" },
  { id: "6", name: "Thali", image: "https://en-chatelaine.mblycdn.com/ench/resized/2022/03/900x900/thali-feature.jpg" },
  { id: "7", name: "Chinese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSodh2_bz3T_LLA16yP9WdpyAoAUkC5-TdA&s" },
  { id: "8", name: "Desserts", image: "https://www.acouplecooks.com/wp-content/uploads/2022/02/Lava-Cake-005s.jpg" },
];

// Map category id to keyword(s) for filtering
const categoryKeywords = {
  '1': ['pizza'],
  '2': ['burger'],
  '3': ['biryani'],
  '4': ['roll'],
  '5': ['chicken'],
  '6': ['thali'],
  '7': ['chinese', 'noodle', 'manchurian'],
  '8': ['dessert', 'sundae', 'shake', 'brownie', 'cake'],
};

const CategoryDetail = () => {
  const { id } = useParams();
  const category = foodCategories.find((cat) => cat.id === id);
  const keywords = categoryKeywords[id || ''] || [];

  // Filter menuItems by keywords in name or description
  const relatedItems = menuItems.filter(item =>
    keywords.some(keyword =>
      item.name.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
    )
  );

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Category not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <h1 className="text-4xl font-bold mb-6">{category.name}</h1>
      <img
        src={category.image}
        alt={category.name}
        className="rounded-2xl shadow-lg w-80 h-80 object-cover mb-6"
      />
      <h2 className="text-2xl font-semibold mb-4">Variety of Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {relatedItems.length > 0 ? relatedItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded mb-2" />
            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{item.description}</p>
            <span className="font-semibold text-orange-600">₹{item.price}</span>
          </div>
        )) : <div className="col-span-full text-center text-gray-500">No dishes found for this category.</div>}
      </div>
    </div>
  );
};

export default CategoryDetail; 