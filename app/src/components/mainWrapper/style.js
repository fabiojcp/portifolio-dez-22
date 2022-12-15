import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.backgroudColor};
  box-shadow: ${props => props.boxShadow};
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out;
  z-index: 0;
`;
