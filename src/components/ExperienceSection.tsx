import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      achievements: [
        "Developed 15+ responsive web applications using React.js and Next.js",
        "Improved client website performance by 40% through code optimization",
        "Collaborated with 10+ clients to deliver custom solutions on time",
        "Implemented modern UI/UX designs with 95% client satisfaction rate",
      ],
    },
    {
      title: "Web Developer",
      company: "Various Projects",
      location: "Egypt",
      period: "2021 - 2022",
      achievements: [
        "Built full-stack applications using MERN stack",
        "Integrated third-party APIs and payment gateways",
        "Optimized database queries reducing load times by 30%",
        "Mentored junior developers on best practices",
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
