import Image from "next/image";
import { useDarkMode } from "../context/darkModeContext";

const Introduction = () => {
  const { darkMode } = useDarkMode();
  return (
    <section
      className={`flex flex-col items-center justify-center py-28 px-6 md:px-12 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
      id="about top"
    >
      <h1 className="text-5xl font-bold mb-8 text-center">Inayat Hasan</h1>

      <div className="max-w-3xl text-center mb-12">
        <p className="text-lg">
          I'm a full-stack developer with great experience and passion for
          coding and building plain interfaces. I have a manic love for great
          high-loaded projects. Plus, I'm an easy- going person and fit in any
          team. I work remotely and save your budget on my workplace. So, if you
          have a complicated task, you've found the right person.
        </p>
      </div>

      {/* <div className="avatar-container relative group">
        <div
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 ${
            darkMode ? "border-purple-600" : "border-purple-400"
          } ${
            darkMode ? "bg-gray-700" : "bg-purple-50"
          } flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
        >
          <Image
            src="/avatar2.png"
            alt="Profile avatar"
            width={135}
            height={135}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Introduction;
