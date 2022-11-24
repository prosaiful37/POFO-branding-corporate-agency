import React from "react";
import logoFooter from "../../Images/logo-white.png"

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] py-[5%]">
      <div className="footer container w-full py-[30px] md:p-0 md:w-4/5 mx-auto mb-[25px]">
        <div className="footer-top pb-[40px]">
          <div className="grid md:grid-cols-3 gap-3 justify-items-center">
            <div className="mb-[20px]">
              <h2 className="md:w-[70%] md:text-[25px] text-[#626262] font-bold">
                London Based  Creative Studio
              </h2>
            </div>
            <div className="text-center md:text-left mb-[20px] md:m-0 text-[#626262]">
              <span>301 The Greenhouse,</span>
              <br />
              <span>Custard Factory, London, E2 8DY.</span>
              <br />
              <a
                className="hover:text-[#ff214f]"
                href="mailto:sales@domain.com"
              >
                sales@domain.com{" "}
              </a>
              <span> | +44 (0) 123 456 7890</span>
            </div>
            <div className="flex flex-col align-center">
                <a href="">
                    <img className="w-4/12 mx-auto md:mx-0 md:w-[113px] md:h-[28px]" src={logoFooter} alt="" />
                </a>
                <div className="social-icon">
                    <ul className="mt-[20px] uppercase text-[#626262] text-xs">
                        <li className="hover:text-[#ff214f] inline mr-3"><a href="">Twitter</a></li>
                        <li className="hover:text-[#ff214f] inline mr-3"><a href="">Facebook</a></li>
                        <li className="hover:text-[#ff214f] inline mr-3"><a href="">Instagram</a></li>
                        <li className="hover:text-[#ff214f] inline mr-3"><a href="">Dribbble</a></li>
                    </ul>

                </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom border-t-[1px] border-[#626262] pt-[40px]">
            <div className="flex flex-wrap justify-center md:justify-between text-[#626262] text-xs">
                <div>
                POFO - Portfolio Concept Theme
                </div>
                <div>
                    © 2021 POFO is Proudly Powered by 
                    <a className="hover:text-[#ff214f]" href="">ThemeZaa</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
