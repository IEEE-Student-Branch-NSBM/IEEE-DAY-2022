import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";
import PreLoader from "../Loader/PreLoader";
import Link from "next/link";

export const AboutSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getAboutData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <>
      <div
        id="about"
        className="flex flex-col lg:flex-row justify-evenly align-middle items-center xl:w-4/5 mx-auto mt-24"
      >
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
            IEEE Day is a celebration of worldwide IEEE members and engineers
            gathered to share their technical knowledge among them and Worldwide
            celebrations demonstrate the ways thousands of IEEE members in local
            communities join to collaborate on ideas that
            <b> Leverage technology for a better tomorrow</b>. <br />
            <br />
            We are delighted to announce the IEEE Student Branch of NSBM ready
            to celebrate IEEE Day 2022, the most alluring event of the year with
            the most prominent collaboration of Engineers and IEEE Members
            worldwide. We hope to demonstrate how IEEE members in local
            communities work together to cooperate on ideas that harness
            technology for a better tomorrow.
          </p>
          <Link href="/#speaker">
            <div className="inline-flex m-auto font-lg text-white bg-brown-10 mt-7">
              <HyperlinkButton
                key={data?.id}
                text="MORE DETAILS"
                link={data?.buttonLink}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
