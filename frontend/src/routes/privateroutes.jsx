
import Guard from "./guard";
import Services from "../Components/Services";
import Privatelayout from "../layouts/privatelayout";
import Dashboard from "../admin/Dashboard";
import Vendor from "../admin/Vendor";
import Sidebar from "../admin/Sidebaar";

export const privatroutes = {
  element: <Guard />,
  children: [
    {
      element: <Privatelayout/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
         {
      path: "/services",
      element: <Services />,
    },
         {
      path: "/vendors",
      element: <Vendor />,
    },
         {
      path: "/vendors",
      element: <Vendor />,
    },
         {
      path: "/sidebar",
      element: <Sidebar/>,
    },
      ],
    },
  ],
};
