import { Icon } from "@iconify/react";
import React from "react";
import { valueimage } from "../../assets/images";

const testimonial = [
  {
    name: "Mercy Udoh",
    letter: " A+Agency trained me, look how far I have grown",
  },
  {
    name: "Flora Benye",
    letter:
      "A+Agency thank you for sharing an inspiring learning experience. This must have been the best training program I’ve attended so far as a designer",
  },
  {
    name: "Uduak Samuel",
    letter: "I am glad to network with other creatives. Thank you A+ agency.",
  },
];
const Testimonial = () => {
  return (
    <div className="md:pt-24 pt-10 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="w-full flex justify-center">
          <h1 className="md:text-5xl text-3xl text-accent-black custom-font font-bold">
            Testimonials
          </h1>
        </div>
        <div className="text-neutral body-font">
          <div className="container md:py-24 py-14 mx-auto">
            <div className="flex flex-1 flex-col">
              {/* Count */}
              <div className="flex flex-wrap -m-4">
                {testimonial.map(({ name, letter }, index) => (
                  <div className="p-4 lg:w-1/3" key={index}>
                    <div className="h-full bg-[#f6f3f3]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                      <div className="space-y-4 py-8">
                        <div className="h-12 w-12 bg-accent-black rounded-full flex justify-center items-center">
                          <Icon
                            icon="mdi:person-circle"
                            className="w-full h-full text-white"
                          />
                        </div>
                        <p className="text-base !text-[#52372a]">{letter}</p>
                        <div className="space-y-2">
                          <div className="w-16 h-0.5 bg-accent-black" />
                          <h4 className="text-base text-neutral font-bold">
                            {name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
