import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../Images/banner/homepage-4-slider-img-1.jpg";
import slide2 from "../../Images/banner/homepage-4-slider-img-2.jpg";
import slide3 from "../../Images/banner/homepage-4-slider-img-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="md:w-11/12 mx-auto ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="md:w-[1339px] md:h-[100vh]"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="md:pl-[8%] md:py-[139px] md:h-[100]">
              <div className="banner-subtitle">
                <span className="text-[#ff214f]">Branding and Identity</span>
              </div>
              <div className="banner-title md:w-[25%] md:my-[40px] block">
                <span className="font-bold text-[100px] leading-[95px]">
                Rubber Design
                </span>
              </div>
              <button className="inline border-2 uppercase font-bold py-2 px-5 text-xs bg-black text-white hover:bg-transparent hover:text-black hover:border-2 border-black">
                Explore Work
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="md:w-[1339px] md:h-[100vh]"
            style={{
              backgroundImage: `url(${slide2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="md:pl-[8%] md:py-[139px] md:h-[100]">
              <div className="banner-subtitle">
                <span className="text-[#ff214f]">Identity and Photography</span>
              </div>
              <div className="banner-title md:w-[25%] md:my-[40px] block">
                <span className="font-bold text-[100px] leading-[95px]">
                  Coffee Beans
                </span>
              </div>
              <button className="inline border-2 uppercase font-bold py-2 px-5 text-xs bg-black text-white hover:bg-transparent hover:text-black hover:border-2 border-black">
                Explore Work
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="md:w-[1339px] md:h-[100vh]"
            style={{
              backgroundImage: `url(${slide3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="md:pl-[8%] md:py-[139px] md:h-[100]">
              <div className="banner-subtitle">
                <span className="text-[#ff214f]">Branding and Identity</span>
              </div>
              <div className="banner-title md:w-[25%] md:my-[40px] block">
                <span className="font-bold text-[100px] leading-[95px]">
                Reutter Craft
                </span>
              </div>
              <button className="inline border-2 uppercase font-bold py-2 px-5 text-xs bg-black text-white hover:bg-transparent hover:text-black hover:border-2 border-black">
                Explore Work
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
