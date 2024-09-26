export const Navbar = () => {
  return (
    <div className="flex justify-center w-full fixed top-4 z-50">
      <nav className="w-11/12 md:w-3/5 px-6 py-4 bg-gradient-to-r from-[#3494e6] to-[#ec6ead] via-purple-500 backdrop-filter backdrop-blur-lg rounded-md shadow-lg">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo and MDVK */}
          <div className="flex items-center space-x-4">
            <a href="/"> 
              <img 
                src="https://cdn-icons-png.flaticon.com/128/9093/9093700.png" 
                alt="Your Logo" 
                className="h-8"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row items-center space-x-4">
            <a href="#aboutme" className="text-white font-semibold hover:text-gray-200 transition-colors duration-300">About</a>
            <a href="#skills" className="text-white font-semibold hover:text-gray-200 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-white font-semibold hover:text-gray-200 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-white font-semibold hover:text-gray-200 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
