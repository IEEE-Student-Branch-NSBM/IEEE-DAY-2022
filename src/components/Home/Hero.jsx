import React from "react";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";
import Link from "next/link";

const Hero = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getHomeData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );
  const bgImageStyle = {
    backgroundImage: `url("${data?.image}")`,
  };
  return (
    <div>
      <div
        className="flex items-center h-screen w-full bg-fixed  object-cover bg-center bg-cover "
        style={bgImageStyle}
      >
        <div className="p-5 text-white px-32 ">
          <h2 className="font-black text-20xl font-The_Black_Sugare sm:text-23xl drop-shadow-xl">
            IEEE DAY NSBM
          </h2>
          <h2 className="font-bold text-20xl sm:text-23xl pb-2 font-The_Black_Sugare drop-shadow-xl">
            2022
          </h2>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdz-q-KXOog0kUqGCq5TyN4lHq_oCowi2roNGiw8AlM6sA1pw/closedform">
            <a target="_blank">
              <div className="inline-flex l m-auto font-lg border-2 py-2 px-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <HyperlinkButton
                  key={data?.id}
                  text={data?.title}
                  link={data?.buttonLink}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
