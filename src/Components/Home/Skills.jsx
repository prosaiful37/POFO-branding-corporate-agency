import ProgressBar from "react-animated-progress-bar";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../Styles/Skills.css";

const Skills = () => {
  return (
    <div className="md:w-11/12 mx-auto bg-[#f7f7f7]">
      <div className="container skills md:w-4/5  mx-auto md:py-[130px]">
        <div className="flex ">
          <div className="md:w-1/2">
            <p className="text-[#232323] text-[18px] font-bold md:mb-[25px]">
              Since our foundation in 2005 our goal has been to use technology
              to create experiences with a deeper impact.
            </p>
            <p className="mb-[25px] text-[15px] text-[#626262]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>

            <div>
              <button className="flex gap-2 items-center uppercase hover:text-[#ff214f] text-[12px] font-bold text-[#232323]">
                Development Services <FaLongArrowAltRight></FaLongArrowAltRight>{" "}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-20">
            <div>
              <span className="text-[11px] text-[#626262] m-0">
                JQUERY - 4 YEARS EXPERIENCE
              </span>
              <ProgressBar
                height="9px"
                rect
                fontColor="gray"
                percentage="92"
                rectPadding="1px"
                bgColor="#212529"
                trackBorderColor="grey"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#626262] m-0">
                WORDPRESS - 6 YEARS EXPERIENCE
              </span>
              <ProgressBar
                height="9px"
                rect
                fontColor="gray"
                percentage="97"
                rectPadding="1px"
                trackPathColor="transparent"
                bgColor="#212529"
                trackBorderColor="grey"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#626262] m-0">
                HTML5 - 5 YEARS EXPERIENCE
              </span>
              <ProgressBar
                height="9px"
                rect
                fontColor="gray"
                percentage="98"
                rectPadding="1px"
                trackPathColor="transparent"
                bgColor="#212529"
                trackBorderColor="grey"
              />
            </div>
            <div>
              <span className="text-[11px] text-[#626262] m-0">
                PHOTOGRAPHY - 6 YEARS EXPERIENCE
              </span>
              <ProgressBar
                height="9px"
                rect
                fontColor="gray"
                percentage="92"
                rectPadding="1px"
                trackPathColor="transparent"
                bgColor="#212529"
                trackBorderColor="grey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
