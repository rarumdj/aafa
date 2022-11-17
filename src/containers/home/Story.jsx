import React, { useState } from "react";
import {
  aboutone,
  anthony,
  james,
  lazarus,
  lucky,
  mercy,
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

const Story = () => {
  const [controlledSwiper, setControlledSwiper] = useState(0);
  let changeText = Testi[controlledSwiper];
  SwiperCore.use([Autoplay]);
  const params = {
    slidesPerView: 1,
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
    <div className="pt-24 flex flex-col bg-gradient-to-b from-[#F4E9E5] to-transparent rounded-t-full h-">
      <div className="md:py-10 flex justify-center">
        <div className="flex mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <h1 className="md:text-5xl text-3xl text-[#A44B2B] custom-font font-bold text-center">
            Story of an <br />
            entrepreneur
          </h1>
        </div>
      </div>
      <div className="md:pt-24 pt-8 flex justify-center">
        <div className="h-auto md:w-8/12 w-10/12 bg-transparent bg-opacity-70 overflow-hidden py-2 p-2 relative single-view">
          <Swiper
            {...params}
            controller={{ control: controlledSwiper }}
            onSlideChange={(e) => setControlledSwiper(e.realIndex)}
            className="flex items-center">
            {Testi.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="bg-transparent md:p-10">
                  <div className="grid md:grid-cols-2 gap-14">
                    <div>
                      <div className="space-y-4 mb-10">
                        <h1 className="text-2xl text-neutral">Mercy Udoh</h1>
                        <div className="border-b-2 border-orange-800 w-10" />
                      </div>
                      <div className="space-y-4">
                        <p className="!text-[#52372a]">
                          Mercy Udoh walked into our outlet with a bubbling idea
                          and dreams of running a thriving fashion career. After
                          a consultancy session with experts in the industry in
                          our team, she proceeded to register for the fashion
                          academy where she was taught by renowned instructors
                          on up-to-date trends on pattern drafting, professional
                          tailoring, she also had access to mentors who guided
                          on becoming a fashion entrepreneur, and also mastery
                          and refinement of business ideas. She moved from this
                          stage to launching her own fashion brand by
                          participating in our Business of Fashion Incubator,
                          after which she participated in the Creative Cohort,
                          where she gained exposure to vast opportunities in the
                          creative sector. The knowledge from these programs
                          increased her capacity and she applied them in her
                          business, and she experienced an increase in revenue
                          and started wanting more. She applied for the Dive
                          Fashion Program where she participated in the
                          intensive program and learnt a step-by-step approach
                          to launching a fashion brand in the US market and
                          build and run an international brand that is
                          profitable. LinkedIn. Instagram. Facebook. Zateemee’s
                          inspiring success story can be yours too. All you need
                          to do is to enroll for one of our programs.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex rounded-2xl  w-full relative pb-[100%]">
                        <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                          <img
                            src={mercy}
                            alt="img-about"
                            className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Story;
