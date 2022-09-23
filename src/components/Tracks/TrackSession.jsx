import React from "react";
import useSWR from "swr";
import { HeaderSubTitle } from "../../shared/SubTitle/HeaderSubTitle";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import TrackTabSection from "../../shared/TrackTabs/TrackTabSection";
// import PreLoader from "../Loader/PreLoader";
import BubbledotLoader from "../Loader/BubbledotLoader";

export const TrackSession = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/getTrackSessionData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <BubbledotLoader />
      </div>
    );

  return (
    <>
      <HeaderTitle title={data?.headerTitle} key={data?.id} />
      <div className="lg:px-80 py-4">
        <HeaderSubTitle key={data?.id} description={data?.headerDescription} />
      </div>
      <div className="lg:px-32">
        <TrackTabSection key={data?.id} trackDataDetails={data?.trackList} />
      </div>
    </>
  );
};
