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
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import WishList from "./Components/WishList/WishList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/CartContext";
import AddtoWishListprovider from "./Context/AddtoWishListContext";
import Payment from "./Components/Payment/Payment";
import AllOrder from "./Components/AllOrder/AllOrder";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ResetCode from "./Components/ResetCode/ResetCode";
import ResetAccount from "./Components/ResetAccount/ResetAccount";
import { Offline } from "react-detect-offline";

function App() {
  const x = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "ecommerce-route",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        { path: "*", element: <NotFound /> },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "productDetails/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishList",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <AllOrder />
            </ProtectedRoute>
          ),
        },
        {
          path: "forgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "resetaccount",
          element: <ResetAccount />,
        },
        {
          path: "recetCode",
          element: <ResetCode />,
        },
        {
          path: "payment",
          element: (
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={x}>
        <AuthContextProvider>
          <AddtoWishListprovider>
            <CartContextProvider>
              <Toaster />
              <Offline>
                <div className="bg-black text-white text-center fixed bottom-5 left-5 p-1">
                  <p>Internet cooruptted</p>
                </div>
              </Offline>
              <RouterProvider router={router} />
            </CartContextProvider>
          </AddtoWishListprovider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
