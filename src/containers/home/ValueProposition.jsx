import React from "react";
import {
  hondacivic,
  toyotacam03,
  toyotacorolla,
  toyotamatrix,
  valueimage,
} from "../../assets/images";

const ValueProposition = () => {
  return (
    <section
      id="value"
      className="bg-[#f6efec] md:bg-contain bg-auto py-16 ">
      <div className="px-6 lg:px-16 mb-10">
        <h1 className="md:text-4xl text-3xl font-bold px-4 text-black">
          Value Proposition -{" "}
          <span className="font-normal text-[#a44b2b]">Our Approach</span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="flex flex-1 flex-col">
          {/* Count */}
          <div className="flex flex-wrap w-full">
            <div className="w-full lg:w-7/12 lg:px-4 lg:h-[343px] mb-8 lg:block hidden">
              <div className="w-full h-full bg-[#EFECE9] border border-[#a44b2b] rounded-md flex flex-col justify-center">
                <div className="p-6">
                  <h2 className="font-bold text-black text-lg">
                    Training, coaching & capacity building
                  </h2>
                  <div className="bg-[#a44b2b] h-0.5 rounded-md w-12 my-5" />
                  <p className="text-[#896d5e] mt-8">
                    complementary to our development & investment activities.
                    Training programs designed for our creatives & brands in
                    collaboration with our global partners in USA & Europe.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 lg:px-4 lg:h-[343px] mb-8">
              <div className="w-full h-full bg-[#F5F5F5] border border-[#a44b2b]  rounded-md flex flex-col justify-center">
                <div className="p-6">
                  <h2 className="font-bold text-black text-lg">Development</h2>
                  <div className="bg-[#a44b2b] h-0.5 rounded-md w-12 my-5" />
                  <p className="text-[#896d5e] mt-8">
                    Strategic & operational support of creatives & brands
                    wishing to rely on a trusted & proven partner to sustain its
                    local & global growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Extra */}
            <div className="w-full lg:w-7/12 lg:px-4 lg:h-[343px] mb-8 lg:hidden block">
              <div className="w-full h-full bg-[#EFECE9] border border-[#a44b2b]  rounded-md flex flex-col justify-center">
                <div className="p-6">
                  <h2 className="font-bold text-black text-lg">
                    Training, coaching & capacity building
                  </h2>
                  <div className="bg-[#a44b2b] h-0.5 rounded-md w-12 my-5" />
                  <p className="text-[#896d5e] mt-8">
                    complementary to our development & investment activities.
                    Training programs designed for our creatives & brands in
                    collaboration with our global partners in USA & Europe.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/12 lg:px-4 lg:h-[288px] lg:mb-0 mb-8">
              <div className="w-full h-full bg-[#F5F5F5] border border-[#a44b2b]  rounded-md flex flex-col justify-center">
                <div className="p-6">
                  <h2 className="font-bold text-black text-lg">Investment</h2>
                  <div className="bg-[#a44b2b] h-0.5 rounded-md w-12 my-5" />
                  <p className="text-[#896d5e] mt-8">
                    Incubation, acceleration, capital growth in indigenous
                    brands.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 lg:px-4 lg:h-[288px]">
              <div className="w-full h-full bg-[#555555] border border-[#a44b2b]  rounded-md flex flex-col justify-center">
                <div className="p-6">
                  <h2 className="font-bold text-white text-lg">
                    Exposure & Promotion
                  </h2>
                  <div className="bg-[#a44b2b] h-0.5 rounded-md w-12 my-5" />
                  <p className="text-white mt-8">
                    Marketing communications support to help creatives & brands
                    broaden awareness and connect with new audiences, bringing
                    them to new people, places and pages ~ helping the creative
                    industry engage with customers and expand influence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-initial min-w-[30%] lg:pt-0 pt-10">
          <div className="lg:px-4 h-full">
            {/* chart */}
            <div className="relative flex flex-col w-full min-w-0 break-words mb-6 rounded-md bg-value-prep bg-center bg-cover bg-no-repeat lg:h-full h-52"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
