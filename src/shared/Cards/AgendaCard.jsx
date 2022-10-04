import React from "react";

const AgendaCard = ({ time, title, description }) => {
  return (
    <div className=" w-full h-28 ">
      <div className="flex flex-col m-1 sm:m-2">
        <div className="text-brown-10 font-semibold">{time}</div>
        <div className="font-bold text-xl sm:text-3xl ">{title}</div>
        <div className="font-semibold text-sm sm:text-base">{description}</div>
      </div>
    </div>
  );
};

export default AgendaCard;
