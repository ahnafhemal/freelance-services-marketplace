import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* Navbar  */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)] bg-[#f1faff] ">
        <Outlet></Outlet>
      </div>
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
