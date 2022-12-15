import MainWrapper from "../../components/mainWrapper";
import { Text } from "../../components/styledComponents/text";
import {
  AboutTextWrapper,
  TechsWrapper,
  TextWrapper,
  TypeWriterWrapper,
} from "./style";
import ReactRotatingText from "react-rotating-text";

export default function MySkills() {
  
  return (
    <MainWrapper
      backgroudColor={
        "linear-gradient(to bottom, #1d1d1d 0, transparent 100%), linear-gradient(to top, transparent, #b1b1b1 100%),gray repeating-linear-gradient(45deg, transparent, transparent 35px,  rgba(255, 255, 255, 0.5) 35px, rgba(255, 255, 255, 0.5) 70px)"
      }
    >
      <MainWrapper>
        <TypeWriterWrapper>
          <Text
            propFontWeight={800}
            propFontSize={"3rem"}
            propColor={"#05FDD860"}
            propMargin={"0 0.1rem"}
            textShadow={"0 0 5px 4px #000000"}
          >
            <ReactRotatingText
              items={[
                "Criando experiências por meio da tecnologia",
                "Produzindo aplicações Front e Back End",
                "Arte digital",
              ]}
            />
          </Text>
        </TypeWriterWrapper>
        <AboutTextWrapper>
          <TextWrapper>
            <Text
              propFontWeight={800}
              propFontSize={"2rem"}
              propColor={"#FFFFFF"}
              propMargin={"2vh 0 1.5vh 1vw"}
              propsLetterSpacing={"2px"}
              propZIndex={2}
              textIndent={"5%"}
            >
              Formado em desenvolvimento Full-Stack, atuo no mercado como
              freelancer e estou aberto ao mercado.
            </Text>
            <Text
              propFontWeight={800}
              propFontSize={"2rem"}
              propColor={"#FFFFFF"}
              propMargin={"0 1vw 1.5vh 0"}
              propsLetterSpacing={"2px"}
              propZIndex={2}
              textIndent={"5%"}
            >
              Oferecendo soluções completas para sistemas web, mobile, desktop
              que envolvam HTTPS.
            </Text>
            <Text
              propFontWeight={800}
              propFontSize={"2rem"}
              propColor={"#FFFFFF"}
              propMargin={"0 1vw"}
              propsLetterSpacing={"2px"}
              propZIndex={2}
              textIndent={"5%"}
            >
              Atuo hoje na área educacional formando Web Desenvolvedores desenvolvimento na Kenzie
              Academy Brasil.
            </Text>
          </TextWrapper>
          <TechsWrapper></TechsWrapper>
        </AboutTextWrapper>
      </MainWrapper>
    </MainWrapper>
  );
}

// {
//    <TypeWriterWrapper>
//   {"Criando experiências por meio da tecnologia".split("").map((element, index, arr) => {
//     return (
//       <TypeWriteEffect
//         key={index}
//         element={element}
//         position={index}
//         arr={arr}
//         time={10}
//       ></TypeWriteEffect>
//     );
//   })}
// </TypeWriterWrapper>
// }
