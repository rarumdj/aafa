import { aboutone, aboutthree, abouttwo, harry, ire_photo, line } from "../../assets/images";
import Teams from "../../components/Teams";

const AboutUs = () => {
  return (
    <>
      <div className="pb-24 flex justify-center">
        <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <div className="grid md:grid-cols-2 -m-4 items-center">
            <div className="p-4 w-full order-last">
              <div className="p-4">
                <h2 className="text-[#a44b2b] text-5xl font-medium mb-4 md:block hidden">
                  The Agency
                </h2>
                <div className="flex items-center">
                  <img src={line} alt="line" className="lg:block hidden" />
                  <p className="lg:p-10 p-0 lg:text-base text-sm text-[#896d5e]">
                    We are the highest level of resource support for the
                    community the African creative & brand can be a part of.{" "}
                    <br />
                    <br /> A+ fashion Agency aims to accelerate the emergence of
                    the African creative & brand on the international scene by
                    positioning itself as the key strategic partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4  w-full">
              <div className="p-4 w-full">
                <h2 className="text-[#a44b2b] text-5xl font-medium mb-6 md:hidden block">
                  About Us
                </h2>
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

      <div className="md:py-24 py-20 pt-10 flex justify-center bg-[#a44b2b]">
        <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center items-center w-screen max-w-[100rem]">
          <div className="w-10/12">
            <div className="grid md:grid-cols-2 -m-4 border-b-2 border-[#a45f43] pb-8">
              <div className="md:p-4 w-full order-last">
                <div className="md:p-4">
                  <h2 className="text-white text-2xl font-medium">
                    Ireoluwa Soetan
                  </h2>
                  <p className="text-sm font-bold mb-4 text-gray-300">
                    (Founder/CEO){" "}
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="lg:text-base text-sm text-white">
                      Ireoluwa Soetan is a multidisciplinary Business &
                      Development professional with expertise in business of
                      fashion, fashion illustration, technical design,
                      draping/ruching, flat pattern making, construction and
                      dressmaking with honors from University of Ilorin 2005
                      (Business Administration), Instituto Di Moda Burgo Milan,
                      Italy 2010 (Pattern drafting & Garment Construction) and
                      London college of fashion 2014 (Fashion Design &
                      Illustration).
                    </p>
                    <p className="lg:text-base text-sm text-white mt-3">
                      The charismatic businesswoman is a social entrepreneur
                      with a core drive to spearhead continuous improvement and
                      develop individual potential for higher productivity. Her
                      current drive in the fashion industry has propelled her to
                      acquire the best education from renowned institutions. She
                      is the founder and CEO of Annaire Art and Fashion Academy,
                      a full suite fashion specialized in launching and scaling
                      successful fashion retail companies in Africa for the
                      global market. She currently has the goal of developing
                      1000African R entrepreneurs and highly skilled fashion
                      Etechnicians within the next 5years. Currently we have
                      impacted creatives in various programmes like the Reroll
                      Station lab, Dive fashion program, Emerge program,
                      business incubator (BOFI), Pattern Academy, Incubator,
                      Free Class and Creative Cohort. Ireoluwa was recently a
                      mentor on the shetrades platform by FCMB
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4  w-full flex justify-end ">
                <div className="p-4 w-fit">
                <Teams
                  image={ire_photo}
                 
                />
                </div>
              </div>
            </div>
            <div className="space-y-10 mt-16">
              <h1 className="md:text-5xl text-3xl text-white custom-font font-bold">
                Our Team
              </h1>
              <p className="text-white md:w-7/12 w-full">
                A team of experienced professionals transforms businesses with a
                unique approach: rethinking brick and mortar and ecommerce
                merchandising, and product development from a consumer-centric
                perspective.
              </p>
              <div className="mt-10 grid md:grid-cols-4 gap-6">
                <Teams
                  image={ire_photo}
                  name="Ireoluwa Soetan"
                  position={"Executive Assistant"}
                />
                <Teams
                  image={harry}
                  name="Kesiena Harry"
                  position={"Business Development"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 flex justify-center">
        <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
          <div className="container md:px-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold title-font text-gray-900 mb-4">
                Have a project in mind?
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 md:px-10">
                Let’s see if we’re a good fit. Book your consultation session.
              </p>
              <button className="btn btn-primary btn-wide mt-8 bg-[#c57354] hover:bg-[#a44b2b] border-none rounded-none">
              Book a consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
