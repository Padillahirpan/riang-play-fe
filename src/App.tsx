import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./routes/root/base-layout";
import HomeRoute from "./routes/home/home";
import LoginRoute from "./pages/login/login";
import RegisterRoute from "./pages/register/register";
import { loader as rootLoader } from "./routes/root/root-loader";
import { loader as homeLoader } from "./routes/home/home-loader";
import ProfileRoute from "./routes/profile/profile";
import { loader as profileLoader } from "./routes/profile/profile-loader";
import ProductDetailRoute from "./routes/product/product-detail";
import { loader as productLoader } from "./routes/product/product-loader";
import CartDetailRoute from "./routes/cart/cart-detail";
import { loader as cartLoader } from "./routes/cart/cart-loader";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
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
    ],
  },
  {
    path: "/login",
    element: <LoginRoute />,
    // errorElement: <ErrorPage />,
    // loader: loginLoader,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
    // errorElement: <ErrorPage />,
    // loader: EditGoal.loader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
