import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
export default function Products() {

  const { addProductToCart } = useContext(CartContext);
  async function getAllProduct() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  async function addProductsToCart(id) {

    const data = await addProductToCart(id);
    console.log(data);
    if (data) {
      toast.success(data.message);
    
    } else {
     
      toast.error("error: product not added to cart");
    }
  }
  const { data, isLoading, isFetching, error } = useQuery(
    "products",
    getAllProduct
  );

  if (isLoading == true) {
    <div className="h-screen flex flex-wrap justify-center items-center bg-green-800">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>;
  }

  return (
    <>
      <section className="product w-full  py-5 mx-auto">
        <div className="flex flex-wrap py-8 items-center justify-center  ">
          {data?.data.data.map((productItem) => (
            <div
              key={productItem.id}
              className="cols w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-2  m-1"
            >
              <Link to={`/ecommerce-route/productDetails/${productItem.id}`}>
                <div className="product relative">
                  {/* to do logic add to favourit */}
                  <div className="icon absolute right-0 bottom-7 ">
                    <i className="fa-solid fa-heart text-2xl cursor-pointer"></i>
                  </div>
                  <img
                    src={productItem.imageCover}
                    alt={productItem.title}
                    className="w-full"
                  />
                  <h2 className="text-green-600 mt-2 ">
                    {productItem.category.name}
                  </h2>
                  <h2 className="mt-3 ">
                    {" "}
                    {productItem.title.split(" ").slice(0, 2).join(" ")}
                  </h2>
                </div>

                <div className="info flex flex-wrap items-center justify-between mt-1 ">
                  <h3>{productItem.price}</h3>

                  <h4>
                    <i className="fa-solid fa-star text-yellow-400 mr-2"></i>{" "}
                    {productItem.ratingsAverage}
                  </h4>
                </div>
              </Link>
              <button
                onClick={() => addProductsToCart(productItem.id)}
                type="button"
                className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
