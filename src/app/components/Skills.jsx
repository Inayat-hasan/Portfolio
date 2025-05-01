import React from "react";
import {
  GitBranch,
  Code,
  Palette,
  Database,
  Globe,
  Server,
  Terminal,
  Monitor,
  Settings,
  Search,
} from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const ICONS = {
  backend: GitBranch,
  frontend: Code,
  design: Palette,
  database: Database,
  webdev: Globe,
  server: Server,
  devops: Terminal,
  ui: Monitor,
  system: Settings,
  seo: Search,
  // Add more icons as needed
};

const SKILLS_DATA = [
  {
    id: "backend",
    title: "Back-end Developer",
    icon: "backend",
    iconColor: "text-blue-500",
    description:
      "Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.",
    sections: [
      {
        title: "Languages:",
        items: ["Javascript", "SQL"],
        isList: false,
      },
      {
        title: "Technologies Stack:",
        items: ["MySQL", "Node JS", "MongoDB", "Git", "GitHub", "Redis"],
        isList: true,
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-end Developer",
    icon: "frontend",
    iconColor: "text-blue-500",
    description:
      "I code things from scratch, and gracefully bring the ideas to life and to the bowser, paying maximal attention to your vision of the product.",
    sections: [
      {
        title: "Languages:",
        items: ["HTML", "JavaScript", "CSS"],
        isList: false,
      },
      {
        title: "Technologies Stack:",
        items: [
          "Tailwind",
          "React JS",
          "Redux",
          "Github",
          "Framer Motion",
          "Next JS",
        ],
        isList: true,
      },
    ],
  },
  // You can easily add more skills here
];

const SkillCard = ({ skill, darkMode }) => {
  const IconComponent = ICONS[skill.icon] || Code;

  return (
    <div
      className={`rounded-lg shadow-lg p-8 h-full flex flex-col ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="flex justify-center mb-6">
        <IconComponent
          size={48}
          className={skill.iconColor || "text-blue-500"}
        />
      </div>

      <h3 className="text-2xl font-semibold text-center mb-4">{skill.title}</h3>

      <p className="text-center mb-8 text-gray-500 flex-grow">
        {skill.description}
      </p>

      <div>
        {skill.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl text-purple-600 mb-2">{section.title}</h4>
            {section.isList ? (
              <ul className="text-gray-500 space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mb-6">{section.items.join(", ")}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { darkMode } = useDarkMode();
  const getGridColumns = () => {
    const skillCount = SKILLS_DATA.length;

    if (skillCount <= 2) {
      return "grid-cols-1 md:grid-cols-2";
    } else if (skillCount === 3) {
      return "grid-cols-1 md:grid-cols-3";
    } else if (skillCount === 4) {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    } else {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      }`}
      id="skills"
    >
      {/* Purple header band */}
      <div className="bg-purple-600 text-white py-10 mb-10">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className={`grid gap-6 ${getGridColumns()}`}>
          {SKILLS_DATA.map((skill) => (
            <SkillCard key={skill.id} skill={skill} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
