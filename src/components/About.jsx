import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-32">
      <Container>
        <SectionTitle subtitle="About" title="Get to Know Me" />

        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-9 text-gray-600">
            I'm a Software Engineer specializing in full-stack web development,
            with experience building scalable backend systems using Node.js,
            Express, MySQL, and AWS, along with responsive frontend applications
            in React.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            I enjoy designing scalable backend systems, creating intuitive user
            interfaces and continuously learning technologies that help build
            reliable products.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Outside coding, I enjoy sketching, exploring UI design and learning
            new technologies.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
