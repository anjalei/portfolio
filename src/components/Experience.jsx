import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle subtitle="Experience" title="Where I've Worked" />

        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold">Full StackDeveloper</h3>

          <p className="text-blue-600 font-medium mt-2">Soft7 • Present</p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-8 list-disc pl-5">
            <li>
              Built and maintained core frontend workflows across 3 production
              CRM portals (Admin, Super Admin, User Dashboard) — dashboards,
              user management, subscriptions, and support tickets — using React,
              Next.js, and TypeScript.
            </li>

            <li>
              Engineered 10+ reusable UI modules (data tables, filters, modals,
              export actions), establishing component patterns that sped up
              delivery of new admin screens.
            </li>

            <li>
              Built a Super Admin UI for reviewing and approving incoming
              white-labelling requests from companies, giving the team a
              controlled workflow for managing tenant branding.
            </li>

            <li>
              Implemented RBAC authentication and session security across all
              portals — login flows, suspended-user blocking, real-time status
              validation — using JWT.
            </li>
            <li>
              Integrated 6+ REST API workflows (company management,
              subscriptions, inbox, dashboard data) using Axios and structured
              validation, reducing malformed-request failures reaching
              production.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
