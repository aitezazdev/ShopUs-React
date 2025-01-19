import React from "react";
import heroImage from "../assets/featured_product/image3.png";

const HeroSection = () => {
  return (
    <div className="md:h-[80vh] h-fit bg-[#6491BD] flex flex-col md:flex-row p-0 md:px-16">
      <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-center gap-5 md:gap-7">
        <h1 className="text-3xl md:text-5xl md:leading-relaxed font-bold text-white">Are You Ready To <br /> Lead The Way</h1>
        <p className="text-base md:text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi quae natus. Perspiciatis, facere, exercitationem corrupti eligendi porro cupiditate, obcaecati non nam nemo mollitia beatae unde dolore fugiat nesciunt atque?
        </p>
        <button className="w-24 py-2 md:w-32 md:py-3 rounded text-white bg-[#6640AF] hover:bg-[#7746d1] block mx-auto">Buy Now</button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-5 md:p-20">
        <img className="w-full h-full object-contain" src={heroImage} alt="chair" />
      </div>
    </div>
  );
};

export default HeroSection;
