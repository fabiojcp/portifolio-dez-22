import { Wrapper } from "./style";

export default function MainWrapper({
  children,
  backgroudColor,
  boxShadow,
  propAnimation,
  propZIndex,
  mainStyle,
  rest,
}) {
  return (
    <Wrapper
      backgroudColor={backgroudColor}
      boxShadow={boxShadow}
      propAnimation={propAnimation}
      propZIndex={propZIndex}
      style={mainStyle}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
