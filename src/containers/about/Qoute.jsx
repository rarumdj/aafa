import React from "react";
import { comma } from "../../assets/images";

const Qoute = () => {
  return (
    <div className="pb-24 pt-44 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="mx-auto max-w-5xl lg:h-96 h-[20rem] w-full space-x-4 bg-[#F6EFEC] relative flex lg:p-16 p-4">
          <div className="lg:h-[180px] lg:w-[175px] h-[150px] w-[145px] bg-[#A44B2B] absolute left-0 lg:right-auto right-0 top-0 bottom-0 lg:my-auto mx-auto lg:-translate-x-20 lg:-translate-y-0 -translate-y-20 flex">
            <img src={comma} alt="comma" className="m-auto" />
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="max-w-xl flex items-center justify-center lg:text-base text-sm text-[#896d5e] lg:mt-0 mt-20">
              We are building partnerships that foster a collaborative approach
              to building infrastructure in the creative economy, investing in
              human capital, and generating economic opportunities that will
              bring mutual prosperity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qoute;
