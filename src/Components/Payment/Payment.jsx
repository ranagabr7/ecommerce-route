import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";

const Payment = () => {
  const { cartId, setTotalPrice, setproductCart, setnumofItems } =
    useContext(CartContext);
  const [city, setcity] = useState("");
  const [phone, setphone] = useState("");
  const [details, setdetails] = useState("");

  async function cashPayment() {
    const detailsShipping = {
      shippingAddress: {
        details,
        phone,
        city,
      },
    };
    //   call api
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        detailsShipping,
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
        }
      );
      setnumofItems(0);
      setproductCart([]);
      setTotalPrice(0);
      toast.success(data.status);
      console.log(data);
    } catch (error) {
      toast.error("error cash payment");
    }
  }
  async function onlinePayment() {
    const detailsShipping = {
      shippingAddress: {
        details,
        phone,
        city,
      },
    };
    //   call api
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,

        detailsShipping,
        {
          headers: {
            token: localStorage.getItem("tKn"),
          },
          params: {
            // url: data.session.success_url,
            url: "http://localhost:5181/ecommerce-route",

          },
        }
      );
    //   console.log(data);
      console.log(data.session.success_url);
      window.open(data.session.url);
    // window.location.origin(data.session.url)
      toast.success(data.status);
    
    } catch (error) {
      toast.error("error online payment");
    }
  }
  return (
    <>
      <section className="payment w-full md:w-[70%] mx-auto pt-16 pb-10 px-5">
        <h2 className="text-center text-green-700 text-2xl p-5 font-semibold">
          Payment:
        </h2>
        <div>
          {/* city */}
          <div className="relative z-0 w-full mt-1 mb-5 group">
            <input
              type="text"
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setcity(e.target.value)}
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              city:
            </label>
          </div>
          {/* phone */}
          <div className="relative z-0 w-full mt-1 mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setphone(e.target.value)}
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone:
            </label>
          </div>
          {/* details */}
          <div className="relative z-0 w-full mt-1 mb-5 group">
            <input
              type="text"
              name="details"
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setdetails(e.target.value)}
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Details:
            </label>
          </div>
          <button
            onClick={cashPayment}
            type="button"
            className=" text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Cash Payment
          </button>
          <button
            onClick={onlinePayment}
            type="button"
            className="mx-5 text-white bg-sky-700 hover:bg-sky-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Online Payment
          </button>
        </div>
      </section>
    </>
  );
};

export default Payment;
