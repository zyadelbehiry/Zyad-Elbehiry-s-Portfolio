import { GraduationCap } from "lucide-react";

const EduSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600">
            Academic foundation and continuous learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Computer Science & Engineering
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  University Graduate
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Strong foundation in software engineering principles, data
                  structures, algorithms, and computer systems. Specialized
                  coursework in web development, database management, and
                  software architecture with hands-on experience in modern
                  programming languages and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EduSection;
