import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";
import { ContactCard } from "../../shared/Cards/ContactCard";

export const ContactSection = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getContactData", fetcher);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <>
      <div className="mt-24 2xl:mx-[245px]">
        <HeaderTitle title={data?.title} key={data?.id} />
        <p className=" text-lg font-light leading-6.5 mx-20 xs:mx-12 lg:mx-[114px] mt-4 text-center">
          {data?.description}
        </p>
        <ContactCard contacts={data?.details} />
      </div>
    </>
  );
};
