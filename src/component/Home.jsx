import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Priyo Dutta
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
  <span className="text-white">Graphic Designer</span>,{" "}
  <span className="text-white">UI/UX Designer</span> &{" "}
  <span className="text-white">Full Stack Developer</span> crafting clean, modern
  and user-focused digital experiences.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
