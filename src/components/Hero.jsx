import {AvailableForWork} from "./AvailableForWork"
export const Hero = () => {
  return (
    <section id="/" className="bg-gray-900 pt-24 pb-8 lg:py-24">
      {/* Updated pt-24 to add padding */}
      <div className="max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
        
        {/* Image for small screens */}
        <div className="flex justify-center mb-6 lg:hidden">
          <img
            src="hero.jpg"
            alt="Venu Kumar"
            className="w-64 h-48 rounded-lg object-cover"
          />
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            I’m Venu Kumar.
          </h1>
          <p className="mt-2 max-w-2xl mb-6 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Merging Generative AI with Full Stack Development to create innovative solutions for today’s challenges.
          </p>

          {/* Personalized content reflecting your identity */}
          <div className="p-4 max-w-lg bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
            <div className="mb-2">
              <AvailableForWork />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Innovator & Problem Solver
            </h2>
            <p className="mt-2 text-gray-400">
              I leverage technology to create impactful solutions, turning complex challenges into opportunities for growth.
            </p>
          </div>

          {/* Flexbox for buttons to keep them in a row */}
          <div className="flex flex-col sm:flex-row sm:space-x-3 mt-8">
            <a
              href="https://www.linkedin.com/in/venukumarmd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mb-2 sm:mb-0"
            >
              Connect with Me
            </a>
            <a
              href="https://flowcv.com/resume/3l4btriiws"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg focus:ring-4 text-white border border-white hover:bg-gray-700 focus:ring-gray-800"
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Image on the right side for large screens */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <img
            src="hero.jpg"
            alt="Venu Kumar"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
