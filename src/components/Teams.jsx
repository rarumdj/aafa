import React from "react";
import UseProgressiveImg from "./UseProgressiveImg";

function Teams({ name, image, blurImg, position }) {
  const [src, { blur }] = UseProgressiveImg(blurImg, image);
  return (
    <div className="flex flex-col rounded-sm overflow-hidden">
      <div className="flex flex-initial w-full h-full border-2 p-1">
        <img
          src={src}
          alt=""
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
      {name && (
        <div className="px-6 py-3 gradient__bg h-20 min-w-max max-w-screen flex-none ">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-sm font-bold lg:text-lg">{name}</h1>
            <p className="text-white text-sm font-bold">{position}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
