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
    name: "PNY GeForce GTX 1060 6GB",
    price: 79,
    image: require("../assets/product_images/graphics.jpeg"),
    description:
      "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  },
  {
    id: 3,
    name: "Acer Predator Triton",
    price: 979,
    image: require("../assets/product_images/laptop.jpg"),
    description:
      "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
