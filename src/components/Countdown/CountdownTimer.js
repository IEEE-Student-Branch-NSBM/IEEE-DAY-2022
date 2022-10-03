import { data } from "autoprefixer";
import React from "react";
import { useCountdown } from "../../utils/useCountdown";
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
      <p className="text-10xl sm:text-15xl leading-0 sm:leading-20 text-brown-10 font-semibold">
        :
      </p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p className="text-10xl sm:text-15xl leading-0 sm:leading-20 text-brown-10 font-semibold">
        :
      </p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p className="text-10xl sm:text-15xl leading-0 sm:leading-20 text-brown-10 font-semibold">
        :
      </p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <>
      {data && (
        <div className="bg-hero-pattern grid grid-cols-1 grid-rows-5 sm:grid-rows-6 h-85 place-items-center">
          <p className="font-bold text-10xl xxs:text-12xl text-brown-10 leading-15 mt-11 text-center">
            Registrations is open till
          </p>
          <div></div>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      )}
    </>
  );
};

export default CountdownTimer;
