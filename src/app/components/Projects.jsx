import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Eye, Github } from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const Projects = () => {
  const { darkMode } = useDarkMode();

  const projects = [
    {
      id: 1,
      name: "Lushkart",
      tagline: "Modern E-commerce Solution",
      description:
        "E-commerce platform for online shopping with payment gateway integration. Features include user authentication, product filtering, cart management, and secure checkout.",
      color: "bg-teal-800",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600",
      image: "/lushkart/main.png",
      navigateTo: "/lushkart",
      githubLink:
        "https://github.com/Inayat-hasan/e-commerce-website/tree/main/frontend",
      liveLink: "https://lushkart.onrender.com/",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    },
    /*
    {
      id: 2,
      name: "TaskFlow",
      tagline: "Project Management Tool",
      description:
        "A comprehensive project management application with task tracking, team collaboration features, and real-time updates.",
      color: "bg-blue-800",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      image: "/taskflow/dashboard.png",
      navigateTo: "/taskflow",
      githubLink: "https://github.com/yourusername/taskflow",
      liveLink: "https://taskflow-demo.vercel.app",
      technologies: ["React", "Firebase", "Material UI", "Chart.js"],
    },
    {
      id: 3,
      name: "FitTrack",
      tagline: "Fitness Tracking Application",
      description:
        "A mobile-responsive fitness tracking platform that helps users monitor workouts, nutrition, and progress over time.",
      color: "bg-purple-800",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      image: "/fittrack/main.png",
      navigateTo: "/fittrack",
      githubLink: "https://github.com/yourusername/fittrack",
      liveLink: "https://fittrack-demo.vercel.app",
      technologies: ["React Native", "Express", "PostgreSQL", "TensorFlow.js"],
    },
    */
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProjectDetails = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null);
    } else {
      setSelectedProject(projectId);
    }
  };

  return (
    <section
      className={`py-20 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
      id="projects"
    >
      {/* Header with gradient background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Have a look at some of the rolled-out projects I'm proud of:
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div
          className={`grid gap-12 ${
            projects.length === 1 ? "" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl shadow-xl transition-all duration-300
                ${darkMode ? "bg-gray-800" : "bg-white"}
                ${projects.length === 1 ? "mx-auto max-w-4xl" : ""}`}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 opacity-90 z-10`}></div>
                <div className="relative pb-[60%]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20"></div>

                {/* Project Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white text-opacity-90">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className={`p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${project.lightColor} ${project.textColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.navigateTo}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                      ${project.color} text-white hover:opacity-90`}
                  >
                    View Details
                    <ChevronRight size={18} />
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                      border ${
                        darkMode
                          ? "border-gray-700 text-gray-300"
                          : "border-gray-200 text-gray-700"
                      }
                      hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                      ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Projects Button (when you have more projects) */}
        {projects.length > 3 && (
          <div className="mt-16 text-center">
            <button
              className={`px-8 py-3 rounded-lg font-medium transition-colors
                ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
