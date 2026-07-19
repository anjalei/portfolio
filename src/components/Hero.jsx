import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "./Container";
import portfolioData from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-5">
              🟢 Available for Opportunities
            </div>

            <p className="text-gray-500 text-lg">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              {portfolioData.name}
            </h1>

            <h2 className="text-3xl text-gray-600 mt-6">
              {portfolioData.role}
            </h2>

            <p className="mt-4 text-gray-500">📍 Kerala, India</p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              {portfolioData.description}
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href={portfolioData.resume}
                className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-7 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
            </div>

            <div className="flex gap-5 mt-8 text-3xl">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 scale-110"></div>

              <img
                src={portfolioData.heroImage}
                alt={portfolioData.name}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
