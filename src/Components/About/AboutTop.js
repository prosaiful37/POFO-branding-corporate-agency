import React from "react";
import banner from "../../Images/About/about-banner.jpg";


const AboutTop = () => {
  return (
    <div className="bg-blue-500 bg-opacity-25 py-[130px]" style={{
        backgroundImage: "url(" + banner + ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center-top'

    }}>
        <div className="container py-[50]">
            <div className="w-[100%] mx-auto text-center">
                <span className="text-white font-bold">We are awesome designer</span>
                <h1 className="text-[46px] text-white font-bold">About simple</h1>
            </div>
        </div>
    </div>
  );
};

export default AboutTop;
