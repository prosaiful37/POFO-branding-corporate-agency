import React from "react";
import AboutTec from "./AboutTec";
import Agency from "./Agency";
import Banner from "./Banner";
import Skills from "./Skills";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Agency></Agency>
      <Skills></Skills>
      <AboutTec></AboutTec>
    </div>
  );
};

export default Home;
