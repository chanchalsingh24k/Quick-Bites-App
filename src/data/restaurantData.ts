
import { RestaurantCardProps } from "@/components/RestaurantCard";

export const restaurants: RestaurantCardProps[] = [
  {
    id: "1",
    name: "Burger King",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines: ["Burgers", "American"],
    rating: 4.2,
    deliveryTime: 29,
    priceForTwo: 350,
    discount: {
      text: "50% OFF up to ₹100",
      percentage: 50
    },
    promoted: true
  },
  {
    id: "2",
    name: "La Pino'z Pizza",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ox2io5jbiuqetl6vcdme",
    cuisines: ["Pizzas", "Italian"],
    rating: 4.0,
    deliveryTime: 25,
    priceForTwo: 400,
    discount: {
      text: "₹125 OFF",
      percentage: 25
    }
  },
  {
    id: "3",
    name: "Paradise Biryani",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c50lakbbnoexyvwcnj0t",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    rating: 4.3,
    deliveryTime: 35,
    priceForTwo: 500
  },
  {
    id: "4",
    name: "Meghana Foods",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wmwvf8m4hyo7h53rjq5o",
    cuisines: ["South Indian", "Andhra"],
    rating: 4.5,
    deliveryTime: 32,
    priceForTwo: 450,
    promoted: true
  },
  {
    id: "5",
    name: "Subway",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    cuisines: ["Healthy Food", "Salads", "Snacks"],
    rating: 4.0,
    deliveryTime: 28,
    priceForTwo: 350,
    discount: {
      text: "20% OFF",
      percentage: 20
    }
  },
  {
    id: "6",
    name: "McDonald's",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
    cuisines: ["Burgers", "Fast Food", "Desserts"],
    rating: 4.1,
    deliveryTime: 20,
    priceForTwo: 400,
    discount: {
      text: "FREE DELIVERY",
      percentage: 0
    }
  },
  {
    id: "7",
    name: "KFC",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["Fried Chicken", "Fast Food"],
    rating: 4.2,
    deliveryTime: 30,
    priceForTwo: 450,
    discount: {
      text: "FLAT 20% OFF",
      percentage: 20
    },
    promoted: true
  },
  {
    id: "8",
    name: "Domino's Pizza",
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m89fiv5p8v6xlnpwsqhm",
    cuisines: ["Pizzas", "Italian", "Pastas"],
    rating: 3.9,
    deliveryTime: 35,
    priceForTwo: 500
  }
];

export const menuCategories = [
  { id: "1", name: "Recommended" },
  { id: "2", name: "Burgers" },
  { id: "3", name: "Sides & Beverages" },
  { id: "4", name: "Chicken & Wraps" },
  { id: "5", name: "Value Meals" },
  { id: "6", name: "Desserts" }
];

export const menuItems = [
  {
    id: "101",
    name: "Whopper",
    description: "Our signature flame-grilled beef patty topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
    price: 249,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
    isVeg: false,
    bestSeller: true,
    categoryId: "1"
  },
  {
    id: "102",
    name: "Crispy Veg Burger",
    description: "Our signature veg patty, crispy on the outside and soft on the inside, topped with fresh lettuce and creamy mayonnaise.",
    price: 89,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/snx0zlmia81zarf0zxdv",
    isVeg: true,
    bestSeller: true,
    categoryId: "1"
  },
  {
    id: "103",
    name: "Chicken Fries",
    description: "Tender white meat chicken in a crunchy coating, seasoned with savory spices and herbs, shaped like fries.",
    price: 149,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fbrydyon14vkzlrodvg8",
    isVeg: false,
    categoryId: "1"
  },
  {
    id: "104",
    name: "Medium Fries",
    description: "Golden, crispy, thick-cut French fries, perfect for dipping.",
    price: 119,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rnseyaf8lc2bhurpllrn",
    isVeg: true,
    bestSeller: true,
    categoryId: "1"
  },
  {
    id: "201",
    name: "Chicken Whopper",
    description: "Our signature chicken patty topped with fresh lettuce, tomatoes, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
    price: 229,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ysauf4p2lkqe9gf2msjj",
    isVeg: false,
    bestSeller: true,
    categoryId: "2"
  },
  {
    id: "202",
    name: "Veg Whopper",
    description: "Our signature veg patty topped with fresh lettuce, tomatoes, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
    price: 209,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rhbxqa3g26ssn19yzoo7",
    isVeg: true,
    categoryId: "2"
  },
  {
    id: "203",
    name: "Double Cheese Burger",
    description: "Two flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun.",
    price: 199,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mliu7dshr4kco5r6kdrj",
    isVeg: false,
    categoryId: "2"
  },
  {
    id: "301",
    name: "Medium Fries",
    description: "Golden, crispy, thick-cut French fries, perfect for dipping.",
    price: 119,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rnseyaf8lc2bhurpllrn",
    isVeg: true,
    categoryId: "3"
  },
  {
    id: "302",
    name: "King Fries",
    description: "Extra-large portion of golden, crispy, thick-cut French fries.",
    price: 139,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rnseyaf8lc2bhurpllrn",
    isVeg: true,
    categoryId: "3"
  },
  {
    id: "303",
    name: "Pepsi Medium",
    description: "Refreshing cola beverage",
    price: 109,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/m4uenxyybtsajka3yrs3",
    isVeg: true,
    categoryId: "3"
  },
  {
    id: "401",
    name: "Chicken Tandoori Wrap",
    description: "Flame-grilled chicken thigh meat marinated in tandoori spices with fresh vegetables and mayonnaise, wrapped in a flour tortilla.",
    price: 209,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/myqvlzzbflmknuox4bb7",
    isVeg: false,
    bestSeller: true,
    categoryId: "4"
  },
  {
    id: "402",
    name: "Crispy Chicken Wrap",
    description: "Crispy fried chicken with fresh lettuce and creamy mayonnaise, wrapped in a flour tortilla.",
    price: 179,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jmkcxwmrtgbj9zyaj0xt",
    isVeg: false,
    categoryId: "4"
  },
  {
    id: "501",
    name: "Crispy Veg Combo",
    description: "Crispy Veg Burger + Medium Fries + Medium Pepsi",
    price: 249,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/rcrnzwpgd9mhcgsai9sl",
    isVeg: true,
    categoryId: "5"
  },
  {
    id: "502",
    name: "Chicken Whopper Meal",
    description: "Chicken Whopper + Medium Fries + Medium Pepsi",
    price: 399,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ude7vyygxgwyyskfu3nb",
    isVeg: false,
    bestSeller: true,
    categoryId: "5"
  },
  {
    id: "601",
    name: "Chocolate Thick Shake",
    description: "Creamy chocolate milkshake topped with whipped cream",
    price: 169,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mdpgwoduwu7nxbryovh0",
    isVeg: true,
    categoryId: "6"
  },
  {
    id: "602",
    name: "Brownie Sundae",
    description: "Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce",
    price: 159,
    image: "https://web.archive.org/web/20230709130311im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mdyaexhewsspy67llyfm",
    isVeg: true,
    bestSeller: true,
    categoryId: "6"
  }
];
