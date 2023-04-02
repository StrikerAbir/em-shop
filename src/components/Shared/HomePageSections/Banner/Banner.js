import React from "react";
import img2 from '../../../../assets/images/banner1.jpg';
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mb-20">
      <div className="relative">
        <div>
          <Image src={img2} alt=""></Image>
        </div>
        <div className="absolute right-0 md:w-1/2 w-11/12 h-full top-0 bg-base-100 bg-opacity-80 border-0 border-l-4 border-warning">
          <div className="h-full md:px-5 px-2 flex flex-col justify-center">
            <h1 className="lg:text-4xl md:text-3xl text-primary font-bold text-center">
              “EM Shop”
            </h1>
            <h4 className="lg:text-xl text-xs text-center my-5">
              EM Shop is a marketplace where you can buy products at the lowest possible price.
            </h4>
            <p className="font-bold text-2xl text-center">{`"`}Exclusive Marketplace{`"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
