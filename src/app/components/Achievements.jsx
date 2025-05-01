import { Award, Monitor, Trophy, TrendingUp } from "lucide-react";
import { useDarkMode } from "../context/darkModeContext";

const Achievements = () => {
  const { darkMode } = useDarkMode();
  const achievements = [
    {
      title: "DoeWeb",
      description:
        "Employee of the month. Though I was only an intern, I was highly praised at work and given promotion.",
      icon: <Trophy size={48} className="text-blue-500" />,
    },
    {
      title: "Hackathon",
      description:
        "DeveloperWeek NYC 2018 Hackathon. This was an incredible experience creating the whole project in 24 hours.",
      icon: <Monitor size={48} className="text-blue-500" />,
    },
    {
      title: "Awwwds",
      description:
        "Honorable mention. Being noticed means much to me and my client for whom the site was developed.",
      icon: <Award size={48} className="text-blue-500" />,
    },
    {
      title: "Web Summit",
      description:
        "Speaker. Speaking at Web Summit is stunning, encouraging and inspiring at the same time.",
      icon: <TrendingUp size={48} className="text-blue-500" />,
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
          <h2 className="text-4xl font-bold text-white">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 text-center ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-500">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
