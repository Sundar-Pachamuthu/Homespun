import p1_img from "./product_1.jpg";
import p2_img from "./product_2.jpg";
import p6_img from "./product_14.jpg";
import p11_img from "./product_26.jpg";
import p5_img from "./product_13.jpg"
let new_collections = [
  {
    id: 6,
    name: "Rice & Dhall",
    category: "breakfast",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 5,
    name: "Rice with VEG Sambar & Chutny",
    category: "breakfast",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  { 
    id: 2,
    name: "Meals",
    category: "lunch",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 1,
    name: "Chicken Biryani",
    category: "lunch",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 11,
    name: "Chapathi with Veg Kuruma",
    category: "dinner",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default new_collections;
