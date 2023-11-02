const products = [
  {
    name: "Velvet Rose Chamomile Herbal Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 177,
    rating: 3,
    category: "Decaf",
  },
  {
    name: "Midsummer Night's Dream Green Tea",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 237,
    rating: 2,
    category: "Green Tea",
  },
  {
    name: "Mango Tango Oolong Fusion",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 56,
    rating: 1,
    category: "Green Tea",
  },
  {
    name: "Golden Sunrise Rooibos Infusion",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 104,
    rating: 5,
    category: "Herbal Tea",
  },
  {
    name: "Zen Garden Matcha Green Tea",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 193,
    rating: 5,
    category: "Chai Tea",
  },
  {
    name: "Lavender Eucalyptus Relaxation Blend",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 3,
    numReviews: 117,
    rating: 3,
    category: "Herbal Tea",
  },
  {
    name: "Spiced Apple Pie Chai Tea",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 179,
    rating: 3,
    category: "Decaf",
  },
  {
    name: "Himalayan Honey Darjeeling Black Tea",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 3,
    numReviews: 272,
    rating: 3,
    category: "Chai Tea",
  },
  {
    name: "Tropical Paradise Coconut Oolong",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 3,
    numReviews: 169,
    rating: 5,
    category: "Black Tea",
  },
  {
    name: "Autumn Harvest Pumpkin Spice Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 216,
    rating: 3,
    category: "Green Tea",
  },
  {
    name: "Blueberry Bliss White Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 118,
    rating: 2,
    category: "Chai Tea",
  },
  {
    name: "Mystic Mint Lavender Infusion",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 14,
    rating: 1,
    category: "Green Tea",
  },
  {
    name: "Citrus Serenade Green Tea",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 3,
    numReviews: 193,
    rating: 3,
    category: "Herbal Tea",
  },
  {
    name: "Wild Berry Hibiscus Delight",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 38,
    rating: 2,
    category: "Green Tea",
  },
  {
    name: "Chocolate Chai Indulgence",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 34,
    rating: 4,
    category: "Chai Tea",
  },
  {
    name: "Tranquil Lemon Ginger Herbal Tea",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 60,
    rating: 3,
    category: "Herbal Tea",
  },
  {
    name: "Jasmine Pearl Elegance",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 122,
    rating: 4,
    category: "Green Tea",
  },
  {
    name: "Emerald Forest Sencha Blend",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 293,
    rating: 2,
    category: "Decaf",
  },
  {
    name: "Sweet Almond Amaretto Black Tea",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 153,
    rating: 5,
    category: "Green Tea",
  },
  {
    name: "Cozy Campfire S'mores Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 160,
    rating: 2,
    category: "Decaf",
  },
  {
    name: "Velvet Rose Chamomile Herbal Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 184,
    rating: 3,
    category: "Chai Tea",
  },
  {
    name: "Midsummer Night's Dream Green Tea",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 267,
    rating: 5,
    category: "Herbal Tea",
  },
  {
    name: "Mango Tango Oolong Fusion",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 208,
    rating: 1,
    category: "Black Tea",
  },
  {
    name: "Golden Sunrise Rooibos Infusion",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 3,
    numReviews: 12,
    rating: 2,
    category: "Chai Tea",
  },
  {
    name: "Zen Garden Matcha Green Tea",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 229,
    rating: 5,
    category: "Chai Tea",
  },
  {
    name: "Lavender Eucalyptus Relaxation Blend",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 48,
    rating: 4,
    category: "Black Tea",
  },
  {
    name: "Spiced Apple Pie Chai Tea",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/1624554/pexels-photo-1624554.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 2,
    numReviews: 83,
    rating: 2,
    category: "Black Tea",
  },
  {
    name: "Himalayan Honey Darjeeling Black Tea",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 82,
    rating: 3,
    category: "Black Tea",
  },
  {
    name: "Tropical Paradise Coconut Oolong",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 249,
    rating: 1,
    category: "Herbal Tea",
  },
  {
    name: "Autumn Harvest Pumpkin Spice Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 286,
    rating: 2,
    category: "Black Tea",
  },
  {
    name: "Blueberry Bliss White Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 269,
    rating: 1,
    category: "Green Tea",
  },
  {
    name: "Mystic Mint Lavender Infusion",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 295,
    rating: 2,
    category: "Black Tea",
  },
  {
    name: "Citrus Serenade Green Tea",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 149,
    rating: 1,
    category: "Chai Tea",
  },
  {
    name: "Wild Berry Hibiscus Delight",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 188,
    rating: 1,
    category: "Herbal Tea",
  },
  {
    name: "Chocolate Chai Indulgence",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 283,
    rating: 3,
    category: "Black Tea",
  },
  {
    name: "Tranquil Lemon Ginger Herbal Tea",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 233,
    rating: 1,
    category: "Decaf",
  },
  {
    name: "Jasmine Pearl Elegance",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 5,
    numReviews: 62,
    rating: 5,
    category: "Herbal Tea",
  },
  {
    name: "Emerald Forest Sencha Blend",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 84,
    rating: 2,
    category: "Green Tea",
  },
  {
    name: "Sweet Almond Amaretto Black Tea",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 287,
    rating: 5,
    category: "Green Tea",
  },
  {
    name: "Cozy Campfire S'mores Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 199,
    rating: 2,
    category: "Herbal Tea",
  },
  {
    name: "Velvet Rose Chamomile Herbal Tea",
    description:
      "Delicate white tea infused with luscious blueberries for a soothing, fruity escape.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 95,
    rating: 2,
    category: "Black Tea",
  },
  {
    name: "Midsummer Night's Dream Green Tea",
    description:
      "A calming blend of mint and lavender, perfect for moments of reflection and relaxation.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 209,
    rating: 5,
    category: "Herbal Tea",
  },
  {
    name: "Mango Tango Oolong Fusion",
    description:
      "Green tea kissed by the vibrant flavors of citrus, creating a refreshing and invigorating brew.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 72,
    rating: 1,
    category: "Herbal Tea",
  },
  {
    name: "Golden Sunrise Rooibos Infusion",
    description:
      "A harmonious mix of wild berries and hibiscus, a burst of flavor in every sip.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 224,
    rating: 3,
    category: "Decaf",
  },
  {
    name: "Zen Garden Matcha Green Tea",
    description:
      "Indulge in the rich blend of chocolate and chai spices, a decadent treat for your taste buds.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/3368288/pexels-photo-3368288.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 6,
    numReviews: 69,
    rating: 4,
    category: "Herbal Tea",
  },
  {
    name: "Lavender Eucalyptus Relaxation Blend",
    description:
      "Unwind with the soothing combination of lemon and ginger, a perfect way to de-stress.",
    price: 6.99,
    image:
      "https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 1,
    numReviews: 50,
    rating: 2,
    category: "Chai Tea",
  },
  {
    name: "Spiced Apple Pie Chai Tea",
    description:
      "Elegantly fragrant jasmine pearls, a floral symphony in a cup.",
    price: 14.99,
    image:
      "https://images.pexels.com/photos/5501118/pexels-photo-5501118.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 2,
    numReviews: 207,
    rating: 4,
    category: "Black Tea",
  },
  {
    name: "Himalayan Honey Darjeeling Black Tea",
    description:
      "Sencha green tea with notes of the emerald forest, a taste of nature's tranquility.",
    price: 8.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 4,
    numReviews: 54,
    rating: 1,
    category: "Green Tea",
  },
  {
    name: "Tropical Paradise Coconut Oolong",
    description:
      "A delightful black tea with the sweet essence of almond and a hint of amaretto sophistication.",
    price: 17.99,
    image:
      "https://images.pexels.com/photos/39347/tea-farmhouse-hand-fresh-39347.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 2,
    numReviews: 25,
    rating: 2,
    category: "Black Tea",
  },
  {
    name: "Autumn Harvest Pumpkin Spice Rooibos",
    description:
      "Experience the warmth of a campfire with this s'mores-inspired rooibos blend, a cozy delight.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/2582652/pexels-photo-2582652.jpeg?auto=compress&cs=tinysrgb&w=800",
    countInStock: 0,
    numReviews: 186,
    rating: 1,
    category: "Decaf",
  },
];

export default products;
