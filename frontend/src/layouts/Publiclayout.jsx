import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Publiclayout = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Publiclayout;
