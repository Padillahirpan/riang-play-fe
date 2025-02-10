import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./routes/root/base-layout";
import HomeRoute from "./routes/home/home";
import LoginRoute from "./pages/login/login";
import RegisterRoute from "./pages/register/register";
import { loader as rootLoader } from "./routes/root/root-loader";

export const PATH_REGISTER = "/register";
export const PATH_LOGIN = "/login";

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
        // loader: HomeLoader,
      },
      // {
      //   path: PATH_LOGIN,
      //   element: <LoginRoute />,
      //   // loader: HomeLoader,
      // },
      // {
      //   path: PATH_REGISTER,
      //   element: <RegisterRoute />,
      //   // loader: HomeLoader,
      // },
    ],
  },
  {
    path: PATH_LOGIN,
    element: <LoginRoute />,
    // errorElement: <ErrorPage />,
    // loader: EditGoal.loader,
  },
  {
    path: PATH_REGISTER,
    element: <RegisterRoute />,
    // errorElement: <ErrorPage />,
    // loader: EditGoal.loader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
