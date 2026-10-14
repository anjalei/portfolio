import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const About = () => {
  return (
    <section id="about" className="py-32">
      <Container>
        <SectionTitle subtitle="About" title="Get to Know Me" />

        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-9 text-gray-600">
            I’m a Full Stack Developer at Soft7 Technologies, where I work on a
            production CRM platform with three connected portals (Super Admin,
            Admin, and User). I joined as an intern in February 2026 and moved
            into a full-time role three months later. My day-to-day covers
            Next.js, React, and TypeScript on the frontend, with Node.js, REST
            APIs, and PostgreSQL behind them. I enjoy turning complex admin
            workflows into clean, usable interfaces, and I care about the data
            underneath them: how APIs are shaped, how metrics are calculated,
            and how access is secured with JWT and role-based permissions. I
            work closely with a small engineering team on API design, debugging,
            and testing, and I help guide teammates on frontend implementation.
            Outside work, I build full-stack projects involving real-time chat,
            payments, and cloud deployment on AWS.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
