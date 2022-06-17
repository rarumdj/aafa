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
          <div class="stats bg-transparent">
            <div class="stat place-items-center">
              <div class="stat-title">Creative ArtForms</div>
              <div class="stat-value">31K</div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title">Projects executed</div>
              <div class="stat-value">31K</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Partnerships</div>
              <div class="stat-value text-secondary">4,200</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Life Impacted</div>
              <div class="stat-value">1,200</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Businesses supported</div>
              <div class="stat-value">1,200</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Linkages</div>
              <div class="stat-value">31K</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Community members</div>
              <div class="stat-value">31K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Stats;
