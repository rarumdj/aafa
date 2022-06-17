import React from "react";
import { righteligibility } from "../../assets/images";
import { motion } from "framer-motion";

const Eligibility = () => {
  return (
    <section
      id="eligibility"
      className="py-24 px-6 lg:px-16 flex justify-center">
      <div className="flex justify-center lg:w-8/12 w-full max-w-[100rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="flex flex-col w-full justify-center items-center ">
          <h2 className="text-xl text-[#c57354] lg:text-3xl font-bold text-center md:mx-16">
            We are the highest level of resource support community the African
            creative & brand can be a part of. Our unique selling position is
            our ability to approach creative development and product management
            from a consumer-centric lens.
          </h2>
          <p className="text-center text-[#a44b2b] text-sm md:text-xl font-bold mt-2">
            - Quote
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
