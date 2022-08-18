const PRODUCTS = [
  {
    id: 1,
    name: "Carrots 10kg",
    price: 20,
    image: require("../assets/product_images/carrots.jpeg"),
    description:
      "These are organic carrots, grown by the best farmers in the region with the best interests of their consumers at heart. They are sold in 10kg sacks and you are guaranteed the best quality and freshness. ",
  },
  {
    id: 2,
    name: "Lettuce 1kg",
    price: 3,
    image: require("../assets/product_images/lettuce.jpeg"),
    description:
      "Fresh farm produce delivered to your doorstep within 24 hours. We are committed to providing you with the freshest and best quality produce.",
  },
  {
    id: 3,
    name: "Tomatoes 10kg",
    price: 12,
    image: require("../assets/product_images/tomatoes.jpeg"),
    description:
      "Fresh farm produce delivered to your doorstep within 24 hours. We are committed to providing you with the freshest and best quality produce.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
