import { NavBar } from "../../components/navBar";
import AboutMe from "../about";
import MySkills from "../skills";
import Portifolio from "../works";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <AboutMe  />
      <MySkills  />
      <Portifolio  />
    </>
  );
}
