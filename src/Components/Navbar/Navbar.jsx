import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 py-2 static  md:fixed inset-x-0 top-0 z-30">
        <div className="container text-center flex justify-between flex-col md:flex-row  items-center flex-wrap  ">
          <div className="logo">
            <img src={logo} alt="logo" width={120} />
          </div>
          <div className="links">
            <ul className="flex space-x-2">
              <li>
                <NavLink to="/home" className=" text-slate-600">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart" className=" text-slate-600">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/products" className=" text-slate-600">Products</NavLink>
              </li>
              <li>
                <NavLink to="/categories" className=" text-slate-600">Categories</NavLink>
              </li>
              <li>
                <NavLink to="/brands" className=" text-slate-600">Brands</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <ul className="flex space-x-2">
              <li>
                <i href="#" className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <a href="#">
                  <i href="#" className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i href="#" className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i href="#" className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i href="#" className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-2">
              <li>
                <NavLink to="/login" className=" text-slate-600">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className=" text-slate-600">
                  Register
                </NavLink>
              </li>
              <li className="text-red-400">
                <NavLink to="/logout" className=" text-slate-600">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
