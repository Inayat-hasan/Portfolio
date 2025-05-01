"use client";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import CallToAction from "./components/CallToAction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useDarkMode } from "./context/darkModeContext";

const page = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen scroll-smooth ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <CallToAction />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
