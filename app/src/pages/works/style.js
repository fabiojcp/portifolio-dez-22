import styled from "styled-components";

export const Element3d = styled.div`
  background: rgba(90, 90, 90, 0.7);
  transform: ${(props) => props.trns};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 300px;
  position: absolute;
  /* backface-visibility: inherit; */
  font-size: 60px;
  color: #fff;
  box-sizing: content-box;
  background-image: url(${(props) => props.bck});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${(props) => props.opct};
`;

export const ElementsWrapprer = styled.div`
  /* transform: translate3d(42px, -62px, -135px); */
  width: 100%;
  height: 100%;
  /* perspective: 550px; */
  /* transform-style: preserve-3d; */
  /* transition: all 0.3s ease-in; */
  box-sizing: border-box;

  text-align: center;
  margin: 10% 40% 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.ul`
  color: #ffffff;
  width: 100%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: visible;
  margin: 10vh 0 0 0;
`;

export const SubTextWrapper = styled.li`
  color: #ffffff;
  width: 100%;
  font-size: 1rem;
  z-index: 6000;
  position: relative;
  cursor: default;
  overflow: visible;
  margin: 0 0 4vh 4vw;
`;

export const Title = styled.p`
  cursor: default;
  overflow: visible;
  color: #05fdd860;
  font-family: "coolvetica";
  margin: 0 0 4vh 8vw;
  font-size: 4rem;
`;

export const SubTitle = styled.p`
  cursor: default;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  overflow: visible;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
`;

export const Anchor = styled.a`
  cursor: pointer;
  pointer-events: all;
  overflow: visible;
  margin: 0 0 0 1rem;
  text-decoration: none;
  color: #93a6cd;
  :visited {
    color: #93a6cd;
  }
  :hover {
    color: #ffffff60;
  }
`;
