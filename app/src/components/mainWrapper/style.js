import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.backgroudColor};
  box-shadow: ${(props) => props.boxShadow};
  z-index: ${(props) =>
    props.propZIndex === undefined ? 2 : props.propZIndex};
    
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  -webkit-animation: ${(props) => props.propAnimation};
  -moz-animation: ${(props) => props.propAnimation};
  -o-animation: ${(props) => props.propAnimation};
  animation: ${(props) => props.propAnimation};
  /* 
  -webkit-animation: fadeIn 1 1s ease-out;
  -moz-animation: fadeIn 1 1s ease-out;
  -o-animation: fadeIn 1 1s ease-out;
  animation: fadeIn 1 1s ease-out; */

  z-index: 0;

`;
