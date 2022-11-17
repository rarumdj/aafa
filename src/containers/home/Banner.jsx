import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="py-24 md:pb-0 pb-24 px-6 lg:px-16 flex justify-center">
      <div className="container w-full rounded-2xl md:p-24 p-8 py-20 bg-banner h-full flex md:flex-row flex-col justify-between items-center">
        <div className="space-y-4 lg:w-6/12 w-full text-[#444444] ">
          <h1 className="md:text-4xl text-3xl custom-font font-bold">Become a part of us</h1>
          <p>
            Become a member of the A+ community to scale your dreams made up of
            Project managers, Educators, Fashion designers, Pattern makers,
            Tailors, Illustrators, Stylists, Photographers, Makeup artists, Hair
            stylists, Models, Buyers, Jewelers, Creative designers &
            Collectives, publishers, content writers, visual artists
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:w-fit  md:items-end h-full md:space-x-6 md:mt-0 mt-10">
          <button className=" md:mt-0 mt-5 py-5 px-4 min-w-[150px] rounded-xl md:text-base text-xs font-bold text-center text-[#A44B2B] bg-white shadow-md">
            Join now
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
