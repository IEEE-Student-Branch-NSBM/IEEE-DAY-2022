import React from "react";
import useSWR from "swr";
import SpeakerCard from "../../shared/Cards/SpeakerCard";
import { HeaderSubTitle } from "../../shared/SubTitle/HeaderSubTitle";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";

export const SpeakerSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/getSpeakerData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <div className="mt-24">
      <HeaderTitle title={data?.headerTitle} key={data?.id} />
      <div className="lg:px-80 py-4">
        <HeaderSubTitle key={data?.id} description={data?.description} />
      </div>
      <div className="lg:px-32">
        <SpeakerCard key={data?.id} speakerList={data?.speakerList} />
      </div>
    </div>
  );
};
