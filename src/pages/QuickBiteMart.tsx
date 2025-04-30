import React from 'react';

const groceryItems = [
  {
    id: 1,
    name: 'Amul Milk 1L',
    image: 'https://www.jiomart.com/images/product/original/590002686/amul-gold-full-cream-milk-1-l-pouch-product-images-o590002686-p590049228-0-202409131647.jpg',
    price: 60,
  },
  {
    id: 2,
    name: 'Fresh Bananas (1 Dozen)',
    image: 'https://www.lovefoodhatewaste.com/sites/default/files/styles/open_graph_image/public/2022-07/Bananas.jpg.webp?itok=-9atP-ZB',
    price: 50,
  },
  {
    id: 3,
    name: 'Aashirvaad Atta 5kg',
    image: 'https://cdn.shopaccino.com/edible-smart/products/aashirvaad-multigrain-843596_l.jpg?v=559',
    price: 250,
  },
  {
    id: 4,
    name: 'Tata Salt 1kg',
    image: 'https://m.media-amazon.com/images/I/614mm2hYHyL.jpg',
    price: 25,
  },
  {
    id: 5,
    name: 'Fortune Sunflower Oil 1L',
    image: 'https://gropharm.in/wp-content/uploads/2021/04/fortune.jpg',
    price: 140,
  },
  {
    id: 6,
    name: 'Maggi Noodles 6 Pack',
    image: 'https://www.indianmarketus.com/cdn/shop/products/71OPa99tUPL._SL1461__1_2048x2048.jpg?v=1573269798',
    price: 72,
  },
  {
    id: 7,
    name: 'Parle-G Biscuits 800g',
    image: 'https://bazaar5.com/image/cache/catalog/pro/product/10015/parle-g-original-glucose-biscuits-800-g-product-images-o490008739-p490008739-0-202203170454-600x315w.jpg',
    price: 60,
  },
  {
    id: 8,
    name: 'Britannia Bread 400g',
    image: 'https://www.bigbasket.com/media/uploads/p/xxl/40092241_8-britannia-brown-bread-with-goodness-of-wheat-enriched-with-vitamins.jpg',
    price: 40,
  },
  {
    id: 9,
    name: 'Amul Curd 400g',
    image: 'https://media.starquik.com/catalog/product/SQ110272.jpg',
    price: 45,
  },
  {
    id: 10,
    name: 'Tropicana Orange Juice 1L',
    image: 'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2019-09-02/tropicana_juicy_orange_1ltr_1.jpg',
    price: 110,
  },
  {
    id: 11,
    name: 'Onions 1kg',
    image: 'https://m.media-amazon.com/images/I/51DJ-9xkuQL.jpg',
    price: 30,
  },
  {
    id: 12,
    name: 'Tomatoes 1kg',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvH_VXFkh1BmlY1tX1eblIv14jnhyYtbRMA&s',
    price: 35,
  },
  {
    id: 13,
    name: 'Potatoes 1kg',
    image: 'https://m.media-amazon.com/images/I/41QKCkQ2A5L._AC_UF1000,1000_QL80_.jpg',
    price: 25,
  },
  {
    id: 14,
    name: 'Dawat Basmati Rice 1kg',
    image: 'https://rukminim2.flixcart.com/image/850/1000/kq5iykw0/rice/7/z/n/white-rozana-super-na-basmati-rice-pouch-daawat-original-imag48ftsv6fxfvd.jpeg?q=20&crop=false',
    price: 120,
  },
  {
    id: 15,
    name: 'Haldiram Namkeen 200g',
    image: 'https://v4msupermarket.com/wp-content/uploads/2021/07/71-YET7VuyL._SX522_.png',
    price: 55,
  },
  {
    id: 16,
    name: 'Kissan Mixed Fruit Jam 500g',
    image: 'https://m.media-amazon.com/images/I/51NJJNAATTL._AC_UF894,1000_QL80_.jpg',
    price: 120,
  },
  {
    id: 17,
    name: 'Dettol Handwash 200ml',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnpghqdKZqAhewLkayGr1CJeQ_xCIfCrfFA&s',
    price: 45,
  },
  {
    id: 18,
    name: 'Colgate Toothpaste 200g',
    image: 'https://noworry.in/cdn/shop/files/Colgate-MaxFresh-150g-Toothpaste-Red-Gel-Paste-with-Menthol--45056551846209.jpg?v=1728461155',
    price: 90,
  },
  {
    id: 19,
    name: 'Dove Soap 100g',
    image: 'https://m.media-amazon.com/images/I/71f5+Dw8TBL.jpg',
    price: 40,
  },
  {
    id: 20,
    name: 'Surf Excel Detergent 500g',
    image: 'https://m.media-amazon.com/images/I/619HRPW3elL._AC_UF1000,1000_QL80_.jpg',
    price: 65,
  },
  // Add more items if needed
];

const QuickBiteMart = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">QuickBite Mart - Instant Grocery Delivery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {groceryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-4">
              <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-full mb-4" />
              <h3 className="text-lg font-semibold mb-1 text-center">{item.name}</h3>
              <div className="text-orange-500 font-bold mb-2">₹{item.price}</div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-200">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickBiteMart; 