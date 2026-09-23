import { Outlet } from "react-router-dom";
import Sidebar from "../admin/Sidebaar";
import Header from "../Components/Header";

const Authlayouts = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
   
      <div className="flex">
      
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Authlayouts;
