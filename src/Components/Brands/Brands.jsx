import axios from "axios";

import { useQuery } from "react-query";

const Brands = () => {
  async function getAllBrand() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  const { data } = useQuery("allCategories", getAllBrand);


  return (
    <>
      <section className="category pt-14 mx-auto w-full">
        <h2 className="text-green-600 text-4xl py-6 text-center font-bold">All Brands</h2>
        <div className="flex flex-wrap py-8 items-center justify-center text-center  ">
          {data?.data.data.map((categoryItem) => (
            <div
              key={categoryItem._id}
              className={`shadow m-2 cols w-full sm:w-1/2 md:w-1/4 lg:w-1/6  border border-gray-200  border-solid`}
            >
              <img src={categoryItem.image} alt="" className="w-full" />
              <h3 className="text-green-600 text-xl py-4">
                {categoryItem.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brands;
