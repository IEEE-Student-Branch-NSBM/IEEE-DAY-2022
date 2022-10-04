import React from "react";
import AgendaCard from "../../shared/Cards/AgendaCard";
import PrefixCircle from "../../shared/Cards/PrefixCircle";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";
import useSWR from "swr";

const Agenda = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/getAgendaData", fetcher);

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
      <div className="mx-5 sm:mx-[450px] mt-12">
        {data &&
          data.agendaData.map((item) => (
            <div
              key={item?.id}
              className="flex my-5 shadow-sm transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-100 duration-300"
            >
              <PrefixCircle key={item?.id} img={item?.prefixImg} />
              <AgendaCard
                key={item?.id}
                time={item?.time}
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Agenda;
