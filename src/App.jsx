import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero"; // Corrected import path
import { AboutMe } from "./components/AboutMe";
import { Project } from "./components/Project";
import { Freefire } from "./components/Freefire";
import { Footer } from "./components/Footer";
import { Blogs } from "./components/Blogs";


export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Freefire />
      <Blogs />
      <Footer />
      
    </>
  );
};
