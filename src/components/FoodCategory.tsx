
import { Link } from 'react-router-dom';

export interface FoodCategoryProps {
  id: string;
  name: string;
  image: string;
}

const FoodCategory = ({ id, name, image }: FoodCategoryProps) => {
  return (
    <Link 
      to={`/category/${id}`}
      className="group block"
    >
      <div className="aspect-square overflow-hidden rounded-full border-2 border-gray-100 mb-2 transition-transform group-hover:scale-105">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-center font-medium text-gray-700 group-hover:text-primary transition-colors">
        {name}
      </h3>
    </Link>
  );
};

export default FoodCategory;
