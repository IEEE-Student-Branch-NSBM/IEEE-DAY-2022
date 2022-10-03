import React from "react";

export const SponsorCard = ({ companyLogo, details }) => {
  return (
    <div className="flex flex-col mt-5 border-4 border-brown-10 mx-5 h-40 w-52 bg-white shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div>
        <img
          className="mt-4 ml-1 mr-1 w-48"
          src={companyLogo}
          alt="companyLogo"
        />
      </div>
      <div className="bg-brown-10 mt-auto h-16">
        <p className="m-1 text-white text-center">{details}</p>
      </div>
    </div>
  );
};
