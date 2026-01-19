// src/components/footer/Footer.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const internalLinks = [
    { name: "Home", to: "/" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
    { name: "Signup", to: "/register" },
    { name: "Chat", to: "/chat" },
    { name: "Skill Matching", to: "/skill-matching" },
    { name: "Settings", to: "/profile-settings" },
    { name: "About Us", to: "/about-us" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="bg-white/80 backdrop-blur border-t border-blue-200 shadow-inner text-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm md:text-base">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-3">SkillSetu</h2>
          <p className="text-gray-600 text-base md:text-lg">
            A collaborative platform for peer-to-peer learning and skill development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            {internalLinks.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="hover:text-indigo-600 transition duration-300"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col">
          <h3 className="text-left font-semibold text-gray-700 mb-2">
            Connect with us
          </h3>

          <div className="flex space-x-6 mt-2 items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm md:text-base py-4 border-t border-gray-200">
        © {new Date().getFullYear()} Skill Swap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
