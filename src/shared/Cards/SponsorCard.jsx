import React from "react";

export const SponsorCard = ({ companyLogo, details }) => {
  return (
    <div className="flex flex-col mt-5 hover:shadow-md mx-0 sm:mx-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div>
        <img
          className="mt-4 ml-1 mr-1 w-48"
          src={companyLogo}
          alt="companyLogo"
        />
      </div>
      <div className="mt-5 h-16">
        <p className="m-1 text-center">{details}</p>
      </div>
    </div>
  );
};
