"use client";
import React, { useEffect, useState } from "react";
import {
  ShoppingCart,
  CreditCard,
  Shield,
  Star,
  MessageSquare,
  Settings,
  Moon,
  Sun,
  ArrowLeft,
  Menu,
  X,
  Twitter,
  Linkedin,
  GitHub,
  ChevronUp,
} from "react-feather";
import { useDarkMode } from "../context/darkModeContext";

const Lushkart = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const features = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Platform",
      description:
        "Full-featured online shopping experience with product browsing, filtering, and cart management.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Gateway",
      description:
        "Integrated Cashfree payment processing for secure transactions.",
    },
    {
      icon: <Shield size={24} />,
      title: "Admin Dashboard",
      description: "Complete product management system for administrators.",
    },
    {
      icon: <Star size={24} />,
      title: "Product Reviews",
      description: "Customers can rate and review purchased products.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Discussion Forum",
      description: "Comment system for product discussions.",
    },
    {
      icon: <Settings size={24} />,
      title: "Inventory Management",
      description: "Real-time stock tracking and product updates.",
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Cashfree", category: "Payment" },
    { name: "Redux", category: "State Management" },
    { name: "Tailwind CSS", category: "Styling" },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } ${
        isScrolled ? (darkMode ? "shadow-lg shadow-gray-800" : "shadow-md") : ""
      } min-h-screen transition-colors duration-300`}
      id="top"
    >
      {/* Navigation */}
      <nav
        className={`${
          darkMode ? "bg-gray-800" : "bg-teal-900"
        } text-white shadow-lg fixed w-full z-10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={20} />
              <span className="font-bold text-lg">Back</span>
            </a>
          </div>
          {/* Menu button for mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} className="text-gray-700 dark:text-gray-300" />
          </button>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="hover:text-teal-200 transition-colors"
            >
              Features
            </a>
            <a
              href="#tech-stack"
              className="hover:text-teal-200 transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#gallery"
              className="hover:text-teal-200 transition-colors"
            >
              Gallery
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-teal-800 hover:bg-teal-700"
              } transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

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
              darkMode ? "text-teal-400" : "text-teal-600"
            }`}
          >
            Lushkart
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
          {[
            { name: "Features", hash: "#features" },
            { name: "Tech Stack", hash: "#tech-stack" },
            { name: "Gallery", hash: "#gallery" },
          ].map((item) => (
            <a
              key={item.hash}
              href={`${item.hash}`}
              className={`block py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              onClick={toggleSidebar}
            >
              {item.name.charAt(0).toUpperCase() +
                item.name.slice(1).replace(/([A-Z])/g, " $1")}
            </a>
          ))}
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
              <GitHub size={20} />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Hero Section */}
        <div
          className={`text-center mb-16 ${
            darkMode ? "bg-gray-800" : "bg-teal-900"
          } text-white rounded-2xl p-12 shadow-xl`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-white">
            Lushkart
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            A full-featured e-commerce platform inspired by Amazon and Flipkart,
            with complete admin controls and secure payment processing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://lushkart.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${
                darkMode
                  ? "bg-teal-600 hover:bg-teal-500"
                  : "bg-teal-600 hover:bg-teal-500"
              } text-white rounded-lg transition-colors font-medium`}
            >
              View Live
            </a>
            <a
              href="https://github.com/Inayat-hasan/e-commerce-website"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${
                darkMode
                  ? "border border-teal-400 text-teal-400 hover:bg-gray-700"
                  : "border border-white text-white hover:bg-teal-800"
              } rounded-lg transition-colors font-medium`}
            >
              View on GitHub
            </a>
            <a
              href="https://lushkart-admin.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${
                darkMode
                  ? "bg-teal-600 hover:bg-teal-500"
                  : "bg-teal-600 hover:bg-teal-500"
              } text-white rounded-lg transition-colors font-medium`}
            >
              View Admin
            </a>
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2
              className={`text-3xl font-bold ${
                darkMode ? "text-teal-300" : "text-teal-800"
              } mb-6`}
            >
              Project Overview
            </h2>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}
            >
              Lushkart is a comprehensive e-commerce solution that replicates
              core functionality of major shopping platforms. The project
              includes both customer-facing storefront and administrative
              interfaces.
            </p>
            <p
              className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-6`}
            >
              As a personal project, this demonstrates full-stack development
              capabilities including payment integration, user authentication,
              product management, and review systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://lushkart.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${
                  darkMode
                    ? "bg-teal-600 hover:bg-teal-500"
                    : "bg-teal-600 hover:bg-teal-700"
                } text-white rounded-lg transition-colors`}
              >
                View Live
              </a>
              <a
                href="https://github.com/Inayat-hasan/e-commerce-website"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${
                  darkMode
                    ? "border border-gray-500 hover:border-gray-400"
                    : "border border-gray-300 hover:bg-gray-50"
                } rounded-lg transition-colors`}
              >
                View on GitHub
              </a>
              <a
                href="https://lushkart-admin.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 ${
                  darkMode
                    ? "bg-teal-600 hover:bg-teal-500"
                    : "bg-teal-600 hover:bg-teal-700"
                } text-white rounded-lg transition-colors`}
              >
                View Admin
              </a>
            </div>
          </div>
          <div
            className={`relative rounded-xl overflow-hidden h-80 group ${
              darkMode ? "shadow-lg shadow-teal-900/30" : "shadow-xl"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src="/images-lushkart/main.png"
                alt="Lushkart Homepage"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent opacity-80"></div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20" id="features">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-teal-300" : "text-teal-800"
            } mb-12 text-center`}
          >
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-teal-50"
                } p-6 rounded-xl ${
                  darkMode ? "shadow-teal-900/20" : "shadow-md hover:shadow-lg"
                } transition-all duration-300 border ${
                  darkMode ? "border-gray-700" : "border-gray-100"
                }`}
              >
                <div
                  className={`${
                    darkMode ? "text-teal-400" : "text-teal-600"
                  } mb-4`}
                >
                  {feature.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-teal-200" : "text-teal-800"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20" id="tech-stack">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-teal-300" : "text-teal-800"
            } mb-12 text-center`}
          >
            Technology Stack
          </h2>
          <div
            className={`${
              darkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
            } rounded-xl shadow-md overflow-hidden`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-lg ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-teal-50"
                  } transition-colors`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${
                      darkMode
                        ? "bg-teal-900/30 text-teal-300"
                        : "bg-teal-100 text-teal-800"
                    }`}
                  >
                    <span className="font-medium text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {tech.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-20" id="gallery">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-teal-300" : "text-teal-800"
            } mb-12 text-center`}
          >
            Project Screenshots
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                src: "/images-lushkart/product-page.png",
                alt: "Lushkart Product Page",
                label: "Product Page",
              },
              {
                src: "/images-lushkart/cart.png",
                alt: "Lushkart Shopping Cart",
                label: "Shopping Cart",
              },
              {
                src: "/images-lushkart/admin-dashboard.png",
                alt: "Lushkart Admin Dashboard",
                label: "Admin Dashboard",
              },
              {
                src: "/images-lushkart/payment.png",
                alt: "Lushkart Payment Process",
                label: "Payment Process",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden h-64 shadow-md group"
              >
                {/* Image with optimized loading */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay with smooth transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-lg drop-shadow-md">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Feature Sections */}
        <div className="space-y-20">
          {/* Admin Dashboard Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 space-y-6">
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Admin Dashboard
              </h3>
              <ul
                className={`space-y-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  "Full CRUD operations for products (Create, Read, Update, Delete)",
                  "Inventory management with stock tracking",
                  "Order management system",
                  "User management capabilities",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      } mt-0.5`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-lg h-80 group">
              <div className="relative h-full w-full">
                <img
                  src="/images-lushkart/admin-features.png"
                  alt="Admin Dashboard Features"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Payment Processing Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80 group">
              <div className="relative h-full w-full">
                <img
                  src="/images-lushkart/payment.png"
                  alt="Secure Payment Process with multiple payment options"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Secure Payment Gateway
              </h3>
              <ul
                className={`space-y-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  "Secure payment processing via Cashfree",
                  "Multiple payment methods supported",
                  "Instant order confirmation and receipt generation",
                  "Complete transaction history tracking",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      } mt-0.5`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Review System Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Section */}
            <div className="space-y-6">
              <h3
                className={`text-2xl md:text-3xl font-bold ${
                  darkMode ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Customer Review System
              </h3>
              <ul
                className={`space-y-3 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {[
                  "Verified purchase reviews only",
                  "5-star rating system with detailed feedback",
                  "Text comments and photo uploads",
                  "Admin moderation dashboard",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 ${
                        darkMode ? "text-teal-400" : "text-teal-600"
                      } mt-0.5`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80 group">
              <div className="relative h-full w-full">
                <img
                  src="/images-lushkart/reviews.png"
                  alt="Customer review interface showing star ratings and comments"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Challenges & Learnings */}
        <div
          className={`mt-20 ${
            darkMode ? "bg-gray-800 border border-gray-700" : "bg-teal-50"
          } rounded-xl p-8`}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-teal-300" : "text-teal-800"
            } mb-8 text-center`}
          >
            Challenges & Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-teal-200" : "text-teal-700"
                } mb-4`}
              >
                Challenges Faced
              </h3>
              <ul
                className={`space-y-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-red-400" : "text-red-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Implementing secure payment gateway integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-red-400" : "text-red-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Managing real-time inventory updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-red-400" : "text-red-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Creating an intuitive admin interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-red-400" : "text-red-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>
                    Handling user authentication and session management
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-teal-200" : "text-teal-700"
                } mb-4`}
              >
                Key Learnings
              </h3>
              <ul
                className={`space-y-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-teal-400" : "text-teal-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Payment gateway integration best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-teal-400" : "text-teal-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Database optimization for e-commerce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-teal-400" : "text-teal-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>Admin dashboard UX principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className={`${
                      darkMode ? "text-teal-400" : "text-teal-500"
                    } mt-1`}
                  >
                    •
                  </span>
                  <span>State management in complex applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-20 pt-10 pb-10 border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Lushkart
              </h2>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                A full-featured e-commerce platform
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#top"
                className={`${
                  darkMode
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-teal-700 hover:text-teal-900"
                } transition-colors`}
              >
                Back to Top
              </a>
              <a
                href="/"
                className={`${
                  darkMode
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-teal-700 hover:text-teal-900"
                } transition-colors`}
              >
                Home
              </a>
              <a
                href="https://github.com/Inayat-hasan"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-teal-400 hover:text-teal-300"
                    : "text-teal-700 hover:text-teal-900"
                } transition-colors`}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={toggleDarkMode}
            className={`fixed bottom-6 right-6 p-3 rounded-full ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-700"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#top"
            className={`fixed bottom-20 right-6 p-3 rounded-full ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-700"
            }`}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <ChevronUp size={20} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Lushkart;
