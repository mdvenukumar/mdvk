import { useState } from "react";

export const AboutMe = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (skill) => {
    setTooltip(skill);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <section id="aboutme" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* Personal Intro */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          Hi! I’m Venu Kumar, a tech enthusiast with a passion for innovation. I love exploring new ideas and tackling challenges that inspire creativity. In my free time, I enjoy keeping up with tech trends, collaborating with others, and sharing knowledge. Let’s connect and discover what we can create together!</p>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
            Work Experience
        </h3>

        {/* Experience List */}
        <div className="space-y-8">
            {/* Experience 1 */}
            <div className="flex flex-col lg:flex-row items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="https://veddyai.vercel.app/static/aroma.png" // Replace with actual company logo
                alt="Veddy AI"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                Veddy AI
                </h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-bold">Founder & CEO</span> <br /> 2024 - Present
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lead architect in developing AI-driven tools for optimizing professional growth and skill development. Enhanced operational efficiency and collaborated with a small, dynamic team.
                </p>
            </div>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col lg:flex-row items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="napkin.png" // Replace with actual company logo
                alt="Freelancer"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                Napkin AI
                </h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                UX Research Intern<br /> Jan 2024 - Apr 2024
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Led user research, conducted data analysis, and enhanced the overall user experience for Napkin AI, driving product improvements and ensuring alignment with user needs.
                </p>
            </div>
            </div>
            {/* Experience 3 */}
            <div className="flex flex-col lg:flex-row items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="https://cdn-icons-png.flaticon.com/128/10312/10312688.png" // Replace with actual company logo
                alt="Fluentgrid"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                Fluentgrid
                </h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-bold">Project Intern</span> <br /> Nov 2023 - Jan 2024
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Collaborated with a cross-functional team on a project to develop a real-time monitoring system for utility operations, honing my problem-solving skills and learning about the energy industry.
                </p>
            </div>
            </div>
            {/* Experience 4 */}
            <div className="flex flex-col lg:flex-row items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="data:image/jpeg;base64,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" // Replace with actual company logo
                alt="IIT Madras Build Club"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                IIT Madras Research Park - Build Club
                </h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-bold">Student Coordinator</span> <br /> Jun 2022 - Dec 2022
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Guided students in project and entrepreneurial development, while successfully organizing hackathons and tech events to enhance engagement and drive technological innovation.                </p>
            </div>
            </div>
            
        </div>
        </div>

        

        {/* Skills Section */}
        <h3 id="skills" className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
          Skills
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { src: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png", name: "Python" },
            { src: "https://cdn-icons-png.flaticon.com/128/226/226777.png", name: "Java" },
            { src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", name: "JavaScript" },
            { src: "https://cdn-icons-png.flaticon.com/128/10826/10826338.png", name: "React" },
            { src: "https://cdn-icons-png.flaticon.com/128/11230/11230683.png", name: "Rest API" },
            { src: "https://spring.io/img/logos/spring-initializr.svg", name: "Spring" },
            { src: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", name: "Flask" },
            { src: "https://cdn-icons-png.flaticon.com/128/8752/8752436.png", name: "Relational DB" },
            { src: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png", name: "Redis" },
            { src: "https://cdn.iconscout.com/icon/free/png-512/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256", name: "Git" },
            { src: "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-64.png", name: "GitHub" },
            { src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-64.png", name: "Docker" },
            { src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png", name: "Gemini AI" },
            { src: "groq.png", name: "Groq AI" },
            { src: "https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66d07240057721394308addd_Logo%20(1).svg", name: "Crew AI" },
            { src: "https://www.gstatic.com/devrel-devsite/prod/vdf5af65c45d9e2fdd493c581ff01cb1d11a21b4420a9fcc957400a26863da9d2/firebase/images/lockup.svg", name: "Firebase" },
          ].map((skill, index) => (
            <div key={index} className="relative p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center justify-center transition-transform transform hover:scale-105 duration-300">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16" // Smaller size for a cuter look
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={handleMouseLeave}
              />
              {tooltip === skill.name && (
                <div className="absolute bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-900 rounded-md">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
