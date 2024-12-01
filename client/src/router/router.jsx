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
import AddUsers from "../admin/AddUsers";
import UserList from "../admin/UserList";
import { AdminLogin } from "../admin/AdminLogin";
import UserRegister from "../Pages/UserRegister";
import UserLogin from "../Pages/UserLogin";
// import ProtectedRoute from "../ProtectedRoute ";

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
      {
        path: "adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "/userRegister",
        element: <UserRegister />,
      },
      {
        path: "/userLogin",
        element: <UserLogin />,
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
      {
        path: "adduser",
        element: <AddUsers />,
      },
      {
        path: "userList",
        element: <UserList />,
      },
    ],
  },
]);

export default router;
