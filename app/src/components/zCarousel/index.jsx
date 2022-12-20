import { useEffect, useState } from "react";
import {
  Element3d,
  ElementsWrapprer,
} from "./style";

export default function ZCarousel({
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  // projects,
  velocity,
  AnimoPlayState,
  ...rest
}) {
  const images = [image0, image1, image2, image3, image4, image5];
  // const projec = [
  //   projects[0].name,
  //   projects[1].name,
  //   projects[2].name,
  //   projects[3].name,
  //   projects[4].name,
  //   projects[5].name,
  // ];
  const [animo, setAnimo] = useState([
    "moveDisappear",
    "moveFirst",
    "moveMiddle",
    "moveLast",
    "moveAppear",
    "",
  ]);
  const [pos, setPos] = useState([
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, 30vw)`,
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, 10vw)`,
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, -10vw)`,
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, -20vw)`,
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, -30vw)`,
    `rotateX(-9deg) rotateY(-20deg) rotatez(0deg) translate3d(-120px, -2vh, -80vw)`,
  ]);

  const [trnsDur, setTrnsDur] = useState([
    `${velocity * 100}ms`,
    `${velocity}s`,
    `${velocity}s`,
    `${velocity}s`,
    `${velocity}s`,
    `${velocity * 100}ms`,
  ]);

  const [opc, setOpc] = useState([0, 1, 0.6, 0.4, 0.2, 0]);

  const [txtOpc, setTxtOpc] = useState([
    "transparent",
    "transparent",
    "#FFFFFF",
    "transparent",
    "transparent",
    "transparent",
  ]);

  useEffect(() => {
    const changePosition = setInterval(() => {
      const newAnimo = [
        animo[5],
        animo[0],
        animo[1],
        animo[2],
        animo[3],
        animo[4],
      ];
      const newPos = [pos[5], pos[0], pos[1], pos[2], pos[3], pos[4]];
      const newOpc = [opc[5], opc[0], opc[1], opc[2], opc[3], opc[4]];
      const newtrnsDur = [
        trnsDur[5],
        trnsDur[0],
        trnsDur[1],
        trnsDur[2],
        trnsDur[3],
        trnsDur[4],
      ];
      const newTxtOpc = [
        txtOpc[5],
        txtOpc[0],
        txtOpc[1],
        txtOpc[2],
        txtOpc[3],
        txtOpc[4],
      ];
      setAnimo(newAnimo);
      setPos(newPos);
      setOpc(newOpc);
      setTrnsDur(newtrnsDur);
      setTxtOpc(newTxtOpc);
    }, velocity * 1000);
    return () => clearInterval(changePosition);
  });

  return (
    <ElementsWrapprer>
      {images.map((element, index, arr) => {
        return (
          <Element3d
            key={index}
            // bck={element}
            style={{ backgroundImage: `url(${element})` }}
            propAnimation={animo[arr.length - index - 1]}
            propTransf={pos[arr.length - index - 1]}
            propOpc={opc[arr.length - index - 1]}
            AnimoPlayState={AnimoPlayState}
            trnsDur={trnsDur[trnsDur.length - index - 1]}
            {...rest}
          ></Element3d>
        );
      })}
    </ElementsWrapprer>
  );
}

/* 
               <TextWrapper
                key={uuid()}
                style={{ color: `${txtOpc[arr.length - index - 1]}` }}
              >
                <Title
                  key={uuid()}
                  style={{ color: `${txtOpc[arr.length - index - 1]}` }}
                >
                  {projec[index]}
                </Title>
                <Anchor
                  key={uuid()}
                  style={{ color: `${txtOpc[arr.length - index - 1]}` }}
                >
                  {AiFillGithub()} Front
                </Anchor>
              </TextWrapper> 
*/
/*
antigo useEffect
      const newAnimo = [
        animo[5],
        animo[0],
        animo[1],
        animo[2],
        animo[3],
        animo[4],
      ];
      const newPos = [pos[5], pos[0], pos[1], pos[2], pos[3], pos[4]];
      const newOpc = [opc[5], opc[0], opc[1], opc[2], opc[3], opc[4]];
      setAnimo(newAnimo);
      setPos(newPos);
      setOpc(newOpc);



            const newImages = [
        images[5],
        images[0],
        images[1],
        images[2],
        images[3],
        images[4],
      ];
      setImages(newImages);
*/

// moveDisappear moveFirst moveMiddle moveLast moveAppear
