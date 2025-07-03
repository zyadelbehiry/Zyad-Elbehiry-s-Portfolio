const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Zyad Eslam Hamdy Abdelghaffar. All rights reserved.
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
