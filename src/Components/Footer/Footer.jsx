import google from "./../../assets/images/google.png";
import app from "./../../assets/images/app.jfif";
import paypal from "./../../assets/images/paypal2.png"
import amazon from "./../../assets/images/amazon2g.png"
const Footer = () => {
  return (
    <>
      <footer className="footer p-5 bg-gray-100 mt-auto">
        <h2 className="text-2xl mb-2 "> Get The Fresh Cart App</h2>
        <p className="mb-2 text-gray-500">
          {" "}
          we will send you a link,open it on your phone to download the App
        </p>
        <div className="flex justify-between flex-row items-center min-w-28 border-y border-y-gray-200 py-3 border-solid">
          <div className="mb-6 w-full mr-2 h-9 ">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-green-500"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="button"
            className="min-w-28 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2 px-1 text-center  "
          >
            Share App Link
          </button>
        </div>
        <div className="py-5 flex items-center justify-between flex-wrap flex-col md:flex-row">
          <div className="left text-gray-500  flex items-center justify-center">
            <span>Payment partener:</span>
            <span>
              <img src={paypal} className="w-16 mr-1" alt="" />
            </span>
            <span>
              <img src={amazon} className="w-16" alt="" />
            </span>
          </div>
          <div className="right text-gray-500 flex items-center justify-center">
            <span>Get deliveries with Fresh cart:</span>
            <span>
              <img src={google} className="w-28" alt="" />
            </span>
            <span>
              <img src={app} className="w-28" alt="" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
