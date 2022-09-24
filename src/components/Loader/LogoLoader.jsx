import React from "react";
import styled from "styled-components";
import { DayLogo } from "../../shared/Elements/DayLogo";

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
const steps = 50;
let animation_creator = "";
for (let i = 0; i < steps; i++) {
  animation_creator += `
    ${Math.round((i / steps) * 100)}%{
      clip-path: inset(${Math.floor(Math.random() * 300)}px 0px ${Math.floor(
    Math.random() * 300
  )}px 0px);
    }
    `;
}

const LogoHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes svg-glitch-effect {
    ${animation_creator}
  }
  .glitch-layer svg {
    overflow: hidden;
    top: 0;
    left: 0;
  }
  .glitch-layer-right {
    margin-left: 1rem;
    filter: hue-rotate(510deg);
    animation: svg-glitch-effect 3s infinite linear alternate-reverse;
  }
  .glitch-layer-left {
    margin-right: 1rem;
    filter: hue-rotate(130deg);
    animation: svg-glitch-effect 3s infinite linear alternate-reverse;
    // clip-path: inset(0px 0px 0px 0px);
  }
`;

const LogoLoader = () => {
  console.log(animation_creator);
  return (
    <Screen>
      <LogoHolder>
        <div className="flex justify-center">
          <DayLogo className="absolute z-10 original-layer" />
          <DayLogo className="absolute z-20 glitch-layer-left glitch-layer" />
          <DayLogo className="absolute z-30 glitch-layer-right glitch-layer" />
          <DayLogo className="opacity-0" />
        </div>
      </LogoHolder>
    </Screen>
  );
};

export default LogoLoader;
