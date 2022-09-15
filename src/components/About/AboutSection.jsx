import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";
import PreLoader from "../Loader/PreLoader";

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
        <div className="flex flex-col lg:flex-row justify-evenly align-middle items-center xl:w-4/5 mx-auto mt-24">
          <div>
            <Image 
              src={data.image}
              width= {483}
              height= {288}
              alt="IEEE day 2019"
              loading = "lazy" />
          </div>
          <div className="w-[483px] inline-flex flex-col lg:block">
            <HeaderTitle title={data?.title} key={data?.id} />
            <p className=" text-lg font-normal mx-20 xs:mx-12 sm:mx-0 mt-4 text-center lg:text-left 3xl:px-32">{data?.description}</p>
            <div className="inline-flex m-auto font-lg text-white bg-brown-10 mt-7">
              <HyperlinkButton key={data?.id} text="MORE DETAILS" link={data?.buttonLink} />
            </div>
          </div>
        </div>
      </>
    );
}
