import React from "react";
import { aboutone, comma, line } from "../../assets/images";

const Service = () => {
  return (
    <section
      id="value"
      className="bg-[#f1eeee] md:bg-contain bg-auto pb-16 lg:pt-44 pt-32 ">
      <div className="w-screen max-w-[100rem] mx-auto ">
        <div className="flex lg:flex-row flex-col mx-auto  px-6 lg:px-16 justify-center">
          <div className="flex-initial min-w-[30%] lg:pt-0 pt-10">
            <div className="lg:px-4 h-full">
              {/* chart */}
              <div className="relative hero-overlay bg-opacity-70 bg-blend-overlay flex p-4 flex-col w-full min-w-0 break-words mb-6 rounded-md bg-value-prep bg-center bg-cover bg-no-repeat lg:h-full h-52 justify-center items-center overflow-hidden">
                {/* <div className="lg:h-14 lg:w-14  h-10 w-10 bg-[#f6efec] rotate-45 absolute right-0 translate-x-8" /> */}
                <h1 className="title-font sm:text-4xl text-xl  font-bold text-white mb-4">
                  Our Services
                </h1>
                <p className="lg:max-w-xs mb-5  text-center text-white">
                  We are the highest level of resource support community the
                  African creative & brand can be a part of.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-1 flex-col">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    The Academy
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Enroll
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    The stitch lab
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Schedule an appointment
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    The Workstation
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Book a tour
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Fashion business development
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Schedule an appointment
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Social enterprise program
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Apply Now
                  </button>
                </div>
              </div>

              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Business mentorship program
                  </h1>
                  <p className="leading-relaxed mb-5 text-accent-black">
                    We are the highest level of resource support community the
                    African creative & brand can be a part of.
                  </p>
                  <button className="btn btn-primary btn-block bg-[#c57354] hover:bg-accent-black border-none rounded-none">
                    Schedule a call
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center lg:mt-24 mt-16">
          <div className="flex flex-1 flex-col">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-full bg-[#EFECE9] border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                <div className="space-y-4 ">
                  <figure className="mb-10">
                    <img
                      src={aboutone}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className="space-y-2">
                    <div className="w-16 h-0.5 bg-accent-black" />
                    <h4 className="text-base text-neutral font-bold">
                      Brand development
                    </h4>
                  </div>
                  <p className="text-base !text-[#52372a]">
                    Grow and Scale up Fashion Businesses from concept to launch
                    via Business of Fashion Incubator, DIVE, E-Fashionpreneur,
                    Creative Cohort Program. Our six-month Fast-Track from
                    Samples to Sales program will show you how to build a
                    customer base and a brand identity that sells. It includes
                    all the systems and tools you need to grow rapidly, become
                    profitable and lay the groundwork for growth – plus access
                    to trusted, vetted resources like manufacturers, attorneys
                    and accountants. You’ll learn the business and feel like a
                    confident and capable CEO.
                  </p>
                </div>
              </div>

              <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                <div className="space-y-4 ">
                  <figure className="mb-10">
                    <img
                      src={aboutone}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className="space-y-2">
                    <div className="w-16 h-0.5 bg-accent-black" />
                    <h4 className="text-base text-neutral font-bold">
                      Project management - (including project planning & design,
                      result measurement, and value for money analysis)
                    </h4>
                  </div>
                  <p className="text-base !text-[#52372a]">
                    We offer clients local knowledge and unparalleled technical
                    expertise, to carry out complex projects. We manage
                    large-scale social and economic change initiatives while
                    delivering on-time and on-budget. Making this possible
                    requires the ability to work across sectors and
                    stakeholders, under circumstances in which discretion and
                    compliance are essential. From government agencies to the
                    private sector to multinational organizations, we build
                    partnerships that meet our clients’ needs and exceed their
                    expectations. We also work with clients to assess their
                    impact and provide premium reporting to support performance
                    improvement and transparency. This recounting is critical to
                    ensuring responsible business practices.
                  </p>
                </div>
              </div>

              <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                <div className="space-y-4 ">
                  <figure className="mb-10">
                    <img
                      src={aboutone}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className="space-y-2">
                    <div className="w-16 h-0.5 bg-accent-black" />
                    <h4 className="text-base text-neutral font-bold">
                      Apparel production
                    </h4>
                  </div>
                  <p className="text-base !text-[#52372a]">
                    Inspiring African designers to go global by launching RTW
                    brands and producing small run collections at an affordable
                    price.
                  </p>
                </div>
              </div>

              <div className="h-full bg-[#EFECE9]  border border-accent-black bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden relative">
                <div className="space-y-4 ">
                  <figure className="mb-10">
                    <img
                      src={aboutone}
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <div className="space-y-2">
                    <div className="w-16 h-0.5 bg-accent-black" />
                    <h4 className="text-base text-neutral font-bold">
                      Technical & Entrepreneurial training
                    </h4>
                  </div>
                  <p className="text-base !text-[#52372a]">
                    We promote the development of Creative enterprises by
                    training Corp members, Disadvantaged youths, Widows,
                    Vulnerable and marginalized communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
