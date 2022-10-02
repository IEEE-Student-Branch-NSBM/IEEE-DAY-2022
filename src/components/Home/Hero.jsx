import React from "react";
import { HyperlinkButton } from "../../shared/Buttons/HyperlinkButton";
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";

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
          <h2 className="font-bold text-14xl test-1">IEEE DAY NSBM</h2>
          <h2 className="font-bold text-14xl pb-2 test-1">2022</h2>
          <div className="inline-flex m-auto font-lg border-2 py-2 px-8">
            <HyperlinkButton
              key={data?.id}
              text={data?.title}
              link={data?.buttonLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
