import React from "react";
import { aboutone, bank_logo, british_logo, export_logo, fresh_logo, scale_logo } from "../../assets/images";

const OurExperience = () => {
  return (
    <div className="pt-24 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center w-screen max-w-[100rem]">
<div className="w-full flex justify-center mb-14">
<h1 className="text-3xl text-[#A44B2B] font-bold">Our Experience</h1>

</div>
        <div className="flex flex-col">
          {/* Count */}
          {/* <div className="flex flex-wrap w-full"> */}
          <div className="stats bg-transparent">
            <div className="stat place-items-center border-none">
              <img src={british_logo} alt={british_logo} />
            </div>
            <div className="stat place-items-center border-none">
              <img src={scale_logo} alt={scale_logo} />
            </div>

            <div className="stat place-items-center border-none">
              <img src={export_logo} alt={export_logo} />
            </div>

            <div className="stat place-items-center border-none">
              <img src={bank_logo} alt={bank_logo} />
            </div>

            <div className="stat place-items-center border-none">
              <img src={fresh_logo} alt={fresh_logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperience;
