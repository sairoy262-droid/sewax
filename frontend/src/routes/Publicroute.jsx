import Publiclayout from "../layouts/publiclayout";
import Dashboard from "../admin/Dashboard";
import Center from "../Components/Center";
import Login from "../Components/Login";
import Register from "../Components/Register";
export const Publicroute = {
  element: <Publiclayout />,
  children: [
    {
      path: "/",
      element: <Center />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
   
  ],
};
