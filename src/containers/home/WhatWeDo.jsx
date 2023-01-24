import React from "react";
import { whatweImg } from "../../assets/images";

const WhatWeDo = () => {
  return (
    <div className="md:py-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="container mx-auto flex">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden order-last md:order-first">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src={whatweImg}
              />
            </div>
            <div className="flex flex-col h-full justify-center flex-wrap lg:py-6 md:-mb-10 mb-24 lg:pl-20 lg:text-left text-center">
              <div>
                <h5 className="text-base text-accent-black font-bold mb-4">
                  WHAT WE DO
                </h5>
                <h1 className="text-5xl text-neutral mb-10 custom-font font-bold">
                  About us
                </h1>
                <p className="text-base  text-accent-black lg:w-9/12 w- full">
                  Ensuring inclusive empowerment for creative entrepreneurs and
                  sustaining quality production towards African economic growth.
                  A+ Agency is a creative development agency committed to
                  educating and providing resources for talents & enterprises in
                  the creative industry birthing a community of creative game
                  changers.
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
