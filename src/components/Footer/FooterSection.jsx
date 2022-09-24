import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

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
      <div className="mt-48 mx-[245px] flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <div>
            <a href={data?.ieeeNsbmUrl} target="_">
              <Image src="/images/ieee_nsbm.svg" height={85} width={168} loading="lazy" />
            </a>
          </div>
          <div>
            <a href={data?.ieeeDayUrl} target="_">
              <Image src="/images/ieee_day.svg" height={140} width={140} loading="lazy" />
            </a>
          </div>
          <div className="w-[160px] h-fit flex flex-row justify-between">
            <a href={data?.facebookUrl} target="_"><FaFacebook className=" fill-brown-10" size={30}/></a>
            <a href={data?.linkedinUrl} target="_"><FaLinkedin className="fill-brown-10" size={30} /></a>
            <a href={data?.instagramUrl} target="_"><FaInstagramSquare className="fill-brown-10" size={30}/></a>
            <a href={data?.youtubeUrl} target="_"><FaYoutube className=" fill-brown-10" size={30} /></a>
          </div>
        </div>
        <hr className="my-8 border-[1px] border-gray-200"/>
        <div className="my-6 flex flex-row items-center justify-between">
          <div>
            <p className="font-normal leading-5 text-sm text-[#0A142F] uppercase">Copyright © 2022 . All Rights Reserved</p>
          </div>
          <div className="flex justify-between w-[250px] text-sm font-normal leading-5">
            <a href={data?.termsUrl}>Terms of Service</a>
            <a href={data?.privacyPolicyUrl}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};
