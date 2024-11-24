import axios from "axios";
import { newProduct } from "../consents/Index";

export const fetchSomeProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.in/api/products?limit=8");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const addProducts = async () => {
  try {
    const response = await Promise.all(
      newProduct.map((product) =>
        axios.post("https://fakestoreapi.com/products", product)
      )
    );
    return response.map((res) => res.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllProducts = async () => {
  try {
    const result = await axios.get(
      "https://fakestoreapi.in/api/products?limit=150"
    );

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategoryData = async () => {
  try {
    const cata = await axios.get(
      "https://fakestoreapi.in/api/products/category"
    );
    return cata.data;
  } catch (error) {
    console.error(error);
  }
};
