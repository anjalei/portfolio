import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-32">
      <Container>
        <SectionTitle subtitle="About" title="Get to Know Me" />

        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-9 text-gray-600">
            I'm a full stack developer building production web applications —
            currently working across 3 CRM portals at Soft7, handling everything
            from dashboard UI to RBAC authentication to API integration. My
            stack centers on React, Next.js, and TypeScript on the frontend, and
            Node.js, Express, and SQL/NoSQL databases on the backend, with
            hands-on experience deploying to AWS. Outside of work, I enjoy
            sketching, exploring UI design, and picking up new tools as they
            come up.
          </p>

          

        </div>
      </Container>
    </section>
  );
};

export default About;
