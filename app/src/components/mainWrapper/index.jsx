import { Wrapper } from "./style";

export default function MainWrapper({ children, backgroudColor, boxShadow }) {
  return <Wrapper backgroudColor={backgroudColor} boxShadow={boxShadow}>{children}</Wrapper>;
}
