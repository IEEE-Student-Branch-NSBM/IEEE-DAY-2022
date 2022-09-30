import React, { useState } from "react";
import useSWR from "swr";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

export const Faq = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/getFaqData", fetcher);
  const [selected, setSelected] = useState(null);

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div>
        <PreLoader />
      </div>
    );

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <HeaderTitle title={data?.headerTitle} key={data?.id} />
          <div className="mb-11 flex flex-wrap mt-10">
            {data?.content.map((item, i) => (
              <div key={i} className="w-full p-1" onClick={() => toggle(i)}>
                <div
                  className={`py-7 px-8  ${
                    selected === i ? "bg-brown-20 shadow-10xl" : "bg-brown-10"
                  } `}
                >
                  <div className="flex flex-wrap justify-between">
                    <div className="flex-1 p-2">
                      <h3 className=" text-lg align-bottom text-white font-semibold">
                        {item.question}
                      </h3>
                      <p
                        className={`text-white font-medium ${
                          selected === i ? "block" : "hidden"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                    <div className="w-auto p-2">
                      {selected === i ? (
                        <HiMinusCircle size={38} className="text-white" />
                      ) : (
                        <HiPlusCircle size={38} className="text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
