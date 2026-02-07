import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Get in{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:priyodutta@2004gmail.com"
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition group"
          >
            <MdEmail size={28} className="mx-auto mb-3 text-blue-500 group-hover:text-sky-400" />
            <p className="text-gray-300 text-sm">Email</p>
            <p className="text-white font-medium break-all">
              priyodutta@2004gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:7908452001"
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition group"
          >
            <MdPhone size={28} className="mx-auto mb-3 text-blue-500 group-hover:text-sky-400" />
            <p className="text-gray-300 text-sm">Phone</p>
            <p className="text-white font-medium">+91 7908452001</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/the_hidden_photographer_16?igsh=YWhpNnA0dzI3cmIy"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition group"
          >
            <FaInstagram size={28} className="mx-auto mb-3 text-blue-500 group-hover:text-sky-400" />
            <p className="text-gray-300 text-sm">Instagram</p>
            <p className="text-white font-medium">@the_hidden_photographer_16</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
