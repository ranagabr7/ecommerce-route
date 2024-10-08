import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
