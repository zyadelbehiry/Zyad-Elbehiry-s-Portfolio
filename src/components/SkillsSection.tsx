import { Code2, Database, Globe, Palette } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Frontend Development": [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Redux",
      "Context API",
    ],
    "Backend & Database": [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
    ],
    "Development Tools": [
      "Git/GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Chrome DevTools",
      "npm/yarn",
      "Webpack",
      "Vite",
    ],
    "Soft Skills": [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Agile/Scrum",
      "Communication",
      "Leadership",
      "Critical Thinking",
    ],
  };
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Technical competencies and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.includes("Frontend") && (
                  <Palette className="text-blue-600" size={24} />
                )}
                {category.includes("Backend") && (
                  <Database className="text-green-600" size={24} />
                )}
                {category.includes("Tools") && (
                  <Code2 className="text-purple-600" size={24} />
                )}
                {category.includes("Soft") && (
                  <Globe className="text-orange-600" size={24} />
                )}
                <h3 className="text-xl font-bold text-gray-900">{category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillList.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
