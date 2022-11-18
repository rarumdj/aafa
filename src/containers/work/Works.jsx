import React from "react";
import { aboutone, comma, line } from "../../assets/images";

const Works = () => {
  return (
    <section
      id="value"
      className="bg-[#f6efec] md:bg-contain bg-auto pb-16 lg:pt-44 pt-32 ">
      <div className="w-screen max-w-[100rem] mx-auto ">
        <div className="flex lg:flex-row flex-col mx-auto  px-6 justify-center">
          <div className="flex-initial min-w-[30%] lg:pt-0 pt-10">
            <div className="lg:px-4 h-full">
              {/* chart */}
              <div className="relative hero-overlay bg-opacity-70 bg-blend-overlay flex p-4 flex-col w-full min-w-0 break-words mb-6 rounded-md bg-value-prep bg-center bg-cover bg-no-repeat lg:h-full h-52 justify-center items-center overflow-hidden">
                <div className="lg:h-14 lg:w-14  h-10 w-10 bg-[#f6efec] rotate-45 absolute right-0 translate-x-8" />
                <h1 className="title-font sm:text-4xl text-xl  font-bold text-white mb-4">
                  Our Works
                </h1>
                <p className="lg:max-w-xs mb-5  text-center text-white">
                  We are the highest level of resource support community the
                  African creative & brand can be a part of.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            {/* Count */}
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Reroll Station Lab
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    The RE-ROLL STATION is a hands-on intensive digital program
                    to help fashion entrepreneurs in Recycling fashion waste
                    launch their fashion brand into the global market and build
                    & run an international brand that is environmentally
                    friendly, socially inclusive and profitable. Re-roll Station
                    will provide creative entrepreneurs with actionable steps to
                    grow their ethical brands.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Find out more
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Digital Loom
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    Digital Loom aims to research & discover ways through which
                    traditional weaving craftsmen/centers in Nigeria can
                    collaborate with futuristic designers, Digital creators,
                    contemporary designers, design experts in order to modernize
                    their techniques, making their products more attractive to
                    the younger generation while generating wealth.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Find out more
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Export Ready Conference
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    A Hybrid style conference that offers creatives in fashion
                    design, Make-up, photography, styling, hair-styling, fabric
                    dealers and accessory design, opportunity to gain awareness
                    of the breadth of artistic and non-artistic livelihood
                    opportunities available across creative sector value chains
                    through international trade and export
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Find out more
                  </button>
                </div>
              </div>
              {/* 
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    The Creative Cohort
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    An innovative development community that runs a creative
                    cooperative society that offers financial services, business
                    support services and growth opportunities for creative
                    entrepreneurs.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Schedule an appointment
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Shereos
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-[#a44b2b] bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Oleku
                  </h1>
                  <p className="leading-relaxed mb-5 text-[#896d5e]">
                    Oleku Galleria is an inclusive and supportive ecosystem to
                    help women-owned businesses develop robust international
                    trade relationships, easy international market entry,
                    training to increase quality of product output and increase
                    productivity and competitiveness, Stationed at the heart of
                    London, for a period, the Oleku Galleria Hybrid Pop-up Sale
                    Event would showcase black female-owned businesses through a
                    wholesale /retail e-commerce platform, a digital and
                    in-store Pop-up concept display (timed shopping event that
                    sells carefully curated and unique selection of brands).
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                    Schedule a call
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto  px-6 justify-center lg:mt-24 mt-16">
          <div class="flex flex-wrap -m-4 items-center">
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4">
                <h2 className="text-[#a44b2b] text-2xl font-medium mb-4">
                  The Creative Cohort
                </h2>
                <div className="flex items-center">
                  <p className="lg:text-base text-sm text-[#896d5e]">
                    An innovative development community that runs a creative
                    cooperative society that offers financial services, business
                    support services and growth opportunities for creative
                    entrepreneurs.
                  </p>
                </div>
                <button className="btn btn-primary btn-wide mt-8 bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                  Discover More
                </button>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4 w-full">
                <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                  <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                    <img
                      src={aboutone}
                      alt="img-about"
                      className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:flex hidden flex-wrap -m-4 items-center lg:mt-16 mt-8">
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4 w-full">
                <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                  <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                    <img
                      src={aboutone}
                      alt="img-about"
                      className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4">
                <h2 className="text-[#a44b2b] text-2xl font-medium mb-4">
                  Oleku
                </h2>
                <div className="flex items-center">
                  <p className="lg:text-base text-sm text-[#896d5e]">
                    Oleku Galleria is an inclusive and supportive ecosystem to
                    help women-owned businesses develop robust international
                    trade relationships, easy international market entry,
                    training to increase quality of product output and increase
                    productivity and competitiveness, Stationed at the heart of
                    London, for a period, the Oleku Galleria Hybrid Pop-up Sale
                    Event would showcase black female-owned businesses through a
                    wholesale /retail e-commerce platform, a digital and
                    in-store Pop-up concept display (timed shopping event that
                    sells carefully curated and unique selection of brands).
                  </p>
                </div>
                <button className="btn btn-primary btn-wide mt-8 bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                  Join Now
                </button>
              </div>
            </div>
          </div>

          <div class="flex lg:hidden flex-wrap -m-4 items-center lg:mt-16 mt-8">
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4">
                <h2 className="text-[#a44b2b] text-2xl font-medium mb-4">
                Oleku
                </h2>
                <div className="flex items-center">
                  <p className="lg:text-base text-sm text-[#896d5e]">
                  Oleku Galleria is an inclusive and supportive ecosystem to
                    help women-owned businesses develop robust international
                    trade relationships, easy international market entry,
                    training to increase quality of product output and increase
                    productivity and competitiveness, Stationed at the heart of
                    London, for a period, the Oleku Galleria Hybrid Pop-up Sale
                    Event would showcase black female-owned businesses through a
                    wholesale /retail e-commerce platform, a digital and
                    in-store Pop-up concept display (timed shopping event that
                    sells carefully curated and unique selection of brands).
                  </p>
                </div>
                <button className="btn btn-primary btn-wide mt-8 bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
                  Join Now
                </button>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 w-full">
              <div className="p-4 w-full">
                <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                  <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                    <img
                      src={aboutone}
                      alt="img-about"
                      className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
