import React from "react";
import styled from "styled-components";
import { DayLogo } from "../../shared/Elements/DayLogo";
import Image from "next/image";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #f7e7d6;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoLoader = () => {
  return (
    <Screen>
      <div className="w-full h-full flex items-center justify-center">
        {/* <Image 
          src={"/images/IEEE-Day.png"} 
          width={200}
          height={200} 
          loading="eager" /> */}
        <DayLogo />
      </div>
    </Screen>
  );
};

export default LogoLoader;
