import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import agency1 from "../../Images/banner/homepage-4-section1-img.jpg";

const Agency = () => {
  return (
    <div className="md:w-4/5 mx-auto py-10">
      <div className="agency">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <div>
                <h3 className="text-[#d6d5d5] font-bold w-[50] md:w-[100] mb-5 text-[48px]">
                  01
                </h3>
                <h5 className="uppercase font-bold inline w-[75] lg:w-[90] md:w-[50]  md-block text-[#232323] text-[32px] leading-10">
                  We are <br /> digital media <br /> agency.
                </h5>
              </div>
            </div>
            <div className="px-[15px]">
              <img className="w-[100] pr-[10%]" src={agency1} alt="" />
            </div>
            <div>
              <p className="mb-[25px] text-[#232323] text-[18px] leading-6 text-justify">
                We always stay on the cutting edge of digital, so that our
                clients maintain their competitive advantage online.
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
              {/* <a
                className="uppercase font-bold text-[#232323] text-[12px] hover:text-[#ff214f]"
                href=""
              >
                Our Company History 
              <FaLongArrowAltRight className="text-[#ff214f]"></FaLongArrowAltRight>
              </a> */}
              <div>
              <button className="flex gap-2 items-center uppercase hover:text-[#ff214f] text-[12px] font-bold text-[#232323]">
              Our Company History  <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
