import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./routes/root/base-layout";
import HomeRoute from "./routes/home/home";
import LoginRoute from "./routes/login/login";
import RegisterRoute from "./routes/register/register";
import { loader as rootLoader } from "./routes/root/root-loader";
import { loader as homeLoader } from "./routes/home/home-loader";
import ProfileRoute from "./routes/profile/profile";
import { loader as profileLoader } from "./routes/profile/profile-loader";
import ProductDetailRoute from "./routes/product/product-detail";
import { loader as productLoader } from "./routes/product/product-loader";
import CartDetailRoute from "./routes/cart/cart-detail";
import { loader as cartLoader } from "./routes/cart/cart-loader";
import ProductRoute from "./routes/product/all-product";
import { loader as productsLoader } from "./routes/product/all-product-loader";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <BaseLayout />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "/profile",
        element: <ProfileRoute />,
        loader: profileLoader,
      },
      {
        path: "/product/:slug",
        element: <ProductDetailRoute />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <CartDetailRoute />,
        loader: cartLoader,
      },
      {
        path: "/products",
        element: <ProductRoute />,
        loader: productsLoader,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
