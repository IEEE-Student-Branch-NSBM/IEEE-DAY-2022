import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p className="text-12xl sm:text-18.8xl text-brown-10 font-extrabold mx-5 sm:mx-10 leading-1 sm:leading-21 ">
        {value}
      </p>
      <span className="flex w-max mx-auto text-sm sm:text-2xl text-brown-10 font-medium leading-0 sm:leading-9.5">
        {type}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
