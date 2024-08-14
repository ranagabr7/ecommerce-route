import React from "react";
import Slider from "react-slick";
import slider1 from "./../../assets/images/slider-image-1.jpeg";
import slider2 from "./../../assets/images/slider-image-2.jpeg";
import slider3 from "./../../assets/images/slider.jpg"
import slider4 from "./../../assets/images/slider2.jpeg"
function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  };
  return (
    <section className="slider-container">
      <div className="flex flex-wrap justify-center items-center">
        <div className="col1 w-2/3">
          <Slider {...settings}>
            <div>
              <img src={slider2} className="w-full h-[400px]" alt="" />
            </div>
            <div>
              <img src={slider1} className="w-full h-[400px]" alt="" />
            </div>
          </Slider>
        </div>
        <div className="col2 w-1/3">
        <div>
            <img src={slider3} alt=""  className="w-full block h-[200px]"/>
        </div>
        <div>
            <img src={slider4} alt=""  className="w-full block h-[200px]"/>
        </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
