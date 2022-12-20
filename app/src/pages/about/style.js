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
  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
`;

export const Shadow = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #1d1d1d 0.5%, transparent 40%),
    /* linear-gradient(to right, #1d1d1d 0.5%, transparent 10%),
    linear-gradient(to left, #1d1d1d 0.5%, transparent 10%), */
      linear-gradient(to bottom, #1d1d1d 0.5%, transparent 40%);
  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  position: absolute;
  z-index: 1;
  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
`;
