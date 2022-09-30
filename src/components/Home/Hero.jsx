import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center h-screen  bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />
      <div className="p-5 text-white px-32">
        <h2 className="font-bold text-14xl">IEEE DAY NSBM</h2>
        <h2 className="font-bold text-14xl pb-2">2022</h2>
        <button className="px-8 py-2 border-2">Register</button>
      </div>
    </div>
  );
};

export default Hero;
