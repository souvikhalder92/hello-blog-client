import { createBrowserRouter } from "react-router-dom";
import Business from "../../components/Business/Business/Business";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/business",
        element: <Business></Business>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
