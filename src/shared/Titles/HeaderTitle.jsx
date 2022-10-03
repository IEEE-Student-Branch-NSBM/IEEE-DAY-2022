import React from "react";

export const HeaderTitle = ({ title, style }) => {
  return (
    <h1
      className={`text-brown-10 bg-clip-text text-center text-12xl font-bold leading-15 mt-4 ${style} `}
    >
      {title}
    </h1>
  );
};
