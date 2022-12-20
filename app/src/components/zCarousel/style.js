import styled from "styled-components";

export const Element3d = styled.div`
  background: rgba(90, 90, 90, 0.7);
  transform: ${(props) => props.trns};
  display: ${(props) => props.propDisplay};
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 300px;
  position: absolute;
  backface-visibility: visible;
  font-size: 60px;
  color: #fff;
  box-sizing: content-box;
  /* background-image: url(${(props) => props.bck}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* transition: transform ${(props) => props.velocity}s; */

  transition-timing-function: ease-in-out;
  -webkit-animation: ${(props) => props.propAnimation} infinite
    ${(props) => props.velocity}s ease-in-out;
  -moz-animation: ${(props) => props.propAnimation} infinite
    ${(props) => props.velocity}s ease-in-out;
  -o-animation: ${(props) => props.propAnimation} infinite
    ${(props) => props.velocity}s ease-in-out;
  animation: ${(props) => props.propAnimation} infinite
    ${(props) => props.velocity}s ease-in-out;

  opacity: ${(props) => props.propOpc};

  transform: ${(props) => props.propTransf};

  transition: ${(props) => props.propTransf}s;
  -webkit-transition: ${(props) => props.propTransf};
  -moz-transition: ${(props) => props.propTransf};
  -o-transition: ${(props) => props.propTransf};

  /* animation-play-state: ${(props) => props.AnimoPlayState}; */
  /* -webkit-animation-play-state: ${(props) => props.AnimoPlayState}; */
  /* -moz-animation-play-state: ${(props) => props.AnimoPlayState};
  -o-animation-play-state: ${(props) => props.AnimoPlayState}; */

  transition-duration: ${(props) => props.trnsDur};
  -webkit-transition-duration: ${(props) => props.trnsDur};
  -moz-transition-duration: ${(props) => props.trnsDur};
  -o-transition-duration: ${(props) => props.trnsDur};
  margin: 0 0 0 60vw;

  z-index: 4;
`;

export const ElementsWrapprer = styled.div`
  backface-visibility: visible;
  overflow: hidden;
  transform-style: preserve-3d;
  /* transform: translate3d(42px, -62px, -135px); */
  width: 50vw;
  height: 100vh;
  /* perspective: 550px; */
  /* transform-style: preserve-3d; */
  /* transition: all 0.3s ease-in; */
  box-sizing: border-box;

  text-align: center;
  margin: 0;
  position: absolute;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  position: absolute;
  animation: projectsText 5s ease-in-out;
  background-color: #ffffff;
  border-radius: 10%;
  font-size: 1rem;
  margin: 80% 0 0 30%;
`;

export const Title = styled.p`
  animation: projectsText 5s ease-in-out;
`;

export const Anchor = styled.p`
  animation: projectsText 5s ease-in-out;
`;
