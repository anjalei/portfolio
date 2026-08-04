import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle subtitle="Experience" title="Where I've Worked" />

        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold">Software Developer</h3>

          <p className="text-blue-600 font-medium mt-2">Soft7 • Present</p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-5">
            <li>Developed responsive frontend interfaces using React.</li>

            <li>Built and integrated REST APIs with backend services.</li>

            <li>
              Collaborated with designers and developers to deliver
              production-ready features.
            </li>

            <li>
              Improved application performance and fixed production issues.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
