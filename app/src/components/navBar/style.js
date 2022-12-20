import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100vw;
    padding: 2vh 0;
  background-color: #000000;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const LogoTipo = styled.div``;

export const LogoTipoImage = styled.div``;

export const LogoTipoText = styled.div``;


export const NavbarPage = styled.div`
  width: 60%;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
`;

export const NavbarLinks = styled.div`
  width: 40%;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-around;
  align-content: center;
`;

export const NavbarMobileArea = styled.div``;

export const Button = styled.div`
  font-family: "coolvetica";
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 1vh 2vw;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: all;
  text-decoration: none;
  color: #000000;
  :visited {
    color: #000000;

  }
  :hover {
    color: #00000060;
    background-color: #FFFFFF40;
    opacity: 0.6;
  }
`;

// import { styled } from "../../styles/stitches.config";
// import { Flex, Container } from "../../styles/Global";
// import { Button } from "../../styles/Buttons";

// export const Navbar = styled("nav", {
//   background: "$mode",
//   borderBottom: "2px solid $grey4",
//   position: "fixed",
//   inset: 0,
//   bottom: "auto",
//   padding: "1rem 0",
//   width: "100%",
//   zIndex: "99999",
//   backgroundColor: "black",
//   border: "none",

//   [`& ${Container}`]: {
//     display: "flex",
//     justifyContent: "space-between",
//     "@mobile": {
//         flexDirection: "column"
//     },
//   },
// });

// export const LogoTipo = styled(Flex, {
//   alignItems: "center",
// });

// export const LogoTipoImage = styled("img", {
//   width: "auto",
//   height: "4rem",
//   borderRadius: "40%",
//   "@mobile": {
//     width: "2.25rem",
//     height: "2.25rem",
//   }
// });

// export const LogoTipoText = styled("span", {
//   fontSize: "1.25rem",
//   fontWeight: 600,
//   color: "white",
//   fontFamily: '"IBM Plex Sans"',
//   "@mobile": {
//     fontSize: "1rem",
//   }
// });

// export const NavbarLinks = styled(Flex, {
//   "@mobile": {
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     marginTop: "$3",

//     [`& ${Button}:nth-child(1)`]: {
//       width: "100%",
//       order: "3",
//     },
//     [`& ${Button}`]: {
//       width: "48%",
//       order: "1",
//     },
//   },
// });

// export const NavbarMobileArea = styled("div", {
//    display: "flex",
//    justifyContent: "space-between"
// });
