import { createContext, useEffect, useMemo, useState } from "react";
import { addProducts, fetchAllProducts, fetchSomeProducts } from "../api/Api";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [heroProduct, setHeroProduct] = useState([]);
  const [isWishListed, setIsWishListed] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedCart, setAddedCart] = useState([]);
  const [isHovered, setIsHovered] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //fetching all products from the api
  const fetchProducts = async () => {
    try {
      const product = await fetchAllProducts();
      setAllProducts(product.products);
    } catch (error) {
      console.error(error);
    }
  };

  // adding quantity to the selected products
  const handleSelectedProduct = (product) => {
    const quantity = 1;
    const review = Math.floor(Math.random() * 150);

    setSelectedProduct({ ...product, quantity: quantity, review: review });
  };

  // fecthing some products to show in the home page
  const fetchData = async () => {
    try {
      const result = await fetchSomeProducts();
      setHeroProduct(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  //fetching new products
  const fetchNewProducts = async () => {
    try {
      const products = await addProducts();
      setNewProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchNewProducts();
    fetchProducts();
  }, []);

  const handleSelectedTools = (product, tooltype) => {
    if (tooltype === "wishlist") {
      setIsWishListed((prevWishListed) => {
        if (prevWishListed.includes(product)) {
          return prevWishListed.filter((item) => item !== product);
        } else {
          return [...prevWishListed, product];
        }
      });
    }
  };
  console.log(isWishListed);

  const sortProducts = () => {
    const filtered = allProducts
      .filter((product) => {
        if (!selectedCategory || selectedCategory === "all") return true;
        return selectedCategory === product.category;
      })
      .filter((product) => {
        if (!selectedColor || selectedColor === "all") return true;
        return selectedColor === product.color;
      })
      .filter((product) => {
        if (!selectedPrice || selectedPrice === "all") return true;
        else if (selectedPrice === "above") {
          return product.price > 200;
        }
        const [min, max] = selectedPrice.split("-").map(Number);
        return product.price > min && product.price < max;
      });

    const lowerCaseSorting = selectedSorting
      ? selectedSorting.replace(/\s+/g, "").toLowerCase()
      : "all";

    if (lowerCaseSorting === "a-z") {
      filtered.sort((a, b) => a.model.localeCompare(b.model));
    } else if (lowerCaseSorting === "z-a") {
      filtered.sort((a, b) => b.model.localeCompare(a.model));
    } else if (lowerCaseSorting === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (lowerCaseSorting === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    sortProducts();
  }, [
    selectedCategory,
    selectedColor,
    selectedPrice,
    selectedSorting,
    allProducts,
  ]);

  const handleAddToCart = (productData) => {
    setCart((prevCart) => {
      if (prevCart.includes(productData)) {
        return prevCart;
      }
      return [...prevCart, productData];
    });
  };

  //this was a test but it works perfectly so i didn't manupulate it
  const testCArt = () => {
    const quantity = 1;
    setAddedCart(() =>
      cart.map((item) => ({
        ...item,
        quantity: quantity,
      }))
    );
  };

  // testCArt();
  useEffect(() => {
    testCArt();
  }, [cart]);

  // increase the quantity of the product that has been added to the cart
  const incrementQuantity = (id) => {
    setAddedCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  // decrease the quantity of the product that has been added to the cart
  const decrementQuantity = (id) => {
    setAddedCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        heroProduct,
        setHeroProduct,
        handleSelectedTools,
        isWishListed,
        setIsWishListed,
        newProducts,
        selectedColor,
        selectedPrice,
        selectedSorting,
        setSelectedSorting,
        setSelectedColor,
        setSelectedPrice,
        category,
        setCategory,
        selectedCategory,
        setSelectedCategory,
        allProducts,
        setAllProducts,
        filteredProducts,
        setFilteredProducts,

        handleAddToCart,
        cart,
        setCart,
        incrementQuantity,
        decrementQuantity,
        addedCart,
        setAddedCart,
        setIsHovered,
        isHovered,
        selectedProduct,
        setSelectedProduct,
        handleSelectedProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
