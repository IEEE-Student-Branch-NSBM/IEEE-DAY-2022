import React, { useState, useEffect } from "react";
import TrackDetails from "./TrackDetails";

const TrackTabSection = ({ trackDataDetails }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [trackDetailsData, setTrackDetailsData] = useState();
  useEffect(() => {
    let category;
    if (currIndex === 0) {
      category = "Track 01";
    } else if (currIndex === 1) {
      category = "Track 02";
    } else if (currIndex === 2) {
      category = "Track 03";
    } else if (currIndex == 3) {
      category = "Track 04";
    } else if (currIndex == 4) {
      category = "Track 05";
    }
    setTrackDetailsData(
      trackDataDetails.filter((item) => {
        return item.trackCategory === category;
      })
    );
  }, [currIndex, trackDataDetails]);

  return (
    <div className="container flex flex-col items-center my-8">
      <div className="w-full">
        <div className="flex justify-between border-b-2 border-gray-300 mb-14 xs:text-center">
          <div
            className={`text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:px-0 md:px-3 xs:h-16 md:h-12 ${
              currIndex === 0
                ? `text-brown-10 border-b-4 border-brown-10 font-bold`
                : `text-brown-20 font-bold`
            } `}
            onClick={() => setCurrIndex(0)}
            onKeyDown={() => setCurrIndex(0)}
            role="button"
            tabIndex={0}
          >
            Track 01
          </div>
          <div
            className={`text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:px-0 md:px-3 xs:h-16 md:h-12 ${
              currIndex === 1
                ? `text-brown-10 border-b-4 border-brown-10 font-bold`
                : `text-brown-20 font-bold`
            } `}
            onClick={() => setCurrIndex(1)}
            onKeyDown={() => setCurrIndex(1)}
            role="button"
            tabIndex={0}
          >
            Track 02
          </div>
          <div
            className={`text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:px-0 md:px-3 xs:h-16 md:h-12 ${
              currIndex === 2
                ? `text-brown-10 border-b-4 border-brown-10 font-bold`
                : `text-brown-20 font-bold`
            } `}
            onClick={() => setCurrIndex(2)}
            onKeyDown={() => setCurrIndex(2)}
            role="button"
            tabIndex={0}
          >
            Track 03
          </div>
          <div
            className={`text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:px-0 md:px-3 xs:h-16 md:h-12 ${
              currIndex === 3
                ? `text-brown-10 border-b-4 border-brown-10 font-bold`
                : `text-brown-20 font-bold`
            } `}
            onClick={() => setCurrIndex(3)}
            onKeyDown={() => setCurrIndex(3)}
            role="button"
            tabIndex={0}
          >
            Track 04
          </div>
          <div
            className={`text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:px-0 md:px-3 xs:h-16 md:h-12 ${
              currIndex === 4
                ? `text-brown-10 border-b-4 border-brown-10 font-bold`
                : `text-brown-20 font-bold`
            } `}
            onClick={() => setCurrIndex(4)}
            onKeyDown={() => setCurrIndex(4)}
            role="button"
            tabIndex={0}
          >
            Track 05
          </div>
        </div>
        <div>
          {trackDetailsData && trackDetailsData?.length !== 0 ? (
            trackDetailsData.map((track) => (
              <TrackDetails
                key={track?.id}
                name={track?.tile}
                description={track?.description}
                imageUrl={track?.image}
              />
            ))
          ) : (
            <p className="text-brown-10 text-center text-lg xl:text-2xl leading-7 xl:leading-7.5 px-3 xs:h-16 md:h-12 xl:h-14 font-normal">
              No Content Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackTabSection;
