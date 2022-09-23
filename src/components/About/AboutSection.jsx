import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";
// import BubbledotLoader from "../Loader/BubbledotLoader";
import LogoLoader from "../Loader/LogoLoader";

export const AboutSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getAboutData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <LogoLoader />
      </div>
    );

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly align-middle items-center xl:w-4/5 mx-auto mt-24">
        <div>
          <Image
            src={data.image}
            width={483}
            height={288}
            alt="IEEE day 2019"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-[483px] inline-flex flex-col lg:block">
          <HeaderTitle
            style="lg:!text-left"
            title={data?.title}
            key={data?.id}
          />
          <p className=" text-lg font-normal mx-20 xs:mx-12 lg:mx-0 mt-4 text-center lg:text-left">
            {data?.description}
          </p>
          <div className="inline-flex m-auto font-lg text-white bg-brown-10 mt-7">
            <HyperlinkButton
              key={data?.id}
              text="MORE DETAILS"
              link={data?.buttonLink}
            />
          </div>
        </div>
      </div>
    </>
  );
};
