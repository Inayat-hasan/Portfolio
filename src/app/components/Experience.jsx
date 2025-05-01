import { useDarkMode } from "../context/darkModeContext";

const Experience = () => {
  const { darkMode } = useDarkMode();

  const experiences = [
    {
      year: 2015,
      title: "MIT",
      description:
        "Undergraduate Project in Computer Science and Engineering, A+",
    },
    {
      year: 2016,
      title: "DoeWeb",
      description:
        "Software Development Intern in a US IT company. Used AngularJS, PHP, and basic frameworks.",
    },
    {
      year: 2015,
      title: "DiveNet",
      description:
        "Backend developer in a SF hardware startup creating smart equipment for divers. Used Node JS and PostgreSQL, and worked in tight bundle with engineers and security specialists.",
    },
    {
      year: 2015,
      title: "University of Boston",
      description:
        "Bachelor of Science in Computer Science. Courses in programming languages, compiler design, data structures, algorithms, data structures, theory of computation.",
    },
    {
      year: 2017,
      title: "WebLook",
      description:
        "Full-Stack Developer at WebLook web development agency in SF. Created and maintained websites and mobile apps for clients ranging from small businesses to enterprise corporations.",
    },
    {
      year: 2015,
      title: "Remote Freelancer",
      description:
        "Having gained a lot of experience in previous jobs, I decided to become a freelancer. Since 2018, I have been collaborating with various companies around the world, working as a UI/UX designer and full-stack developer growing the most complex projects from scratch.",
    },
  ];

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`w-full text-center py-10 mb-10 ${
            darkMode ? "bg-gray-800" : "bg-purple-600"
          }`}
        >
          <h2 className="text-4xl font-bold text-white">Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 text-center ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full mx-auto mb-4 ${
                  darkMode ? "bg-gray-600" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <span className="text-lg font-semibold">{exp.year}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
