import MainWrapper from "../../components/mainWrapper";
import MovLights from "../../components/MovLights";
import { Cursive, Text, TextWrapper } from "./style";

export default function AboutMe() {
  return (
    <MainWrapper backgroudColor={"#1D1D1D"}>
      <MovLights></MovLights>
      <TextWrapper>
        <Cursive>h1</Cursive>
        <Text>Olá,</Text>
        <Text>Eu sou Fábio,</Text>
        <Cursive></Cursive>
        <Cursive></Cursive>
        <Text>Full-Stack Developer</Text>
      </TextWrapper>
    </MainWrapper>
  );
}
