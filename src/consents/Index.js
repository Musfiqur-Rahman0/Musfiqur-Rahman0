import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import img1 from "../assets/652e82cd70aa6522dd785109a455904c.png";
import img2 from "../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import img3 from "../assets/ps5-slim-goedkope-playstation_large 1.png";
import img4 from "../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import { FaBagShopping, FaDollarSign, FaShop } from "react-icons/fa6";
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";

export const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & lifeStyle",
  "Medicine",
  "Baby's & Toy's",
  "Health and beauty",
  "Groceries & pet's",
];
export const icons = [
  { icon: CiHeart, tooltip: "wishlist" },
  { icon: IoEyeOutline, tooltip: "show" },
];

export const newProduct = [
  {
    title: "Perfume",
    price: 29.99,
    description: "Gucci instence OUD EDP",
    image: img1,
    category: "electronics",
  },
  {
    title: "Speakers",
    price: 9.99,
    description: "Amazon wireless speakers!",
    image: img2,
    category: "electronics",
  },
  {
    title: "Play Station 5",
    price: 49.99,
    description: "Black and White version of the PS5 coming out on sale",
    image: img3,
    category: "electronics",
  },
  {
    title: "Women's Collections",
    price: 19.99,
    description: "Featured women collections that gives you another vipe",
    image: img4,
    category: "Cloths",
  },
];

export const colors = ["all", "white", "black", "blue", "gray", "red"];
export const prices = ["all", "0-49", "50-99", "100-149", "151-200", "above"];
export const fileredOption = [
  "all",
  "low - high",
  "high - low",
  "a - z",
  "z - a",
];

export const aboutus =
  "Welcome to Exclusive, your one-stop destination for high-quality products tailored to meet your needs. We are committed to providing an exceptional online shopping experience, offering a diverse range of items at competitive prices. Our mission is to bring convenience, reliability, and sustainability to your doorstep. With a focus on customer satisfaction, we prioritize fast delivery, secure payments, and outstanding support. Thank you for choosing us as your trusted shopping partner!";

export const sallers = 1232323;
export const monthlySale = 230000;
export const anunalSale = 298759457;
export const activeCustomers = 987594;

export const sales = [
  { sale: sallers, tip: "Sallers active on site ", icon: FaShop },
  { sale: monthlySale, tip: "Monthly Products sale", icon: FaDollarSign },
  {
    sale: activeCustomers,
    tip: "Customer active on our site",
    icon: FaBagShopping,
  },
  { sale: anunalSale, tip: "Anual gross sale in our site", icon: TbMoneybag },
];

export const value_convertor = (value) => {
  if (value < 1e3) return value;
  else if (value < 1e6) {
    return (value / 1e3).toFixed(1) + "K";
  } else if (value < 1e9) return (value / 1e6).toFixed(1) + "M";
  else {
    return (value / 1e9).toFixed(1) + "B";
  }
};

export const services = [
  {
    icon: TbTruckDelivery,
    text: "First and free delivery",
    des: "Free delevary to all orders over $140",
  },
  {
    icon: TfiHeadphoneAlt,
    text: "24/7 Customers Service",
    des: "Friendly 24/7 Customers Services",
  },
  {
    icon: SiAdguard,
    text: "Money Back Quarantee",
    des: "We return money within 30Days",
  },
];

export const sizes = ["sm", "m", "l", "xl", "xxl", "xs"];
