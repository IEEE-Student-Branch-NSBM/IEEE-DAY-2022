import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";

const TrackDetails = ({ name, description, imageUrl, company }) => {
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
              <div className="mr-4">Company Partner : </div>
              <Image
                src={company}
                height={30}
                width={145}
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
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdz-q-KXOog0kUqGCq5TyN4lHq_oCowi2roNGiw8AlM6sA1pw/viewform">
            <a target="_blank" rel="noreferrer">
              <div className="sm:w-full md:w-11/12 bg-brown-10 text-center justify-center mt-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <div className="text-white p-3 text-lg font-bold">
                  <HyperlinkButton
                    text="Register Now"
                    link="https://docs.google.com/forms/d/e/1FAIpQLSdz-q-KXOog0kUqGCq5TyN4lHq_oCowi2roNGiw8AlM6sA1pw/viewform"
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="xs:hidden xxs:hidden md:block">
          <Image
            src={imageUrl}
            width={300}
            height={450}
            alt="character image"
            loading="lazy"
          />
        </div>
      </div>
      <hr className="border-1 border-gray-10 divide-x-8" />
    </div>
  );
};

export default TrackDetails;
