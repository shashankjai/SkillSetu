import React, { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Background from "../components/background/Background";
import "../components/background/Background.css";

// Images (sirf 2)
import shashankImg from "../assets/shashank.png";
import gajendraImg from "../assets/gajendra.png";

// Team data (ONLY 2 MEMBERS)
const team = [
  {
    name: "Shashank Jaiswal",
    role: "Full Stack Developer",
    image: shashankImg,
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Gajendra",
    role: "Frontend Developer",
    image: gajendraImg,
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
];

const AboutUsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white">
      <Navbar />

      <div
        className="home-hero"
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Background />

        {/* Hero */}
        <section className="h-1/4 flex flex-col justify-center text-center py-8 px-4">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-3"
          >
            About SkillSetu
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-lg italic max-w-xl mx-auto"
          >
            A peer-to-peer skill exchange platform connecting learners and mentors.
          </motion.p>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              To empower students and professionals through collaborative learning
              and real skill exchange.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
          >
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p>
              A global community where learning is free, practical, and accessible.
            </p>
          </motion.div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          className="py-16 px-6 bg-gradient-to-r from-blue-200 via-blue-300 to-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
            Meet the Team
          </h2>

          <div className="flex justify-center gap-12 max-w-5xl mx-auto flex-wrap">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 p-6 rounded-xl text-center shadow-lg border border-blue-500 w-full sm:w-1/2 md:w-1/3"
              >
                <div className="h-40 w-40 mx-auto rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-500">{member.role}</p>

                <div className="flex justify-center gap-6 mt-4">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin size={26} className="text-blue-600 hover:text-blue-700" />
                  </a>
                  <a href={member.github} target="_blank" rel="noreferrer">
                    <FaGithub size={26} className="text-gray-700 hover:text-black" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Join the Skill Revolution
          </h2>

          <p className="mb-6 text-lg italic">
            Teach. Learn. Grow together with SkillSetu.
          </p>

          <Link to="/skill-matching">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer">
             Explore Skills
              </button>

          </Link>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
