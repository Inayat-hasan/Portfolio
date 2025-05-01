import React from "react";
import { Sun, Moon, Twitter, Linkedin, Github, ChevronUp } from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <footer
      className={`py-6 ${
        darkMode ? "bg-gray-800" : "bg-purple-600"
      } text-white`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Alex Williams</h2>
        </div>

        <nav className="flex justify-center space-x-6 mb-6">
          <a href="#about" className="hover:text-blue-300 transition-colors">
            About me
          </a>
          <a href="#skills" className="hover:text-blue-300 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-300 transition-colors">
            Projects
          </a>
          <a href="#reviews" className="hover:text-blue-300 transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://x.com/InayatHasan12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/inayat-hasan-4818bb346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Inayat-hasan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <Github size={20} />
          </a>
        </div>

        <p className="text-center text-sm text-gray-300">
          Created by All rights Reserved
        </p>
      </div>

      {/* Dark Mode Toggle */}

      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-6 right-6 p-3 rounded-full ${
          darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"
        }`}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <a
        href="/#top"
        className={`fixed bottom-20 right-6 p-3 rounded-full ${
          darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"
        }`}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <ChevronUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
