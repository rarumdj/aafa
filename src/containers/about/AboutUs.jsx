import {
  aboutone,
  aboutthree,
  abouttwo,
  line
} from "../../assets/images";

const AboutUs = () => {
  return (
    <div className="pb-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div class="flex flex-wrap -m-4 items-center">
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4">
              <h2 className="text-[#a44b2b] text-5xl font-medium mb-4">
                About Us
              </h2>
              <div className="flex items-center">
                <img src={line} alt="line" className="lg:block hidden" />
                <p className="lg:p-10 p-0 lg:text-base text-sm text-[#896d5e]">
                  We are the highest level of resource support for the community
                  the African creative & brand can be a part of. <br />
                  <br /> A+ fashion Agency aims to accelerate the emergence of
                  the African creative & brand on the international scene by
                  positioning itself as the key strategic partner.
                </p>
              </div>
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
        {/*  */}

        <div class="lg:flex hidden flex-wrap -m-4 lg:pt-24 pt-8 items-center">
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4 w-full">
              <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                  <img
                    src={abouttwo}
                    alt="img-about"
                    className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4">
              <div className="flex items-center">
                <img src={line} alt="line" className="lg:block hidden" />
                <p className="lg:p-10 p-0 lg:text-base text-sm text-[#896d5e]">
                  Our unique selling position is our ability to approach
                  creative development and product management from a
                  consumer-centric lens, we create sustainable business models
                  and ROI maximizing results on the industry’s leading edge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex lg:hidden flex-wrap -m-4 lg:pt-24 pt-8 items-center">
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4">
              <div className="flex items-center">
                <img src={line} alt="line" className="lg:block hidden" />
                <p className="lg:p-10 p-0 lg:text-base text-sm text-[#896d5e]">
                  Our unique selling position is our ability to approach
                  creative development and product management from a
                  consumer-centric lens, we create sustainable business models
                  and ROI maximizing results on the industry’s leading edge.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4 w-full">
              <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                  <img
                    src={abouttwo}
                    alt="img-about"
                    className="absolute inset-0 translate-x-2 -translate-y-2 w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div class="flex flex-wrap -m-4 lg:pt-24 pt-8 items-center">
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4">
              <div className="flex items-center">
                <img src={line} alt="line" className="h-full lg:block hidden" />
                <p className="lg:p-10 p-0 lg:text-base text-sm text-[#896d5e]">
                  We have built an ecosystem of experts with significant track
                  records in sustainable value creation working with indigenous,
                  independent labels & international brands. <br />
                  <br /> A community of Business consultants, Educators, and
                  Fashion designers. <br />
                  <br /> Through our rich and unique network, our brands will
                  benefit from long-term opportunities for expansion.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div className="p-4 w-full">
              <div className="flex border-4 rounded-2xl  w-full border-[#a44b2b] relative pb-[60%]">
                <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
                  <img
                    src={aboutthree}
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
  );
};

export default AboutUs;
