import { useContext } from "react";
import { blogs } from "/content/blogs.json";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

const BlogCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between rounded-xl border p-5 shadow-xl transition-all duration-300 backdrop-blur-md ${
            theme
              ? "bg-white border-slate-200 shadow-slate-200 hover:border-purple-400"
              : "bg-slate-950/60 border-white/10 shadow-2xl hover:border-purple-500/40"
          }`}
        >
          <div>
            <div className="h-48 w-full overflow-hidden rounded-lg bg-gray-800">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={blog.thumbnail}
                alt={blog.title}
                loading="lazy"
              />
            </div>
            <h2 className="text-xl font-bold text-cyan-500 mt-4 mb-2 line-clamp-2">
              {blog.title}
            </h2>
            <p className={`text-sm line-clamp-3 ${theme ? "text-slate-600" : "text-gray-300"}`}>
              {blog.content}
            </p>
          </div>

          <div className={`flex gap-3 mt-6 pt-4 border-t ${theme ? "border-slate-200" : "border-white/10"}`}>
            <a
              href={blog.url}
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                theme
                  ? "bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100"
                  : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30"
              }`}
            >
              Read Article
            </a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default BlogCard;