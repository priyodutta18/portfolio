import React from 'react'

const HireMe = () => {
  return (
    <section id="hire" className="bg-black text-white py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Hire <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Me</span>
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
      I’m a UI/UX & Graphic Design and student passionate about creating visually engaging and user-friendly digital experiences.
      Open to internships, freelance projects, and creative collaborations.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
      <span className="border border-gray-700 px-4 py-2 rounded-full">UI/UX Design</span>
      <span className="border border-gray-700 px-4 py-2 rounded-full">Graphic Design</span>
      <span className="border border-gray-700 px-4 py-2 rounded-full">Figma</span>
      <span className="border border-gray-700 px-4 py-2 rounded-full">Branding</span>
    </div>

    <a
      href="#contact"
      className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-3 rounded-full font-medium hover:scale-105 transition"
    >
      Let’s Work Together
    </a>
  </div>
</section>

  )
}

export default HireMe