import React from "react";
import "./PizzaCollection.css";

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const PizzaCollection: React.FC = () => {
  const pizzas: Pizza[] = [
    {
      id: 1,
      name: "Margherita",
      description: "Classic cheese and tomato pizza",
      price: "₹299",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Loaded with pepperoni slices",
      price: "₹399",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Veggie Supreme",
      description: "Topped with fresh veggies",
      price: "₹349",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "BBQ Chicken",
      description: "Smoky BBQ chicken pizza",
      price: "₹449",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="pizza-collection">
      <h1 className="collection-title">Pizza Collection</h1>
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <h2 className="pizza-name">{pizza.name}</h2>
            <p className="pizza-description">{pizza.description}</p>
            <p className="pizza-price">{pizza.price}</p>
            <button className="order-button">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaCollection;