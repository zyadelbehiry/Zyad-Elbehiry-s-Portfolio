import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Quick Cart E-commerce",
      description:
        "A modern e-commerce platform built with React.js featuring user authentication, shopping cart functionality, and payment integration.",
      technologies: [
        "Next.js",
        "Mongoose",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
      ],
      gitHubLink: "https://github.com/zyadelbehiry/Quick-Cart-E-commerce",
      projectLink: "https://github.com/zyadelbehiry/Quick-Cart-E-commerce",
      highlights: [
        "Implemented secure user authentication and authorization",
        "Integrated Stripe payment gateway for seamless transactions",
        "Built responsive design with mobile-first approach",
        "Achieved 99% uptime with optimized performance",
      ],
      category: "Full Stack",
    },
    {
      title: "Professional Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern design principles and smooth user experience.",
      technologies: ["React.js", "Tailwind CSS", "Next.js", "Vercel"],
      gitHubLink: "https://github.com/zyadelbehiry/Quick-Cart-E-commerce",
      projectLink: "https://khaled-tantawy-s-portfolio.vercel.app/",
      highlights: [
        "Designed with modern UI/UX principles",
        "Implemented smooth animations and transitions",
        "Optimized for SEO and accessibility",
        "Deployed with CI/CD pipeline",
      ],
      category: "Frontend",
    },
    {
      title: "Bibliomania Library System",
      description:
        "A comprehensive library management system with book tracking, user management, and reporting features.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],

      gitHubLink: "https://github.com/zyadelbehiry/Bibliomania-System",
      highlights: [
        "Developed complete CRUD operations for library management",
        "Implemented role-based access control",
        "Created detailed reporting and analytics dashboard",
        "Reduced manual processes by 80%",
      ],
      category: "Full Stack",
    },
    {
      title: "TaskFlow Manager",
      description:
        "A full-stack task management application with real-time updates, user authentication, and drag-and-drop functionality for intuitive task organization.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT Authentication",
      ],
      gitHubLink: "https://github.com/zyadelbehiry/Task-Management-App",
      highlights: [
        "Implemented secure JWT authentication for user sessions",
        "Developed real-time task updates without page refresh",
        "Created intuitive drag-and-drop interface for task organization",
        "Built RESTful API with Express.js for CRUD operations",
        "Designed responsive UI with Tailwind CSS for all devices",
        "Optimized MongoDB queries for fast task retrieval",
      ],
      category: "Full Stack",
    },
    {
      title: "WordMaster Game",
      description: "An interactive word-guessing game built with HTML, CSS, JavaScript featuring real-time feedback, score tracking, and a dynamic word database for endless gameplay variations.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Local Storage",
      ],
      gitHubLink: "https://github.com/zyadelbehiry/Guess-The-Word-Game",
      projectLink: "https://guess-the-word-game-sand.vercel.app/", // (update if different)
      highlights: [
        "Developed game logic with intelligent word validation",
        "Implemented animated feedback for correct/incorrect guesses",
        "Built score tracking with local storage persistence",
        "Created responsive design with mobile-first approach",
        "Designed intuitive keyboard input system"
      ],
      category: "Frontend"
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A modern implementation of the classic game with enhanced features, built using Next.js and TypeScript for a seamless gaming experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      gitHubLink: "https://github.com/zyadelbehiry/Tic-Tac-Toe",
      projectLink: "https://tic-tac-toe-ten-pi-38.vercel.app/",
      highlights: [
        "Implemented interactive game board with real-time state management",
        "Added game history tracking with time-travel functionality",
        "Developed responsive design that works across all devices",
        "Enhanced UX with smooth animations and transitions",
        "Built with modern development tools for optimal performance",
      ],
      category: "Frontend",
    },
  ];
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
