import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../Styles/Teams.css";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("Team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="md:w-4/5 mx-auto md:py-[130px]">
      <div className="teams">
        <div className="container grid md:grid-cols-2">
          <div>
            <h3 className="text-[#d6d5d5] font-bold w-[50] md:w-[100] mb-5 text-[48px] ">
              03
              {/* <div className="lines before:absoulute top-[53%] border-b border-gray-800 opacity-50  "></div> */}
            </h3>
            
            <h5 className="uppercase font-bold inline w-[75] lg:w-[90] md:w-[50]  md-block text-[#232323] text-[32px] leading-10">
              Meet some of <br /> creative <br /> people.
            </h5>
          </div>
          <div className="teams-people">
            <div className="grid md:grid-cols-3 gap-5">
              {teams.map((team) => (
                <div className="">
                  <figure>
                    <div className="team-image team">
                      <img
                        className="w-[100%] h-auto block"
                        src={team.img}
                        alt=""
                      />
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
                    </div>

                    <figcaption>
                      <div className="team-member text-center mt-[20px]">
                        <div className="uppercase text-[12px] font-bold">
                          {team.name}
                        </div>
                        <div className="uppercase text-[11px] text-[#939393]">
                          {team.title}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
