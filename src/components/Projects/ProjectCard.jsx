import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative overflow-hidden rounded-xl border p-4 shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between z-[999] ${
        theme
          ? "bg-white border-slate-200 shadow-slate-200 hover:border-purple-400"
          : "bg-slate-950/60 border-white/10 shadow-2xl hover:border-purple-500/40"
      }`}
    >
      <div>
        {/* Thumbnail & Status Badge */}
        <div className="relative overflow-hidden rounded-lg bg-gray-800 h-48 w-full mb-4">
          <img
            loading="lazy"
            src={project.thumb}
            alt={project.title}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
          {project.current_status && (
            <span className="absolute top-3 right-3 bg-cyan-500 text-slate-950 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {project.current_status}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h2 className={`text-xl font-bold uppercase tracking-wide mb-2 ${theme ? "text-slate-900" : "text-white"}`}>
          {project.title}
        </h2>
        <p className={`text-sm mb-4 line-clamp-3 ${theme ? "text-slate-600" : "text-gray-300"}`}>
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack &&
            project.stack.map((tech, idx) => (
                <motion.img
                    loading="lazy"
                    whileHover={{ scale: 1.5 }}
                    key={idx}
                    src={tech}
                    className='w-6 cursor-pointer' />
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex items-center gap-3 pt-4 border-t ${theme ? "border-slate-200" : "border-white/10"}`}>
        {project.live_link && (
          <motion.a
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors shadow-md"
          >
            Live Demo
          </motion.a>
        )}
        {project.source_code && (
          <motion.a
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            href={project.source_code}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 text-center py-2 px-4 rounded-lg border text-sm font-semibold transition-colors ${
              theme
                ? "border-purple-600 text-purple-700 hover:bg-purple-50"
                : "border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            }`}
          >
            Source Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;