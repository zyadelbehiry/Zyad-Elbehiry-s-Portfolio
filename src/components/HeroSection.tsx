import {
  Code2,
  FolderOpen,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import personalImage from "../assets/profileWhiteCover.jpg";
const HeroSection = ({
  scrollToSection,
}: {
  scrollToSection: (sectionId: string) => void;
}) => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36 pb-48 px-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          {/* Left Content */}
          <div className="flex justify-center lg:justify-start ">
            <div className="relative">
              <div className="w-60 h-60 md:w-80 md:h-80 border-4 border-slate-700 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                <img
                  // src="../assets/profileWhiteCover.jpg"
                  src={personalImage}
                  alt="Profile image"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Code2 className="text-blue-600" size={32} />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="text-center lg:text-left ">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Zyad Elbehiry
              </h1>
              <h2 className="text-3xl md:text-6xl font-bold text-blue-500 leading-tight">
                Fullstack Developer
              </h2>
              <span className="block text-xl md:text-3xl  text-gray-300 font-bold mb-5 ">
                & Software Engineer
              </span>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Specialized in <span className="text-blue-400">React.js</span>,{" "}
                <span className="text-green-400">Next.js</span>,{" "}
                <span className="text-purple-400">Node.js</span> and modern web
                technologies, delivering scalable solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1GhuB_YM-pr0IvdvHI18QT1ic5ERdsDof/view?usp=sharing"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                <Download size={20} />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-white px-8 py-4 rounded-xl hover:bg-gray-500/20 transition-all duration-200 font-medium"
              >
                <FolderOpen size={20} />
                View Projects
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap text-gray-200 gap-8 mt-12 justify-center lg:justify-start">
              <a href="https://github.com/zyadelbehiry">
                <Github />
              </a>
              <a href="https://linkedin.com/in/zyad-elbehiry">
                <Linkedin />
              </a>
              <a href="zyadelbehiry@gmail.com">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
