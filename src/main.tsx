import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Signup } from "./routes/signup/Signup.tsx";
import Feed from "./routes/feed/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
