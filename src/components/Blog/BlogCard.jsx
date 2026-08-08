import { blogs } from "/content/blogs.json";
import { motion } from "framer-motion";

const BlogCard = () => {
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
          className="flex flex-col justify-between rounded-xl bg-white/5 border border-white/10 backdrop-blur-md p-5 shadow-xl hover:border-purple-500/40 transition-all duration-300"
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
            <h2 className="text-xl font-bold text-cyan-400 mt-4 mb-2 line-clamp-2">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-300 line-clamp-3">
              {blog.content}
            </p>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
            <a
              href={blog.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
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