import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import { useContext, useState } from "react";
import { authContext } from "../../Context/AuthContext";
<Link></Link>
const Navbar = () => {
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
      <nav className="bg-gray-200 md:py-3  px-5  top-0 z-30">
        <div className="container ">
          <div className="logo">
            <img src={logo} alt="logo" width={120} />
            <div
              className="menuIcon"
              onClick={() => {
                setopenLinks(!openlinks);
              }}
            >
              <i className="fa-solid fa-bars menu text-3xl "></i>
            </div>
            <div className="registration ">
              {token ? (
                <button onClick={logOut} className="mx-3 text-slate-600 ">
                  Logout
                </button>
              ) : (
                <>
                  <ul  className="" >
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
            <ul className={openlinks ? "open" : ""}>
              {token ? (
                <>
                  <li>
                    <NavLink to="home" className="mx-3 text-slate-600">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="cart" className="mx-3 text-slate-600">
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="wishList" className="mx-3 text-slate-600">
                      wish list
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="products" className="mx-3 text-slate-600">
                      Products
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="categories" className="mx-3 text-slate-600">
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="brands" className="mx-3 text-slate-600">
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
