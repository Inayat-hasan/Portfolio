import React, { useState, useEffect } from "react";
import { Sun, Moon, Twitter, Linkedin, Menu, X, Github } from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Close sidebar when clicking outside or on navigation links
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 px-6 md:px-12 flex items-center justify-between z-30 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      } ${
        isScrolled ? (darkMode ? "shadow-lg shadow-gray-800" : "shadow-md") : ""
      }`}
    >
      <div className="logo">
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-blue-400" : "text-blue-600"
          }`}
        >
          IH
        </h1>
      </div>

      {/* Menu button for mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={24} className="text-gray-700 dark:text-gray-300" />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="#about"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          About me
        </a>
        <a
          href="#skills"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Projects
        </a>
        <a
          href="#reviews"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Reviews
        </a>
        <a
          href="#contact"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Contact
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Preview Resume
        </a>
        <a
          href="/Resume.pdf"
          download
          className={`hover:text-blue-500 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Download Resume
        </a>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full hover:opacity-80 transition-opacity ${
            darkMode
              ? "bg-gray-700 text-yellow-300"
              : "bg-gray-200 text-gray-700"
          }`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="social-icons flex space-x-3">
          <a
            href="https://x.com/InayatHasan12"
            className={`hover:opacity-80 transition-opacity ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/inayat-hasan-4818bb346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className={`hover:opacity-80 transition-opacity ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Inayat-hasan"
            className={`hover:opacity-80 transition-opacity ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`sidebar fixed top-0 left-0 w-64 h-full ${
          darkMode ? "bg-gray-900" : "bg-white"
        } text-gray-800 dark:text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 shadow-xl`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-bold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            IH
          </h1>
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-6">
          {["about", "skills", "projects", "reviews", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`block py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              onClick={toggleSidebar}
            >
              {item.charAt(0).toUpperCase() +
                item.slice(1).replace(/([A-Z])/g, " $1")}
            </a>
          ))}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`block py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Preview Resume
          </a>
          <a
            href="/Resume.pdf"
            download
            className={`block py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Download Resume
          </a>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={toggleDarkMode}
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center space-x-2 ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {darkMode ? (
              <>
                <Sun size={20} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://x.com/InayatHasan12"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/inayat-hasan-4818bb346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Inayat-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay to close sidebar on click outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;
