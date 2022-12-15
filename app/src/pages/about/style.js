import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 0 0 10vw;
  z-index: 2;
  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
`;

export const GenericWrapper = styled.div`
  width: auto;
  box-sizing: content-box;
  margin: 0 0 0 5vw;
  /* transition: all 0.5s;
  transition-timing-function: ease-in-out;
  :hover {
    margin: 0 0 0 15vw;
  } */
`;

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  background: #05fdd860;
  box-shadow: 0 0vh 10vh 5vh #1d1d1d;
  z-index: 2;
`;