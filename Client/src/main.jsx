import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Home,
  Achievements,
  UpdateProjects,
  UpdateImage,
  Signup,
  Login,
} from "./Pages/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/update-achievements",
        element: <Achievements />,
      },
      {
        path: "/update-projects",
        element: <UpdateProjects />,
      },
      {
        path: "/update-image",
        element: <UpdateImage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
