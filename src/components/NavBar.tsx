import { Code, Database, Menu, X } from "lucide-react";

const NavBar = ({
  isMenuOpen,
  activeSection,
  setIsMenuOpen,
  scrollToSection,
  navColor,
}: {
  isMenuOpen: boolean;
  activeSection: string;
  setIsMenuOpen(state: boolean): void;
  scrollToSection: (sectionId: string) => void;
  navColor: string;
}) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition ${
        navColor === "default"
          ? "bg-slate-900  border-b border-gray-700"
          : "bg-white/50 "
      }  backdrop-blur-md z-50 shadow-md`}
    >
      <div className="container mx-auto md:max-w-6xl px-8 md:px-0 py-4">
        <div className="flex justify-between items-center">
          <div
            className={`text-2xl md:text-2xl font-bold flex items-center gap-2 ${
              navColor === "default" ? "text-white" : "text-gray-800"
            }`}
          >
            <Database className="text-blue-400" size={22} />{" "}
            <Code className="text-green-400" size={22} /> <p>Zyad Elbehiry</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 relative ${
                  navColor === "default"
                    ? "text-white hover:text-blue-600"
                    : activeSection === item.id
                    ? "text-gray-800 hover:text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                } `}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              navColor === "default" ? "text-white" : "text-black"
            }  hover:bg-gray-100 hover:text-slate-900 transition-colors`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-100 text-blue-600"
                      : `${
                          navColor === "default"
                            ? "text-gray-100 hover:bg-gray-50"
                            : "text-gray-700 hover:bg-gray-100"
                        }  hover:text-gray-600`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
