import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import AdminLayout from "../admin/AdminLayout";
import AdminHome from "../admin/AdminHome";
import AddProduct from "../admin/AddProduct";

import ProductPage from "../Pages/ProductPage";
import ProductList from "../admin/ProductList";
import SinglePage from "../Pages/SinglePage";
import FavouritePage from "../Pages/FavouritePage";
import CartPage from "../Pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "productpage",
        element: <ProductPage />,
      },
      {
        path: "single/:id",
        element: <SinglePage />,
      },
      {
        path: "/favourite",
        element: <FavouritePage />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "list",
        element: <ProductList />,
      },
    ],
  },
]);

export default router;
