import MainWrapper from "../../components/mainWrapper";
import HttTinder from "../../assets/portifolio/httTinder.jpg";
import Helpers from "../../assets/portifolio/helperPc.jpg";
import NuKenzie from "../../assets/portifolio/nukenzie.jpg";
import Burguer from "../../assets/portifolio/burguer.jpg";
import Hub from "../../assets/portifolio/hub.jpg";
import Bigode from "../../assets/portifolio/bigode.jpg";
import ZCarousel from "../../components/zCarousel";
import { useState } from "react";
import { projects } from "../../utils/projects";
import { Anchor, SubTextWrapper, SubTitle, TextWrapper, Title } from "./style";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { NavBar } from "../../components/navBar";

export default function Portifolio() {
  const [AnimoPlayState, setAnimoPlayState] = useState("running");

  const mainStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100vw",
  };

  return (
    <MainWrapper
      backgroudColor={"#1d1d1d"}
      mainStyle={mainStyle}
      id="PORTIFOLIO"
      propAnimation={"fadeIn 1 1s ease-out"}
    >
      <NavBar />
      <TextWrapper>
        <Title>Projetos</Title>
        {projects.map((element, index, arr) => {
          return (
            <SubTextWrapper key={index}>
              <SubTitle>{element.name}</SubTitle>
              {element.homepage && (
                <Anchor href={element.homepage} target="_blank">
                  {BsBoxArrowInUpRight()} Aplicação
                </Anchor>
              )}
              {element.frontRepository && (
                <Anchor href={element.frontRepository} target="_blank">
                  {AiFillGithub()} Front-End
                </Anchor>
              )}
              {element.backRepository && (
                <Anchor href={element.backRepository} target="_blank">
                  {AiFillGithub()} Back-End
                </Anchor>
              )}
            </SubTextWrapper>
          );
        })}
      </TextWrapper>
      <ZCarousel
        onMouseEnter={() => setAnimoPlayState("paused")}
        onMouseLeave={() => setAnimoPlayState("running")}
        image0={HttTinder}
        image1={Helpers}
        image2={NuKenzie}
        image3={Bigode}
        image4={Hub}
        image5={Burguer}
        AnimoPlayState={AnimoPlayState}
        velocity={4}
        projects={projects}
      />
    </MainWrapper>
  );
}
