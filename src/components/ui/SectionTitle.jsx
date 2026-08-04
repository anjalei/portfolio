const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
        {subtitle}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
