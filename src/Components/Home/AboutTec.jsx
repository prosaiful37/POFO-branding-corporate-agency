import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import AboutImage from "../../Images/banner/homepage-4-section2-img.jpg";

const AboutTec = () => {
  return (
    <div className="md:w-4/5 mx-auto md:py-[130px]">
      <div className="aboutTec">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <h3 className="text-[#d6d5d5] font-bold w-[50] md:w-[100] mb-5 text-[48px]">
                02
              </h3>
              <h5 className="uppercase font-bold inline w-[75] lg:w-[90] md:w-[50]  md-block text-[#232323] text-[32px] leading-10">
              WE CREATE <br /> DESIGNS AND <br /> TECHNOLOGY.
              </h5>
            </div>
            <div className="px-[15px]">
              <img className="w-[100] pr-[10%]" src={AboutImage} alt="" />
            </div>
            <div>
              <p className="mb-[25px] text-[#232323] text-[18px] leading-6 text-justify">
              We have our own developers and technical producers who can confidently integrate & execute ideas.
              </p>
              <p className="mb-[25px] text-[#6f6f6f]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
              <p className="mb-[25px] text-[#6f6f6f]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                quo pariatur cum, placeat nostrum ipsa impedit repellendus
                consequatur in porro provident inventore rem, quam officia nihil
                voluptas voluptatum enim. Eius?
              </p>
              
              
              <div>
              <button className="flex gap-2 items-center uppercase hover:text-[#ff214f] text-[12px] font-bold text-[#232323]">
              OUR CREATIVE PEOPLE <FaLongArrowAltRight className="text-[#ff214f]"></FaLongArrowAltRight>{" "}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTec;
