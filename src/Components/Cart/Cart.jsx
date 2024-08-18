import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { productCart, TotalPrice } = useContext(CartContext);
  console.log(productCart);

  return (
    <>
      <section className="cart mt-20 pb-8">
        <div className="w-full mx-auto md:w-[90%] bg-gray-100 p-5">
          <h2 className="price text-xl font-bold">
            Total price: <span className="text-green-700"> {TotalPrice}</span>
          </h2>
          {productCart?.map((productItems, index) => (
            <div key={index} className="row border-b  border-b-gray-300">
              <div className="image md:w-1/6  p-5 w-full">
                <img
                  src={productItems.product.imageCover}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="content w-4/6 p-5">
                <h3 className="mb-3 text-md font-semi-bold  ">
                  {productItems.product.title.split(" ").slice(0, 4).join(" ")}
                </h3>
                <h3 className="mb-3 text-md font-semi-bold">
                  {productItems.price} EGP
                </h3>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <i className="fa fa-trash pr-1"></i>
                  Remove
                </button>
              </div>
              <div className="count w-1/6 p-5 ">
                <div className="flex items-center justify-center  ">
                  <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:outline-none font-medium  text-sm px-2 py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    +
                  </button>
                  <h4 className="mx-2">{productItems.count}</h4>
                  <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:outline-none font-medium  text-sm px-2 py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cart;
