import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
];

export default routes;