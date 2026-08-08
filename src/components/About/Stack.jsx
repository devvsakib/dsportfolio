const Stack = ({ theme }) => {
  const stacksFrontend = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML5 / CSS3",
    "Material UI",
    "Framer Motion",
  ];

  const stacksBackend = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
  ];

  const stacksCms = [
    "WordPress Expert",
    "WooCommerce",
    "Custom Themes",
    "Plugin Customization",
    "Elementor Pro",
  ];

  const badgeStyle = `px-4 py-2 rounded-lg text-sm font-medium border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 ${
    theme
      ? "bg-slate-100 text-slate-800 shadow-sm"
      : "bg-white/5 text-gray-200 shadow-lg shadow-purple-500/10"
  }`;

  return (
    <div className="mt-8 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {/* Frontend Column */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-cyan-400 border-b border-cyan-400/20 pb-2">
          Frontend
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {stacksFrontend.map((item, idx) => (
            <div key={idx} className={badgeStyle}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Backend & Databases Column */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-purple-400 border-b border-purple-400/20 pb-2">
          Backend & Databases
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {stacksBackend.map((item, idx) => (
            <div key={idx} className={badgeStyle}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CMS & E-Commerce Column */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-pink-400 border-b border-pink-400/20 pb-2">
          CMS & E-Commerce
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {stacksCms.map((item, idx) => (
            <div key={idx} className={badgeStyle}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;