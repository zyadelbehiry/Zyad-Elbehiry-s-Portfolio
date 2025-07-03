import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web development and Programming Instructor",
      company: "Discovery Academy for Science and Technology (AST)",
      location: "Cairo, Egypt",
      period: "Jun 2024 - Apr 2025",
      achievements: [
        "Delivered comprehensive instruction in HTML, CSS, JavaScript, Python, and Object-Oriented Programming (OOP) to students of varying skill levels.",
        "Developed structured lesson plans and hands-on exercises to reinforce key programming concepts and best practices.",
        "Provided personalized guidance and mentorship to help learners build strong foundational and problem-solving skills in web development.",
        "Created engaging and interactive learning materials, including coding challenges and projects, to enhance student understanding and retention.",
        "Utilized online platforms and tools to facilitate remote learning, ensuring accessibility and engagement for all students.",
      ],
    },
  ];
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600">
            Building exceptional digital experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
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

export default ExperienceSection;
