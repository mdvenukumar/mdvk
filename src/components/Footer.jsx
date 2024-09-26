import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section: Contact Info and Additional Content */}
        <div className="flex flex-col space-y-6">
          
          {/* Collaboration Message */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Open for Collabs & Works
            </h3>
            <p className="text-md text-gray-400">
              I am always excited to collaborate and work on innovative AI and tech projects. Feel free to get in touch!
            </p>
          </div>

          {/* Get in Touch Buttons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/mdvk22" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300">
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </button>
            </a>
            <a href="https://linkedin.com/in/venukumarmd" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </button>
            </a>
            <a href="https://github.com/mdvenukumar" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </button>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-400">
              <FaEnvelope className="inline-block mr-2 text-gray-700 dark:text-gray-300" />
              <a href="mailto:onlymdvk@gmail.com" className="hover:underline">
                onlymdvk@gmail.com
              </a>
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              <FaPhone className="inline-block mr-2 text-gray-700 dark:text-gray-300" />
              +91 7382254266
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Line: Made with Love */}
      <div className="mt-10 text-center">
        <p className="text-md text-gray-600 dark:text-gray-400">
          Made with love MDVK 💖
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} MDVK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
