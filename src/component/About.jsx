import React from "react";
import Myphoto from "../assets/Photo.jpeg";

const skills = [
  "Graphic Design",
  "UI/UX Design",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Branding",
  "Social Media Creatives",
  "Poster & Banner Design",
  "Wireframing",
  "Prototyping",
  "Layout & Typography",
  "Color Theory",
  "React",
  "Tailwind CSS",
  "MERN Stack (Basics)",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I am currently pursuing my degree and have a keen interest in graphic design and UI/UX. I enjoy creating visual assets for both digital and print platforms, including social media creatives, banners, posters, and basic marketing materials. I have hands-on experience with design tools such as Adobe Photoshop, Illustrator, and Figma, and I follow core design principles like layout, color theory, and typography. I am comfortable working with feedback, collaborating with marketing teams, and adapting designs according to brand guidelines. I am highly motivated to learn and grow in a professional creative environment.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            From wireframing in Figma to developing full-stack web applications,
            I focus on creating solutions that are not only beautiful but also
            solve real-world problems.
          </p>

          {/* Skills Highlight */}
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Key{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full border border-sky-500/40 text-sky-400 hover:bg-sky-500/10 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Profile / Visual */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-[2px]">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <img className="rounded-2xl object-cover w-full h-full" src={Myphoto} alt="Priyo Dutta" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
