const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
      <p>
        © {new Date().getFullYear()} Anjali R Nair • Built with React & Tailwind
        CSS
      </p>

      <p className="mt-2 text-sm">Designed and developed by Anjali.</p>
    </footer>
  );
};

export default Footer;
