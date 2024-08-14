import React from "react";
import Slider from "react-slick";
import slider1 from "./../../assets/images/slider-image-1.jpeg";
import slider2 from "./../../assets/images/slider-image-2.jpeg";
import { useQuery } from "react-query";
import axios from "axios";
export default function CategorySlider() {
  async function getAllCategory() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  const { data } = useQuery("categorySlider", getAllCategory);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <section className="slider-container  pt-8 ">
      <Slider {...settings}>
        {data?.data.data.map(function (item, index) {
          return (
            <div key={index}>
              <img src={item.image} className="w-full h-[160px]" alt="" />
              <h2 className="text-green-600 text-center  font-semibold">{item.name}</h2>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
