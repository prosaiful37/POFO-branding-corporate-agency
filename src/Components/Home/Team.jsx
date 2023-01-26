import React from "react";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";
import team1 from "../../Images/teams/team13.jpg";
import team2 from "../../Images/teams/team14.jpg";
import team3 from "../../Images/teams/team15.jpg";
import team4 from "../../Images/teams/team16.jpg";
import team5 from "../../Images/teams/team17.jpg";
import team6 from "../../Images/teams/team18.jpg";
import "../Styles/Teams.css";

const Team = () => {
  return (
    <div className="md:w-4/5 mx-auto md:py-[130px]">
      <div className="teams">
        <div className="container grid md:grid-cols-2">
          <div>
            <h3 className="text-[#d6d5d5] font-bold w-[50] md:w-[100] mb-5 text-[48px]">
              03
            </h3>
            <h5 className="uppercase font-bold inline w-[75] lg:w-[90] md:w-[50]  md-block text-[#232323] text-[32px] leading-10">
              Meet some of <br /> creative <br /> people.
            </h5>
          </div>
          <div className="teams-people">
            <div className="grid md:grid-cols-3 gap-5">
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team1} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                          Hugh Macleod
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                          Creative Director
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team2} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                        Jhon Macleod
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                          Creative Director
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team4} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                        Bill Gardner
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                        Co-Founder / Design
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team3} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                        Sara Smith
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                        Creative Studio Head
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team5} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                        Joshua Brewer
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                        Creative Studio Head
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
              <div className="">
                <figure>
                  <div className="team-image team">
                    <img className="w-[100%] h-auto block" src={team6} alt="" />
                    <div className="overlays">
                        <div className="icon-social flex justify-center gap-3 font-[14px]">
                            <a href="#">
                                <FaFacebookF></FaFacebookF>
                            </a>
                            <a href="#">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#">
                                <FaGooglePlusG></FaGooglePlusG>
                            </a>
                            <a href="#">
                                <FaInstagram></FaInstagram>
                            </a>
                            
                        </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                        Jeremy Dupont
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                        Creative Director
                        </div>
                      </div>
                    </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
