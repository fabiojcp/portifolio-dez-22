import { Wrapper } from "./style";

export default function MainWrapper({ children, backgroudColor }) {
  return <Wrapper backgroudColor={backgroudColor}>{children}</Wrapper>;
}
