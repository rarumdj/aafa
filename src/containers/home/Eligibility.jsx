import React, { useState } from "react";
import {
  anthony,
  james,
  lazarus,
  lucky,
  righteligibility,
  sunday,
} from "../../assets/images";
import { ReactComponent as LeftIcon } from "../../assets/images/backArraw.svg";
import { ReactComponent as RightIcon } from "../../assets/images/frontArrow.svg";
import { ReactComponent as SmallArrowIcon } from "../../assets/images/smallArrow.svg";
import { motion } from "framer-motion";
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

const Eligibility = () => {
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
    <section className="lg:py-24 py-10 flex md:flex-row flex-col md:justify-end items-center relative">
      <div className="h-[483px] w-11/12 bg-[#F6A487] md:rounded-none rounded-xl bg-opacity-70 overflow-hidden py-2 md:pl-2 pl-3 md:pr-0 pr-3 relative">
        <div className="w-full h-full filter backdrop-blur absolute inset-0" />
        <div className="filter-none bg-[#f9f5f2] w-full h-full flex justify-end">
          <div className="h-full md:w-2/12 w-full py-2 z-10  md:flex items-center justify-center hidden">
            <div className="space-x-6 flex justify-center px-2">
              <div className="p-2 lg:h-16 lg:w-16 h-10 w-10  rounded-full shadow-md flex items-center justify-center">
                <LeftIcon className="h-7" />
              </div>
              <div className="p-2 lg:h-16 lg:w-16 h-10 w-10 bg-[#A44B2B] rounded-full shadow-md flex items-center justify-center">
                <RightIcon className="h-7" />
              </div>
            </div>
          </div>
          <div className="h-full md:w-10/12 w-full py-2">
            <Swiper
              {...params}
              controller={{ control: controlledSwiper }}
              onSlideChange={(e) => setControlledSwiper(e.realIndex)}
              className="flex items-center">
              {Testi.map((items, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-transparent p-10">
                    <div className="space-y-4 mb-20">
                      <h1>0{i + 1}</h1>
                      <div className="border-b-2 border-orange-800 w-10" />
                    </div>
                    <div className="space-y-4 text-neutral">
                      <h1 className="custom-font font-bold md:text-2xl text-xl">
                        Emerge
                      </h1>
                      <div>
                        <p className="md:text-base text-sm mb-5 !text-[#52372a]">
                          Refine and develop your ideas into quality products
                          for a ready market
                        </p>
                        <a href="/" className="text-[#A44B2B] underline flex items-center">
                          Find out more <span><SmallArrowIcon className="h-3 ml-2" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full justify-center md:hidden flex ">
        <div className="flex space-x-2 mt-6">
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
