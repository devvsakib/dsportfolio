import Stack from "./Stack";
import SocialLinks from "../SocialLinks/SocialLinks";
import { FaDownload } from "react-icons/fa";

const Details = ({ theme }) => {
  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center">
          <div className="rounded-full p-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 shadow-xl">
            <img
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-white/20"
              src="https://avatars.githubusercontent.com/u/88339569?v=4"
              alt="MD. SAKIB AHMED"
            />
          </div>
        </div>

        <div className={`text-md tracking-wider font-sans space-y-4 ${theme ? "text-slate-900" : "text-gray-200"}`}>
          <p>
            I am a <span className="font-semibold text-cyan-400">Software Engineer & WordPress Specialist</span> focused on modern React web applications, high-performance Python backends, and robust WooCommerce enterprise setups.
          </p>
          <p>
            Currently working at{" "}
            <a
              href="https://shunyeka.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-400 hover:underline"
            >
              ShunyEka Systems Private Limited
            </a>{" "}
            as a Software Engineer, while building full-stack applications using React, Tailwind CSS, Python (FastAPI), PostgreSQL, REST APIs, and custom WordPress solutions.
          </p>
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <p className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-medium animate-pulse">
              Open for full-stack engineering opportunities, high-performance API development, and custom WordPress projects.
            </p>
          </div>
        </div>

        <div className="text-center md:col-span-2 mt-3 flex justify-center">
          <a
            href="/assets/SAKIB AHMED CV.pdf"
            download
            className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${
              theme
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-cyan-500/25"
            }`}
          >
            <span>DOWNLOAD RESUME</span>
            <FaDownload />
          </a>
        </div>

        <SocialLinks theme={theme} />
      </div>

      <div className="text-center mt-28">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <Stack theme={theme} />
      </div>
    </div>
  );
};

export default Details;