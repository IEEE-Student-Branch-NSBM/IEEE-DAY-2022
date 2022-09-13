import { data } from "autoprefixer";
import React from "react";
import useSWR from "swr";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import PreLoader from "../Loader/PreLoader";
import { useCountdown } from "./countdownHooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Our registrations are closed</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex flex-row show-counter w-max m-auto">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <p className="text-15xl text-brown-10 font-semibold">:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p className="text-15xl text-brown-10 font-semibold">:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p className="text-15xl text-brown-10 font-semibold">:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <>
      <div className="bg-hero-pattern grid grid-cols-1 grid-rows-6 h-85 place-items-center">
        <p className="font-bold text-12xl text-brown-10 leading-15 mt-11">
          Lorem Ipsum
        </p>
        <div></div>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </>
  );
};

export default CountdownTimer;
