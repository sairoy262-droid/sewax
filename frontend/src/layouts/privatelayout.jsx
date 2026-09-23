import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../admin/Sidebaar";

const Privatelayout = () => {
  return (
    <div>
 
<Header/>
<Sidebar/>
      <Outlet />
    </div>
  );
};

export default Privatelayout;
