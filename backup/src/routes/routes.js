import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SignupSuccess from "../pages/SignupSuccess";

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
  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
];

export default routes;