import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p className="text-18.8xl text-brown-10 font-extrabold mx-10 leading-21">
        {value}
      </p>
      <span className="flex w-max mx-auto text-2xl text-brown-10 font-medium leading-9.5">
        {type}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
