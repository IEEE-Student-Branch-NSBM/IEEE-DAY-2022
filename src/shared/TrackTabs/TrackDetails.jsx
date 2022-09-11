import Image from "next/image";
import React from "react";

const TrackDetails = ({ name, description, imageUrl }) => {
  return (
    <div className="w-full">
      <div className="rounded-md bg-yellow-150 flex items-center justify-between py-4 xs:py-0 md:px-4 lg:px-2 xs:px-0 mb-5 xs:mb-0 lg:mb-10 md:mx-4 xs:mx-0 lg:mx-0">
        <div className="font-bold text-xsl xl:text-6xl leading-6 xl:leading-8.5 text-brown-10 md:w-5/6 xs:text-center md:text-left">
          <h2 className="xs:text-4xl md:text-6xl xl:-mt-2 xs:text-center md:text-left">
            {name}
          </h2>
          <p className="leading-6 font-light text-lg text-black mt-8 md:mr-24 lg:mr-42">
            {description}
          </p>
          <div className="flex mt-6 text-black">
            <div className="inline-flex font-semibold text-lg">
              <div>Company Partner : </div>
              <Image
                src={imageUrl}
                width={150}
                height={40}
                alt="character image"
              />
            </div>
          </div>
          <div className="flex mt-2 text-black">
            <div className="inline-flex font-semibold text-lg">
              <div>Venue : </div>
              <div className="ml-8">NSBM Green University </div>
            </div>
          </div>
          <div className="sm:w-full md:w-11/12 bg-brown-10 text-center justify-center mt-10">
            <button className="text-white p-3 text-lg font-bold">
              Register Now
            </button>
          </div>
        </div>
        <div className="xs:hidden xxs:hidden md:block">
          <Image
            src="/images/AI.png"
            width={300}
            height={450}
            alt="character image"
          />
        </div>
      </div>
      <hr className="border-1 border-gray-10 divide-x-8" />
    </div>
  );
};

export default TrackDetails;
