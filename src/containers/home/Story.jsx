import React, { useState } from "react";
import {
    mercy
} from "../../assets/images";

import SwiperCore, {
    Autoplay, Controller, Navigation, Pagination
} from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Testi = [
  {
    name: "Mercy Udoh",
    para: `Mercy Udoh walked into our outlet with a bubbling idea and dreams of running a thriving fashion career. After a consultancy session with experts in the industry in our team, she proceeded to register for the fashion academy where she was taught by renowned instructors on up-to-date trends on pattern drafting, professional tailoring, she also had access to mentors who guided on becoming a fashion entrepreneur, and also mastery and refinement of business ideas. She moved from this stage to launching her own fashion brand by participating in our Business of Fashion Incubator, after which she participated in the Creative Cohort, where she gained exposure to vast opportunities in the creative sector. The knowledge from these programs increased her capacity and she applied them in her business, and she experienced an increase in revenue and started wanting more. She applied for the Dive Fashion Program where she participated in the intensive program and learnt a step-by-step approach to launching a fashion  brand in the US market and build and run an international brand that is profitable. LinkedIn. Instagram. Facebook. Zateemee’s inspiring success story can be yours too. All you need to do is to enroll for one of our programs. 
    `,
    imgSrc: mercy,
  },
  {
    name: "DIAKWU",
    para: ` Chinelo Njemanze is the Founder of DIAKWU, an ethical application of textile waste, made out of off-cuts and collected from garment production facilities. These are cut into stripes which are incorporated into yarn and handwoven on traditional looms by  local weavers. She is a beneficiary of the ReRoll Station which was made possible by the British Council and A+ Fashion Agency.
    `,
    imgSrc: mercy,
  },
  {
    name: "AFRI DESIGN X",
    para: `A+ Agency worked with AfridesignX, a rally for global design exchanges to execute the ReRoll Station for ethical brands to build and run an international brand that is environmentally friendly, socially inclusive & profitable. `,
    imgSrc: mercy,
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
    modules: [Pagination, Controller, Navigation],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-story",
      clickable: true,
      type: "bullets",
    },
  };

  return (
    <div className="pt-24 flex flex-col bg-gradient-to-b from-[#F4E9E5] to-transparent rounded-t-full">
      <div className="md:py-10 flex justify-center">
        <div className="flex mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <h1 className="md:text-5xl text-3xl text-[#A44B2B] custom-font font-bold text-center">
            Story of an <br />
            entrepreneur
          </h1>
        </div>
      </div>
      <div className="md:pt-24 pt-8 flex flex-col items-center justify-center">
        <div className="h-auto md:w-8/12 w-10/12 bg-transparent bg-opacity-70 overflow-hidden py-2 p-2 relative single-view">
          <Swiper
            {...params}
            controller={{ control: controlledSwiper }}
            onSlideChange={(e) => setControlledSwiper(e.realIndex)}
            className="flex items-center">
            {Testi.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="bg-transparent md:p-10">
                  <div className="grid lg:grid-cols-2 gap-14">
                    <div className="order-last md:order-first">
                      <div className="space-y-4 mb-10">
                        <h1 className="text-2xl text-neutral">{items.name}</h1>
                        <div className="border-b-2 border-orange-800 w-10" />
                      </div>
                      <div className="space-y-4">
                        <p className="!text-[#52372a]">
                         {items.para}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex rounded-2xl  w-full relative pb-[100%]">
                        <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                          <img
                            src={items.imgSrc}
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
        <div className="h-auto md:w-8/12 w-10/12 bg-transparent md:py-2 py-6 md:px-10 relative single-view">
          <div className="w-full md:justify-start justify-center flex ">
            <div className="flex space-x-2">
              {/* <div>1</div>
          <div>1</div>*/}
              <div className="swiper-pagination-story"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
