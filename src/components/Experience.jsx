import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle subtitle="Experience" title="Where I've Worked" />

        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold">
            Full Stack Developer
          </h3>

          <p className="text-blue-600 font-medium mt-2">
            Soft7 Technologies • Remote • Feb 2026 – Present
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            Joined as an intern and converted to full-time. I work in an
            8-person team on a production CRM platform with three connected
            portals (Super Admin, Admin, User Dashboard).
          </p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-5">
            <li>
              Designed and implemented major parts of the Super Admin portal
              (company management, company details, transactions, Activity Logs,
              and support tickets) in an existing Next.js, React, and TypeScript
              codebase.
            </li>

            <li>
              Built 10+ reusable React components (data tables, filters, modals,
              export actions) and refactored large pages into components, hooks,
              and types, so new admin screens were quicker to build.
            </li>

            <li>
              Integrated 6+ REST API workflows using Axios with request
              validation, and worked with backend developers to reshape API
              payloads so screens needed fewer calls.
            </li>

            <li>
              Reduced Super Admin dashboard API calls from 8 to 5 by removing
              redundant requests, improving responsiveness.
            </li>

            <li>
              Implemented role-based authentication with JWT across the portals,
              including suspended-user handling and request-level status
              validation.
            </li>

            <li>
              Proposed aggregate KPI statistics, server-side search and
              filtering, and Socket.io real-time updates to replace polling. The
              team adopted these suggestions.
            </li>

            <li>
              Collaborate on feature planning, API requirements, debugging, and
              end-to-end testing, and guide three teammates on frontend
              implementation.
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Knex",
              "Axios",
              "Socket.io",
              "JWT",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
