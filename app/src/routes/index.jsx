import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/about";
import Contact from "../pages/contact";
import LandingPage from "../pages/landing";
import MySkills from "../pages/skills";
import Portifolio from "../pages/works";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/skills" element={<MySkills/>} />
      <Route path="/portfolio" element={<Portifolio/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
}
