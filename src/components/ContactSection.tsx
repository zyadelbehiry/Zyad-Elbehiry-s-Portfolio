import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-800 text-white"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Work Together
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Ready to bring your next project to life? I'd love to hear about your
          ideas and discuss how we can collaborate to create something amazing.
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
