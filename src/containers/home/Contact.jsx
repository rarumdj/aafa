import React from "react";
import { hashdynamic } from "../../assets/images";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="md:pt-24 pt-24 mb-10 flex justify-center">
        <div className="flex md:flex-row flex-col gap-6 items-center w-screen max-w-[100rem]">
          <div className="basis-1/3">
            <img
              src={hashdynamic}
              alt=""
              className="object-scale-down h-full w-full"
            />
          </div>
          <div className="basis-4/6 space-y-8 p-16">
            <h1 className="md:text-5xl text-3xl font-bold custom-font text-accent-black">
              Contact Us
            </h1>
            <p className="md:text-base text-sm text-neutral">
              <b>Launch your journey of growth.</b>
              <br />
              <br />
              For general enquiries, project partnerships and engagements, the
              best way to reach us is by emailing{" "}
              <a
                href="mailto:corporate@aplusagency.org"
                className="hover:underline">
                corporate@aplusagency.org
              </a>{" "}
              or filling out our contact form.
            </p>
            <p className="text-neutral font-bold">
              Visit us at{" "}
              <span className=" text-accent-black">
                30/33 Sanni Abacha Road, GRA, PortHarcourt, RV5000272.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="py-24 flex justify-center  bg-accent-black">
        <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <div className="container md:px-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold title-font text-white mb-4">
                Have a project in mind?
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white md:px-10">
                Let’s see if we’re a good fit. Book your consultation session.
              </p>
              <button className="btn btn-primary  text-neutral btn-wide mt-8 bg-white hover:bg-gray-100 border-none rounded-none">
                Book a consultation
              </button>
            </div>
          </div>

          <div className="container md:px-24 mx-auto">
            <div className="text-center">
              <h1 className="sm:text-6xl text-2xl font-bold title-font text-white mb-4">
                Careers
              </h1>
              <div className="space-y-4">
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white md:px-10">
                  Don’t you think we would make a great team? Let’s see if we
                  can smash goals together!
                </p>

                <div>
                  <h4 className="md:text-3xl text-xl font-bold  text-white">
                    Get in touch
                  </h4>
                  <p className="text-base font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white md:px-10">
                    submit your position proposal and portfolio.
                  </p>
                </div>

                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white border-2 border-white p-4 md:px-10">
                  Just pitch us your job description and send your CV over to
                  <span className="font-bold">
                    {" "}
                    <a
                      href="mailto:humans@aplusagency.org"
                      className="hover:underline">
                      humans@aplusagency.org
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
