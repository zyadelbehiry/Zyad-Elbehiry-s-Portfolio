import { Code2, Database, Github, Linkedin, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <div>
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Summary
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Results-driven Frontend Developer with extensive experience in
                building responsive web applications using modern JavaScript
                frameworks. Proven track record of delivering high-quality
                solutions that enhance user experience and drive business
                objectives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Passionate about clean code, performance optimization, and
                staying current with emerging technologies. Seeking to leverage
                technical expertise and problem-solving skills to contribute to
                innovative projects in a dynamic software engineering role.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/zyadelbehiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/zyad-elbehiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Frontend Development
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Building responsive and interactive user interfaces with
                      React.js and modern web technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Full Stack Solutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Developing complete web applications with backend APIs and
                      database integration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      UI/UX Implementation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Translating designs into pixel-perfect, accessible, and
                      performant web experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
