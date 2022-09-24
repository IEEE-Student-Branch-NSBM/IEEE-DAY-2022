import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";

export const FooterSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getFooterData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <>
      <div className="mt-24">

      </div>
    </>
  );
};
