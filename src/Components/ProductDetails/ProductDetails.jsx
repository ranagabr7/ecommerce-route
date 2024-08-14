import { useParams } from "react-router-dom";

import { useQuery } from "react-query";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
const ProductDetails = () => {
  const { id } = useParams();
  async function getAllProductDetails() {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
  const { data, isLoading } = useQuery(`product${id}`, getAllProductDetails);

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
      <section className="pt-6 md:w-[90%] w-full mx-auto ">
        <div className="row flex-col md:flex-row">
          <div className="md:w-1/4 p-5 w-full">
            <img
              src={data?.data.data.imageCover}
              className="w-full "
              alt={data?.data.data.title}
            />
          </div>
          <div className="md:w-3/4 p-5 w-full relative">
            {/* to do logic */}

            <h2 className="text-2xl font-semibold mb-3 ">
              {data?.data.data.title}
            </h2>
            <p className="mb-3 text-xl "> {data?.data.data.description}</p>
            <div className="icon absolute right-10 top-50 ">
              <i className="fa-solid fa-heart text-2xl cursor-pointer"></i>
            </div>
            <h3 className="text-xl font-mono mb-3 text-green-700">
              {data?.data.data.category.name}
            </h3>

            <div className="info flex flex-wrap items-center justify-between mt-1 ">
              <h3>{data?.data.data.price}</h3>

              <h4>
                <i className="fa-solid fa-star text-yellow-400 mr-2"></i>{" "}
                {data?.data.data.ratingsAverage}
              </h4>
            </div>
            <button
              type="button"
              className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
