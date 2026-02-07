import React, { useState } from "react";
import hacktonixBanner from "../assets/hacktonix-banner.png";
import phoenix2026 from "../assets/phoenix-2026.png";
import hacktonixStandee from "../assets/hacktonix-standee.png";

const projects = [
  {
    title: "Hacktonix 2026 – Event Banner",
    desc: "Marketing poster design for Hacktonix 2026 hackathon with futuristic glitch typography and branding integration.",
    img: hacktonixBanner,
    tags: ["Poster Design", "Branding", "Event Creative"],
  },
  {
    title: "Phoenix 2026 – Event Artwork",
    desc: "Illustrated event poster for Phoenix 2026 with anime-inspired visuals and dynamic composition.",
    img: phoenix2026,
    tags: ["Illustration", "Event Poster", "Visual Design"],
  },
  {
    title: "Hacktonix Standee – On-Campus Display",
    desc: "Vertical standee design for in-person promotion of Hacktonix hackathon with strong CTA and event details.",
    img: hacktonixStandee,
    tags: ["Print Design", "Standee", "Marketing"],
  },
];

const Projects = () => {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl p-[1px] bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-sky-500 transition"
            >
              <div className="rounded-2xl bg-black overflow-hidden h-full flex flex-col">
                
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300 cursor-pointer"
                    onClick={() => setPreviewImg(project.img)}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setPreviewImg(project.img)}
                    className="text-sm text-sky-400 hover:underline text-left"
                  >
                    View Design →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 Preview Modal */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={previewImg}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 font-bold hover:bg-red-500 hover:text-white transition"
              onClick={() => setPreviewImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
