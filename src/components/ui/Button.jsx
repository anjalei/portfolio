const Button = ({ children, href, primary = false, download = false }) => {
  const base =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105";

  const style = primary
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-gray-300 hover:bg-gray-100";

  return (
    <a href={href} download={download} className={`${base} ${style}`}>
      {children}
    </a>
  );
};

export default Button;
