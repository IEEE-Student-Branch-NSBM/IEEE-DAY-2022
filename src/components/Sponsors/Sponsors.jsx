import React from "react";
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import { HeaderSubTitle } from "../../shared/SubTitle/HeaderSubTitle";
import { SponsorCard } from "../../shared/Cards/SponsorCard";

const Sponsors = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/getSponsorData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <div>
      <HeaderTitle title={data?.headerTitle} key={data?.id} />
      <div className="lg:px-80 py-4">
        <HeaderSubTitle key={data?.id} description={data?.headerDescription} />
      </div>
      <div className="flex flex-col sm:flex-row lg:px-32 mt-10 mx-auto">
        {data?.sponsorList.map((company) => (
          <SponsorCard
            key={company?.id}
            companyLogo={company?.companyLogo}
            details={company?.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
