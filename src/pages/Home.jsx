import React from "react";
import {
  Contact,
  Eligibility,
  Hero,
  Stats,
  ValueProposition,
  TestimonialVideo,
} from "../containers/home";

const Home = () => {
  return (
    <>
      <Hero />
      <Eligibility />
      <ValueProposition />
      <Stats />
      <TestimonialVideo />
    </>
  );
};

export default Home;
