import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";

export const AddtoWishList = createContext();
const AddtoWishListprovider = ({ children }) => {
  const {token}=useContext(authContext)
const [productWishlist, setproductWishlist] = useState(null)
  async function AddproductToWishList(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          productId: productId,
        },
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      // setproductWishlist(data?.data)
      getUserWishlist()
      return data;
    } catch (error) {
      console.log("error");
    }
  }
  async function getUserWishlist(){
    try {
      const {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
        headers: {
          token: localStorage.getItem("tKn"),
        },
      })
     
      setproductWishlist(data?.data)
      return data;
    } catch (error) {
      console.log(error)
    }
  }
    async function deleteproductWishList(ProductId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${ProductId}`,{
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
    
      getUserWishlist()
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(token != null){
      getUserWishlist()
    }
 
  },[token])
  return (
    <AddtoWishList.Provider value={{ AddproductToWishList ,productWishlist,getUserWishlist,deleteproductWishList}}>
      {children}
    </AddtoWishList.Provider>
  );
};

export default AddtoWishListprovider;
