import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <Container>
        <div className="flex justify-between items-center h-20">
          <div>
            <h1 className="text-2xl font-bold">Anjali</h1>

            <p className="text-xs text-gray-500"> Software Engineer</p>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-gray-700">
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-600 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#experience" className="hover:text-blue-600 transition">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-600 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
 