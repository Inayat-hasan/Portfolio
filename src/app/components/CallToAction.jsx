import { useDarkMode } from "../context/darkModeContext";

const CallToAction = () => {
  const { darkMode } = useDarkMode();
  return (
    <section className="w-full bg-purple-600 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Interested in working together?
        </h2>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          You can trust your project in my expert hands. I'm always eager to do
          something nice and complicated. Let's discuss all the features in a
          private conversation.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className={`py-3 px-8 rounded-md font-medium transition-colors ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-purple-600 hover:bg-gray-100"
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
