import React, { useState } from "react";
import {
  aboutone,
  anthony,
  james,
  lazarus,
  lucky,
  righteligibility,
  sunday,
} from "../../assets/images";
import { ReactComponent as LeftIcon } from "../../assets/images/backArraw.svg";
import { ReactComponent as RightIcon } from "../../assets/images/frontArrow.svg";

import SwiperCore, { Controller, Autoplay, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testi = [
  {
    name: "Kenedy James",
    para: `I have been driving as a commercial driver for over 5 years
  but the exceptional service and ease of getting a car from
  Rapyd was amazing. I look forward to the day I'll have the
  original documents as I already own this car in my mind.`,
    imgSrc: james,
  },
  {
    name: "Anthony",
    para: `My experience with Rapyd has left me with nothing but a grateful heart. This is more than a business for me, Rapyd Cars empowered me to achieve my personal goals. Thank you Rapyd Cars.`,
    imgSrc: anthony,
  },
  {
    name: "Sunday",
    para: `Sometimes I have the impression that Rapyd is not a Nigerian company because of how fast and excellent their services are. The amount of concern they have for their Driver is highly commendable and I am more than grateful to be on this journey to own my own car. Thank you Rapyd.`,
    imgSrc: sunday,
  },
  {
    name: "Lucky",
    para: `I feel like my name was what I experienced with Rapyd Cars. I feel so Lucky to be associated with a company like Rapyd Cars. Thank Rapyd for this opportunity to be my own Boss. `,
    imgSrc: lucky,
  },
  {
    name: "Lazarus",
    para: `Rapyd cars was my saviour after the ugly experience I had during the pandemic. I enjoyed the best of treatment as a driver that any organization has ever given to me. `,
    imgSrc: lazarus,
  },
];

const AgencyStats = () => {
  const [controlledSwiper, setControlledSwiper] = useState(0);
  let changeText = Testi[controlledSwiper];
  SwiperCore.use([Autoplay]);
  const params = {
    slidesPerView: window.innerWidth < 767 ? 1 : 3,
    spaceBetween: 10,
    loop: true,
    modules: [Pagination, Controller],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  };
  return (
    <>
      <div className="pt-14 flex justify-center">
        <div className="flex mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <h1 className="md:text-3xl text-xl text-[#A44B2B] font-bold">
            Key A+ 2022 Agency Stats
          </h1>
        </div>
      </div>
      <div className="pt-4 justify-end md:flex hidden">
        <div className="h-[483px] w-11/12 bg-opacity-70 overflow-hidden py-2 pl-2 relative slide-image">
          <Swiper
            {...params}
            controller={{ control: controlledSwiper }}
            onSlideChange={(e) => setControlledSwiper(e.realIndex)}
            className="flex items-center">
            {Testi.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="flex w-full relative h-full ">
               
                  <div className="absolute inset-0 m-auto w-full h-[80%] flex">
                  <div className="h-full w-full bg-black opacity-60 z-10 " />
                    <img
                      src={aboutone}
                      alt="img-about"
                      className="absolute inset-0  w-full h-full object-contfain"
                    />
                  </div>

                  <div className="absolute bottom-0 flex h-fit -translate-y-20 z-10">
                    <div className="p-2.5 bg-orange-500">
                      <h4 className="lg:text-lg text-base font-medium text-white ">
                        Launched in 2018
                      </h4>
                    </div>
                    <div className="p-2.5 bg-orange-800">
                      <h4 className="lg:text-lg text-base font-medium text-white">
                        8
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="pb-24 md:flex hidden justify-center">
        <div className="flex mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <div className="space-x-6 flex">
            <div className="h-16 w-16 rounded-full shadow-md flex items-center justify-center">
              <LeftIcon />
            </div>
            <div className="h-16 w-16 bg-[#A44B2B] rounded-full shadow-md flex items-center justify-center">
              <RightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4  md:hidden  block">
        <div className="pt-8 justify-center flex">
          <div className="w-11/12 bg-opacity-70 overflow-hidden py-2 relative ">
            <div className="flex w-full relative h-full pb-[60%] ">
              <div className="absolute inset-0 m-auto w-full ">
                  <div className="h-full w-full bg-black opacity-60 z-10" />
                <img
                  src={aboutone}
                  alt="img-about"
                  className="absolute inset-0 w-full h-full object-contfain"
                />
              </div>

              <div className="absolute flex h-fit bottom-5 z-10">
                <div className="p-2.5 bg-orange-500">
                  <h4 className="lg:text-xl text-base font-medium text-white ">
                    Launched in 2018
                  </h4>
                </div>
                <div className="p-2.5 bg-orange-800">
                  <h4 className="lg:text-xl text-base font-medium text-white">
                    8
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyStats;
