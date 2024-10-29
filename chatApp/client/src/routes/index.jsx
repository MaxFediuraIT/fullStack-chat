import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Messages from "../components/Messages";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":userId",
            element: <Messages />,
          },
        ],
      },
    ],
  },
]);
