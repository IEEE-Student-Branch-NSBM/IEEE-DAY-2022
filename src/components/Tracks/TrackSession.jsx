import React from "react";
import { HeaderSubTitle } from "../../shared/SubTitle/HeaderSubTitle";
import { HeaderTitle } from "../../shared/Titles/HeaderTitle";
import TrackTabSection from "../../shared/TrackTabs/TrackTabSection";

export const TrackSession = () => {
  return (
    <>
      <HeaderTitle />
      <div className="lg:px-80 py-4">
        <HeaderSubTitle />
      </div>
      <div className="lg:px-32">
        <TrackTabSection />
      </div>
    </>
  );
};
