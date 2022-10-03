import React from "react";

export const HeaderTitle = ({ title, style }) => {
  return (
    <h1
      className={`text-brown-10 bg-clip-text text-center text-12xl font-bold leading-15 mt-4 ${style} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer`}
    >
      {title}
    </h1>
  );
};
