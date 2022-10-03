import React from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const FaqCard = (item, i, selected) => {
  return (
    <div className="flex flex-wrap justify-between -m-2">
      <div className="flex-1 p-2">
        <h3 className="mb-4 text-lg text-white font-semibold leading-normal">
          {item.question}
        </h3>
        <p
          className={`text-white font-medium ${
            selected === i ? "block" : "hidden"
          }`}
        >
          {item.answer}
        </p>
      </div>
      <div className="w-auto p-2">
        {selected === i ? (
          <HiMinusCircle size={38} className="text-white" />
        ) : (
          <HiPlusCircle size={38} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default FaqCard;
