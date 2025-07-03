import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-800 text-white"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-xl mb-12 opacity-90 ">
          <div className="max-w-4xl mx-auto p-6 md:p-8  rounded-2xl shadow-lg ">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Connect and Collaborate
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                I specialize in crafting high-performance web applications with
                modern technologies like React, Node.js, and MongoDB.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className=" p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">What I Offer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🚀</span>
                    <span>Fast delivery without compromising quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <span>Problem-solving focus for unique requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🔄</span>
                    <span>Transparent communication throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🛠</span>
                    <span>Maintainable code with documentation</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold  mb-4">
                  Engagement Options
                </h3>
                <ul className="space-y-4 ">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Freelance projects
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Contract work
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Full-time opportunities
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="text-sm ">
                    Flexible engagement models tailored to your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-medium mb-6">
                Let's turn your vision into reality.
              </p>
            </div>
          </div>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:zyadelbehiry@gmail.com"
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <Mail
              size={32}
              className="mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-80">zyadelbehiry@gmail.com</p>
          </a>

          <a
            href="https://github.com/zyadelbehiry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <Github
              size={32}
              className="mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm opacity-80">@zyadelbehiry</p>
          </a>

          <a
            href="https://linkedin.com/in/zyad-elbehiry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <Linkedin
              size={32}
              className="mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm opacity-80">zyad-elbehiry</p>
          </a>

          <a
            href="tel:+201040431147"
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-200 group"
          >
            <Phone
              size={32}
              className="mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm opacity-80">+20 104 043 1147</p>
          </a>
        </div>

        <div className="text-center">
          <a
            href="mailto:zyadelbehiry@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <Mail size={20} />
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
