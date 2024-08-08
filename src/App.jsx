import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import { Toaster } from "react-hot-toast";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Products /> },
        { path: "*", element: <NotFound /> },
        { path: "/home", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/cart", element: <Cart /> },
        { path: "/register", element: <Register /> },
        { path: "/categories", element: <Categories /> },
        { path: "/brands", element: <Brands /> },
        { path: "/login", element: <Login /> },
        { path: "/logout", element: <Logout /> },
      ],
    },
  ]);
  return (
    <>
    <Toaster/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
