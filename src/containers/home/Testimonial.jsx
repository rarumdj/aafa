import React from "react";

const Testimonial = () => {
  return (
    <div className="pb-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="px-6 lg:px-16 mb-10 mx-auto">
          <h1 className="md:text-4xl text-3xl font-bold text-black">
            Testimonials
          </h1>
        </div>
        <div className="carousel carousel-center mx-auto max-w-lg lg:h-96 w-full p-4 space-x-4 bg-[#a44b2b] rounded-box">
          <div className="carousel-item">
            <div className="rounded-box relative p-6 h-full bg-[#EFECE9]">
              <div className="flex flex-col w-full h-full">
                <div className="mx-auto space-y-4 flex flex-col items-center">
                  <img
                    alt="pics"
                    src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
                    className="mask mask-squircle w-24 h-24 "
                  />
                  <h5 className="text-neutral">David Johnson</h5>
                </div>
                <div className="pt-5">
                  <p className="text-sm text-[#896d5e] max-w-xs">
                    broaden awareness and connect with new audiences, bringing
                    them to new people, places and pages ~ helping the creative
                    industry engage with customers and expand influence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="rounded-box relative p-6 h-full bg-[#EFECE9]">
              <div className="flex flex-col w-full h-full">
                <div className="mx-auto space-y-4 flex flex-col items-center">
                  <img
                    alt="pics"
                    src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
                    className="mask mask-squircle w-24 h-24 "
                  />
                  <h5 className="text-neutral">David Johnson</h5>
                </div>
                <div className="pt-5">
                  <p className="text-sm text-[#896d5e] max-w-xs">
                    broaden awareness and connect with new audiences, bringing
                    them to new people, places and pages ~ helping the creative
                    industry engage with customers and expand influence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="rounded-box relative p-6 h-full bg-[#EFECE9]">
              <div className="flex flex-col w-full h-full">
                <div className="mx-auto space-y-4 flex flex-col items-center">
                  <img
                    alt="pics"
                    src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
                    className="mask mask-squircle w-24 h-24 "
                  />
                  <h5 className="text-neutral">David Johnson</h5>
                </div>
                <div className="pt-5">
                  <p className="text-sm text-[#896d5e] max-w-xs">
                    broaden awareness and connect with new audiences, bringing
                    them to new people, places and pages ~ helping the creative
                    industry engage with customers and expand influence.
                  </p>
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
