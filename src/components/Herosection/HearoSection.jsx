import { motion } from 'framer-motion';

const HeroSection = () => {
  const developerDetails = {
    greeting: "Hi! I'm",
    name: "MD. SAKIB AHMED",
    role: "Software Engineer & Full-Stack Developer",
    skills: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "WordPress / WooCommerce",
    ],
    bio: "Building high-performance web applications, modern APIs, and custom enterprise e-commerce solutions.",
  };

  return (
    <section className="relative z-10 w-full min-h-[70vh] flex items-center justify-center py-8">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl p-6 md:p-8 font-mono"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-gray-400 font-sans hidden sm:inline">
                devvsakib ~ profile.js
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-sans">
              Status: Available
            </span>
          </div>

          {/* Terminal Body */}
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <div>
              <span className="text-purple-400">const </span>
              <span className="text-cyan-400">developer </span>
              <span className="text-pink-500">= </span>
              <span className="text-yellow-300">&#123;</span>
            </div>

            <div className="pl-6 space-y-2">
              <div>
                <span className="text-cyan-300">greeting: </span>
                <span className="text-emerald-400">"{developerDetails.greeting}"</span>,
              </div>
              <div>
                <span className="text-cyan-300">name: </span>
                <span className="text-yellow-400 font-bold">"{developerDetails.name}"</span>,
              </div>
              <div>
                <span className="text-cyan-300">role: </span>
                <span className="text-purple-300">"{developerDetails.role}"</span>,
              </div>
              <div>
                <span className="text-cyan-300">techStack: </span>
                <span className="text-yellow-300">[</span>
                <div className="pl-6 flex flex-wrap gap-2 my-1">
                  {developerDetails.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-sans px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      "{skill}"
                    </span>
                  ))}
                </div>
                <span className="text-yellow-300">]</span>,
              </div>
              <div>
                <span className="text-cyan-300">bio: </span>
                <span className="text-gray-300">"{developerDetails.bio}"</span>
              </div>
            </div>

            <div>
              <span className="text-yellow-300">&#125;</span>;
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-white/10 font-sans">
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              Explore Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 font-semibold transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;