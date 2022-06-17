import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const TestimonialVideo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="py-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="w-full h-[430px] bg-[#a44b2b] relative rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 relative">
            <div className="inset-0 lg:w-8/12 lg:h-[500px] lg:px-0 px-4 h-[200px] lg:translate-x-24 lg:-translate-y-10 -translate-y-10  ">
              <div className="flex w-full h-full bg-gray-500 rounded-lg ">
                <button
                  className="appearance-none m-auto cursor-pointer"
                  onClick={() => setOpen(true)}>
                  <Icon
                    icon="arcticons:oplayer"
                    fontSize={70}
                    color="#fff"
                    className=""
                  />
                </button>
              </div>
            </div>

            <div className="px-6 lg:px-16 mb-10 mt-16">
              <h1 className="md:text-4xl text-3xl font-bold px-4 text-white">
                Testimonial video
              </h1>
              <p className="text-center text-white text-sm md:text-xl font-bold mt-2">
            - Mai Atafo
          </p>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default TestimonialVideo;
