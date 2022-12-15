import styled from "styled-components";

export const Cursive = styled.p`
  font-family: "australiacustom";
  font-size: ${(props) => props.propFontSize};
  font-weight: ${(props) => props.propFontWeight};
  color: ${(props) => props.propColor};
  margin: ${(props) => props.propMargin};
  z-index: 2;
  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
`;

export const Text = styled.p`
  display: ${(props) =>
    props.propDisplay === undefined ? "block" : props.propDisplay};
  font-family: "coolvetica";
  font-weight: ${(props) => props.propFontWeight};
  font-size: ${(props) => props.propFontSize};
  color: ${(props) => props.propColor};
  margin: ${(props) => props.propMargin};
  padding: ${(props) => props.Padding};
  letter-spacing: ${(props) => props.propsLetterSpacing};
  position: ${(props) => props.propsPosition};
  border-radius: ${(props) => props.propBorderRadius}%;
  z-index: ${(props) =>
    props.propZIndex === undefined ? 2 : props.propZIndex};
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
  height: ${(props) => props.Height};
  width: ${(prop) => (prop.propWidth === undefined ? "auto" : prop.propWidth)};
  text-indent: ${(props) => props.textIndent};
  text-shadow: ${(props) => props.textShadow};
  white-space: ${(props) => props.WhiteSpace};
  word-wrap: ${(props) => props.WordWrap};
  animation-delay: ${(props) => props.AnimationDelay};

  -webkit-animation: ${(props) => props.propAnimation};
  -moz-animation: ${(props) => props.propAnimation};
  -o-animation: ${(props) => props.propAnimation};
  animation: ${(props) => props.propAnimation};

  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  :hover {
    color: ${(props) => props.AnimationColorHover};
  }
`;

export const Span = styled.span`
  display: ${(props) =>
    props.propDisplay === undefined ? "block" : props.propDisplay};
  font-family: "coolvetica";
  font-weight: ${(props) => props.propFontWeight};
  font-size: ${(props) => props.propFontSize};
  color: ${(props) => props.propColor};
  margin: ${(props) => props.propMargin};
  padding: ${(props) => props.Padding};
  letter-spacing: ${(props) => props.propsLetterSpacing};
  position: ${(props) => props.propsPosition};
  border-radius: ${(props) => props.propBorderRadius}%;
  z-index: ${(props) =>
    props.propZIndex === undefined ? 2 : props.propZIndex};
  transition: all 0.5s;
  transition-timing-function: ease-in-out;
  height: ${(props) => props.Height};
  width: ${(prop) => (prop.propWidth === undefined ? "auto" : prop.propWidth)};
  text-indent: ${(props) => props.textIndent};
  text-shadow: ${(props) => props.textShadow};
  white-space: ${(props) => props.WhiteSpace};
  word-wrap: ${(props) => props.WordWrap};
  animation-delay: ${(props) => props.AnimationDelay};

  -webkit-animation: ${(props) => props.propAnimation};
  -moz-animation: ${(props) => props.propAnimation};
  -o-animation: ${(props) => props.propAnimation};
  animation: ${(props) => props.propAnimation};

  box-sizing: content-box;
  -webkit-overflow-y: hidden;
  -moz-overflow-y: hidden;
  -o-overflow-y: hidden;
  overflow-y: hidden;
  :hover {
    color: ${(props) => props.AnimationColorHover};
  }
`;

// propDisplay={}
// propFontWeight={}
// propFontSize={}
// propColor={}
// propMargin={}
// propsLetterSpacing={}
// propsPosition={}
// propBorderRadius={}
// propZIndex={}
// propWidth={}
// propAnimation={}
