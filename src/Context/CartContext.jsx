import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { token } = useContext(authContext);
  const [numofItems, setnumofItems] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [productCart, setproductCart] = useState([]);
  const [cartId, setcartId] = useState(0)
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
      setcartId(data.data._id)
      return data;
    } catch (error) {
      console.log(error, "get user cart context");
    }
  }
  async function updateCartCount(productid, count) {
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productid}`,
        {
          count: count,
        },
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      setnumofItems(data.numOfCartItems);
      setproductCart(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      setcartId(data.data._id)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProduct(ProductId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${ProductId}`,
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      setnumofItems(data.numOfCartItems);
      setproductCart(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      setcartId(data.data._id)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function clearCart() {
    try {
      const { data } = await axios.delete(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      setnumofItems(0);
      setproductCart([]);
      setTotalPrice(0);
      return data;
    } catch (error) {
      console.log(error);
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
        value={{
          addProductToCart,
          productCart,
          TotalPrice,
          numofItems,
          updateCartCount,
          deleteProduct,
          clearCart,
          setTotalPrice,
          setproductCart,
          setnumofItems,
          cartId
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
