import React from "react";
import { Link } from "react-router-dom";
import { aafabanner } from "../../assets/images";

const Hero = () => {
  return (
    <section className="h-[700px] lg:h-full">
      <div className="hero lg:min-h-[664px] bg-hero-pattern bg-no-repeat lg:bg-custom-100 bg-custom-90 lg:object-contain object-cover relative w-screen h-[424px]">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content lg:block hidden text-left absolute pl-32 left-0">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold text-neutral custom-font">
              Welcome to A+
            </h1>
            <p className="mb-5 text-[#896d5e] leading-7 text-base">
            The creatives from Africa are cut from a collection of rough diamonds but with thorough refining and polishing they are bound to take over the globe!
            </p>
            <button className="btn btn-primary bg-[#c57354] hover:bg-[#a44b2b] border-none" style={{ textTransform:'none' }}>
              Find out more
            </button>
          </div>
        </div>
      </div>

      <div className="hero-content lg:hidden block text-left absolute pl-8 left-0">
        <div className="max-w-xl">
          <h1 className="mb-5 custom-font text-[#A44B2B] lg:text-5xl md:text-3xl font-bold">
            Welcome to A+
          </h1>
          <p className="mb-5 text-[#896d5e] lg:text-base text-sm">
            The creatives from Africa are cut from a collection of rough diamonds
            but with thorough refining and polishing they are bound to take over
            the globe!
          </p>
          <button className="btn btn-primary bg-[#c57354] hover:bg-[#a44b2b] border-none">
            Find out more
          </button>
        </div>
      </div>
    </section>
    // f9f5f2
    //f6efec
    // <section id="home" className=" 2xl:h-full lg:h-screen min-h-full">
    //   <div className="flex flex-col md:flex-row lg:pl-24 items-center">
    // {/* <div className="space-y-6 lg:mt-20 sm:mt-10 lg:mr-8 px-6 sm:mb-20 ">
    //   <h1 className="text-black font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
    //     It’s your Car <br />
    //     Own it
    //   </h1>
    //   <p className="text-white text-sm sm:text-base">
    //     We provide people better and faster ways to get cars they need for
    //     commercial purposes.
    //   </p>
    //   <p className="hover:-translate-y-1 transition-all duration-500 ease-in-out">
    //     <Link
    //       to="/register"
    //       className=" py-3  px-4 rounded-lg font-bold text-center bg-white text-blue-700">
    //       Get Started
    //     </Link>
    //   </p>
    // </div> */}
    //     <div className=" ml-auto  ">
    //       <img src={aafabanner} alt="hero_banner" className="" />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
