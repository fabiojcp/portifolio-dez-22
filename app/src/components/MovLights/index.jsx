import { useEffect, useState } from "react";
import {
  MovWrapper,
  Light,
  LightTheme1,
  LightTheme2,
  LightTheme3,
  LightTheme4,
  LightTheme5,
  LightTheme6,
  LightTheme7,
  LightTheme8,
  LightTheme9,
} from "./style";

import { motion } from "framer-motion";

export default function MovLights() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MovWrapper>
      <Light
        theme={LightTheme1}
        propPos={windowSize * 0.1}
        as={motion.div}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Light
        theme={LightTheme2}
        propPos={windowSize * 0.2}
        as={motion.div}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Light
        theme={LightTheme3}
        propPos={windowSize * 0.3}
        as={motion.div}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Light
        theme={LightTheme4}
        propPos={windowSize * 0.4}
        as={motion.div}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Light theme={LightTheme5} propPos={windowSize * 0.5} />
      <Light theme={LightTheme6} propPos={windowSize * 0.6} />
      <Light theme={LightTheme7} propPos={windowSize * 0.7} />
      <Light theme={LightTheme8} propPos={windowSize * 0.8} />
      <Light theme={LightTheme9} propPos={windowSize * 0.9} />
    </MovWrapper>
  );
}
