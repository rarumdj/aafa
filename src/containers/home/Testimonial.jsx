import React from "react";
import { valueimage } from "../../assets/images";

const Testimonial = () => {
  return (
    <div className="pt-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="w-full flex justify-center">
          <h1 className="md:text-5xl text-3xl text-[#A44B2B] custom-font font-bold">Testimonials</h1>
        </div>
        <div className="text-neutral body-font">
          <div className="container md:py-24 py-14 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-s72 overflow-hidden shadow-md flex justify-center items-scenter p-10">
                  <div className="space-y-4 py-12">
                    <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
                    <p className="text-base !text-[#52372a]">
                      A+Agency trained me, look how far I have grown
                    </p>
                    <div className="space-y-2">
                      <div className="w-16 h-0.5 bg-[#A44B2B]" />
                      <h4 className="text-base text-neutral font-bold">
                        Mercy Udoh
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-7s2 overflow-hidden shadow-md flex justify-center items-scenter p-10">
                  <div className="space-y-4 py-12">
                    <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
                    <p className="text-base !text-[#52372a]">
                      A+Agency thank you for sharing an inspiring learning
                      experience. This must have been the best training program
                      I’ve attended so far as a designer
                    </p>
                    <div className="space-y-2">
                      <div className="w-16 h-0.5 bg-[#A44B2B]" />
                      <h4 className="text-base text-neutral font-bold">
                        Flora benye
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-s72 overflow-hidden shadow-md flex justify-center items-scenter p-10">
                  <div className="space-y-4 py-12">
                    <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
                    <p className="text-base !text-[#52372a]">
                      I am glad to network with other creatives. Thank you A+
                      agency
                    </p>
                    <div className="space-y-2">
                      <div className="w-16 h-0.5 bg-[#A44B2B]" />
                      <h4 className="text-base text-neutral font-bold">
                        Uduak Samuel
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
