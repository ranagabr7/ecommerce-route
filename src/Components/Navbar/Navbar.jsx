import {  NavLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import { useContext, useState } from "react";
import { authContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import navbarStyle from "./navbar.module.css"

const Navbar = () => {
 const {numofItems}= useContext(CartContext)
  const [openlinks, setopenLinks] = useState(false);
  const navigate = useNavigate();
  function logOut() {
    setToken(null);
    localStorage.removeItem("tKn");
    navigate("/ecommerce-route/Login");
  }
  const { setToken, token } = useContext(authContext);
  return (
    <>
      <nav className="bg-gray-100 md:py-3  px-5  top-0 z-30">
        <div className={navbarStyle.container }>
          <div className={navbarStyle.logo}>
            <img src={logo} alt="logo" width={120} />
            <div
              className={navbarStyle.menuIcon}
              onClick={() => {
                setopenLinks(!openlinks);
              }}
            >
              <i className="fa-solid fa-bars menu text-3xl font-semibold text-gray-600 "></i>
            </div>
            <div className="registration ">
              {token ? (
                <button onClick={logOut} className="mx-3 text-slate-600 ">
                  Logout
                </button>
              ) : (
                <>
                  <ul className="">
                    <li>
                      <NavLink to="login" className="mx-3 text-slate-600">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="register" className="mx-3 text-slate-600">
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="links">
            <ul className={openlinks ?` ${navbarStyle.open} `: ""}>
              {token ? (
                <>
                  <li className="my-3 lg:my-0">
                    <NavLink to="home" className="mx-4 text-slate-600">
                      Home
                    </NavLink>
                  </li>
                  <li className="relative my-3 lg:my-0">
                    <NavLink to="cart" className="mx-4 text-slate-600">
                      Cart
                      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                      {numofItems}
                      </div>
                    </NavLink>
                  </li>
                  <li className="my-3 lg:my-0">
                    <NavLink to="wishList" className="mx-4 text-slate-600">
                      wish list
                    </NavLink>
                  </li>
                  <li className="my-3 lg:my-0">
                    <NavLink to="products" className="mx-4 text-slate-600">
                      Products
                    </NavLink>
                  </li>

                  <li className="my-3 lg:my-0">
                    <NavLink to="categories" className="mx-4 text-slate-600">
                      Categories
                    </NavLink>
                  </li>
                  <li className="my-3 lg:my-0">
                    <NavLink to="brands" className="mx-4 text-slate-600">
                      Brands
                    </NavLink>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
