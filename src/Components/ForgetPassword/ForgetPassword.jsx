import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  async function forgetPassword() {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        {
          email: email,
        }
      );
      navigate("/ecommerce-route/recetCode");
      toast.success(data.message);
      return data;
    } catch (error) {
      console.log(error);
      toast.error("error email");
    }
  }
  return (
    <>
      <section className="w-full w-full md:w-[70%] mx-auto px-5 pt-16 pb-10">
        <h2 className="text-center text-green-700 text-2xl p-5 font-semibold">
          please enter your email:
        </h2>
        <div className="">
          <div className="relative z-0 w-full mt-1 mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setemail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              email:
            </label>
          </div>

          <button
            onClick={forgetPassword}
            type="button"
            className=" text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-7 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Verify
          </button>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
