import {
  AgencyStats,
  Banner,
  Eligibility,
  EventsNews,
  Hero,
  OurExperience,
  Stats,
  Story,
  Testimonial,
  TestimonialVideo,
  ValueProposition,
} from "../containers/home";
import WhatWeDo from "../containers/home/WhatWeDo";

const Home = () => {
  return (
    <>
      <Hero />
      <Eligibility />
      <WhatWeDo />
      <AgencyStats/>
      <OurExperience/>
      {/* <ValueProposition /> */}
      {/* <Stats /> */}
      {/* <TestimonialVideo /> */}
      <Story />
      <Testimonial />
      <Banner />
    </>
  );
};

export default Home;
