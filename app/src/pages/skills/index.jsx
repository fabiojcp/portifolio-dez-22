import MainWrapper from "../../components/mainWrapper";
import { Text } from "../../components/styledComponents/text";
import {
  AboutTextWrapper,
  Canvas,
  TechsWrapper,
  TextWrapper,
  TypeWriterWrapper,
} from "./style";
import ReactRotatingText from "react-rotating-text";
import Cloud from "../../components/cloudTag";
import { NavBar } from "../../components/navBar";

export default function MySkills() {
  return (
    <MainWrapper backgroudColor={"#1d1d1d"} id="SKILLS">
      <NavBar/>
      <TypeWriterWrapper>
        <Text
          propFontWeight={800}
          propFontSize={"4rem"}
          propColor={"#05FDD860"}
          propMargin={"0 0.1rem"}
          textShadow={"0 0 5px 4px #000000"}
          propAnimation={"fadeIn 1 1s ease-out"}
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
            propFontSize={"1.7rem"}
            propColor={"#FFFFFF"}
            propMargin={"2vh 0 3.5vh 1vw"}
            propsLetterSpacing={"2px"}
            propZIndex={2}
            textIndent={"5%"}
          >
            Formado em desenvolvimento Full-Stack, atuo como
            freelancer e estou aberto ao mercado.
          </Text>
          <Text
            propFontWeight={800}
            propFontSize={"1.7rem"}
            propColor={"#FFFFFF"}
            propMargin={"0 1vw 3.5vh 0"}
            propsLetterSpacing={"2px"}
            propZIndex={2}
            textIndent={"5%"}
          >
            Oferecendo soluções completas para sistemas web, mobile, desktop que
            envolvam HTTPS.
          </Text>
          <Text
            propFontWeight={800}
            propFontSize={"1.7rem"}
            propColor={"#FFFFFF"}
            propMargin={"0 1vw"}
            propsLetterSpacing={"2px"}
            propZIndex={2}
            textIndent={"5%"}
          >
            Atuo hoje na área educacional formando Web Desenvolvedores
            desenvolvimento na Kenzie Academy Brasil.
          </Text>
        </TextWrapper>

        <div
          id="myCanvasContainer"
          onWheel={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          <Canvas
            width="600"
            height="600"
            id="myCanvas"
            onWheel={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <ul
              onWheel={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">HTML5</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">CSS3</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">UX/UI</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">JavaScript</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Typescript</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">OOP</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">POO</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">API</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">React</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">ReactHooks</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Redux</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">MUI</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">NodeJS</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Express</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">SQL</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">PostgreSQL</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Elixir</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Prisma</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">Scrum</a>
              </li>
              <li
                onWheel={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              >
                <a href="javascript:void(0)">AGIL</a>
              </li>
            </ul>
          </Canvas>
        </div>

        {/* <TechsWrapper>
          <Cloud />
        </TechsWrapper> */}
      </AboutTextWrapper>
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
