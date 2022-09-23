import React from "react";
import styled from "styled-components";

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

const Pyramid = styled.div`
  height: 100%;
  width: 100%;
  
  svg{
    display: block;
    width: 100%;
    height: 100%;
  }
  .triangle {
    fill: none;
    stroke-width: 1px;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 13 13;
    animation: TriangleOffset 5s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
    }
  .one {
    animation-delay: 1s;
    stroke: #9b380836;
  }
  .two {
    animation-delay: 0s;
    stroke: #b05b12;
  }
  @keyframes TriangleOffset {
    33% {
      stroke-dashoffset: 7;
    }
    66% {
      stroke-dashoffset: 14;
    }
    100% {
      stroke-dashoffset: 26;
    }
    }
}
`;

const PyramidLoader = () => {
  return (
    <Screen>
      <Pyramid>
        <svg viewBox="0 0 100 100">
          <polygon
            className="triangle one"
            points="50 46 54 53 46 53"
          ></polygon>
          <polygon
            className="triangle two"
            points="50 46 54 53 46 53"
          ></polygon>
        </svg>
      </Pyramid>
    </Screen>
  );
};

export default PyramidLoader;
