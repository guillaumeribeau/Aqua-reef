import React from "react";
import styled, { keyframes } from "styled-components";

// scroll btn
const ScrollDownAnim = keyframes`
    0% {
      opacity: 0;
      height: 6px;
    }
    40% {
      opacity: 1;
      height: 10px;
    }
    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }
    100% {
      height: 3px;
      opacity: 0;
    }
  `;

const PulseAnim = keyframes`
  
     from {
       opacity: 0;
     }
    to {
      opacity: 0.5;
     }
  `;




const ContainerScoll = styled.div`
  position: absolute;
  margin-top: 25px;
  bottom: ${(props) => props.bottomPosition}px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
`;

const ScrollDown = styled.div`
  --color: black;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;
  &: before{

  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: ${ScrollDownAnim} 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #ffffff66;
  }
`;




// const ScrolldownBefore = styled.div`

const Chevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 25;
`;
const ChevronDown = styled.div`
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  z-index: 15;
  &:nth-child(odd) {
    animation: ${PulseAnim} 500ms ease infinite alternate;
  };

  &:nth-child(even) {
    animation: ${PulseAnim} 500ms ease infinite alternate 250ms;
  }
`;

const ScrollBtn = ({ bottomPosition }) => {
  return (
    <ContainerScoll bottomPosition={bottomPosition}>
      <ScrollDown>
        
          <Chevrons>
            <ChevronDown></ChevronDown>
          </Chevrons>
        
      </ScrollDown>
    </ContainerScoll>
  );
};

export default ScrollBtn;

{
  /* <div className="container-scroll-btn">
      <div class="scrolldown">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </div> */
}
