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
import { Link } from "react-router-dom";

const Testi = [
  {
    title: "Emerge",
    para: `A program for young creatives to Design and develop their creative ideas into quality products that are market ready.`,
    link: "/",
    linkType: "page",
    linkName: "Find out more",
  },
  {
    title: "Oleku",
    para: `A hybrid pop-up sale event for Nigerian female creative entrepreneurs in London. Launch and scale your products in Europe.`,
    link: "/",
    linkType: "page",
    linkName: "Find out more",
  },
  {
    title: "Export-Ready Conference",
    para: `A step-by-step approach on expanding your market to the international market.`,
    link: "/",
    linkType: "page",
    linkName: "Find out more",
  },
  {
    title: "Reroll Station Lab",
    para: `How to run an ethical and sustainable fashion business.`,
    link: "/",
    linkType: "page",
    linkName: "Find out more",
  },
  {
    title: "Digital Loom",
    para: `The People, the potential, the stories and the culture of African woven Textile.`,
    link: "/",
    linkType: "url",
    linkName: "Sign up",
  },
  {
    title: "Going Global Workshop",
    para: `How to launch your brand to an international market.`,
  },
  {
    title: "Job Readiness Conference",
    para: `A Hybrid flagship employability skill training initiative to prepare women and young creatives for a successful career and workplace.`,
  },
  {
    title: "DIVE ",
    para: `A partnership with Scaling Retail to help fashion brands build successful international businesses and help them ENTER the U.S market.`,
  },
  {
    title: "Creative Cohort",
    para: `A initiative that runs a creative cooperative community that offers financial services, business support services and growth opportunities for creative entrepreneurs.`,
  },
  {
    title: "Business of Fashion",
    para: `a business workshop program to train fashion entrepreneurs on how to run a profitable business model.`,
  },
  {
    title: "Be A+",
    para: `Since 2018, we've helped hundreds of young people and women discover their skills & talents, build sustainable business models, find a jobs, grow their creative career or business. Now, we are here to help accelerate economic recovery through our partnerships, projects, tools and training; so that local businesses, communities and people can grow stronger, faster and do more.  We can do more of you collaborate with us.`,
    link: "/",
    linkType: "page",
    linkName: "Find out more",
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
    <section className="min-h-full lg:py-24 py-10 flex md:flex-row flex-col md:justify-end items-center relative">
      <div className=" w-11/12 bg-white md:rounded-none rounded-xl bg-opacity-70 overflow-hidden py-2 md:pl-2 pl-3 md:pr-0 pr-3 relative">
        <div className="w-full h-full filter backdrop-blur absolute inset-0" />
        <div className="filter-none bg-[#f9f5f2] w-full h-full flex justify-end">
          <div className="h-full md:w-2/12 w-full py-2 z-10  md:flex items-center justify-center hidden">
            <div className="space-x-6 flex justify-center px-2">
              <div className="image-swiper-button-prev p-2 lg:h-16 lg:w-16 h-10 w-10  rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
                <LeftIcon className="h-7" />
              </div>
              <div className="image-swiper-button-next p-2 lg:h-16 lg:w-16 h-10 w-10 bg-accent-black rounded-full shadow-md flex items-center justify-center hover:-translate-y-1 ease-in-out transition-all duration-200 cursor-pointer">
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
                  <div className="bg-transparent p-10 h-full">
                    <div className="space-y-4 mb-10">
                      <h1 className="text-accent-black">
                        {i > 8 ? i + 1 : `0${i + 1}`}
                      </h1>
                      <div className="border-b-2 border-accent-black w-10" />
                    </div>
                    <div className="space-y-4 text-neutral">
                      <h1 className="custom-font font-bold md:text-2xl text-xl">
                        {items.title}
                      </h1>
                      <div>
                        <p className="md:text-base text-sm mb-5 text-">
                          {items.para}
                        </p>
                        {items.link && (
                          <>
                            {items.linkType === "page" ? (
                              <Link
                                to={items.link}
                                className="text-accent-black underline flex items-center">
                                {items.linkName}
                                <span>
                                  <SmallArrowIcon className="h-3 ml-2 fill-accent-black stroke-accent-black text-accent-black" />
                                </span>
                              </Link>
                            ) : (
                              <a
                                href={items.link}
                                className="text-accent-black underline flex items-center">
                                {items.linkName}
                                <span>
                                  <SmallArrowIcon className="h-3 ml-2 first-letter text-accent-black  fill-accent-black stroke-accent-black" />
                                </span>
                              </a>
                            )}
                          </>
                        )}
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
