import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authContext } from "../../Context/AuthContext";
// ----------------------------u

const Login = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(authContext);
  const user = {
    email: "",
    password: "",
  };
  async function loginUser(values) {
    setisLoading(true);
    // call api
    try {
      const responses = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      toast.success(responses.data.message);
      setToken(responses.data.token);
      localStorage.setItem("tKn", responses.data.token);

      navigate("/ecommerce-route/home");
      setisLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setisLoading(false);
    }
  }
  const validationUser = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[A-Za-z][a-z0-9]{3,15}$/,
        "password must strat Uppercase char"
      ),
  });
  const formik = useFormik({
    initialValues: user,
    onSubmit: loginUser,
    validationSchema: validationUser,
  });

  return (
    <>
      <section className="login container py-9">
        <h1 className="text-center mb-8 text-4xl font-bold text-green-700 pt-5 mx-auto">
          Login Now
        </h1>
        <div className="w-full md:w-[70%] mx-auto p-4">
          <form onSubmit={formik.handleSubmit}>
            {/* email */}
            <div className="relative z-0 w-full mt-1 mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                email:
              </label>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Error ! </span>
                {formik.errors.email}
              </div>
            ) : (
              ""
            )}
            {/* pass */}
            <div className="relative z-0 w-full mt-1 mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password:
              </label>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Error ! </span>
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
            <div className="send flex justify-between items-center">
              <button
                type="submit"
                className=" text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-7 py-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {isLoading == true ? (
                  <i className="fa-solid fa-spinner fa-spin text-white"></i>
                ) : (
                  "Login"
                )}
              </button>
              {/* to do forgetpass page */}
             <Link to="/ecommerce-route/forgetPassword">
              <p className="cursor-pointer text-xl text-gray-900 dark:text-white">forget your password ?</p>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
