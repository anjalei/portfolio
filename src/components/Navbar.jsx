import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold">Anjali R Nair</h1>

          <ul className="hidden md:flex items-center gap-8 text-gray-700">
            <li className="cursor-pointer hover:text-blue-600 transition">
              About
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Skills
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Experience
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Projects
            </li>

            <li className="cursor-pointer hover:text-blue-600 transition">
              Contact
            </li>
          </ul>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Resume
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
