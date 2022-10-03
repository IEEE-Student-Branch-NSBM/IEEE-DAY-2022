import React from "react";

export const SponsorCard = ({ companyLogo, details }) => {
  console.log(companyLogo, details);
  return (
    <div className="flex flex-col border-4 border-brown-10 mx-5 h-40 w-48 bg-white shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div>
        <img className="my-4 mr-2" src={companyLogo} alt="companyLogo" />
      </div>
      <div className="bg-brown-10 mt-auto ">
        <p className="m-1 text-white">{details}</p>
      </div>
    </div>
  );
};
