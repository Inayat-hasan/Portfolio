import React from "react";
import { useDarkMode } from "../context/darkModeContext";

const Testimonials = () => {
  const { darkMode } = useDarkMode();
  const testimonials = [
    {
      name: "Fred M.",
      title: "Team Lead, DoeWeb",
      quote:
        "Alex is a really talented guy with strong knowledge in different web development areas. He likes complicated tasks and enjoys solving them. Under my mentoring, Alex quickly became a strong middle developer, so I am proud of his success. I wish Alex all the best and further rapid development!",
    },
    {
      name: "Jessica K.",
      title: "Tech Lead, WebLook",
      quote:
        "Alex loves what he does, and it’s a great quality for a full-stack developer. All of our clients are totally satisfied with the sites developed by Alex. When we need some extra modifications, we still work with Alex though he has left us for remote work. Anyway, he is a great guy, real professional and a team-player.",
    },
    {
      name: "John W.",
      title: "CEO, WowTaxi",
      quote:
        "Creating a UX design from scratch is not an easy work, especially in terms working with a startup, as everything is changing every day. Still, Alex was very comprehensive and understanding, he did a great work and saved our budget. Totally recommend!",
    },
  ];

  return (
    <section
      className={`py-16 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
      id="reviews"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Warm Words From My Colleagues
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <p className="text-gray-500 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
