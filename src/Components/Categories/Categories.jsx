import axios from "axios";

import { useQuery } from "react-query";

const Categories = () => {
  async function getAllCategories() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  const { data } = useQuery("allCategories", getAllCategories);

  return (
    <>
      <section className="category pt-14 mx-auto w-full">
        <div className="flex flex-wrap py-8 items-center justify-center text-center  ">
          {data?.data.data.map((categoryItem) => (
            <div
              key={categoryItem._id}
              className={`shadow m-2 cols w-full sm:w-1/2 md:w-1/4 lg:w-1/6  border border-gray-200  border-solid`}
            >
              <img src={categoryItem.image} alt="" className="w-full h-56" />
              <h2 className="text-green-600 text-4xl py-4">
                {categoryItem.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Categories;
