import { Span } from "../../components/styledComponents/text";

export default function TypeWriteEffect({element,arr, position,time}) { 
  return (
    <>
    <Span
      propFontWeight={800}
      propFontSize={"4rem"}
      propColor={"#05FDD860"}
      propMargin={"0 0.1rem"}
      textShadow={"0 0 5px 4px #000000"}
      propAnimation={`typing ${position*(time/arr.length)+0.01}s`}
    //   AnimationDelay={(position+1)*0.25+"s"}
    >
      {element === " " ? " ": element} 
    </Span>
    {element === " " && <br/>} 
    </>
  );
}