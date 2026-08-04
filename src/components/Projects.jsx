import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-50">
      <Container>
        <SectionTitle subtitle="Portfolio" title="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
