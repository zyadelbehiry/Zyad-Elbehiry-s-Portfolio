const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-800  text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl border-t-[1px] border-gray-700 pt-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Zyad Elbehiry. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
