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
    title: "Emerge",
    para: `Refine and develop your ideas into quality products for a ready market.`,
    imgSrc: james,
  },
  {
    title: "Oleku",
    para: `Launch and scale your products in Europe.`,
    imgSrc: anthony,
  },
  {
    title: "Export-Ready Conference",
    para: `A step-by-step approach on expanding your market to the international market. `,
    imgSrc: sunday,
  },
  {
    title: "Reroll",
    para: `How to run an ethical and sustainable fashion business. `,
    imgSrc: lucky,
  },
  {
    title: "Digital Loom",
    para: `What you think you know about woven fabrics Versus What it is.`,
    imgSrc: lazarus,
  },
  {
    title: "Be A+",
    para: `Since 2018, we've helped millions of people discover their skills & talents, find a job, grow their creative career or business. Now, we are here to help accelerate economic recovery through our partnerships, projects, tools and training; so that local businesses, communities and people can grow stronger, faster and do more.`,
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
      el: ".swiper-pagination-af",
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
              <div className="image-swiper-button-prev p-2 lg:h-16 lg:w-16 h-10 w-10  rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
                <LeftIcon className="h-7" />
              </div>
              <div className="image-swiper-button-next p-2 lg:h-16 lg:w-16 h-10 w-10 bg-[#A44B2B] rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
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
                    <div className="space-y-4 mb-16">
                      <h1>0{i + 1}</h1>
                      <div className="border-b-2 border-orange-800 w-10" />
                    </div>
                    <div className="space-y-4 text-neutral">
                      <h1 className="custom-font font-bold md:text-2xl text-xl">
                        {items.title}
                      </h1>
                      <div>
                        <p className="md:text-base text-sm mb-5 !text-[#52372a]">
                          {items.para}
                        </p>
                        <a
                          href="/"
                          className="text-[#A44B2B] underline flex items-center">
                          Find out more{" "}
                          <span>
                            <SmallArrowIcon className="h-3 ml-2" />
                          </span>
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
        <div className="swiper-pagination-af"></div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
