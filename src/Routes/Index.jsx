import { Routes, Route } from "react-router-dom";

 import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import MainLayout from "../Layout/MainLayout";
import FloatingContact from "./FloatingContact";

 
const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
    </Routes>
          <FloatingContact />

    </>


  );
};

export default AppRoutes;