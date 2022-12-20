import { useState } from "react";
import MainWrapper from "../../components/mainWrapper";
import MovLights from "../../components/MovLights";
import { Cursive, Text } from "../../components/styledComponents/text";
import { TextWrapper, GenericWrapper, Shadow } from "./style";

export default function AboutMe() {
  const [textColor, setTextColor] = useState({
    white: "#FFFFFF",
    toPink: "#FFFFFF",
    toWhite: "#FFFFFF80",
    green: "#67F08E",
    cursive: "#FFFFFF40",
    toMoveRight: "0 0 0 5vw",
    transparentToRed: "transparent",
  });

  return (
    <MainWrapper
      boxShadow={"inset 0 0 40vh 30vh #1d1d1d"}
      propAnimation={"fadeIn 1 1s ease-out"}
      propZIndex={1}
      backgroudColor={"000000ef"}
      id="ABOUTME"
    >
      <Shadow />
      <MovLights></MovLights>
      <TextWrapper>
        <Cursive
          propFontSize={"2rem"}
          propFontWeight={100}
          propColor={textColor.cursive}
          propMargin={"0 0 2vh 0"}
        >
          &#10096;&#160;h1&#160;&#10097;
        </Cursive>
        <Text
          propFontSize={"5rem"}
          propFontWeight={1000}
          propColor={textColor.white}
          propMargin={"0 0 0 2vw"}
        >
          Olá,
        </Text>
        <GenericWrapper style={{ display: "inline", zIndex: 2 }}>
          <Text
            propFontSize={"5rem"}
            propFontWeight={1000}
            propColor={textColor.white}
            propMargin={"0 0 0 4vw"}
            propDisplay={"inline"}
          >
            Eu sou&#160;
          </Text>
          <Text
            propsHoverOpacity={1}
            propFontSize={"6rem"}
            propDisplay={"inline"}
            propColor={textColor.green}
            propsLetterSpacing={"0.2vw"}
            propsPosition={"absolute"}
            propMargin={"-1px 0 0 -0.3vw"}
            propZIndex={-1}
          >
            F
          </Text>
          <Text
            propFontSize={"6rem"}
            propDisplay={"inline"}
            propColor={"#FD2155"}
            propsLetterSpacing={"0.2vw"}
            propZIndex={3}
            onMouseEnter={() =>
              setTextColor({
                white: "#FFFFFF00",
                toPink: "#FD2155",
                toWhite: "#FFFFFF",
                green: "#67F08E00",
                cursive: "#FFFFFF00",
                toMoveRight: "0 0 0 30vw",
                transparentToRed: "#FD2155",
              })
            }
            onMouseLeave={() =>
              setTextColor({
                white: "#FFFFFF",
                toPink: "#FFFFFF",
                toWhite: "#FFFFFF80",
                green: "#67F08E",
                cursive: "#FFFFFF40",
                toMoveRight: "0 0 0 5vw",
                transparentToRed: "transparent",
              })
            }
          >
            F
          </Text>
          <Text
            onMouseEnter={() =>
              setTextColor({
                white: "#FFFFFF00",
                toPink: "#FD2155",
                toWhite: "#FFFFFF",
                green: "#67F08E00",
                cursive: "#FFFFFF00",
                toMoveRight: "0 0 0 30vw",
                transparentToRed: "#FD2155",
              })
            }
            onMouseLeave={() =>
              setTextColor({
                white: "#FFFFFF",
                toPink: "#FFFFFF",
                toWhite: "#FFFFFF80",
                green: "#67F08E",
                cursive: "#FFFFFF40",
                toMoveRight: "0 0 0 5vw",
                transparentToRed: "transparent",
              })
            }
            propFontSize={"6rem"}
            propFontWeight={1000}
            propColor={textColor.toPink}
            propDisplay={"inline"}
            AnimationColorHover={"#FD2155"}
          >
            ábio
          </Text>
          <Text
            propFontSize={"5rem"}
            propDisplay={"inline"}
            propColor={textColor.white}
            propBorderRadius={100}
            propAnimation={"floatUp 1s infinite linear"}
          >
            .
          </Text>
          <Text
            onMouseEnter={() =>
              setTextColor({
                white: "#FFFFFF00",
                toPink: "#FD2155",
                toWhite: "#FFFFFF",
                green: "#67F08E00",
                cursive: "#FFFFFF00",
                toMoveRight: "0 0 0 30vw",
                transparentToRed: "#FD2155",
              })
            }
            onMouseLeave={() =>
              setTextColor({
                white: "#FFFFFF",
                toPink: "#FFFFFF",
                toWhite: "#FFFFFF80",
                green: "#67F08E",
                cursive: "#FFFFFF40",
                transparentToRed: "transparent",
              })
            }
            propFontSize={"5rem"}
            propFontWeight={1000}
            propColor={textColor.transparentToRed}
            propDisplay={"inline"}
            AnimationColorHover={"#FD2155"}
          >
            Casanova
          </Text>
        </GenericWrapper>
        <Cursive
          propFontSize={"2rem"}
          propFontWeight={100}
          propColor={textColor.cursive}
          propMargin={"2vh 0"}
        >
          &#10096;&#47;&#160;h1&#160;&#10097;
        </Cursive>
        <Cursive
          propFontSize={"2rem"}
          propFontWeight={100}
          propColor={textColor.cursive}
          propMargin={"2vh 0"}
        >
          &#10096;&#160;p&#160;&#10097;
        </Cursive>
        <Text
          propFontSize={"2.5rem"}
          propFontWeight={800}
          propColor={textColor.toWhite}
          propMargin={textColor.toMoveRight}
          propsLetterSpacing={"0.25vw"}
        >
          &#123;&#160;Full-Stack Developer&#160;&#125;
        </Text>
        <Cursive
          propFontSize={"2rem"}
          propFontWeight={100}
          propColor={textColor.cursive}
          propMargin={"2vh 0"}
        >
          &#10096;&#47;&#160;p&#160;&#10097;
        </Cursive>
      </TextWrapper>
    </MainWrapper>
  );
}
