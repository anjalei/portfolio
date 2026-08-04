import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionTitle subtitle="Contact" title="Let's Connect" />

        <div className="max-w-3xl mx-auto rounded-3xl bg-white shadow-lg border border-gray-200 p-10">
          <div className="space-y-6">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-4 text-lg hover:text-blue-600 transition"
            >
              <FaEnvelope />
              {portfolioData.email}
            </a>

            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg hover:text-blue-600 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-lg hover:text-blue-600 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <div className="flex items-center gap-4 text-lg">
              <FaMapMarkerAlt />
              Kerala, India
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
