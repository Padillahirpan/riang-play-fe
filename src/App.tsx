import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./routes/root/base-layout";
import HomeRoute from "./routes/home/home";
import LoginRoute from "./pages/login/login";
import RegisterRoute from "./pages/register/register";
import { loader as rootLoader } from "./routes/root/root-loader";
import { loader as homeLoader } from "./routes/home/home-loader";
import ProfileRoute from "./routes/profile/profile";
import { loader as profileLoader } from "./routes/profile/profile-loader";

export const PATH_REGISTER = "/register";
export const PATH_LOGIN = "/login";
export const PATH_HOME = "/";
export const PATH_PROFILE = "/profile";

const router = createBrowserRouter([
  {
    id: "root",
    path: PATH_HOME,
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: PATH_HOME,
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: PATH_PROFILE,
        element: <ProfileRoute />,
        loader: profileLoader,
      },
    ],
  },
  {
    path: PATH_LOGIN,
    element: <LoginRoute />,
    // errorElement: <ErrorPage />,
    // loader: loginLoader,
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
