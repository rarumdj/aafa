import {
  Eligibility,
  EventsNews,
  Hero,
  Stats,
  Testimonial,
  TestimonialVideo,
  ValueProposition,
} from "../containers/home";

const Home = () => {
  return (
    <>
      <Hero />
      <Eligibility />
      <ValueProposition />
      <Stats />
      <TestimonialVideo />
      <Testimonial />
      <EventsNews />
    </>
  );
};

export default Home;
