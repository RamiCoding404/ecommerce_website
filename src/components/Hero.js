import React from "react";

import womanimage from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full ">
        <div className="flex flex-col justify-center ">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div> New Trend
          </div>
          <h1 className="text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>

          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={womanimage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
