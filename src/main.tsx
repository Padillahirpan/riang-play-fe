import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BaseLayout from "./routes/root/base-layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/home/home.tsx";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
    // loader: Root.loader,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        // loader: HomeLoader,
      },
    ],
  },
  // {
  //   path: ADD_GOAL_PAGE,
  //   element: <AddGoal />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: DETAIL_PAGE,
  //   element: <DetailGoal />,
  //   errorElement: <ErrorPage />,
  //   loader: DetailGoal.loader,
  // },
  // {
  //   path: EDIT_PAGE,
  //   element: <EditGoal />,
  //   errorElement: <ErrorPage />,
  //   loader: EditGoal.loader,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
