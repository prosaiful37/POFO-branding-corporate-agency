import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../Styles/Skills.css";

const Skills = () => {
  return (
    <div className="md:w-11/12 mx-auto bg-[#f7f7f7]">
      <div className="container skills md:w-4/5  mx-auto md:py-[130px]">
        <div className="flex ">
          <div className="w-1/2">
            <p className="text-[#232323] text-[18px] font-bold md:mb-[25px]">
              Since our foundation in 2005 our goal has been to use technology
              to create experiences with a deeper impact.
            </p>
            <p className="mb-[25px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>

            <a
              className="uppercase hover:text-[#ff214f] text-[12px] font-bold text-[#232323]"
              href="#"
            >
              Development Services
              <span>
                <FaLongArrowAltRight></FaLongArrowAltRight>
              </span>{" "}
            </a>
          </div>
          <div className="w:1/2 mt-[30px] ">
            {/* <div className="skills-progress">
              <span className="title block">jquary - 4 YEARS EXPERIENCE</span>
              <div className="skills-bar">
                <span className="skills-per">
                  <span className="tooltip">92%</span>
                </span>
              </div>
            </div>
            <div className="skills-progress">
              <span className="title">WORDPRESS - 6 YEARS EXPERIENCE</span>
              <div className="skills-bar">
                <span className="skills-per-wordpress">
                  <span className="tooltip">97%</span>
                </span>
              </div>
            </div>
            <div className="skills-progress">
              <span className="title">HTML5 - 5 YEARS EXPERIENCE</span>
              <div className="skills-bar">
                <span className="skills-per-html">
                  <span className="tooltip">98%</span>
                </span>
              </div>
            </div>
            <div className="skills-progress">
              <span className="title">PHOTOGRAPHY - 6 YEARS EXPERIENCE</span>
              <div className="skills-bar">
                <span className="skills-per-photograph">
                  <span className="tooltip">92%</span>
                </span>
              </div>
            </div> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 mt-20">
        <div>
          <span>
            <p className="text-1xl m-0">HTML 5</p>
            <ProgressBar
            className="w-72"
              height="10px"
              rect
              fontColor="gray"
              percentage="85"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
        <div>
          <span>
            <p className="text-1xl m-0">CSS 3</p>
            <ProgressBar
              className="w-72"
              height="10px"
              rect
              fontColor="gray"
              percentage="65"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
        <div>
          <span>
            <p className="text-1xl m-0">Javascript</p>
            <ProgressBar
              className="w-72"
              height="10px"
              rect
              fontColor="gray"
              percentage="50"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
        <div>
          <span>
            <p className="text-1xl m-0">MordernJs-ES6</p>
            <ProgressBar
              className="w-72"
              height="10px"
              rect
              fontColor="gray"
              percentage="45"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
        <div>
          <span>
            <p className="text-1xl m-0">ReactJs</p>
            <ProgressBar
              className="w-72"
              height="10px"
              rect
              fontColor="gray"
              percentage="50"
              rectPadding="1px"
              rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
        <div>
          <span>
            <p className="text-1xl m-0">NodeJs</p>
            <ProgressBar
             className="w-72"
              height="0px"
              rect
              fontColor="gray"
              percentage="30"
              rectPadding="1px"
              // rectBorderRadius="20px"
              trackPathColor="transparent"
              bgColor="#333333"
              trackBorderColor="grey"
            />
          </span>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
