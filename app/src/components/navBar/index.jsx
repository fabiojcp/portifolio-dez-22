import { NavbarWrapper, NavbarLinks, Button, NavbarPage } from "./style";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Curriculo from "../../assets/CV/Fabio-Casanova-Vaga-DEV-Full-Stack.pdf";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <NavbarPage>
        <Button
          type="primary"
          as="a"
          style={{ backgroundColor: "white", margin: "0 0 0 2vw" }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          type="primary"
          as="a"
          style={{ backgroundColor: "white", margin: "0 2vw" }}
          onClick={() => navigate("/skills")}
        >
          Sobre
        </Button>
        <Button
          type="primary"
          as="a"
          style={{ backgroundColor: "white" }}
          onClick={() => navigate("/portfolio")}
        >
          Projetos
        </Button>
      </NavbarPage>
      <NavbarLinks>
        <Button
          type="primary"
          as="a"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=+5511930151064&text=Olá!%20Vi%20seu%20portifólio%20na%20internet%20e%20quero%20conhecer%20seus%20serviços`}
          style={{ backgroundColor: "#5C63ED", color: "#FFFFFF" }}
        >
          <IoLogoWhatsapp />
          &#160; Fale comigo!
        </Button>
        <Button
          type="download"
          as="a"
          target="_blank"
          downloadFile
          download="Fábio Casanova - Vaga para DEV Full-Stack.pdf"
          href={Curriculo}
          style={{ backgroundColor: "#5C63ED", color: "#FFFFFF" }}
        >
          <IoLogoWhatsapp />
          &#160; Download Curriculo
        </Button>
        <Button
          type="icon"
          as="a"
          target="_blank"
          aria-label="Github"
          href={`https://github.com/fabiojcp`}
          style={{ backgroundColor: "white" }}
        >
          <FaGithub />
        </Button>
        <Button
          type="icon"
          as="a"
          target="_blank"
          aria-label="LinkedIn"
          href={`https://www.linkedin.com/in/fabiojcp`}
          style={{ backgroundColor: "white" }}
        >
          <FaLinkedinIn />
        </Button>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

// export const NavLinks = () => {
//   return (
//     <NavbarLinks>
//       <Button
//         type="primary"
// //         target="_blank"
//         href={`https://api.whatsapp.com/send?phone=+5511930151064&text=Olá!%20Vi%20seu%20portifólio%20na%20internet%20e%20quero%20conhecer%20seus%20serviços`}
//       >
//         Falar no whatsapp
//       </Button>
//       <Button
//         type="icon"
//         target="_blank"
// //         aria-label="Github"
//         href={`https://github.comfabiojcp`}
//         style={{ backgroundColor: "white" }}
//       >
//         <FaGithub />
//       </Button>
//       <Button
//         type="icon"
//         target="_blank"
// //         aria-label="LinkedIn"
//         href={`https://www.linkedin.com/in/fabiojcp`}
//         style={{ backgroundColor: "white" }}
//       >
//         <FaLinkedinIn />
//       </Button>
//       )
//     </NavbarLinks>
//   );
// };
