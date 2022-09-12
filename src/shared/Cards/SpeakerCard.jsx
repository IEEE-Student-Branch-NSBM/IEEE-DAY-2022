import React from "react";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const SpeakerCard = ({ speakerList }) => {
  return (
    <div className="container flex justiy-center items-center mt-10">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-6 md:gap-y-12 md:gap-x-10 w-full items-center mb-9 lg:mb-20">
        {speakerList &&
          speakerList.map((data) => (
            <div
              className="group transition duration-1000 ease-in-out cursor-pointer w-full h-full text-center justify-center"
              key={data.id}
            >
              <div className="cursor-pointer w-full text-center items-center justify-center">
                <div className="aspect-w-1 aspect-h-1 w-60 h-72 xxs:w-full overflow-hidden">
                  <img
                    className="mx-auto my-auto"
                    src="https://rootcodelabs.com/_next/image?url=https%3A%2F%2Frtc-web-stage.s3.ap-south-1.amazonaws.com%2FKelly_Felder_c19c3738e7.png&w=1920&q=75"
                    alt="speaker photo"
                  />
                </div>
                <div className="mt-4 lg:mt-5 flex flex-col items-center text-center">
                  <h4 className="text-2xl md:text-5xl lg:text-lg w-full text-black font-bold whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                    Mr.Harman Kardon
                  </h4>
                  <h5 className="font-bold text-xsxl md:text-base lg:text-xsxl text-black mt-3.5 mb-1">
                    asdasd
                  </h5>
                  <p className="font-normal case-studies-description h-full lg:h-12 text-xsl md:text-lg lg:text-xsxl text-black">
                    asdas
                  </p>
                  <div className="inline-flex lg:-mt-4 xs:mt-3 gap-x-2">
                    <FaFacebook fill="#783903" size="22" />
                    <FaLinkedin fill="#783903" size="22" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpeakerCard;
