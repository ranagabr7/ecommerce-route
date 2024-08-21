import { useContext } from "react";
import { AddtoWishList } from "../../Context/AddtoWishListContext";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";

export default function WishList() {
  const { addProductToCart } = useContext(CartContext);
  const { productWishlist, deleteproductWishList } = useContext(AddtoWishList);

  async function addwishlistproductTocart(id) {
    const data = await addProductToCart(id);
   
    console.log(data);
    if (data) {
      toast.success(data.message);
    } else {
      toast.error("error");
    }
    await deleteproductWishList(id)
  }
  
  return (
    <>
      <section className="wishList mt-20 pb-8">
        <div className="w-full mx-auto md:w-[90%] bg-gray-100 p-5">
          <h2 className=" text-xl font-bold">My wish List:</h2>
          {productWishlist?.map((items, indx) => (
            <div key={indx} className="row flex-col md:flex-row">
              <div className="image md:w-1/6  p-5 w-full">
                <img src={items.imageCover} className="w-full" alt="" />
              </div>
              <div className="content w-full md:w-4/6 p-5">
                <h3 className="mb-3 text-md font-semi-bold  ">
                  {items.title.split(" ").slice(0, 4).join(" ")}
                </h3>
                <h3 className="mb-3 text-md font-semi-bold">
                  {items.price} EGP
                </h3>
                <button
                  onClick={() => deleteproductWishList(items._id)}
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-1 py-1   "
                >
                  <i className="fa fa-trash pr-1"></i>
                  Remove
                </button>
              </div>
              <div className="w-full md:w-1/6  ">
                <button
                  onClick={() => addwishlistproductTocart(items._id)}
                  type="button"
                  className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm  py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
