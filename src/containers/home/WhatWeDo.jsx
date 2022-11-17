import React from "react";
import { whatweImg } from "../../assets/images";

const WhatWeDo = () => {
  return (
    <div className="md:py-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div class="container mx-auto flex">
          <div className="grid md:grid-cols-2 gap-4">
            <div class="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden order-last md:order-first">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src={whatweImg}
              />
            </div>
            <div class="flex flex-col h-full justify-center flex-wrap lg:py-6 md:-mb-10 mb-24 lg:pl-20 lg:text-left text-center">
              <div>
                <h5 className="text-base text-[#A44B2B] font-bold mb-4">
                  WHAT WE DO
                </h5>
                <h1 className="text-5xl text-neutral mb-10 custom-font font-bold">About us</h1>
                <p className="text-base  !text-[#52372a] opacity-70 lg:w-9/12 w-full">
                  Ensuring inclusive empowerment for creative entrepreneurs and
                  sustaining quality production towards African economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
