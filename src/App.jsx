import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import ErrorPage from "./Pages/ErrorPage";
import Products from "./Pages/Products";
import { GlobalProvider } from "./Context/GlobalContext";
import Home from "./Pages/Home";
import WishList from "./Pages/WishList";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import CheckOut from "./Pages/CheckOut";
import ProductsDetails from "./Pages/ProductsDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "wishlist",
          element: <WishList />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "singup",
          element: <SignUp />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "productdetails",
          element: <ProductsDetails />,
        },
      ],
    },
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalProvider>
  );
}

export default App;
