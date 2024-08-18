import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { token } = useContext(authContext);
  const [numofItems, setnumofItems] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [productCart, setproductCart] = useState(null);
  async function addProductToCart(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: productId,
        },
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      getUserCart();
      return data;
    } catch (error) {
      console.log("error");
    }
  }
  async function getUserCart() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      setnumofItems(data.numOfCartItems);
      setproductCart(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      return data;
    } catch (error) {
      console.log(error, "get user cart context");
    }
  }
  useEffect(
    function () {
      if (token !== null) {
        getUserCart();
      }
    },
    [token]
  );
  return (
    <>
      <CartContext.Provider
        value={{ addProductToCart, productCart, TotalPrice, numofItems }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
