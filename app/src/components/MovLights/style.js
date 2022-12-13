import styled from "styled-components";
import { MousePositionX } from "../../utils/mousePosition/position";

export const MovWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  font-weight: 100;
  position: absolute;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out;
`;

export const Light = styled.div`
  position: absolute;
  width: 1px;
  border-radius: 100%;
  opacity: 0.1;
  background-color: #05FDD860;
  box-shadow: #05FDD860 0px 0px 20px 2px;
  top: 100vh;
  bottom: 0px;
  left: ${props => props.positionX}px;
  margin: auto;
  -webkit-animation: ${(props) => props.theme.animation};
  -moz-animation: ${(props) => props.theme.animation};
  -o-animation: ${(props) => props.theme.animation};
  animation: ${(props) => props.theme.animation};
  -webkit-transform: ${(props) => props.theme.transform};
  -moz-transform: ${(props) => props.theme.transform};
  -o-transform: ${(props) => props.theme.transform};
  transform: ${(props) => props.theme.transform};
  left: ${(props) => props.theme.left};
`;

export const LightTheme1 = {
  animation: "floatUp 4s infinite linear, size 5s infinite linear",
  transform: "scale(1)",
  left: `${MousePositionX}px`,
};


export const LightTheme2 = {
  animation: "floatUp 7s infinite linear, size 5s infinite linear",
  transform: "scale(1.6)",
  // left: `-15+${MousePositionX/10}%`,
};

export const LightTheme3 = {
  animation: "floatUp 2.5s infinite linear, size 5s infinite linear",
  transform: "scale(0.5)",
  // left: `-25+${MousePositionX/10}%`,
};

export const LightTheme4 = {
  animation: "floatUp 4.5s infinite linear, size 5s infinite linear",
  transform: "scale(1.2)",
  // left: `-34+${MousePositionX/10}%`,
};

export const LightTheme5 = {
  animation: "floatUp 8s infinite linear, size 5s infinite linear",
  transform: "scale(2.2)",
  left: "-57%",
};

export const LightTheme6 = {
  animation: "floatUp 3s infinite linear, size 5s infinite linear",
  transform: "scale(0.8)",
  left: "-81%",
};

export const LightTheme7 = {
  animation: "floatUp 5.3s infinite linear, size 5s infinite linear",
  transform: "scale(3.2)",
  left: "37%",
};

export const LightTheme8 = {
  animation: "floatUp 4.7s infinite linear, size 5s infinite linear",
  transform: "scale(1.7)",
  left: "62%",
};

export const LightTheme9 = {
  animation: "floatUp 4.1s infinite linear, size 5s infinite linear",
  transform: "scale(0.9)",
  left: "85%",
};
