import Login from "../Components/Login";
import Register from "../Components/Register";
import Authlayouts from "../layouts/authlayout";
export const Authroute = {
  element: <Authlayouts />,
  children: [
   
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
