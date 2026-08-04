import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Container from "./Container";
import portfolioData from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white pt-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium mb-5">
              Open to Work
            </div>

            <p className="text-gray-500 text-lg">Hi, I'm</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-slate-900">
              {portfolioData.name}
            </h1>

            <h2 className="text-3xl font-semibold text-gray-700 mt-6">
              {portfolioData.role}
            </h2>

            <p className="mt-4 text-gray-500">📍 Kerala, India</p>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-lg">
              {portfolioData.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["React", "Node.js", "Express", "MySQL", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-10">
              <Button href={portfolioData.resume} primary download>
                Download Resume
              </Button>
              <Button href="#projects">View Projects</Button>
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
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-100 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
