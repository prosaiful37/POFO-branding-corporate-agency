import React from "react";
import AboutTec from "./AboutTec";
import Agency from "./Agency";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Team from "./Team";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Agency></Agency>
      <Skills></Skills>
      <AboutTec></AboutTec>
      <Portfolio></Portfolio>
      <Team></Team>
    </div>
  );
};

export default Home;
