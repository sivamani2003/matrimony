import React from "react";
import "./Hero.css";


function Hero() {
  return (
    <div className="max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-2 md:mb-10">
      <div className="w-[300px] mt-10 flex justify-center md:mt-10 my-30 md:w-[700px]">

        <img className="ml-20 md:ml-0" src="./src/assets/images/Metrimonititle.png" />
      </div>

      <div className="mt-10 flex justify-start md:mt-10">
        <div className="bg-[#fccff0] mx-8 md:mx-0 rounded-3xl p-5 border border-[#f789d2] opacity-80 flex justify-center md:justify-start md:w-[680px]">
          <p className="text-gray-900 font-semibold text-sm md:text-xl">
          Marriage is a sacred bond, fulfilling one's duty in life. As you embark on this journey, may your actions reflect love, respect
            <br />
            and devotion towards your partner, family, and the divine.
            <br />
            <span className="text-pink-800">(Dhanu Dino: 999999999)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
