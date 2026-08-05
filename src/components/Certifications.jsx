import { motion } from "framer-motion";
import Container from "./Container";

const certifications = [
  {
    title: "Full Stack Development Certification",
    organization: "Sharpener Tech",
    year: "2025", // Change if needed
    description:
      "An intensive full-stack program covering React, Node.js, Express.js, MySQL, REST APIs, Git, and deployment, including hands-on projects, mock interviews, and placement support.",
    certificate: "#", // Replace with certificate PDF later
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-3">
            Training & Certifications
          </h2>

          <p className="text-center text-gray-500 mb-14">
            Professional training and certifications that strengthened my
            software engineering skills.
          </p>

          <div className="flex justify-center">
            {certifications.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 w-full max-w-2xl"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-blue-600 mt-2">
                  {item.organization} • {item.year}
                </p>

                <p className="text-gray-600 mt-5 leading-7">
                  {item.description}
                </p>

                {item.certificate !== "#" && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 text-blue-600 font-medium hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Certifications;
