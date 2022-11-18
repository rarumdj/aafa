import React, { useState } from "react";
import {
  aboutone,
  anthony,
  creative_art,
  james,
  lazarus,
  live_impact,
  lucky,
  project_ex,
  righteligibility,
  sunday,
} from "../../assets/images";
import { ReactComponent as LeftIcon } from "../../assets/images/backArraw.svg";
import { ReactComponent as RightIcon } from "../../assets/images/frontArrow.svg";

import SwiperCore, {
  Controller,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testi = [
  {
    name: "Creative Art Forms",
    year: `6`,
    imgSrc: creative_art,
  },
  {
    name: "Projects Executed",
    year: `7`,
    imgSrc: project_ex,
  },
  {
    name: "Lives impacted",
    year: `20,000+`,
    imgSrc: live_impact,
  },
  {
    name: "Businesses Supported",
    year: `268`,
    imgSrc: project_ex,
  },
  {
    name: "Community Members",
    year: `2,000+`,
    imgSrc: project_ex,
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
    modules: [Pagination, Controller, Navigation],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled",
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
                      src={items.imgSrc}
                      alt="img-about"
                      className="absolute inset-0  w-full h-full object-contfain"
                    />
                  </div>

                  <div className="absolute bottom-0 flex h-fit -translate-y-20 z-10">
                    <div className="p-2.5 bg-orange-500">
                      <h4 className="lg:text-lg text-base font-medium text-white ">
                        {items.name}
                      </h4>
                    </div>
                    <div className="p-2.5 bg-orange-800">
                      <h4 className="lg:text-lg text-base font-medium text-white">
                        {items.year}
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
            <div className="image-swiper-button-prev p-2 lg:h-16 lg:w-16 h-10 w-10  rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
              <LeftIcon className="h-7" />
            </div>
            <div className="image-swiper-button-next p-2 lg:h-16 lg:w-16 h-10 w-10 bg-[#A44B2B] rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
              <RightIcon className="h-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4  md:hidden  block pt-8">
        {Testi.map((item, i) => (
          <div className="justify-center flex" key={i}>
            <div className="w-11/12 bg-opacity-70 overflow-hidden py-2 relative ">
              <div className="flex w-full relative h-full pb-[60%] ">
                <div className="absolute inset-0 m-auto w-full flex ">
                  <div className="h-full w-full bg-black opacity-60 z-10" />
                  <img
                    src={item.imgSrc}
                    alt="img-about"
                    className="absolute inset-0 w-full h-full object-contfain"
                  />
                </div>

                <div className="absolute flex h-fit bottom-5 z-10">
                  <div className="p-2.5 bg-orange-500">
                    <h4 className="lg:text-xl text-sm font-medium text-white ">
                      {item.name}
                    </h4>
                  </div>
                  <div className="p-2.5 bg-orange-800">
                    <h4 className="lg:text-xl text-sm font-medium text-white">
                      {item.year}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AgencyStats;
