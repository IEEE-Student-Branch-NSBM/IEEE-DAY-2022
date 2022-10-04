import React from "react";

const PrefixCircle = ({ img }) => {
  return (
    <div className="w-28 h-20 sm:w-[140px] sm:h-28 bg-brown-10 rounded-full mr-5 my-auto">
      <img src={img} className="w-full h-full rounded-full p-[2px]" />
    </div>
  );
};

export default PrefixCircle;
