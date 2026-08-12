import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MySQL", "MongoDB", "PostgreSQL", "Sequelize", "Mongoose"],
  "Authentication & Security": ["JWT", "bcrypt", "RBAC"],
  "DevOps & Tools": [
    "AWS",
    "Jenkins",
    "Nginx",
    "PM2",
    "Git",
    "GitHub",
    "Postman",
  ],
  Payments: ["Cashfree", "Razorpay"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gray-50">
      <Container>
        <SectionTitle subtitle="Skills" title="Tech Stack" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
