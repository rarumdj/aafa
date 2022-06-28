import React from "react";

const Stats = () => {
  return (
    <div className="py-24 flex justify-center">
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="px-6 lg:px-16 mb-10">
          <h1 className="md:text-4xl text-3xl font-bold text-black">
            Company growth statistics
          </h1>
        </div>
        <div className="flex flex-col">
          {/* Count */}
          {/* <div className="flex flex-wrap w-full"> */}
          <div className="stats bg-transparent">
            <div className="stat place-items-center">
              <div className="stat-title">Creative ArtForms</div>
              <div className="stat-value">31K</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Projects executed</div>
              <div className="stat-value">31K</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Partnerships</div>
              <div className="stat-value text-secondary">4,200</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Life Impacted</div>
              <div className="stat-value">1,200</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Businesses supported</div>
              <div className="stat-value">1,200</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Linkages</div>
              <div className="stat-value">31K</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Community members</div>
              <div className="stat-value">31K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Stats;
